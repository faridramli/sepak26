# Tugasan editor berita SEPAK 26

Kemas kini berita Piala Dunia 2026 dalam `data/news.next.json`.

Peraturan wajib:

1. Periksa tiga sumber teras pada setiap kitaran: OneFootball (`onefootball.com`), GOAL (`goal.com`) dan ESPN (`espn.com`). Setiap sumber teras mesti menyumbang sekurang-kurangnya satu pautan artikel langsung yang relevan dalam output.
2. Baca sekurang-kurangnya dua penerbit tambahan daripada kumpulan FIFA, Reuters, AP, BBC Sport, The Guardian, CBC, TSN, atau media rasmi pasukan. Sasaran keseluruhan ialah sekurang-kurangnya lima penerbit unik.
3. Utamakan laporan 12 jam terakhir. Jika bahan tidak mencukupi, luaskan kepada 36 jam dan nyatakan perkara itu dalam `metadata.methodology`.
4. Semak fakta utama merentas sekurang-kurangnya dua sumber apabila boleh. Jangan cipta keputusan, statistik, petikan, kecederaan atau maklumat perpindahan.
5. Tulis 5 hingga 8 artikel dalam Bahasa Melayu. Rumusan mesti asli, padat dan analitikal; jangan salin ayat panjang daripada sumber.
6. Setiap artikel mesti menerangkan implikasi bola sepak, bukan sekadar mengulang tajuk.
7. Kekalkan pautan terus ke artikel asal. Jangan gunakan halaman utama, halaman kategori atau hasil carian sebagai sumber.
8. Gunakan nama penerbit tepat `OneFootball`, `GOAL` dan `ESPN` supaya validasi sumber teras dapat dibuat.
9. Jangan ubah mana-mana fail lain.

Struktur JSON tepat:

```json
{
  "metadata": {
    "updatedAt": "ISO-8601 dengan zon masa +08:00",
    "nextUpdateAt": "12 jam selepas updatedAt",
    "sourceCount": 5,
    "status": "verified",
    "methodology": "Satu ayat ringkas dalam Bahasa Melayu"
  },
  "articles": [
    {
      "id": "slug-unik",
      "category": "Kejohanan|Pasukan|Analisis",
      "date": "13 Jun 2026",
      "datetime": "ISO-8601",
      "title": "tajuk Bahasa Melayu",
      "excerpt": "1-2 ayat ringkasan fakta",
      "analysis": "2-4 ayat analisis dan implikasi",
      "confidence": "Tinggi|Sederhana",
      "sources": [
        {
          "name": "Nama penerbit",
          "url": "https://pautan-langsung",
          "publishedAt": "13 Jun 2026"
        }
      ]
    }
  ]
}
```

Sebelum tamat, parse semula JSON untuk memastikan ia sah. `sourceCount` ialah bilangan penerbit unik, bukan jumlah pautan.
