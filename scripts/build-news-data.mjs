import { readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const nextPath = path.join(root, "data", "news.next.json");
const currentPath = path.join(root, "data", "news.json");
const browserPath = path.join(root, "data", "news-data.js");

const payload = JSON.parse(await readFile(nextPath, "utf8"));
const allowedCategories = new Set(["Kejohanan", "Pasukan", "Analisis"]);
const allowedConfidence = new Set(["Tinggi", "Sederhana"]);

if (!payload.metadata || !Array.isArray(payload.articles) || payload.articles.length < 3) {
  throw new Error("Payload berita tidak lengkap.");
}

const updatedAt = Date.parse(payload.metadata.updatedAt);
const nextUpdateAt = Date.parse(payload.metadata.nextUpdateAt);
const twelveHours = 12 * 60 * 60 * 1000;

if (payload.metadata.status !== "verified" || !updatedAt || !nextUpdateAt) {
  throw new Error("Metadata berita tidak sah.");
}

if (updatedAt > Date.now() + 5 * 60 * 1000) {
  throw new Error("Masa kemas kini tidak boleh berada di masa hadapan.");
}

if (nextUpdateAt - updatedAt !== twelveHours) {
  throw new Error("Kemas kini seterusnya mesti tepat 12 jam selepas penerbitan.");
}

const publishers = new Set();
const sourceHosts = new Set();
for (const article of payload.articles) {
  if (!article.id || !article.title || !article.excerpt || !article.analysis) {
    throw new Error(`Artikel tidak lengkap: ${article.id || "tanpa id"}`);
  }
  if (!allowedCategories.has(article.category) || !allowedConfidence.has(article.confidence)) {
    throw new Error(`Kategori atau keyakinan tidak sah: ${article.id}`);
  }
  if (!Array.isArray(article.sources) || article.sources.length === 0) {
    throw new Error(`Artikel tiada sumber: ${article.id}`);
  }
  for (const source of article.sources) {
    const url = new URL(source.url);
    if (url.protocol !== "https:" || !source.name) {
      throw new Error(`Sumber tidak sah: ${article.id}`);
    }
    publishers.add(source.name);
    sourceHosts.add(url.hostname.replace(/^www\./, ""));
  }
}

const requiredHosts = ["onefootball.com", "goal.com", "espn.com"];
const missingCoreSources = requiredHosts.filter((host) =>
  ![...sourceHosts].some((sourceHost) => sourceHost === host || sourceHost.endsWith(`.${host}`)),
);

if (missingCoreSources.length) {
  throw new Error(`Sumber teras tiada: ${missingCoreSources.join(", ")}`);
}

if (publishers.size < 5) {
  throw new Error("Sekurang-kurangnya lima penerbit unik diperlukan untuk penerbitan.");
}

payload.metadata.sourceCount = publishers.size;
const normalized = `${JSON.stringify(payload, null, 2)}\n`;
await writeFile(browserPath, `window.SEPAK26_NEWS = ${normalized.trim()};\n`, "utf8");
await writeFile(nextPath, normalized, "utf8");
await rename(nextPath, currentPath);
console.log(`Berita diterbitkan: ${payload.articles.length} artikel daripada ${publishers.size} penerbit.`);
