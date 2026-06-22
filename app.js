const groups = {
  A: [
    ["Mexico", "MEX", "🇲🇽", 15],
    ["Afrika Selatan", "RSA", "🇿🇦", 59],
    ["Korea Selatan", "KOR", "🇰🇷", 22],
    ["Czechia", "CZE", "🇨🇿", 39],
  ],
  B: [
    ["Kanada", "CAN", "🇨🇦", 28],
    ["Switzerland", "SUI", "🇨🇭", 18],
    ["Qatar", "QAT", "🇶🇦", 55],
    ["Bosnia & Herzegovina", "BIH", "🇧🇦", 74],
  ],
  C: [
    ["Brazil", "BRA", "🇧🇷", 5],
    ["Maghribi", "MAR", "🇲🇦", 12],
    ["Haiti", "HAI", "🇭🇹", 83],
    ["Scotland", "SCO", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", 44],
  ],
  D: [
    ["Amerika Syarikat", "USA", "🇺🇸", 16],
    ["Paraguay", "PAR", "🇵🇾", 41],
    ["Australia", "AUS", "🇦🇺", 26],
    ["Turkiye", "TUR", "🇹🇷", 27],
  ],
  E: [
    ["Jerman", "GER", "🇩🇪", 10],
    ["Curacao", "CUW", "🇨🇼", 82],
    ["Ivory Coast", "CIV", "🇨🇮", 42],
    ["Ecuador", "ECU", "🇪🇨", 24],
  ],
  F: [
    ["Belanda", "NED", "🇳🇱", 7],
    ["Jepun", "JPN", "🇯🇵", 19],
    ["Tunisia", "TUN", "🇹🇳", 49],
    ["Sweden", "SWE", "🇸🇪", 35],
  ],
  G: [
    ["Belgium", "BEL", "🇧🇪", 8],
    ["Mesir", "EGY", "🇪🇬", 35],
    ["Iran", "IRN", "🇮🇷", 20],
    ["New Zealand", "NZL", "🇳🇿", 86],
  ],
  H: [
    ["Sepanyol", "ESP", "🇪🇸", 2],
    ["Cape Verde", "CPV", "🇨🇻", 68],
    ["Arab Saudi", "KSA", "🇸🇦", 58],
    ["Uruguay", "URU", "🇺🇾", 14],
  ],
  I: [
    ["Perancis", "FRA", "🇫🇷", 3],
    ["Senegal", "SEN", "🇸🇳", 17],
    ["Norway", "NOR", "🇳🇴", 29],
    ["Iraq", "IRQ", "🇮🇶", 57],
  ],
  J: [
    ["Argentina", "ARG", "🇦🇷", 1],
    ["Algeria", "ALG", "🇩🇿", 36],
    ["Austria", "AUT", "🇦🇹", 21],
    ["Jordan", "JOR", "🇯🇴", 62],
  ],
  K: [
    ["Portugal", "POR", "🇵🇹", 6],
    ["Colombia", "COL", "🇨🇴", 13],
    ["Uzbekistan", "UZB", "🇺🇿", 51],
    ["DR Congo", "COD", "🇨🇩", 55],
  ],
  L: [
    ["England", "ENG", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", 4],
    ["Croatia", "CRO", "🇭🇷", 11],
    ["Ghana", "GHA", "🇬🇭", 48],
    ["Panama", "PAN", "🇵🇦", 32],
  ],
};

const teamByCode = Object.fromEntries(
  Object.entries(groups).flatMap(([group, teams]) =>
    teams.map(([name, code, flag, rank]) => [
      code,
      { name, code, flag, rank, group },
    ]),
  ),
);

// ================================================================
// DATA SKUAD — Pemain, Manager, Jersi, Kem Latihan WC2026
// ================================================================
const squads = {
  ARG: {
    manager: "Lionel Scaloni",
    trainingBase: "Nashville, Tennessee, AS",
    jerseyHome: "#74ACDF", jerseyHomeName: "Biru-putih",
    jerseyAway: "#1A1A1A", jerseyAwayName: "Hitam",
    players: [
      { no: 23, pos: "PG", name: "Emiliano Martínez", age: 33, club: "Aston Villa" },
      { no: 26, pos: "RB", name: "Nahuel Molina", age: 28, club: "Atlético Madrid" },
      { no: 13, pos: "CB", name: "Cristian Romero", age: 28, club: "Tottenham Hotspur" },
      { no: 25, pos: "CB", name: "Lisandro Martínez", age: 28, club: "Manchester United" },
      { no:  3, pos: "LB", name: "Nicolás Tagliafico", age: 33, club: "Lyon" },
      { no: 20, pos: "TG", name: "Alexis Mac Allister", age: 25, club: "Liverpool" },
      { no: 24, pos: "TG", name: "Enzo Fernández", age: 25, club: "Chelsea" },
      { no:  7, pos: "TG", name: "Rodrigo De Paul", age: 32, club: "Atlético Madrid" },
      { no: 10, pos: "KN", name: "Lionel Messi", age: 38, club: "Inter Miami CF" },
      { no: 22, pos: "PN", name: "Lautaro Martínez", age: 28, club: "Inter Milan" },
      { no:  9, pos: "PN", name: "Julián Álvarez", age: 26, club: "Atlético Madrid" },
    ],
    subs: [
      { no:  1, pos: "PG", name: "Franco Armani", age: 39, club: "River Plate" },
      { no:  4, pos: "RB", name: "Gonzalo Montiel", age: 28, club: "Nottm Forest" },
      { no: 19, pos: "CB", name: "Nicolás Otamendi", age: 38, club: "Benfica" },
      { no:  8, pos: "LB", name: "Marcos Acuña", age: 34, club: "Sevilla" },
      { no:  5, pos: "TG", name: "Leandro Paredes", age: 32, club: "Roma" },
      { no: 11, pos: "KN", name: "Ángel Di María", age: 38, club: "Free Agent" },
      { no: 21, pos: "KN", name: "Paulo Dybala", age: 32, club: "Roma" },
    ],
  },
  BRA: {
    manager: "Dorival Júnior",
    trainingBase: "New Jersey, AS",
    jerseyHome: "#FCD116", jerseyHomeName: "Kuning",
    jerseyAway: "#009C3B", jerseyAwayName: "Hijau",
    players: [
      { no:  1, pos: "PG", name: "Alisson Becker", age: 33, club: "Liverpool" },
      { no:  2, pos: "RB", name: "Danilo", age: 34, club: "Juventus" },
      { no:  4, pos: "CB", name: "Marquinhos", age: 32, club: "PSG" },
      { no:  3, pos: "CB", name: "Gabriel Magalhães", age: 28, club: "Arsenal" },
      { no:  6, pos: "LB", name: "Guilherme Arana", age: 29, club: "Atlético Mineiro" },
      { no:  5, pos: "TG", name: "Bruno Guimarães", age: 28, club: "Newcastle United" },
      { no:  8, pos: "TG", name: "Gerson", age: 27, club: "Flamengo" },
      { no: 10, pos: "TG", name: "Lucas Paquetá", age: 28, club: "West Ham United" },
      { no: 11, pos: "KN", name: "Raphinha", age: 29, club: "Barcelona" },
      { no:  9, pos: "KN", name: "Rodrygo", age: 25, club: "Real Madrid" },
      { no:  7, pos: "PN", name: "Vinícius Jr", age: 25, club: "Real Madrid" },
    ],
    subs: [
      { no: 23, pos: "PG", name: "Ederson", age: 32, club: "Manchester City" },
      { no: 13, pos: "CB", name: "Éder Militão", age: 28, club: "Real Madrid" },
      { no: 14, pos: "TG", name: "Casemiro", age: 34, club: "Manchester United" },
      { no: 19, pos: "PN", name: "Endrick", age: 19, club: "Real Madrid" },
      { no: 17, pos: "KN", name: "Gabriel Martinelli", age: 24, club: "Arsenal" },
    ],
  },
  FRA: {
    manager: "Didier Deschamps",
    trainingBase: "New York, AS",
    jerseyHome: "#0055A4", jerseyHomeName: "Biru",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no: 16, pos: "PG", name: "Mike Maignan", age: 30, club: "AC Milan" },
      { no:  5, pos: "RB", name: "Jules Koundé", age: 27, club: "Barcelona" },
      { no:  4, pos: "CB", name: "Dayot Upamecano", age: 27, club: "Bayern Munich" },
      { no: 17, pos: "CB", name: "William Saliba", age: 25, club: "Arsenal" },
      { no: 22, pos: "LB", name: "Theo Hernández", age: 28, club: "AC Milan" },
      { no:  8, pos: "TG", name: "Aurélien Tchouaméni", age: 26, club: "Real Madrid" },
      { no: 14, pos: "TG", name: "Eduardo Camavinga", age: 23, club: "Real Madrid" },
      { no:  7, pos: "KN", name: "Antoine Griezmann", age: 35, club: "Atlético Madrid" },
      { no: 11, pos: "KN", name: "Ousmane Dembélé", age: 29, club: "PSG" },
      { no:  9, pos: "PN", name: "Marcus Thuram", age: 28, club: "Inter Milan" },
      { no: 10, pos: "PN", name: "Kylian Mbappé", age: 27, club: "Real Madrid" },
    ],
    subs: [
      { no: 23, pos: "PG", name: "Alphonse Areola", age: 33, club: "West Ham United" },
      { no:  2, pos: "CB", name: "Benjamin Pavard", age: 29, club: "Inter Milan" },
      { no: 13, pos: "TG", name: "N'Golo Kanté", age: 35, club: "Al-Ittihad" },
      { no: 20, pos: "KN", name: "Kingsley Coman", age: 29, club: "Bayern Munich" },
      { no: 19, pos: "PN", name: "Randal Kolo Muani", age: 27, club: "Juventus" },
    ],
  },
  ENG: {
    manager: "Thomas Tuchel",
    trainingBase: "New Jersey, AS",
    jerseyHome: "#FFFFFF", jerseyHomeName: "Putih",
    jerseyAway: "#CF081F", jerseyAwayName: "Merah",
    players: [
      { no:  1, pos: "PG", name: "Jordan Pickford", age: 32, club: "Everton" },
      { no:  2, pos: "RB", name: "Trent Alexander-Arnold", age: 27, club: "Real Madrid" },
      { no:  5, pos: "CB", name: "John Stones", age: 31, club: "Manchester City" },
      { no:  6, pos: "CB", name: "Harry Maguire", age: 33, club: "Manchester United" },
      { no: 12, pos: "LB", name: "Kieran Trippier", age: 35, club: "Newcastle United" },
      { no:  4, pos: "TG", name: "Declan Rice", age: 27, club: "Arsenal" },
      { no: 26, pos: "TG", name: "Kobbie Mainoo", age: 21, club: "Manchester United" },
      { no: 10, pos: "KN", name: "Jude Bellingham", age: 22, club: "Real Madrid" },
      { no:  7, pos: "KN", name: "Bukayo Saka", age: 24, club: "Arsenal" },
      { no: 11, pos: "KN", name: "Phil Foden", age: 26, club: "Manchester City" },
      { no:  9, pos: "PN", name: "Harry Kane", age: 32, club: "Bayern Munich" },
    ],
    subs: [
      { no: 13, pos: "PG", name: "Nick Pope", age: 34, club: "Newcastle United" },
      { no: 23, pos: "RB", name: "Kyle Walker", age: 36, club: "Manchester City" },
      { no:  8, pos: "TG", name: "Conor Gallagher", age: 26, club: "Atlético Madrid" },
      { no: 16, pos: "KN", name: "Marcus Rashford", age: 28, club: "Aston Villa" },
      { no: 14, pos: "PN", name: "Ollie Watkins", age: 30, club: "Aston Villa" },
    ],
  },
  GER: {
    manager: "Julian Nagelsmann",
    trainingBase: "Philadelphia, AS",
    jerseyHome: "#FFFFFF", jerseyHomeName: "Putih",
    jerseyAway: "#1A1A1A", jerseyAwayName: "Hitam",
    players: [
      { no:  1, pos: "PG", name: "Manuel Neuer", age: 40, club: "Bayern Munich" },
      { no:  6, pos: "RB", name: "Joshua Kimmich", age: 31, club: "Bayern Munich" },
      { no:  2, pos: "CB", name: "Antonio Rüdiger", age: 33, club: "Real Madrid" },
      { no:  4, pos: "CB", name: "Jonathan Tah", age: 30, club: "Bayern Munich" },
      { no: 22, pos: "LB", name: "David Raum", age: 27, club: "RB Leipzig" },
      { no: 21, pos: "TG", name: "İlkay Gündoğan", age: 35, club: "Barcelona" },
      { no: 10, pos: "KN", name: "Florian Wirtz", age: 22, club: "Bayern Munich" },
      { no: 14, pos: "KN", name: "Jamal Musiala", age: 23, club: "Bayern Munich" },
      { no: 19, pos: "KN", name: "Leroy Sané", age: 30, club: "Bayern Munich" },
      { no: 13, pos: "KN", name: "Thomas Müller", age: 36, club: "Bayern Munich" },
      { no:  7, pos: "PN", name: "Kai Havertz", age: 26, club: "Arsenal" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Marc-André ter Stegen", age: 34, club: "Barcelona" },
      { no:  3, pos: "RB", name: "Benjamin Henrichs", age: 29, club: "RB Leipzig" },
      { no: 20, pos: "KN", name: "Serge Gnabry", age: 31, club: "Bayern Munich" },
      { no:  9, pos: "PN", name: "Niclas Füllkrug", age: 33, club: "West Ham United" },
      { no: 23, pos: "TG", name: "Robert Andrich", age: 31, club: "Bayer Leverkusen" },
    ],
  },
  ESP: {
    manager: "Luis de la Fuente",
    trainingBase: "New Jersey, AS",
    jerseyHome: "#AA151B", jerseyHomeName: "Merah",
    jerseyAway: "#003399", jerseyAwayName: "Biru gelap",
    players: [
      { no:  1, pos: "PG", name: "Unai Simón", age: 29, club: "Athletic Bilbao" },
      { no:  2, pos: "RB", name: "Dani Carvajal", age: 34, club: "Real Madrid" },
      { no:  3, pos: "CB", name: "Robin Le Normand", age: 27, club: "Atlético Madrid" },
      { no: 14, pos: "CB", name: "Aymeric Laporte", age: 32, club: "Al-Nassr" },
      { no: 15, pos: "LB", name: "Alejandro Grimaldo", age: 30, club: "Bayer Leverkusen" },
      { no: 16, pos: "TG", name: "Rodri", age: 30, club: "Manchester City" },
      { no:  8, pos: "TG", name: "Pedri", age: 23, club: "Barcelona" },
      { no:  9, pos: "TG", name: "Gavi", age: 22, club: "Barcelona" },
      { no: 19, pos: "KN", name: "Lamine Yamal", age: 18, club: "Barcelona" },
      { no: 11, pos: "KN", name: "Nico Williams", age: 24, club: "Athletic Bilbao" },
      { no:  7, pos: "PN", name: "Álvaro Morata", age: 33, club: "AC Milan" },
    ],
    subs: [
      { no: 23, pos: "PG", name: "David Raya", age: 30, club: "Arsenal" },
      { no:  6, pos: "CB", name: "Nacho Fernández", age: 36, club: "Al-Qadsiah" },
      { no: 17, pos: "KN", name: "Dani Olmo", age: 28, club: "Barcelona" },
      { no: 20, pos: "TG", name: "Fermín López", age: 23, club: "Barcelona" },
      { no: 13, pos: "PN", name: "Joselu", age: 36, club: "Free Agent" },
    ],
  },
  POR: {
    manager: "Roberto Martínez",
    trainingBase: "Columbus, Ohio, AS",
    jerseyHome: "#FF0000", jerseyHomeName: "Merah",
    jerseyAway: "#006600", jerseyAwayName: "Hijau",
    players: [
      { no:  1, pos: "PG", name: "Diogo Costa", age: 26, club: "Porto" },
      { no: 20, pos: "RB", name: "João Cancelo", age: 31, club: "Barcelona" },
      { no:  4, pos: "CB", name: "Rúben Dias", age: 29, club: "Manchester City" },
      { no:  3, pos: "CB", name: "Gonçalo Inácio", age: 24, club: "Sporting CP" },
      { no: 19, pos: "LB", name: "Nuno Mendes", age: 23, club: "PSG" },
      { no: 16, pos: "TG", name: "Vitinha", age: 25, club: "PSG" },
      { no: 10, pos: "TG", name: "Bernardo Silva", age: 31, club: "Manchester City" },
      { no:  8, pos: "KN", name: "Bruno Fernandes", age: 31, club: "Manchester United" },
      { no: 11, pos: "KN", name: "Rafael Leão", age: 26, club: "AC Milan" },
      { no:  9, pos: "PN", name: "Gonçalo Ramos", age: 24, club: "PSG" },
      { no:  7, pos: "PN", name: "Cristiano Ronaldo", age: 41, club: "Al-Nassr" },
    ],
    subs: [
      { no:  2, pos: "PG", name: "Rui Patrício", age: 38, club: "Free Agent" },
      { no: 21, pos: "RB", name: "Nélson Semedo", age: 32, club: "Wolverhampton" },
      { no: 15, pos: "TG", name: "Rúben Neves", age: 29, club: "Al-Hilal" },
      { no: 22, pos: "PN", name: "Diogo Jota", age: 29, club: "Liverpool" },
      { no: 23, pos: "KN", name: "João Félix", age: 26, club: "Chelsea" },
    ],
  },
  NED: {
    manager: "Ronald Koeman",
    trainingBase: "Houston, Texas, AS",
    jerseyHome: "#FF6600", jerseyHomeName: "Oren",
    jerseyAway: "#003DA5", jerseyAwayName: "Biru",
    players: [
      { no:  1, pos: "PG", name: "Bart Verbruggen", age: 23, club: "Brighton" },
      { no: 22, pos: "RB", name: "Denzel Dumfries", age: 30, club: "Inter Milan" },
      { no:  4, pos: "CB", name: "Virgil van Dijk", age: 34, club: "Liverpool" },
      { no:  6, pos: "CB", name: "Stefan de Vrij", age: 34, club: "Inter Milan" },
      { no:  5, pos: "LB", name: "Nathan Aké", age: 31, club: "Manchester City" },
      { no: 21, pos: "TG", name: "Frenkie de Jong", age: 28, club: "Barcelona" },
      { no: 14, pos: "TG", name: "Tijjani Reijnders", age: 27, club: "AC Milan" },
      { no:  7, pos: "KN", name: "Xavi Simons", age: 22, club: "PSG" },
      { no: 11, pos: "KN", name: "Cody Gakpo", age: 26, club: "Liverpool" },
      { no: 10, pos: "PN", name: "Memphis Depay", age: 32, club: "Corinthians" },
      { no: 19, pos: "PN", name: "Wout Weghorst", age: 33, club: "Hoffenheim" },
    ],
    subs: [
      { no: 13, pos: "PG", name: "Mark Flekken", age: 31, club: "Brentford" },
      { no:  3, pos: "RB", name: "Jeremie Frimpong", age: 25, club: "Bayer Leverkusen" },
      { no:  8, pos: "TG", name: "Ryan Gravenberch", age: 23, club: "Liverpool" },
      { no: 17, pos: "KN", name: "Donyell Malen", age: 27, club: "Dortmund" },
      { no:  2, pos: "CB", name: "Matthijs de Ligt", age: 26, club: "Manchester United" },
    ],
  },
  BEL: {
    manager: "Domenico Tedesco",
    trainingBase: "Atlanta, Georgia, AS",
    jerseyHome: "#ED2939", jerseyHomeName: "Merah",
    jerseyAway: "#1A1A1A", jerseyAwayName: "Hitam",
    players: [
      { no:  1, pos: "PG", name: "Thibaut Courtois", age: 34, club: "Real Madrid" },
      { no:  2, pos: "RB", name: "Timothy Castagne", age: 30, club: "Fulham" },
      { no:  4, pos: "CB", name: "Toby Alderweireld", age: 37, club: "Free Agent" },
      { no:  3, pos: "CB", name: "Wout Faes", age: 27, club: "Leicester City" },
      { no:  5, pos: "LB", name: "Arthur Theate", age: 24, club: "Rennes" },
      { no:  7, pos: "TG", name: "Kevin De Bruyne", age: 35, club: "Manchester City" },
      { no:  6, pos: "TG", name: "Axel Witsel", age: 37, club: "Atlético Madrid" },
      { no:  8, pos: "TG", name: "Youri Tielemans", age: 29, club: "Aston Villa" },
      { no: 11, pos: "KN", name: "Jeremy Doku", age: 23, club: "Manchester City" },
      { no:  9, pos: "PN", name: "Romelu Lukaku", age: 33, club: "Napoli" },
      { no: 20, pos: "PN", name: "Loïs Openda", age: 26, club: "RB Leipzig" },
    ],
    subs: [
      { no: 16, pos: "PG", name: "Matz Sels", age: 32, club: "Nottm Forest" },
      { no: 24, pos: "TG", name: "Amadou Onana", age: 23, club: "Aston Villa" },
      { no: 21, pos: "KN", name: "Charles De Ketelaere", age: 23, club: "Atalanta" },
      { no: 19, pos: "KN", name: "Dodi Lukebakio", age: 27, club: "Sevilla" },
      { no: 15, pos: "RB", name: "Thomas Meunier", age: 35, club: "Free Agent" },
    ],
  },
  JPN: {
    manager: "Hajime Moriyasu",
    trainingBase: "Los Angeles, California, AS",
    jerseyHome: "#003380", jerseyHomeName: "Biru gelap",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Shuichi Gonda", age: 31, club: "Shimizu S-Pulse" },
      { no:  2, pos: "RB", name: "Hiroki Sugawara", age: 24, club: "AZ Alkmaar" },
      { no:  4, pos: "CB", name: "Ko Itakura", age: 29, club: "Borussia M'bach" },
      { no: 22, pos: "CB", name: "Shogo Taniguchi", age: 32, club: "Kawasaki Frontale" },
      { no:  5, pos: "LB", name: "Yuto Nagatomo", age: 40, club: "Tokyo Verdy" },
      { no:  6, pos: "TG", name: "Wataru Endo", age: 31, club: "Liverpool" },
      { no: 10, pos: "TG", name: "Daichi Kamada", age: 28, club: "Crystal Palace" },
      { no:  8, pos: "KN", name: "Takefusa Kubo", age: 25, club: "Real Sociedad" },
      { no:  9, pos: "KN", name: "Ritsu Doan", age: 27, club: "Freiburg" },
      { no: 11, pos: "KN", name: "Kaoru Mitoma", age: 28, club: "Brighton" },
      { no: 20, pos: "PN", name: "Ayase Ueda", age: 26, club: "Feyenoord" },
    ],
    subs: [
      { no: 12, pos: "PG", name: "Daniel Schmidt", age: 34, club: "Sint-Truiden" },
      { no: 15, pos: "CB", name: "Hiroki Ito", age: 27, club: "Stuttgart" },
      { no:  7, pos: "TG", name: "Ao Tanaka", age: 26, club: "Dortmund" },
      { no: 16, pos: "PN", name: "Koki Ogawa", age: 27, club: "Wolfsburg" },
      { no:  3, pos: "KN", name: "Junya Ito", age: 32, club: "Getafe" },
    ],
  },
  KOR: {
    manager: "Hong Myung-bo",
    trainingBase: "Seattle, Washington, AS",
    jerseyHome: "#C60C30", jerseyHomeName: "Merah",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Kim Seung-gyu", age: 36, club: "Vissel Kobe" },
      { no:  2, pos: "RB", name: "Kim Moon-hwan", age: 29, club: "Jeonbuk Hyundai" },
      { no:  3, pos: "CB", name: "Kim Min-jae", age: 30, club: "Bayern Munich" },
      { no: 19, pos: "CB", name: "Kim Young-gwon", age: 36, club: "Ulsan HD" },
      { no: 17, pos: "LB", name: "Hong Chul", age: 33, club: "Suwon FC" },
      { no:  8, pos: "TG", name: "Hwang In-beom", age: 28, club: "Feyenoord" },
      { no:  5, pos: "TG", name: "Jung Woo-young", age: 35, club: "Al-Gharafa" },
      { no: 10, pos: "KN", name: "Lee Kang-in", age: 25, club: "PSG" },
      { no: 11, pos: "KN", name: "Hwang Hee-chan", age: 30, club: "Wolverhampton" },
      { no:  7, pos: "KN", name: "Son Heung-min", age: 34, club: "Tottenham Hotspur" },
      { no:  9, pos: "PN", name: "Cho Gue-sung", age: 27, club: "Midtjylland" },
    ],
    subs: [
      { no: 21, pos: "PG", name: "Jo Hyeon-woo", age: 30, club: "Ulsan HD" },
      { no: 14, pos: "TG", name: "Lee Jae-sung", age: 32, club: "Mainz 05" },
      { no: 16, pos: "KN", name: "Kwon Chang-hoon", age: 32, club: "Suwon Bluewings" },
      { no: 12, pos: "PN", name: "Oh Hyeon-gyu", age: 23, club: "Celtic" },
    ],
  },
  MEX: {
    manager: "Javier Aguirre",
    trainingBase: "Dallas, Texas, AS",
    jerseyHome: "#006847", jerseyHomeName: "Hijau",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Guillermo Ochoa", age: 40, club: "Salernitana" },
      { no:  2, pos: "RB", name: "Jorge Sánchez", age: 26, club: "Ajax" },
      { no: 22, pos: "CB", name: "Johan Vásquez", age: 26, club: "Cremonese" },
      { no:  3, pos: "CB", name: "César Montes", age: 27, club: "Espanyol" },
      { no: 23, pos: "LB", name: "Jesús Gallardo", age: 28, club: "Monterrey" },
      { no: 18, pos: "TG", name: "Edson Álvarez", age: 27, club: "West Ham United" },
      { no: 14, pos: "TG", name: "Orbelín Pineda", age: 28, club: "AEK Athens" },
      { no: 22, pos: "KN", name: "Hirving Lozano", age: 30, club: "PSV Eindhoven" },
      { no: 11, pos: "KN", name: "Alexis Vega", age: 27, club: "Guadalajara" },
      { no:  7, pos: "PN", name: "Henry Martín", age: 32, club: "Club América" },
      { no:  9, pos: "PN", name: "Santiago Giménez", age: 25, club: "Feyenoord" },
    ],
    subs: [
      { no: 13, pos: "PG", name: "Rodolfo Cota", age: 36, club: "Guadalajara" },
      { no:  8, pos: "TG", name: "Luis Romo", age: 29, club: "Cruz Azul" },
      { no: 20, pos: "KN", name: "Roberto Alvarado", age: 25, club: "Guadalajara" },
      { no: 17, pos: "KN", name: "Uriel Antuna", age: 27, club: "Cruz Azul" },
      { no:  9, pos: "PN", name: "Raúl Jiménez", age: 34, club: "Fulham" },
    ],
  },
  USA: {
    manager: "Mauricio Pochettino",
    trainingBase: "New York, AS",
    jerseyHome: "#FFFFFF", jerseyHomeName: "Putih",
    jerseyAway: "#003DA5", jerseyAwayName: "Biru gelap",
    players: [
      { no:  1, pos: "PG", name: "Matt Turner", age: 31, club: "Crystal Palace" },
      { no:  2, pos: "RB", name: "Sergiño Dest", age: 25, club: "PSV Eindhoven" },
      { no:  4, pos: "CB", name: "Chris Richards", age: 26, club: "Crystal Palace" },
      { no: 12, pos: "CB", name: "Miles Robinson", age: 28, club: "FC Cincinnati" },
      { no:  5, pos: "LB", name: "Antonee Robinson", age: 28, club: "Fulham" },
      { no:  4, pos: "TG", name: "Tyler Adams", age: 27, club: "AFC Bournemouth" },
      { no:  8, pos: "TG", name: "Weston McKennie", age: 27, club: "Juventus" },
      { no:  6, pos: "TG", name: "Yunus Musah", age: 23, club: "AC Milan" },
      { no: 10, pos: "KN", name: "Christian Pulisic", age: 27, club: "AC Milan" },
      { no: 21, pos: "KN", name: "Tim Weah", age: 25, club: "Juventus" },
      { no:  9, pos: "PN", name: "Folarin Balogun", age: 25, club: "Monaco" },
    ],
    subs: [
      { no: 13, pos: "PG", name: "Ethan Horvath", age: 30, club: "Luton Town" },
      { no: 15, pos: "RB", name: "Joe Scally", age: 23, club: "Borussia M'bach" },
      { no:  7, pos: "KN", name: "Gio Reyna", age: 23, club: "Nottm Forest" },
      { no: 19, pos: "PN", name: "Josh Sargent", age: 26, club: "Norwich City" },
      { no: 11, pos: "PN", name: "Ricardo Pepi", age: 23, club: "PSV Eindhoven" },
    ],
  },
  CAN: {
    manager: "Jesse Marsch",
    trainingBase: "Toronto, Ontario, Kanada",
    jerseyHome: "#FF0000", jerseyHomeName: "Merah",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no: 16, pos: "PG", name: "Maxime Crépeau", age: 31, club: "LA Galaxy" },
      { no:  2, pos: "RB", name: "Alistair Johnston", age: 26, club: "Celtic" },
      { no:  5, pos: "CB", name: "Kamal Miller", age: 28, club: "MLS / Colorado" },
      { no:  6, pos: "CB", name: "Steven Vitória", age: 37, club: "Santa Clara" },
      { no:  3, pos: "LB", name: "Alphonso Davies", age: 25, club: "Real Madrid" },
      { no:  7, pos: "TG", name: "Stephen Eustáquio", age: 27, club: "Porto" },
      { no:  8, pos: "TG", name: "Mark-Anthony Kaye", age: 29, club: "Sheriff Tiraspol" },
      { no: 11, pos: "KN", name: "Tajon Buchanan", age: 26, club: "Inter Milan" },
      { no: 14, pos: "TG", name: "Ismael Koné", age: 23, club: "Watford" },
      { no: 17, pos: "PN", name: "Cyle Larin", age: 30, club: "Real Valladolid" },
      { no:  9, pos: "PN", name: "Jonathan David", age: 26, club: "Lille" },
    ],
    subs: [
      { no: 18, pos: "PG", name: "Milan Borjan", age: 38, club: "Red Star Belgrade" },
      { no: 22, pos: "RB", name: "Richie Laryea", age: 30, club: "Nottm Forest" },
      { no: 10, pos: "KN", name: "Junior Hoilett", age: 35, club: "Vancouver Whitecaps" },
      { no: 19, pos: "PN", name: "Lucas Cavallini", age: 32, club: "Vancouver Whitecaps" },
    ],
  },
  AUS: {
    manager: "Tony Popovic",
    trainingBase: "Dallas, Texas, AS",
    jerseyHome: "#FFD700", jerseyHomeName: "Kuning",
    jerseyAway: "#003DA5", jerseyAwayName: "Biru",
    players: [
      { no:  1, pos: "PG", name: "Mathew Ryan", age: 34, club: "Roma" },
      { no:  5, pos: "RB", name: "Miloš Degenek", age: 31, club: "Columbus Crew" },
      { no: 13, pos: "CB", name: "Harry Souttar", age: 27, club: "Leicester City" },
      { no:  6, pos: "CB", name: "Kye Rowles", age: 28, club: "Hearts" },
      { no:  4, pos: "LB", name: "Aziz Behich", age: 34, club: "Dundee United" },
      { no:  8, pos: "TG", name: "Jackson Irvine", age: 32, club: "St. Pauli" },
      { no:  7, pos: "TG", name: "Riley McGree", age: 28, club: "Middlesbrough" },
      { no: 16, pos: "KN", name: "Craig Goodwin", age: 32, club: "Adelaide United" },
      { no: 11, pos: "KN", name: "Martin Boyle", age: 32, club: "Al-Faisaly" },
      { no: 19, pos: "PN", name: "Mitch Duke", age: 34, club: "Fagiano Okayama" },
      { no:  9, pos: "PN", name: "Jamie Maclaren", age: 32, club: "Melbourne City" },
    ],
    subs: [
      { no: 18, pos: "PG", name: "Andrew Redmayne", age: 36, club: "Sydney FC" },
      { no:  3, pos: "LB", name: "Joel King", age: 24, club: "Ipswich Town" },
      { no: 14, pos: "TG", name: "Keanu Baccus", age: 27, club: "St. Mirren" },
      { no: 17, pos: "PN", name: "Jason Cummings", age: 30, club: "Central Coast Mariners" },
      { no: 21, pos: "KN", name: "Mathew Leckie", age: 35, club: "Melbourne City" },
    ],
  },
  TUR: {
    manager: "Vincenzo Montella",
    trainingBase: "Miami, Florida, AS",
    jerseyHome: "#E30A17", jerseyHomeName: "Merah",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Mert Günok", age: 36, club: "Beşiktaş" },
      { no:  3, pos: "RB", name: "Zeki Çelik", age: 29, club: "Roma" },
      { no:  2, pos: "CB", name: "Merih Demiral", age: 28, club: "Al-Ahli" },
      { no:  6, pos: "CB", name: "Samet Akaydın", age: 29, club: "Fenerbahçe" },
      { no: 18, pos: "LB", name: "Ferdi Kadıoğlu", age: 25, club: "Brighton" },
      { no: 10, pos: "TG", name: "Hakan Çalhanoğlu", age: 32, club: "Inter Milan" },
      { no: 19, pos: "TG", name: "Salih Özcan", age: 27, club: "Dortmund" },
      { no:  8, pos: "KN", name: "Arda Güler", age: 20, club: "Real Madrid" },
      { no: 11, pos: "KN", name: "Kerem Aktürkoğlu", age: 26, club: "Galatasaray" },
      { no: 14, pos: "KN", name: "Baris Alper Yilmaz", age: 25, club: "Galatasaray" },
      { no:  9, pos: "PN", name: "Cenk Tosun", age: 35, club: "Beşiktaş" },
    ],
    subs: [
      { no: 12, pos: "PG", name: "Altay Bayındır", age: 27, club: "Manchester United" },
      { no:  4, pos: "CB", name: "Çağlar Söyüncü", age: 30, club: "Atlético Madrid" },
      { no: 16, pos: "KN", name: "Yusuf Yazıcı", age: 28, club: "LOSC Lille" },
      { no: 15, pos: "KN", name: "İrfan Can Kahveci", age: 30, club: "Fenerbahçe" },
    ],
  },
  SUI: {
    manager: "Murat Yakin",
    trainingBase: "Charlotte, NC, AS",
    jerseyHome: "#FF0000", jerseyHomeName: "Merah",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Yann Sommer", age: 37, club: "Inter Milan" },
      { no: 24, pos: "RB", name: "Silvan Widmer", age: 32, club: "Mainz 05" },
      { no:  5, pos: "CB", name: "Manuel Akanji", age: 30, club: "Manchester City" },
      { no: 20, pos: "CB", name: "Fabian Schär", age: 34, club: "Newcastle United" },
      { no: 13, pos: "LB", name: "Ricardo Rodríguez", age: 33, club: "Torino" },
      { no: 10, pos: "TG", name: "Granit Xhaka", age: 33, club: "Bayer Leverkusen" },
      { no:  8, pos: "TG", name: "Denis Zakaria", age: 29, club: "Monaco" },
      { no: 21, pos: "TG", name: "Remo Freuler", age: 32, club: "Nottm Forest" },
      { no: 23, pos: "KN", name: "Xherdan Shaqiri", age: 34, club: "Chicago Fire" },
      { no:  7, pos: "PN", name: "Breel Embolo", age: 29, club: "Monaco" },
      { no: 14, pos: "PN", name: "Noah Okafor", age: 25, club: "AC Milan" },
    ],
    subs: [
      { no: 18, pos: "PG", name: "Jonas Omlin", age: 32, club: "Monaco" },
      { no:  4, pos: "CB", name: "Nico Elvedi", age: 29, club: "Borussia M'bach" },
      { no:  9, pos: "PN", name: "Haris Seferović", age: 33, club: "Free Agent" },
      { no: 15, pos: "KN", name: "Michel Aebischer", age: 28, club: "Bologna" },
    ],
  },
  MAR: {
    manager: "Walid Regragui",
    trainingBase: "New York, AS",
    jerseyHome: "#C1272D", jerseyHomeName: "Merah",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Yassine Bounou", age: 33, club: "Al-Hilal" },
      { no:  2, pos: "RB", name: "Achraf Hakimi", age: 27, club: "PSG" },
      { no:  5, pos: "CB", name: "Romain Saïss", age: 36, club: "Besiktas" },
      { no:  6, pos: "CB", name: "Nayef Aguerd", age: 28, club: "West Ham United" },
      { no:  3, pos: "LB", name: "Noussair Mazraoui", age: 28, club: "Manchester United" },
      { no:  4, pos: "TG", name: "Sofyan Amrabat", age: 29, club: "Fenerbahçe" },
      { no:  8, pos: "TG", name: "Azzedine Ounahi", age: 25, club: "Marseille" },
      { no:  7, pos: "KN", name: "Hakim Ziyech", age: 33, club: "Galatasaray" },
      { no: 11, pos: "KN", name: "Sofiane Boufal", age: 32, club: "Southampton" },
      { no: 19, pos: "PN", name: "Youssef En-Nesyri", age: 29, club: "Fenerbahçe" },
      { no: 18, pos: "PN", name: "Ayoub El Kaabi", age: 28, club: "Olympiakos" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Ahmed Tagnaouti", age: 30, club: "Wydad AC" },
      { no: 14, pos: "CB", name: "Jawad El Yamiq", age: 32, club: "Real Valladolid" },
      { no: 17, pos: "TG", name: "Selim Amallah", age: 28, club: "Standard Liège" },
      { no: 16, pos: "KN", name: "Zakaria Aboukhlal", age: 24, club: "Toulouse" },
    ],
  },
  SEN: {
    manager: "Aliou Cissé",
    trainingBase: "Miami, Florida, AS",
    jerseyHome: "#00853F", jerseyHomeName: "Hijau",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Édouard Mendy", age: 34, club: "Al-Ahli" },
      { no:  3, pos: "RB", name: "Saliou Ciss", age: 35, club: "Nancy" },
      { no:  2, pos: "CB", name: "Kalidou Koulibaly", age: 35, club: "Al-Hilal" },
      { no: 23, pos: "CB", name: "Abdou Diallo", age: 29, club: "RB Leipzig" },
      { no:  6, pos: "LB", name: "Moussa Wagué", age: 27, club: "Free Agent" },
      { no:  5, pos: "TG", name: "Idrissa Gueye", age: 36, club: "Everton" },
      { no:  8, pos: "TG", name: "Cheikhou Kouyaté", age: 34, club: "Nottm Forest" },
      { no: 20, pos: "TG", name: "Pape Matar Sarr", age: 23, club: "Tottenham Hotspur" },
      { no: 10, pos: "KN", name: "Sadio Mané", age: 34, club: "Al-Nassr" },
      { no: 19, pos: "KN", name: "Ismaïla Sarr", age: 26, club: "Marseille" },
      { no:  9, pos: "PN", name: "Nicolas Jackson", age: 24, club: "Chelsea" },
    ],
    subs: [
      { no: 16, pos: "PG", name: "Alfred Gomis", age: 31, club: "Rennes" },
      { no:  4, pos: "TG", name: "Nampalys Mendy", age: 34, club: "Free Agent" },
      { no: 18, pos: "PN", name: "Boulaye Dia", age: 27, club: "Lazio" },
      { no: 11, pos: "PN", name: "Habib Diallo", age: 29, club: "Al-Shabab" },
    ],
  },
  URU: {
    manager: "Marcelo Bielsa",
    trainingBase: "New Jersey, AS",
    jerseyHome: "#5EB6E4", jerseyHomeName: "Biru muda",
    jerseyAway: "#1A1A1A", jerseyAwayName: "Hitam",
    players: [
      { no:  1, pos: "PG", name: "Sergio Rochet", age: 32, club: "Inter Milan" },
      { no:  2, pos: "RB", name: "Nahitan Nández", age: 30, club: "Cagliari" },
      { no:  6, pos: "CB", name: "José María Giménez", age: 31, club: "Atlético Madrid" },
      { no: 13, pos: "CB", name: "Sebastián Coates", age: 35, club: "Sporting CP" },
      { no: 17, pos: "LB", name: "Mathías Olivera", age: 28, club: "Napoli" },
      { no: 14, pos: "TG", name: "Lucas Torreira", age: 30, club: "Galatasaray" },
      { no:  8, pos: "TG", name: "Rodrigo Bentancur", age: 29, club: "Tottenham Hotspur" },
      { no: 15, pos: "TG", name: "Federico Valverde", age: 27, club: "Real Madrid" },
      { no: 10, pos: "KN", name: "Giorgian de Arrascaeta", age: 31, club: "Flamengo" },
      { no:  7, pos: "KN", name: "Facundo Pellistri", age: 24, club: "Manchester United" },
      { no: 11, pos: "PN", name: "Darwin Núñez", age: 26, club: "Liverpool" },
    ],
    subs: [
      { no: 23, pos: "PG", name: "Fernando Muslera", age: 39, club: "Galatasaray" },
      { no:  9, pos: "PN", name: "Luis Suárez", age: 39, club: "Free Agent" },
      { no: 20, pos: "KN", name: "Maximiliano Araújo", age: 25, club: "Sporting CP" },
      { no: 19, pos: "PN", name: "Maximiliano Gómez", age: 30, club: "Tigres UANL" },
    ],
  },
  COL: {
    manager: "Néstor Lorenzo",
    trainingBase: "Miami, Florida, AS",
    jerseyHome: "#FDD116", jerseyHomeName: "Kuning",
    jerseyAway: "#003087", jerseyAwayName: "Biru gelap",
    players: [
      { no:  1, pos: "PG", name: "Camilo Vargas", age: 31, club: "Atlas" },
      { no: 18, pos: "RB", name: "Daniel Muñoz", age: 28, club: "Crystal Palace" },
      { no:  2, pos: "CB", name: "Davinson Sánchez", age: 29, club: "Galatasaray" },
      { no: 13, pos: "CB", name: "Yerry Mina", age: 31, club: "Free Agent" },
      { no: 16, pos: "LB", name: "Johan Mojica", age: 31, club: "Rayo Vallecano" },
      { no:  5, pos: "TG", name: "Wilmar Barrios", age: 32, club: "Zenit St. Petersburg" },
      { no:  8, pos: "TG", name: "Mateus Uribe", age: 33, club: "Porto" },
      { no: 10, pos: "KN", name: "James Rodríguez", age: 34, club: "Rayo Vallecano" },
      { no:  7, pos: "KN", name: "Luis Díaz", age: 28, club: "Liverpool" },
      { no: 11, pos: "KN", name: "Cucho Hernández", age: 26, club: "Columbus Crew" },
      { no:  9, pos: "PN", name: "Jhon Córdoba", age: 30, club: "Krasnodar" },
    ],
    subs: [
      { no: 12, pos: "PG", name: "David Ospina", age: 37, club: "Free Agent" },
      { no: 22, pos: "RB", name: "Santiago Arias", age: 34, club: "Free Agent" },
      { no: 19, pos: "PN", name: "Rafael Santos Borré", age: 29, club: "Frankfurt" },
      { no: 17, pos: "KN", name: "Sebastián Villa", age: 29, club: "Boca Juniors" },
    ],
  },
  ECU: {
    manager: "Sebastián Beccacece",
    trainingBase: "Dallas, Texas, AS",
    jerseyHome: "#FFD100", jerseyHomeName: "Kuning",
    jerseyAway: "#003580", jerseyAwayName: "Biru gelap",
    players: [
      { no:  1, pos: "PG", name: "Hernán Galíndez", age: 36, club: "Aucas" },
      { no: 17, pos: "RB", name: "Angelo Preciado", age: 26, club: "Genk" },
      { no:  3, pos: "CB", name: "Félix Torres", age: 27, club: "Santos Laguna" },
      { no:  2, pos: "CB", name: "Piero Hincapié", age: 23, club: "Bayer Leverkusen" },
      { no:  7, pos: "LB", name: "Pervis Estupiñán", age: 26, club: "Brighton" },
      { no:  5, pos: "TG", name: "José Cifuentes", age: 25, club: "Los Angeles FC" },
      { no: 10, pos: "TG", name: "Moisés Caicedo", age: 24, club: "Chelsea" },
      { no: 11, pos: "KN", name: "Ángel Mena", age: 36, club: "León" },
      { no:  8, pos: "KN", name: "Gonzalo Plata", age: 24, club: "Wolverhampton" },
      { no: 13, pos: "PN", name: "Enner Valencia", age: 36, club: "LDU Quito" },
      { no:  9, pos: "PN", name: "Michael Estrada", age: 29, club: "Cruz Azul" },
    ],
    subs: [
      { no: 12, pos: "PG", name: "Alexander Domínguez", age: 37, club: "LDU Quito" },
      { no:  4, pos: "RB", name: "Byron Castillo", age: 27, club: "Basel" },
      { no: 19, pos: "KN", name: "Jeremy Sarmiento", age: 24, club: "Brighton" },
      { no: 14, pos: "PN", name: "Jordy Caicedo", age: 31, club: "Free Agent" },
    ],
  },
  CIV: {
    manager: "Emerse Faé",
    trainingBase: "Miami, Florida, AS",
    jerseyHome: "#F47920", jerseyHomeName: "Oren",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Yahia Fofana", age: 31, club: "Leicester City" },
      { no: 24, pos: "RB", name: "Serge Aurier", age: 33, club: "Free Agent" },
      { no:  3, pos: "CB", name: "Eric Bailly", age: 32, club: "Trabzonspor" },
      { no:  5, pos: "CB", name: "Wilfried Kanon", age: 31, club: "Kortrijk" },
      { no: 20, pos: "LB", name: "Ghislain Konan", age: 30, club: "Reims" },
      { no:  8, pos: "TG", name: "Franck Kessié", age: 29, club: "Al-Ahli" },
      { no: 17, pos: "TG", name: "Ibrahim Sangaré", age: 27, club: "Nottm Forest" },
      { no: 19, pos: "KN", name: "Nicolas Pépé", age: 31, club: "Trabzonspor" },
      { no: 11, pos: "KN", name: "Wilfried Zaha", age: 33, club: "Galatasaray" },
      { no: 14, pos: "KN", name: "Simon Adingra", age: 23, club: "Brighton" },
      { no:  9, pos: "PN", name: "Sébastien Haller", age: 32, club: "Dortmund" },
    ],
    subs: [
      { no: 16, pos: "PG", name: "Badra Ali Sangaré", age: 32, club: "Quevilly" },
      { no:  6, pos: "TG", name: "Jean Michaël Seri", age: 32, club: "Free Agent" },
      { no:  7, pos: "KN", name: "Maxwel Cornet", age: 27, club: "West Ham United" },
      { no: 21, pos: "KN", name: "Oumar Diakité", age: 26, club: "Free Agent" },
    ],
  },
  GHA: {
    manager: "Otto Addo",
    trainingBase: "Charlotte, NC, AS",
    jerseyHome: "#FFFFFF", jerseyHomeName: "Putih",
    jerseyAway: "#F2CD00", jerseyAwayName: "Kuning",
    players: [
      { no:  1, pos: "PG", name: "Lawrence Ati-Zigi", age: 30, club: "St. Gallen" },
      { no:  2, pos: "RB", name: "Tariq Lamptey", age: 25, club: "Brighton" },
      { no:  3, pos: "CB", name: "Daniel Amartey", age: 31, club: "Besiktas" },
      { no:  5, pos: "CB", name: "Alexander Djiku", age: 30, club: "Fenerbahçe" },
      { no:  4, pos: "LB", name: "Abdul Rahman Baba", age: 30, club: "PAOK" },
      { no:  6, pos: "TG", name: "Thomas Partey", age: 32, club: "Arsenal" },
      { no: 14, pos: "TG", name: "Mohammed Kudus", age: 25, club: "West Ham United" },
      { no: 10, pos: "KN", name: "André Ayew", age: 36, club: "Le Havre" },
      { no: 11, pos: "KN", name: "Jordan Ayew", age: 34, club: "Leicester City" },
      { no:  8, pos: "KN", name: "Felix Afena-Gyan", age: 23, club: "Free Agent" },
      { no:  9, pos: "PN", name: "Antoine Semenyo", age: 25, club: "Bournemouth" },
    ],
    subs: [
      { no: 16, pos: "PG", name: "Jojo Wollacott", age: 29, club: "Stoke City" },
      { no: 22, pos: "CB", name: "Dennis Odoi", age: 36, club: "Free Agent" },
      { no: 18, pos: "TG", name: "Salis Abdul Samed", age: 24, club: "Lens" },
      { no: 17, pos: "PN", name: "Inaki Williams", age: 32, club: "Athletic Bilbao" },
    ],
  },
  CRO: {
    manager: "Zlatko Dalić",
    trainingBase: "Los Angeles, California, AS",
    jerseyHome: "#FF0000", jerseyHomeName: "Merah-kotak",
    jerseyAway: "#003DA5", jerseyAwayName: "Biru",
    players: [
      { no:  1, pos: "PG", name: "Dominik Livaković", age: 30, club: "Fenerbahçe" },
      { no: 22, pos: "RB", name: "Josip Juranović", age: 30, club: "Celtic" },
      { no:  6, pos: "CB", name: "Dejan Lovren", age: 37, club: "Free Agent" },
      { no:  5, pos: "CB", name: "Duje Ćaleta-Car", age: 28, club: "Southampton" },
      { no: 19, pos: "LB", name: "Borna Sosa", age: 27, club: "Stuttgart" },
      { no: 10, pos: "TG", name: "Luka Modrić", age: 40, club: "Real Madrid" },
      { no: 11, pos: "TG", name: "Marcelo Brozović", age: 33, club: "Al-Nassr" },
      { no:  8, pos: "TG", name: "Mateo Kovačić", age: 32, club: "Manchester City" },
      { no: 15, pos: "KN", name: "Mario Pašalić", age: 31, club: "Atalanta" },
      { no: 18, pos: "KN", name: "Lovro Majer", age: 27, club: "Real Sociedad" },
      { no:  9, pos: "PN", name: "Andrej Kramarić", age: 35, club: "Hoffenheim" },
    ],
    subs: [
      { no: 23, pos: "PG", name: "Ivica Ivušić", age: 30, club: "Osijek" },
      { no:  2, pos: "RB", name: "Šime Vrsaljko", age: 34, club: "Free Agent" },
      { no: 17, pos: "KN", name: "Nikola Vlašić", age: 28, club: "Torino" },
      { no: 13, pos: "PN", name: "Bruno Petković", age: 32, club: "Dinamo Zagreb" },
    ],
  },
  PAN: {
    manager: "Thomas Christiansen",
    trainingBase: "Houston, Texas, AS",
    jerseyHome: "#CE1126", jerseyHomeName: "Merah-putih",
    jerseyAway: "#002B7F", jerseyAwayName: "Biru",
    players: [
      { no:  1, pos: "PG", name: "Luis Mejía", age: 28, club: "Peñarol" },
      { no:  2, pos: "RB", name: "Michael Murillo", age: 29, club: "Anderlecht" },
      { no:  3, pos: "CB", name: "Andrés Andrade", age: 30, club: "Monterrey" },
      { no:  4, pos: "CB", name: "Eric Davis", age: 35, club: "Nashville SC" },
      { no:  5, pos: "LB", name: "Fidel Escobar", age: 29, club: "Defensa y Justicia" },
      { no:  8, pos: "TG", name: "Anibal Godoy", age: 35, club: "Nashville SC" },
      { no: 10, pos: "TG", name: "Adalberto Carrasquilla", age: 26, club: "FC Dallas" },
      { no: 17, pos: "KN", name: "Rolando Blackburn", age: 30, club: "Salernitana" },
      { no: 11, pos: "KN", name: "Edgar Bárcenas", age: 29, club: "Free Agent" },
      { no:  9, pos: "PN", name: "Abdiel Ayarza", age: 24, club: "Sion" },
      { no:  7, pos: "PN", name: "José Fajardo", age: 29, club: "FC Dallas" },
    ],
    subs: [
      { no: 13, pos: "PG", name: "José Calderón", age: 28, club: "Alianza FC" },
      { no: 20, pos: "CB", name: "Harold Cummings", age: 30, club: "FC Dallas" },
      { no: 22, pos: "KN", name: "Ismael Díaz", age: 24, club: "Porto" },
    ],
  },
  PAR: {
    manager: "Gustavo Alfaro",
    trainingBase: "Atlanta, Georgia, AS",
    jerseyHome: "#D52B1E", jerseyHomeName: "Merah",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Antony Silva", age: 40, club: "Olimpia" },
      { no:  2, pos: "RB", name: "Omar Alderete", age: 27, club: "Getafe" },
      { no:  3, pos: "CB", name: "Fabián Balbuena", age: 35, club: "Dinamo Moscow" },
      { no:  4, pos: "CB", name: "Gustavo Gómez", age: 31, club: "Palmeiras" },
      { no:  5, pos: "LB", name: "Blas Riveros", age: 27, club: "Werder Bremen" },
      { no:  8, pos: "TG", name: "Mathías Villasanti", age: 28, club: "Grêmio" },
      { no: 10, pos: "TG", name: "Miguel Almirón", age: 32, club: "Newcastle United" },
      { no: 17, pos: "KN", name: "Ángel Romero", age: 32, club: "Corinthians" },
      { no: 11, pos: "KN", name: "Óscar Ruiz", age: 28, club: "Free Agent" },
      { no:  7, pos: "KN", name: "Diego Valdés", age: 30, club: "Club América" },
      { no:  9, pos: "PN", name: "Ramón Sosa", age: 23, club: "Nottm Forest" },
    ],
    subs: [
      { no: 23, pos: "PG", name: "Jorge Villar", age: 30, club: "Olimpia" },
      { no: 14, pos: "TG", name: "Andrés Cubas", age: 28, club: "Nottm Forest" },
      { no: 19, pos: "PN", name: "Antonio Sanabria", age: 30, club: "Torino" },
    ],
  },
  RSA: {
    manager: "Hugo Broos",
    trainingBase: "Kansas City, Missouri, AS",
    jerseyHome: "#FFB81C", jerseyHomeName: "Kuning",
    jerseyAway: "#007749", jerseyAwayName: "Hijau",
    players: [
      { no:  1, pos: "PG", name: "Ronwen Williams", age: 32, club: "Mamelodi Sundowns" },
      { no:  2, pos: "RB", name: "Terrence Mashego", age: 26, club: "Cape Town City" },
      { no:  5, pos: "CB", name: "Siyanda Xulu", age: 32, club: "Mamelodi Sundowns" },
      { no:  4, pos: "CB", name: "Rushine De Reuck", age: 30, club: "Mamelodi Sundowns" },
      { no:  3, pos: "LB", name: "Sipho Mbule", age: 29, club: "Kaizer Chiefs" },
      { no:  8, pos: "TG", name: "Ethan Brooks", age: 25, club: "TP Mazembe" },
      { no: 10, pos: "TG", name: "Teboho Mokoena", age: 28, club: "Mamelodi Sundowns" },
      { no: 17, pos: "KN", name: "Evidence Makgopa", age: 24, club: "Orlando Pirates" },
      { no: 11, pos: "KN", name: "Lyle Foster", age: 24, club: "Burnley" },
      { no:  7, pos: "KN", name: "Percy Tau", age: 31, club: "Al-Ahly" },
      { no:  9, pos: "PN", name: "Bongokuhle Hlongwane", age: 25, club: "Minnesota United" },
    ],
    subs: [
      { no: 13, pos: "PG", name: "Veli Mothwa", age: 33, club: "AmaZulu" },
      { no: 14, pos: "TG", name: "Yusuf Maart", age: 29, club: "Mamelodi Sundowns" },
      { no: 19, pos: "PN", name: "Lebo Mothiba", age: 30, club: "RC Strasbourg" },
    ],
  },
  CZE: {
    manager: "Ivan Hašek",
    trainingBase: "Chicago, Illinois, AS",
    jerseyHome: "#D7141A", jerseyHomeName: "Merah",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Jindřich Staněk", age: 29, club: "Slavia Prague" },
      { no:  2, pos: "RB", name: "Vladimír Coufal", age: 32, club: "West Ham United" },
      { no:  5, pos: "CB", name: "Tomáš Holeš", age: 31, club: "Slavia Prague" },
      { no:  4, pos: "CB", name: "David Zima", age: 26, club: "Torino" },
      { no:  3, pos: "LB", name: "Jan Bořil", age: 34, club: "Slavia Prague" },
      { no:  8, pos: "TG", name: "Tomáš Souček", age: 31, club: "West Ham United" },
      { no: 10, pos: "TG", name: "Lukáš Provod", age: 28, club: "Slavia Prague" },
      { no: 17, pos: "KN", name: "Antonín Barák", age: 31, club: "Fiorentina" },
      { no: 11, pos: "KN", name: "Ondřej Lingr", age: 27, club: "Feyenoord" },
      { no:  7, pos: "KN", name: "Ondřej Duda", age: 30, club: "Hellas Verona" },
      { no:  9, pos: "PN", name: "Patrik Schick", age: 30, club: "Bayer Leverkusen" },
    ],
    subs: [
      { no: 16, pos: "PG", name: "Matěj Kovář", age: 24, club: "Bayer Leverkusen" },
      { no: 14, pos: "TG", name: "Jakub Jankto", age: 30, club: "Sparta Prague" },
      { no: 18, pos: "PN", name: "Adam Hložek", age: 23, club: "Bayer Leverkusen" },
    ],
  },
  QAT: {
    manager: "Sérgio Conceição",
    trainingBase: "Denver, Colorado, AS",
    jerseyHome: "#8D1B3D", jerseyHomeName: "Maroon",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Meshaal Barsham", age: 27, club: "Al-Sadd" },
      { no:  2, pos: "RB", name: "Pedro Miguel", age: 32, club: "Al-Sadd" },
      { no:  5, pos: "CB", name: "Tarek Salman", age: 28, club: "Al-Rayyan" },
      { no:  4, pos: "CB", name: "Boualem Khoukhi", age: 35, club: "Al-Sadd" },
      { no:  3, pos: "LB", name: "Homam Ahmed", age: 25, club: "Al-Duhail" },
      { no:  8, pos: "TG", name: "Karim Boudiaf", age: 35, club: "Al-Duhail" },
      { no: 10, pos: "TG", name: "Hassan Al Haydos", age: 33, club: "Al-Sadd" },
      { no: 17, pos: "KN", name: "Akram Afif", age: 27, club: "Al-Sadd" },
      { no: 11, pos: "KN", name: "Ismaeel Mohammad", age: 25, club: "Al-Sadd" },
      { no:  7, pos: "KN", name: "Naif Al Hadhrami", age: 28, club: "Al-Sailiya" },
      { no:  9, pos: "PN", name: "Almoez Ali", age: 28, club: "Al-Duhail" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Mohammed Al Bakri", age: 27, club: "Al-Wakrah" },
      { no: 14, pos: "TG", name: "Assim Madibo", age: 26, club: "FC Dallas" },
      { no: 19, pos: "PN", name: "Mohammed Muntari", age: 29, club: "Al-Duhail" },
    ],
  },
  BIH: {
    manager: "Sergej Barbarez",
    trainingBase: "Chicago, Illinois, AS",
    jerseyHome: "#003DA5", jerseyHomeName: "Biru",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Jasmin Handžić", age: 28, club: "Borac Banja Luka" },
      { no:  2, pos: "RB", name: "Sead Kolašinac", age: 33, club: "Atalanta" },
      { no:  5, pos: "CB", name: "Anel Ahmedhodžić", age: 26, club: "Sheffield United" },
      { no:  4, pos: "CB", name: "Ermin Bičakčić", age: 36, club: "Hoffenheim" },
      { no:  3, pos: "LB", name: "Nermin Zolotić", age: 27, club: "Kayserispor" },
      { no:  8, pos: "TG", name: "Miralem Pjanić", age: 36, club: "Free Agent" },
      { no: 10, pos: "TG", name: "Haris Vučkić", age: 31, club: "NK Olimpija" },
      { no: 17, pos: "KN", name: "Armin Hodžić", age: 30, club: "FK Sarajevo" },
      { no: 11, pos: "KN", name: "Edin Višća", age: 34, club: "Istanbul Başakşehir" },
      { no:  7, pos: "KN", name: "Dino Hotić", age: 31, club: "NK Maribor" },
      { no:  9, pos: "PN", name: "Edin Džeko", age: 40, club: "Free Agent" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Ibrahim Šehić", age: 36, club: "Free Agent" },
      { no: 14, pos: "TG", name: "Amir Hadžić", age: 26, club: "NK Olimpija" },
      { no: 19, pos: "PN", name: "Vedat Muriqi", age: 31, club: "Mallorca" },
    ],
  },
  HAI: {
    manager: "Jean-Jacques Pierre",
    trainingBase: "Orlando, Florida, AS",
    jerseyHome: "#003DA5", jerseyHomeName: "Biru",
    jerseyAway: "#FF0000", jerseyAwayName: "Merah",
    players: [
      { no:  1, pos: "PG", name: "Josué Duverger", age: 29, club: "AC Portois" },
      { no:  2, pos: "RB", name: "Mechack Jérôme", age: 30, club: "CF Montréal" },
      { no:  5, pos: "CB", name: "Carlos Valenzuela", age: 28, club: "Apollon Limassol" },
      { no:  4, pos: "CB", name: "Steeven Saba", age: 31, club: "Union Titus Pétange" },
      { no:  3, pos: "LB", name: "Andrew Jean-Baptiste", age: 32, club: "Guingamp" },
      { no:  8, pos: "TG", name: "Wilde-Donald Guerrier", age: 35, club: "Vancouver Whitecaps" },
      { no: 10, pos: "TG", name: "Duckens Nazon", age: 30, club: "Free Agent" },
      { no: 17, pos: "KN", name: "Frantzdy Pierrot", age: 30, club: "FC Cincinnati" },
      { no: 11, pos: "KN", name: "Kervens Belfort", age: 28, club: "Aris Thessaloniki" },
      { no:  7, pos: "KN", name: "Derrick Étienne", age: 30, club: "Columbus Crew" },
      { no:  9, pos: "PN", name: "Naïm Nasserdine", age: 26, club: "Lausanne" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Heritier Mathieu", age: 27, club: "Don Bosco FC" },
      { no: 14, pos: "TG", name: "James Léger", age: 25, club: "CS Moulins" },
      { no: 19, pos: "PN", name: "Richenel Ansonia", age: 24, club: "Free Agent" },
    ],
  },
  SCO: {
    manager: "Steve Clarke",
    trainingBase: "San José, California, AS",
    jerseyHome: "#003DA5", jerseyHomeName: "Biru",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Craig Gordon", age: 43, club: "Heart of Midlothian" },
      { no:  2, pos: "RB", name: "Anthony Ralston", age: 27, club: "Celtic" },
      { no:  5, pos: "CB", name: "Grant Hanley", age: 34, club: "Free Agent" },
      { no:  4, pos: "CB", name: "Jack Hendry", age: 29, club: "Al-Ettifaq" },
      { no:  3, pos: "LB", name: "Andrew Robertson", age: 32, club: "Liverpool" },
      { no:  8, pos: "TG", name: "Stuart Armstrong", age: 33, club: "Southampton" },
      { no: 10, pos: "TG", name: "John McGinn", age: 31, club: "Aston Villa" },
      { no: 17, pos: "KN", name: "Ryan Christie", age: 31, club: "AFC Bournemouth" },
      { no: 11, pos: "KN", name: "James Forrest", age: 34, club: "Celtic" },
      { no:  7, pos: "KN", name: "Lyndon Dykes", age: 30, club: "QPR" },
      { no:  9, pos: "PN", name: "Che Adams", age: 30, club: "Torino" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Zander Clark", age: 33, club: "Heart of Midlothian" },
      { no: 14, pos: "TG", name: "Callum McGregor", age: 32, club: "Celtic" },
      { no: 19, pos: "PN", name: "Kevin Nisbet", age: 28, club: "Millwall" },
    ],
  },
  CUW: {
    manager: "Remko Bicentini",
    trainingBase: "Houston, Texas, AS",
    jerseyHome: "#002B7F", jerseyHomeName: "Biru",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Eloy Room", age: 35, club: "Columbus Crew" },
      { no:  2, pos: "RB", name: "Cuco Martina", age: 37, club: "Free Agent" },
      { no:  5, pos: "CB", name: "Jurien Gaari", age: 28, club: "Excelsior" },
      { no:  4, pos: "CB", name: "Ethan Truesdale", age: 26, club: "Jong AZ" },
      { no:  3, pos: "LB", name: "Leandro Bacuna", age: 33, club: "Birmingham City" },
      { no:  8, pos: "TG", name: "Damil Dankerlui", age: 26, club: "Dordrecht" },
      { no: 10, pos: "TG", name: "Juninho Bacuna", age: 27, club: "Rangers" },
      { no: 17, pos: "KN", name: "Quentin Lauffer", age: 26, club: "Tulsa Roughnecks" },
      { no: 11, pos: "KN", name: "Myron Boadu", age: 23, club: "Monaco" },
      { no:  7, pos: "KN", name: "Gevaro Nepomuceno", age: 31, club: "NEC Nijmegen" },
      { no:  9, pos: "PN", name: "Kluiverth Aguilar", age: 22, club: "Atlético San Luis" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Raynier Bergano", age: 29, club: "SV Robinhood" },
      { no: 14, pos: "TG", name: "Jafar Arias", age: 24, club: "Free Agent" },
    ],
  },
  TUN: {
    manager: "Jalel Kadri",
    trainingBase: "Denver, Colorado, AS",
    jerseyHome: "#E70013", jerseyHomeName: "Merah",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Aymen Dahmen", age: 29, club: "Montpellier" },
      { no:  2, pos: "RB", name: "Mohamed Draeger", age: 31, club: "Stade Tunisien" },
      { no:  5, pos: "CB", name: "Montassar Talbi", age: 26, club: "Lorient" },
      { no:  4, pos: "CB", name: "Nader Ghandri", age: 30, club: "Al-Qadisiyah" },
      { no:  3, pos: "LB", name: "Ali Abdi", age: 30, club: "Valenciennes" },
      { no:  8, pos: "TG", name: "Anis Ben Slimane", age: 24, club: "Brøndby" },
      { no: 10, pos: "TG", name: "Hannibal Mejbri", age: 22, club: "Birmingham City" },
      { no: 17, pos: "KN", name: "Issam Jebali", age: 32, club: "Odense BK" },
      { no: 11, pos: "KN", name: "Naim Sliti", age: 31, club: "Free Agent" },
      { no:  7, pos: "KN", name: "Seifeddine Jaziri", age: 33, club: "Zamalek" },
      { no:  9, pos: "PN", name: "Wahbi Khazri", age: 34, club: "Free Agent" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Mouez Hassen", age: 31, club: "Gaziantep FK" },
      { no: 14, pos: "TG", name: "Ellyes Skhiri", age: 29, club: "Eintracht Frankfurt" },
      { no: 19, pos: "PN", name: "Youssef Msakni", age: 34, club: "Al-Arabi" },
    ],
  },
  SWE: {
    manager: "Jon Dahl Tomasson",
    trainingBase: "Seattle, Washington, AS",
    jerseyHome: "#006AA7", jerseyHomeName: "Biru",
    jerseyAway: "#FECC02", jerseyAwayName: "Kuning",
    players: [
      { no:  1, pos: "PG", name: "Robin Olsen", age: 36, club: "Aston Villa" },
      { no:  2, pos: "RB", name: "Emil Krafth", age: 30, club: "Newcastle United" },
      { no:  5, pos: "CB", name: "Victor Lindelöf", age: 32, club: "Manchester United" },
      { no:  4, pos: "CB", name: "Isak Hien", age: 25, club: "Atalanta" },
      { no:  3, pos: "LB", name: "Mattias Svanberg", age: 26, club: "Wolfsburg" },
      { no:  8, pos: "TG", name: "Albin Ekdal", age: 36, club: "Free Agent" },
      { no: 10, pos: "TG", name: "Dejan Kulusevski", age: 26, club: "Tottenham Hotspur" },
      { no: 17, pos: "KN", name: "Emil Forsberg", age: 34, club: "RB Leipzig" },
      { no: 11, pos: "KN", name: "Anthony Elanga", age: 24, club: "Nottm Forest" },
      { no:  7, pos: "KN", name: "Jesper Karlsson", age: 27, club: "Bologna" },
      { no:  9, pos: "PN", name: "Alexander Isak", age: 26, club: "Newcastle United" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Karl-Johan Johnsson", age: 34, club: "Groningen" },
      { no: 14, pos: "TG", name: "Pontus Jansson", age: 35, club: "Brentford" },
      { no: 19, pos: "PN", name: "Jordan Larsson", age: 28, club: "Spartak Moscow" },
    ],
  },
  EGY: {
    manager: "Rui Faria",
    trainingBase: "Washington DC, AS",
    jerseyHome: "#FF0000", jerseyHomeName: "Merah",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Mohamed El-Shennawy", age: 36, club: "Al-Ahly" },
      { no:  2, pos: "RB", name: "Ahmed Hegazi", age: 35, club: "Al-Ittihad" },
      { no:  5, pos: "CB", name: "Omar Gaber", age: 31, club: "Al-Ahly" },
      { no:  4, pos: "CB", name: "Ahmed Fatouh", age: 27, club: "Pyramids FC" },
      { no:  3, pos: "LB", name: "Islam Issa", age: 26, club: "Pyramids FC" },
      { no:  8, pos: "TG", name: "Tarek Hamed", age: 34, club: "Al-Ahly" },
      { no: 10, pos: "TG", name: "Mohamed Elneny", age: 34, club: "Arsenal" },
      { no: 17, pos: "KN", name: "Omar Marmoush", age: 25, club: "Manchester City" },
      { no: 11, pos: "KN", name: "Mostafa Mohamed", age: 27, club: "Galatasaray" },
      { no:  7, pos: "KN", name: "Trezeguet", age: 31, club: "Free Agent" },
      { no:  9, pos: "PN", name: "Mohamed Salah", age: 34, club: "Al-Hilal" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Sherif Ekramy", age: 34, club: "Al-Ahly" },
      { no: 14, pos: "TG", name: "Amr El-Sulaya", age: 28, club: "Al-Ahly" },
      { no: 19, pos: "PN", name: "Karim Hafez", age: 25, club: "Pyramids FC" },
    ],
  },
  IRN: {
    manager: "Amir Ghalenoei",
    trainingBase: "Chicago, Illinois, AS",
    jerseyHome: "#239F40", jerseyHomeName: "Hijau",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Alireza Beiranvand", age: 32, club: "Antwerp" },
      { no:  2, pos: "RB", name: "Sadegh Moharrami", age: 28, club: "Dinamo Zagreb" },
      { no:  5, pos: "CB", name: "Majid Hosseini", age: 28, club: "Kayserispor" },
      { no:  4, pos: "CB", name: "Shoja Khalilzadeh", age: 33, club: "Al-Ittihad" },
      { no:  3, pos: "LB", name: "Milad Mohammadi", age: 31, club: "AEK Athens" },
      { no:  8, pos: "TG", name: "Saeid Ezatolahi", age: 28, club: "Celta Vigo" },
      { no: 10, pos: "TG", name: "Ali Gholizadeh", age: 27, club: "Charleroi" },
      { no: 17, pos: "KN", name: "Mehdi Taremi", age: 33, club: "Inter Milan" },
      { no: 11, pos: "KN", name: "Sardar Azmoun", age: 30, club: "Roma" },
      { no:  7, pos: "KN", name: "Ramin Rezaeian", age: 34, club: "Levante" },
      { no:  9, pos: "PN", name: "Karim Ansarifard", age: 36, club: "Tractor SC" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Hossein Hosseini", age: 26, club: "Persepolis" },
      { no: 14, pos: "TG", name: "Ahmad Noorollahi", age: 30, club: "Sepahan SC" },
      { no: 19, pos: "PN", name: "Allahyar Sayyad", age: 24, club: "Chaves" },
    ],
  },
  NZL: {
    manager: "Darren Bazeley",
    trainingBase: "Seattle, Washington, AS",
    jerseyHome: "#FFFFFF", jerseyHomeName: "Putih",
    jerseyAway: "#1A1A1A", jerseyAwayName: "Hitam",
    players: [
      { no:  1, pos: "PG", name: "Oliver Sail", age: 29, club: "Wellington Phoenix" },
      { no:  2, pos: "RB", name: "Liberato Cacace", age: 24, club: "Empoli" },
      { no:  5, pos: "CB", name: "Matthew Ridenton", age: 26, club: "Wellington Phoenix" },
      { no:  4, pos: "CB", name: "Winston Reid", age: 38, club: "Brentford" },
      { no:  3, pos: "LB", name: "Nando De Waal", age: 28, club: "Wellington Phoenix" },
      { no:  8, pos: "TG", name: "Logan Rogerson", age: 27, club: "Wellington Phoenix" },
      { no: 10, pos: "TG", name: "Elijah Just", age: 23, club: "Wellington Phoenix" },
      { no: 17, pos: "KN", name: "Marco Rojas", age: 33, club: "Free Agent" },
      { no: 11, pos: "KN", name: "Chris Wood", age: 34, club: "Nottm Forest" },
      { no:  7, pos: "KN", name: "Marko Dordevic", age: 25, club: "Wellington Phoenix" },
      { no:  9, pos: "PN", name: "Hamish Watson", age: 26, club: "Western United" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Michael Woud", age: 30, club: "Free Agent" },
      { no: 14, pos: "TG", name: "Tim Payne", age: 28, club: "San Diego FC" },
      { no: 19, pos: "PN", name: "Cameron Howieson", age: 28, club: "AEK Athens" },
    ],
  },
  CPV: {
    manager: "Pedro Brito",
    trainingBase: "Baltimore, Maryland, AS",
    jerseyHome: "#009A44", jerseyHomeName: "Hijau",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Josimar Dias", age: 30, club: "SC Farense" },
      { no:  2, pos: "RB", name: "Bryan Fidalgo", age: 26, club: "Free Agent" },
      { no:  5, pos: "CB", name: "Stopira", age: 37, club: "Free Agent" },
      { no:  4, pos: "CB", name: "Rodrigo Borges", age: 27, club: "Moreirense" },
      { no:  3, pos: "LB", name: "Kelvin Oliveira", age: 29, club: "FK Sabail" },
      { no:  8, pos: "TG", name: "Ryan Mendes", age: 34, club: "Al-Hazem" },
      { no: 10, pos: "TG", name: "Lisandro Semedo", age: 26, club: "Paços de Ferreira" },
      { no: 17, pos: "KN", name: "Garry Rodrigues", age: 33, club: "Olympiakos" },
      { no: 11, pos: "KN", name: "Dyego Sousa", age: 36, club: "Belenenses" },
      { no:  7, pos: "KN", name: "Cláudio Winck", age: 32, club: "FC Emmen" },
      { no:  9, pos: "PN", name: "Djaniny Tavares", age: 32, club: "Al-Ahli" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Vozinha", age: 36, club: "Free Agent" },
      { no: 14, pos: "TG", name: "Helder Dala", age: 28, club: "Free Agent" },
    ],
  },
  KSA: {
    manager: "Roberto Mancini",
    trainingBase: "Houston, Texas, AS",
    jerseyHome: "#006C35", jerseyHomeName: "Hijau",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Mohamed Al-Owais", age: 32, club: "Al-Hilal" },
      { no:  2, pos: "RB", name: "Sultan Al-Ghannam", age: 26, club: "Al-Hilal" },
      { no:  5, pos: "CB", name: "Ali Al-Bulaihi", age: 34, club: "Al-Hilal" },
      { no:  4, pos: "CB", name: "Abdulelah Al-Amri", age: 28, club: "Al-Hilal" },
      { no:  3, pos: "LB", name: "Yasser Al-Shahrani", age: 32, club: "Al-Hilal" },
      { no:  8, pos: "TG", name: "Sami Al-Najei", age: 27, club: "Al-Fateh" },
      { no: 10, pos: "TG", name: "Hattan Bahebri", age: 29, club: "Al-Shabab" },
      { no: 17, pos: "KN", name: "Fahad Al-Muwallad", age: 30, club: "Al-Ittihad" },
      { no: 11, pos: "KN", name: "Salem Al-Dawsari", age: 32, club: "Al-Hilal" },
      { no:  7, pos: "KN", name: "Mohammed Al-Burayk", age: 28, club: "Al-Hilal" },
      { no:  9, pos: "PN", name: "Saleh Al-Shehri", age: 30, club: "Al-Hilal" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Nawaf Al-Aqidi", age: 27, club: "Al-Qadsiah" },
      { no: 14, pos: "TG", name: "Mohamed Kanno", age: 29, club: "Al-Nassr" },
      { no: 19, pos: "PN", name: "Abdullah Al-Hamdan", age: 26, club: "Al-Hilal" },
    ],
  },
  NOR: {
    manager: "Ståle Solbakken",
    trainingBase: "Seattle, Washington, AS",
    jerseyHome: "#EF2B2D", jerseyHomeName: "Merah",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Ørjan Nyland", age: 36, club: "Brentford" },
      { no:  2, pos: "RB", name: "Kristoffer Ajer", age: 28, club: "Brentford" },
      { no:  5, pos: "CB", name: "Andreas Hanche-Olsen", age: 27, club: "Gent" },
      { no:  4, pos: "CB", name: "Leo Østigård", age: 26, club: "Napoli" },
      { no:  3, pos: "LB", name: "Birger Meling", age: 32, club: "Rennes" },
      { no:  8, pos: "TG", name: "Sander Berge", age: 28, club: "Burnley" },
      { no: 10, pos: "TG", name: "Martin Ødegaard", age: 27, club: "Arsenal" },
      { no: 17, pos: "KN", name: "Antonio Nusa", age: 20, club: "RB Leipzig" },
      { no: 11, pos: "KN", name: "Ola Solbakken", age: 25, club: "Roma" },
      { no:  7, pos: "KN", name: "Jørgen Strand Larsen", age: 25, club: "Celta Vigo" },
      { no:  9, pos: "PN", name: "Erling Haaland", age: 25, club: "Manchester City" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Ørjan Nyland (R)", age: 36, club: "Brentford" },
      { no: 14, pos: "TG", name: "Fredrik Aursnes", age: 30, club: "Benfica" },
      { no: 19, pos: "PN", name: "Mohamed Elyounoussi", age: 33, club: "Celtic" },
    ],
  },
  IRQ: {
    manager: "Jesús Casas",
    trainingBase: "Kansas City, Missouri, AS",
    jerseyHome: "#007A3D", jerseyHomeName: "Hijau",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Jalal Hassan", age: 33, club: "Al-Zawraa" },
      { no:  2, pos: "RB", name: "Ali Adnan", age: 31, club: "Rapid Vienna" },
      { no:  5, pos: "CB", name: "Safa Hadi", age: 30, club: "Sepahan" },
      { no:  4, pos: "CB", name: "Ayed Attiya", age: 29, club: "Al-Quwa Al-Jawiya" },
      { no:  3, pos: "LB", name: "Saad Abdul-Amir", age: 28, club: "Al-Shorta" },
      { no:  8, pos: "TG", name: "Amjed Attwan", age: 27, club: "Minerva Punjab" },
      { no: 10, pos: "TG", name: "Mohanad Ali", age: 29, club: "Al-Zawraa" },
      { no: 17, pos: "KN", name: "Ayman Hussein", age: 32, club: "Tractor SC" },
      { no: 11, pos: "KN", name: "Aziz Karim", age: 28, club: "Free Agent" },
      { no:  7, pos: "KN", name: "Younis Mahmoud", age: 43, club: "Al-Zawraa" },
      { no:  9, pos: "PN", name: "Ahmad Al-Abodi", age: 27, club: "Al-Zawraa" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Saad Natiq", age: 29, club: "Al-Quwa Al-Jawiya" },
      { no: 14, pos: "TG", name: "Rami Hamadi", age: 27, club: "Al-Naft" },
    ],
  },
  ALG: {
    manager: "Vladimir Petkovic",
    trainingBase: "San Antonio, Texas, AS",
    jerseyHome: "#006233", jerseyHomeName: "Hijau",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Raïs M'Bolhi", age: 40, club: "Al-Adalah" },
      { no:  2, pos: "RB", name: "Aïssa Mandi", age: 34, club: "Villarreal" },
      { no:  5, pos: "CB", name: "Djamel Benlamri", age: 37, club: "Lyon" },
      { no:  4, pos: "CB", name: "Ramy Bensebaïni", age: 30, club: "Dortmund" },
      { no:  3, pos: "LB", name: "Abdelkader Bedrane", age: 29, club: "Troyes" },
      { no:  8, pos: "TG", name: "Ismaël Bennacer", age: 28, club: "AC Milan" },
      { no: 10, pos: "TG", name: "Samir Belarbi", age: 30, club: "Metz" },
      { no: 17, pos: "KN", name: "Youcef Atal", age: 29, club: "Nice" },
      { no: 11, pos: "KN", name: "Riyad Mahrez", age: 35, club: "Al-Ahli" },
      { no:  7, pos: "KN", name: "Adam Ounas", age: 28, club: "Lille" },
      { no:  9, pos: "PN", name: "Youcef Belaïli", age: 32, club: "Free Agent" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Alexandre Oukidja", age: 36, club: "Metz" },
      { no: 14, pos: "TG", name: "Haris Belkebla", age: 30, club: "Besiktas" },
      { no: 19, pos: "PN", name: "Islam Slimani", age: 38, club: "Free Agent" },
    ],
  },
  AUT: {
    manager: "Ralf Rangnick",
    trainingBase: "Nashville, Tennessee, AS",
    jerseyHome: "#ED2939", jerseyHomeName: "Merah",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Patrick Pentz", age: 28, club: "Bayer Leverkusen" },
      { no:  2, pos: "RB", name: "Stefan Lainer", age: 32, club: "Borussia M'bach" },
      { no:  5, pos: "CB", name: "Kevin Danso", age: 27, club: "Lens" },
      { no:  4, pos: "CB", name: "Philipp Lienhart", age: 29, club: "Freiburg" },
      { no:  3, pos: "LB", name: "Maximilian Wöber", age: 27, club: "Leeds United" },
      { no:  8, pos: "TG", name: "Konrad Laimer", age: 27, club: "Bayern Munich" },
      { no: 10, pos: "TG", name: "Marcel Sabitzer", age: 32, club: "Dortmund" },
      { no: 17, pos: "KN", name: "Florian Grillitsch", age: 31, club: "Ajax" },
      { no: 11, pos: "KN", name: "Nicolas Seiwald", age: 24, club: "RB Leipzig" },
      { no:  7, pos: "KN", name: "Christoph Baumgartner", age: 25, club: "RB Leipzig" },
      { no:  9, pos: "PN", name: "Marko Arnautović", age: 37, club: "Inter Milan" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Alexander Schlager", age: 30, club: "Augsburg" },
      { no: 14, pos: "TG", name: "Xaver Schlager", age: 28, club: "RB Leipzig" },
      { no: 19, pos: "PN", name: "Michael Gregoritsch", age: 32, club: "Freiburg" },
    ],
  },
  JOR: {
    manager: "Hossam Hassan",
    trainingBase: "Kansas City, Missouri, AS",
    jerseyHome: "#007A3D", jerseyHomeName: "Hijau",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Yazeed Abulaila", age: 28, club: "Al-Faisaly" },
      { no:  2, pos: "RB", name: "Yazan Al-Naimat", age: 27, club: "Al-Wehdah" },
      { no:  5, pos: "CB", name: "Bachar Doukhi", age: 28, club: "Wisła Kraków" },
      { no:  4, pos: "CB", name: "Abdallah Nasib", age: 26, club: "Al-Faisaly" },
      { no:  3, pos: "LB", name: "Khaled Al-Shammari", age: 29, club: "Al-Jazira" },
      { no:  8, pos: "TG", name: "Mousa Al-Tamari", age: 27, club: "Luton Town" },
      { no: 10, pos: "TG", name: "Ahmad Dabbour", age: 30, club: "Al-Faisaly" },
      { no: 17, pos: "KN", name: "Hamza Al-Dardour", age: 30, club: "Al-Ramtha" },
      { no: 11, pos: "KN", name: "Baha'a Faisal", age: 28, club: "Al-Shorta" },
      { no:  7, pos: "KN", name: "Ibrahim Shattnawi", age: 26, club: "FC Ashdod" },
      { no:  9, pos: "PN", name: "Ahmad Al-Ali", age: 27, club: "Al-Faisaly" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Mohammad Abu Zaid", age: 29, club: "Shabab Al-Aqaba" },
      { no: 14, pos: "TG", name: "Saleh Al-Faqeer", age: 26, club: "Al-Ahly Tripoli" },
    ],
  },
  UZB: {
    manager: "Srecko Katanec",
    trainingBase: "San José, California, AS",
    jerseyHome: "#1EB53A", jerseyHomeName: "Hijau",
    jerseyAway: "#FFFFFF", jerseyAwayName: "Putih",
    players: [
      { no:  1, pos: "PG", name: "Eldorbek Sobirov", age: 25, club: "Pakhtakor" },
      { no:  2, pos: "RB", name: "Dostonbek Khamdamov", age: 27, club: "Pakhtakor" },
      { no:  5, pos: "CB", name: "Anzur Ismailov", age: 28, club: "Pakhtakor" },
      { no:  4, pos: "CB", name: "Mukhammad Abdullayev", age: 29, club: "Karagandy" },
      { no:  3, pos: "LB", name: "Sherzod Nasrullayev", age: 26, club: "Pakhtakor" },
      { no:  8, pos: "TG", name: "Jaloliddin Masharipov", age: 32, club: "Al-Gharafa" },
      { no: 10, pos: "TG", name: "Otabek Shukurov", age: 27, club: "Pakhtakor" },
      { no: 17, pos: "KN", name: "Eldor Shomurodov", age: 29, club: "Roma" },
      { no: 11, pos: "KN", name: "Bobur Abdixoliqov", age: 24, club: "AGMK" },
      { no:  7, pos: "KN", name: "Islom Tukhtashev", age: 26, club: "FC Bunyodkor" },
      { no:  9, pos: "PN", name: "Abbosbek Fayzullayev", age: 22, club: "Nantes" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Jasur Yakhshiboev", age: 28, club: "Pakhtakor" },
      { no: 14, pos: "TG", name: "Khojimat Ermanov", age: 27, club: "Pakhtakor" },
    ],
  },
  COD: {
    manager: "Sébastien Desabre",
    trainingBase: "Orlando, Florida, AS",
    jerseyHome: "#007FFF", jerseyHomeName: "Biru",
    jerseyAway: "#FFD700", jerseyAwayName: "Kuning",
    players: [
      { no:  1, pos: "PG", name: "Joël Kiassumbua", age: 34, club: "Sochaux" },
      { no:  2, pos: "RB", name: "Chancel Mbemba", age: 31, club: "Marseille" },
      { no:  5, pos: "CB", name: "Arthur Masuaku", age: 32, club: "Besiktas" },
      { no:  4, pos: "CB", name: "Marcel Tisserand", age: 33, club: "Fenerbahçe" },
      { no:  3, pos: "LB", name: "Yannick Bolasie", age: 36, club: "Free Agent" },
      { no:  8, pos: "TG", name: "Paul-José M'Poku", age: 33, club: "Free Agent" },
      { no: 10, pos: "TG", name: "Cédric Bakambu", age: 35, club: "Free Agent" },
      { no: 17, pos: "KN", name: "Dodi Lukebakio", age: 27, club: "Sevilla" },
      { no: 11, pos: "KN", name: "Jonathan Bolingi", age: 31, club: "FC Utrecht" },
      { no:  7, pos: "KN", name: "Yannick Ferreira Carrasco", age: 33, club: "Al-Qadsiah" },
      { no:  9, pos: "PN", name: "Britt Assombalonga", age: 32, club: "Free Agent" },
    ],
    subs: [
      { no: 22, pos: "PG", name: "Ndombe Moke", age: 29, club: "TP Mazembe" },
      { no: 14, pos: "TG", name: "Theo Bongonda", age: 29, club: "Zulte Waregem" },
    ],
  },
};
function posLabel(pos) {
  const map = { PG: "PG", CB: "BT", RB: "KB", LB: "KK", TG: "TG", KN: "KN", PN: "PN" };
  return map[pos] || pos;
}

function playerRowsHtml(list) {
  return list.map(p => `
    <div class="player-row">
      <span class="no">${String(p.no).padStart(2, "0")}</span>
      <span class="pos ${p.pos}">${posLabel(p.pos)}</span>
      <span class="name-meta">
        <span class="pname">${p.name}</span>
        <span class="pmeta">${p.age ? p.age + " thn" : ""}${p.age && p.club ? " · " : ""}${p.club || ""}</span>
      </span>
    </div>`).join("");
}

function teamDetailHtml(code) {
  const t = teamByCode[code];
  const sq = squads[code];
  if (!t) return "";
  const starters = sq?.players || [];
  const subs = sq?.subs || [];
  return `
    <div class="team-detail-meta">
      <span>Pengurus <strong>${sq?.manager || "—"}</strong></span>
      <span>Kem latihan <strong>${sq?.trainingBase || "—"}</strong></span>
      ${sq?.jerseyHomeName ? `<span>Jersi utama <strong>${sq.jerseyHomeName}</strong></span>` : ""}
      ${sq?.jerseyAwayName ? `<span>Jersi away <strong>${sq.jerseyAwayName}</strong></span>` : ""}
    </div>
    ${starters.length ? `
      <div class="squad-section">
        <div class="squad-label">Pemain Utama<span class="player-count">${starters.length} pemain</span></div>
        <div class="player-list">${playerRowsHtml(starters)}</div>
      </div>` : ""}
    ${subs.length ? `
      <div class="squad-section">
        <div class="squad-label">Pemain Ganti<span class="player-count">${subs.length} pemain</span></div>
        <div class="player-list">${playerRowsHtml(subs)}</div>
      </div>` : ""}`;
}

function toggleTeamRowExpand(code) {
  const row = document.querySelector(`.team-row[data-team-code="${code}"]`);
  const expand = document.querySelector(`#team-expand-${code}`);
  if (!row || !expand) return;
  const isOpen = row.classList.contains("is-open");
  document.querySelectorAll(".team-row.is-open").forEach((r) => r.classList.remove("is-open"));
  document.querySelectorAll(".team-row-expand.is-open").forEach((e) => e.classList.remove("is-open"));
  if (!isOpen) {
    row.classList.add("is-open");
    expand.classList.add("is-open");
    expand.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

let matches = [
  { id: 1, date: "12 Jun 2026", time: "03:00", home: "MEX", away: "RSA", group: "A", venue: "Estadio Azteca, Mexico City", status: "finished", score: [2, 0], stats: null },
  { id: 2, date: "12 Jun 2026", time: "10:00", home: "KOR", away: "CZE", group: "A", venue: "Estadio Akron, Guadalajara", status: "finished", score: [2, 1], stats: null },
  { id: 3, date: "13 Jun 2026", time: "03:00", home: "CAN", away: "BIH", group: "B", venue: "BMO Field, Toronto", status: "finished", score: [1, 1], stats: null },
  { id: 4, date: "13 Jun 2026", time: "09:00", home: "USA", away: "PAR", group: "D", venue: "SoFi Stadium, Los Angeles", status: "finished", score: [4, 1], stats: null },
  { id: 5, date: "14 Jun 2026", time: "03:00", home: "QAT", away: "SUI", group: "B", venue: "Levi's Stadium, Santa Clara", status: "finished", score: [1, 1], stats: null },
  { id: 6, date: "14 Jun 2026", time: "06:00", home: "BRA", away: "MAR", group: "C", venue: "MetLife Stadium, New York / New Jersey", status: "finished", score: [1, 1], stats: null },
  { id: 7, date: "14 Jun 2026", time: "09:00", home: "HAI", away: "SCO", group: "C", venue: "Gillette Stadium, Boston", status: "finished", score: [0, 1], stats: null },
  { id: 8, date: "14 Jun 2026", time: "12:00", home: "AUS", away: "TUR", group: "D", venue: "BC Place, Vancouver", status: "finished", score: [2, 0], stats: null },
  { id: 9, date: "15 Jun 2026", time: "01:00", home: "GER", away: "CUW", group: "E", venue: "NRG Stadium, Houston", status: "finished", score: [7, 1], stats: null },
  { id: 10, date: "15 Jun 2026", time: "04:00", home: "NED", away: "JPN", group: "F", venue: "AT&T Stadium, Dallas", status: "finished", score: [2, 2], stats: null },
  { id: 11, date: "15 Jun 2026", time: "10:00", home: "SWE", away: "TUN", group: "F", venue: "Estadio BBVA, Monterrey", status: "finished", score: [5, 1], stats: null },
  { id: 12, date: "16 Jun 2026", time: "00:00", home: "ESP", away: "CPV", group: "H", venue: "Mercedes-Benz Stadium, Atlanta", status: "finished", score: [0, 0], stats: null },
  { id: 13, date: "16 Jun 2026", time: "03:00", home: "BEL", away: "EGY", group: "G", venue: "Lumen Field, Seattle", status: "finished", score: [1, 1], stats: null },
  { id: 14, date: "16 Jun 2026", time: "06:00", home: "KSA", away: "URU", group: "H", venue: "Hard Rock Stadium, Miami", status: "finished", score: [1, 1], stats: null },
  { id: 15, date: "16 Jun 2026", time: "07:00", home: "CIV", away: "ECU", group: "E", venue: "Lincoln Financial Field, Philadelphia", status: "finished", score: [1, 0], stats: null },
  { id: 16, date: "16 Jun 2026", time: "09:00", home: "IRN", away: "NZL", group: "G", venue: "SoFi Stadium, Los Angeles", status: "finished", score: [2, 2], stats: null },
  { id: 17, date: "17 Jun 2026", time: "03:00", home: "FRA", away: "SEN", group: "I", venue: "MetLife Stadium, New York / New Jersey", status: "finished", score: [3, 1], stats: null },
  { id: 18, date: "17 Jun 2026", time: "06:00", home: "IRQ", away: "NOR", group: "I", venue: "Gillette Stadium, Boston", status: "finished", score: [1, 4], stats: null },
  { id: 19, date: "17 Jun 2026", time: "09:00", home: "ARG", away: "ALG", group: "J", venue: "Arrowhead Stadium, Kansas City", status: "finished", score: [3, 0], stats: null },
  { id: 20, date: "17 Jun 2026", time: "12:00", home: "AUT", away: "JOR", group: "J", venue: "Levi's Stadium, Santa Clara", status: "finished", score: [3, 1], stats: null },
  { id: 21, date: "18 Jun 2026", time: "01:00", home: "POR", away: "COD", group: "K", venue: "NRG Stadium, Houston", status: "finished", score: [1, 1], stats: null },
  { id: 22, date: "18 Jun 2026", time: "04:00", home: "ENG", away: "CRO", group: "L", venue: "AT&T Stadium, Dallas", status: "finished", score: [4, 2], stats: null },
  { id: 23, date: "18 Jun 2026", time: "07:00", home: "GHA", away: "PAN", group: "L", venue: "BMO Field, Toronto", status: "finished", score: [1, 0], stats: null },
  { id: 24, date: "18 Jun 2026", time: "10:00", home: "UZB", away: "COL", group: "K", venue: "Estadio Azteca, Mexico City", status: "finished", score: [1, 3], stats: null },
  { id: 25, date: "19 Jun 2026", time: "00:00", home: "CZE", away: "RSA", group: "A", venue: "Mercedes-Benz Stadium, Atlanta", status: "finished", score: [1, 1], stats: null },
  { id: 26, date: "19 Jun 2026", time: "03:00", home: "SUI", away: "BIH", group: "B", venue: "SoFi Stadium, Los Angeles", status: "finished", score: [4, 1], stats: null },
  { id: 27, date: "19 Jun 2026", time: "06:00", home: "CAN", away: "QAT", group: "B", venue: "BC Place, Vancouver", status: "finished", score: [6, 0], stats: null },
  { id: 28, date: "19 Jun 2026", time: "09:00", home: "MEX", away: "KOR", group: "A", venue: "Estadio Akron, Guadalajara", status: "finished", score: [1, 0], stats: null },
  { id: 29, date: "20 Jun 2026", time: "03:00", home: "USA", away: "AUS", group: "D", venue: "Lumen Field, Seattle", status: "finished", score: [2, 0], stats: null },
  { id: 30, date: "20 Jun 2026", time: "06:00", home: "SCO", away: "MAR", group: "C", venue: "Gillette Stadium, Boston", status: "finished", score: [0, 1], stats: null },
  { id: 31, date: "20 Jun 2026", time: "08:30", home: "BRA", away: "HAI", group: "C", venue: "Lincoln Financial Field, Philadelphia", status: "finished", score: [3, 0], stats: null },
  { id: 32, date: "20 Jun 2026", time: "11:00", home: "TUR", away: "PAR", group: "D", venue: "Levi's Stadium, Santa Clara", status: "finished", score: [0, 1], stats: null },
  { id: 33, date: "21 Jun 2026", time: "01:00", home: "NED", away: "SWE", group: "F", venue: "NRG Stadium, Houston", status: "finished", score: [5, 1], stats: null },
  { id: 34, date: "21 Jun 2026", time: "04:00", home: "GER", away: "CIV", group: "E", venue: "BMO Field, Toronto", status: "finished", score: [2, 1], stats: null },
  { id: 35, date: "21 Jun 2026", time: "08:00", home: "ECU", away: "CUW", group: "E", venue: "Arrowhead Stadium, Kansas City", status: "finished", score: [0, 0], stats: null },
  { id: 36, date: "21 Jun 2026", time: "12:00", home: "TUN", away: "JPN", group: "F", venue: "Estadio BBVA, Monterrey", status: "finished", score: [0, 4], stats: null },
  { id: 37, date: "22 Jun 2026", time: "00:00", home: "ESP", away: "KSA", group: "H", venue: "Mercedes-Benz Stadium, Atlanta", status: "finished", score: [4, 0], stats: null },
  { id: 38, date: "22 Jun 2026", time: "03:00", home: "BEL", away: "IRN", group: "G", venue: "SoFi Stadium, Los Angeles", status: "upcoming", stats: null },
  { id: 39, date: "22 Jun 2026", time: "06:00", home: "URU", away: "CPV", group: "H", venue: "Hard Rock Stadium, Miami", status: "upcoming", stats: null },
  { id: 40, date: "22 Jun 2026", time: "09:00", home: "NZL", away: "EGY", group: "G", venue: "BC Place, Vancouver", status: "upcoming", stats: null },
  { id: 41, date: "23 Jun 2026", time: "01:00", home: "ARG", away: "AUT", group: "J", venue: "AT&T Stadium, Dallas", status: "upcoming", stats: null },
  { id: 42, date: "23 Jun 2026", time: "05:00", home: "FRA", away: "IRQ", group: "I", venue: "Lincoln Financial Field, Philadelphia", status: "upcoming", stats: null },
  { id: 43, date: "23 Jun 2026", time: "08:00", home: "NOR", away: "SEN", group: "I", venue: "MetLife Stadium, New York / New Jersey", status: "upcoming", stats: null },
  { id: 44, date: "23 Jun 2026", time: "11:00", home: "JOR", away: "ALG", group: "J", venue: "Levi's Stadium, Santa Clara", status: "upcoming", stats: null },
  { id: 45, date: "24 Jun 2026", time: "01:00", home: "POR", away: "UZB", group: "K", venue: "NRG Stadium, Houston", status: "upcoming", stats: null },
  { id: 46, date: "24 Jun 2026", time: "04:00", home: "ENG", away: "GHA", group: "L", venue: "Gillette Stadium, Boston", status: "upcoming", stats: null },
  { id: 47, date: "24 Jun 2026", time: "07:00", home: "PAN", away: "CRO", group: "L", venue: "BMO Field, Toronto", status: "upcoming", stats: null },
  { id: 48, date: "24 Jun 2026", time: "10:00", home: "COL", away: "COD", group: "K", venue: "Estadio Akron, Guadalajara", status: "upcoming", stats: null },
  { id: 49, date: "25 Jun 2026", time: "03:00", home: "SUI", away: "CAN", group: "B", venue: "BC Place, Vancouver", status: "upcoming", stats: null },
  { id: 50, date: "25 Jun 2026", time: "03:00", home: "BIH", away: "QAT", group: "B", venue: "Lumen Field, Seattle", status: "upcoming", stats: null },
  { id: 51, date: "25 Jun 2026", time: "06:00", home: "SCO", away: "BRA", group: "C", venue: "Hard Rock Stadium, Miami", status: "upcoming", stats: null },
  { id: 52, date: "25 Jun 2026", time: "06:00", home: "MAR", away: "HAI", group: "C", venue: "Mercedes-Benz Stadium, Atlanta", status: "upcoming", stats: null },
  { id: 53, date: "25 Jun 2026", time: "09:00", home: "CZE", away: "MEX", group: "A", venue: "Estadio Azteca, Mexico City", status: "upcoming", stats: null },
  { id: 54, date: "25 Jun 2026", time: "09:00", home: "RSA", away: "KOR", group: "A", venue: "Estadio BBVA, Monterrey", status: "upcoming", stats: null },
  { id: 55, date: "26 Jun 2026", time: "04:00", home: "CUW", away: "CIV", group: "E", venue: "Lincoln Financial Field, Philadelphia", status: "upcoming", stats: null },
  { id: 56, date: "26 Jun 2026", time: "04:00", home: "ECU", away: "GER", group: "E", venue: "MetLife Stadium, New York / New Jersey", status: "upcoming", stats: null },
  { id: 57, date: "26 Jun 2026", time: "10:00", home: "TUR", away: "USA", group: "D", venue: "SoFi Stadium, Los Angeles", status: "upcoming", stats: null },
  { id: 58, date: "26 Jun 2026", time: "10:00", home: "PAR", away: "AUS", group: "D", venue: "Levi's Stadium, Santa Clara", status: "upcoming", stats: null },
  { id: 59, date: "27 Jun 2026", time: "03:00", home: "NOR", away: "FRA", group: "I", venue: "Gillette Stadium, Boston", status: "upcoming", stats: null },
  { id: 60, date: "27 Jun 2026", time: "03:00", home: "SEN", away: "IRQ", group: "I", venue: "BMO Field, Toronto", status: "upcoming", stats: null },
  { id: 61, date: "27 Jun 2026", time: "07:00", home: "JPN", away: "SWE", group: "F", venue: "AT&T Stadium, Dallas", status: "upcoming", stats: null },
  { id: 62, date: "27 Jun 2026", time: "07:00", home: "TUN", away: "NED", group: "F", venue: "Arrowhead Stadium, Kansas City", status: "upcoming", stats: null },
  { id: 63, date: "27 Jun 2026", time: "08:00", home: "CPV", away: "KSA", group: "H", venue: "NRG Stadium, Houston", status: "upcoming", stats: null },
  { id: 64, date: "27 Jun 2026", time: "08:00", home: "URU", away: "ESP", group: "H", venue: "Estadio Akron, Guadalajara", status: "upcoming", stats: null },
  { id: 65, date: "27 Jun 2026", time: "11:00", home: "EGY", away: "IRN", group: "G", venue: "Lumen Field, Seattle", status: "upcoming", stats: null },
  { id: 66, date: "27 Jun 2026", time: "11:00", home: "NZL", away: "BEL", group: "G", venue: "BC Place, Vancouver", status: "upcoming", stats: null },
  { id: 67, date: "28 Jun 2026", time: "05:00", home: "PAN", away: "ENG", group: "L", venue: "MetLife Stadium, New York / New Jersey", status: "upcoming", stats: null },
  { id: 68, date: "28 Jun 2026", time: "05:00", home: "CRO", away: "GHA", group: "L", venue: "Lincoln Financial Field, Philadelphia", status: "upcoming", stats: null },
  { id: 69, date: "28 Jun 2026", time: "07:30", home: "COL", away: "POR", group: "K", venue: "Hard Rock Stadium, Miami", status: "upcoming", stats: null },
  { id: 70, date: "28 Jun 2026", time: "07:30", home: "COD", away: "UZB", group: "K", venue: "Mercedes-Benz Stadium, Atlanta", status: "upcoming", stats: null },
  { id: 71, date: "28 Jun 2026", time: "10:00", home: "ALG", away: "AUT", group: "J", venue: "Arrowhead Stadium, Kansas City", status: "upcoming", stats: null },
  { id: 72, date: "28 Jun 2026", time: "10:00", home: "JOR", away: "ARG", group: "J", venue: "AT&T Stadium, Dallas", status: "upcoming", stats: null },
];

const stadiums = [
  {
    id: 1, name: "Estadio Azteca", fifaName: "Mexico City Stadium", city: "Mexico City", country: "Mexico",
    capacity: 83000, opened: 1966, lat: 19.3029, lon: -99.1505, mapX: 42, mapY: 81,
    roof: "Terbuka", surface: "Rumput semula jadi", matches: 5,
    history: "Ikon bola sepak Mexico dan satu-satunya stadium yang pernah menjadi pentas dua final Piala Dunia lelaki, pada 1970 dan 1986.",
    fact: "Bakal menjadi stadium pertama menganjurkan perlawanan dalam tiga edisi Piala Dunia lelaki.",
  },
  {
    id: 2, name: "Estadio Akron", fifaName: "Guadalajara Stadium", city: "Zapopan, Guadalajara", country: "Mexico",
    capacity: 48000, opened: 2010, lat: 20.6817, lon: -103.4626, mapX: 35, mapY: 78,
    roof: "Terbuka", surface: "Rumput semula jadi", matches: 4,
    history: "Rumah moden C.D. Guadalajara, dibina dengan bentuk luaran yang menyerupai gunung berapi dilitupi landskap hijau.",
    fact: "Reka bentuk mangkuknya mengekalkan penonton rapat dengan padang.",
  },
  {
    id: 3, name: "Estadio BBVA", fifaName: "Monterrey Stadium", city: "Guadalupe, Monterrey", country: "Mexico",
    capacity: 53500, opened: 2015, lat: 25.669, lon: -100.244, mapX: 43, mapY: 70,
    roof: "Separa berbumbung", surface: "Rumput semula jadi", matches: 4,
    history: "Stadium kontemporari di kaki Cerro de la Silla dan rumah kepada C.F. Monterrey.",
    fact: "Pemandangan gunung dari bahagian terbuka stadium menjadi identiti visual utamanya.",
  },
  {
    id: 4, name: "AT&T Stadium", fifaName: "Dallas Stadium", city: "Arlington, Texas", country: "United States",
    capacity: 94000, opened: 2009, lat: 32.7473, lon: -97.0945, mapX: 48, mapY: 58,
    roof: "Boleh dibuka", surface: "Turf", matches: 9,
    history: "Rumah Dallas Cowboys dengan bentang bumbung besar dan skrin video tengah yang menjadi mercu tanda arena.",
    fact: "Venue berkapasiti terbesar kejohanan dan tuan rumah satu separuh akhir.",
  },
  {
    id: 5, name: "NRG Stadium", fifaName: "Houston Stadium", city: "Houston, Texas", country: "United States",
    capacity: 72000, opened: 2002, lat: 29.6847, lon: -95.4107, mapX: 51, mapY: 65,
    roof: "Boleh dibuka", surface: "Turf", matches: 7,
    history: "Antara stadium NFL terawal dengan bumbung boleh dibuka, direka untuk menyesuaikan diri dengan cuaca Houston.",
    fact: "Susun atur fleksibel membolehkan pertukaran pantas antara bola sepak dan acara besar.",
  },
  {
    id: 6, name: "Arrowhead Stadium", fifaName: "Kansas City Stadium", city: "Kansas City, Missouri", country: "United States",
    capacity: 73000, opened: 1972, lat: 39.0489, lon: -94.4839, mapX: 53, mapY: 48,
    roof: "Terbuka", surface: "Rumput semula jadi", matches: 6,
    history: "Stadium klasik Amerika dengan mangkuk curam, terkenal kerana suasana penonton yang sangat bising.",
    fact: "Salah satu venue tertua kejohanan selepas Estadio Azteca.",
  },
  {
    id: 7, name: "Mercedes-Benz Stadium", fifaName: "Atlanta Stadium", city: "Atlanta, Georgia", country: "United States",
    capacity: 75000, opened: 2017, lat: 33.7554, lon: -84.4008, mapX: 65, mapY: 58,
    roof: "Boleh dibuka", surface: "Turf", matches: 8,
    history: "Arena generasi baharu dengan bumbung lapan panel yang terbuka seperti apertur kamera.",
    fact: "Akan menganjurkan satu separuh akhir Piala Dunia 2026.",
  },
  {
    id: 8, name: "Hard Rock Stadium", fifaName: "Miami Stadium", city: "Miami Gardens, Florida", country: "United States",
    capacity: 65000, opened: 1987, lat: 25.958, lon: -80.2389, mapX: 72, mapY: 69,
    roof: "Kanopi tetap", surface: "Rumput semula jadi", matches: 7,
    history: "Kompleks sukan Miami yang diubah suai besar-besaran dengan kanopi terbuka dan empat menara penjuru.",
    fact: "Venue perlawanan tempat ketiga dan dekat dengan litar Formula 1 Miami.",
  },
  {
    id: 9, name: "Gillette Stadium", fifaName: "Boston Stadium", city: "Foxborough, Massachusetts", country: "United States",
    capacity: 65000, opened: 2002, lat: 42.0909, lon: -71.2643, mapX: 77, mapY: 36,
    roof: "Terbuka", surface: "Turf", matches: 7,
    history: "Rumah New England Patriots dan New England Revolution, terletak di kompleks Patriot Place.",
    fact: "Pernah menjadi lokasi pelbagai perlawanan antarabangsa dan final bola sepak serantau.",
  },
  {
    id: 10, name: "Lincoln Financial Field", fifaName: "Philadelphia Stadium", city: "Philadelphia, Pennsylvania", country: "United States",
    capacity: 69000, opened: 2003, lat: 39.9008, lon: -75.1675, mapX: 75, mapY: 43,
    roof: "Terbuka", surface: "Rumput hibrid", matches: 6,
    history: "Stadium bandar Philadelphia yang kerap menganjurkan perlawanan kelab dan pasukan kebangsaan antarabangsa.",
    fact: "Akan menjadi sebahagian sambutan ulang tahun ke-250 Amerika Syarikat pada 2026.",
  },
  {
    id: 11, name: "MetLife Stadium", fifaName: "New York/New Jersey Stadium", city: "East Rutherford, New Jersey", country: "United States",
    capacity: 82500, opened: 2010, lat: 40.8135, lon: -74.0745, mapX: 78, mapY: 40,
    roof: "Terbuka", surface: "Turf", matches: 8,
    history: "Venue metropolitan New York yang dikongsi dua pasukan NFL dan direka untuk pertukaran identiti acara yang pantas.",
    fact: "Dipilih sebagai pentas final Piala Dunia 2026 pada 19 Julai.",
  },
  {
    id: 12, name: "BMO Field", fifaName: "Toronto Stadium", city: "Toronto, Ontario", country: "Canada",
    capacity: 45000, opened: 2007, lat: 43.6332, lon: -79.4186, mapX: 70, mapY: 35,
    roof: "Separa berbumbung", surface: "Rumput hibrid", matches: 6,
    history: "Stadium bola sepak utama Toronto di tepi Tasik Ontario dan rumah Toronto FC.",
    fact: "Kapasiti sementara ditambah untuk memenuhi keperluan kejohanan.",
  },
  {
    id: 13, name: "BC Place", fifaName: "BC Place Vancouver", city: "Vancouver, British Columbia", country: "Canada",
    capacity: 54000, opened: 1983, lat: 49.2767, lon: -123.1119, mapX: 21, mapY: 29,
    roof: "Boleh dibuka", surface: "Turf", matches: 7,
    history: "Mercu tanda Vancouver yang dibuka untuk Expo 86 dan kemudian menerima bumbung kabel boleh dibuka.",
    fact: "Pernah menjadi lokasi final Piala Dunia Wanita 2015.",
  },
  {
    id: 14, name: "Lumen Field", fifaName: "Seattle Stadium", city: "Seattle, Washington", country: "United States",
    capacity: 69000, opened: 2002, lat: 47.5952, lon: -122.3316, mapX: 22, mapY: 33,
    roof: "Separa berbumbung", surface: "Turf", matches: 6,
    history: "Stadium pusat bandar dengan bumbung sisi yang memerangkap bunyi dan pandangan ke latar langit Seattle.",
    fact: "Rumah Seattle Sounders, antara komuniti penyokong bola sepak terbesar di rantau ini.",
  },
  {
    id: 15, name: "Levi's Stadium", fifaName: "San Francisco Bay Area Stadium", city: "Santa Clara, California", country: "United States",
    capacity: 71000, opened: 2014, lat: 37.403, lon: -121.97, mapX: 22, mapY: 50,
    roof: "Terbuka", surface: "Rumput semula jadi", matches: 6,
    history: "Stadium moden di Silicon Valley dengan teres hijau dan fokus kepada kecekapan tenaga.",
    fact: "Panel solar dan bumbung hijau menjadi sebahagian reka bentuk kelestariannya.",
  },
  {
    id: 16, name: "SoFi Stadium", fifaName: "Los Angeles Stadium", city: "Inglewood, California", country: "United States",
    capacity: 70000, opened: 2020, lat: 33.9535, lon: -118.3392, mapX: 25, mapY: 59,
    roof: "Kanopi lut sinar", surface: "Turf", matches: 8,
    history: "Kompleks arena besar dengan kanopi ETFE yang meliputi stadium dan plaza bersebelahan.",
    fact: "Skrin video Infinity Screen tergantung dua sisi di atas padang.",
  },
];

const DATA_SOURCES = [
  {
    id: "worldcup26",
    name: "WorldCup26 API",
    url: "https://worldcup26.ir/get/games",
    role: "jadual + keputusan",
    // This is the only source with live scores; it's known to be slow/unstable
    // (observed 10-15s response times, occasional 503s), so it gets a longer
    // timeout than the other sources to give it a fair chance to respond
    // before falling back to local data.
    timeoutMs: 12000,
  },
  {
    id: "tour",
    name: "WC26 Tour API",
    url: "https://ay-worldcup2026.zeabur.app/api/public/v1/matches?timezone=UTC",
    role: "jadual + waktu",
  },
  {
    id: "vh26",
    name: "VH26 GitHub",
    url: "https://raw.githubusercontent.com/tuitamogamer-gpt/vh26-worldcup-2026/main/src/data/matches.ts",
    role: "jadual statik",
  },
];

let sourceHealth = Object.fromEntries(DATA_SOURCES.map((source) => [source.id, false]));
let lastVerifiedAt = null;
let verificationLoading = false;

// ================================================================
// DATA RAMALAN — kebarangkalian model statistik (rating + Poisson,
// 20,000 simulasi Monte Carlo), dipadankan ke kod pasukan di atas.
// ================================================================
const ramalanData = {"teams": [{"code": "FRA", "name": "Perancis", "flag": "🇫🇷", "group": "I", "rank": 3, "rating": 1875, "pts": 3, "gd": 2, "qual": 100.0, "gw": 99.0, "ru": 0.9, "r32": 100.0, "r16": 94.5, "qf": 75.4, "sf": 58.7, "final": 41.2, "champ": 28.3, "host": false}, {"code": "ESP", "name": "Sepanyol", "flag": "🇪🇸", "group": "H", "rank": 2, "rating": 1833, "pts": 1, "gd": 0, "qual": 99.1, "gw": 77.8, "ru": 18.7, "r32": 99.1, "r16": 77.5, "qf": 56.6, "sf": 42.0, "final": 24.0, "champ": 15.1, "host": false}, {"code": "ARG", "name": "Argentina", "flag": "🇦🇷", "group": "J", "rank": 1, "rating": 1806, "pts": 3, "gd": 3, "qual": 100.0, "gw": 90.1, "ru": 9.7, "r32": 100.0, "r16": 73.7, "qf": 59.0, "sf": 40.9, "final": 24.3, "champ": 12.2, "host": false}, {"code": "ENG", "name": "England", "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "group": "L", "rank": 4, "rating": 1785, "pts": 3, "gd": 2, "qual": 100.0, "gw": 98.5, "ru": 1.4, "r32": 100.0, "r16": 89.3, "qf": 59.5, "sf": 38.7, "final": 21.9, "champ": 10.2, "host": false}, {"code": "POR", "name": "Portugal", "flag": "🇵🇹", "group": "K", "rank": 6, "rating": 1768, "pts": 1, "gd": 0, "qual": 98.2, "gw": 51.5, "ru": 41.0, "r32": 98.2, "r16": 76.5, "qf": 51.9, "sf": 29.6, "final": 15.3, "champ": 7.0, "host": false}, {"code": "BRA", "name": "Brazil", "flag": "🇧🇷", "group": "C", "rank": 5, "rating": 1753, "pts": 4, "gd": 3, "qual": 99.9, "gw": 55.4, "ru": 39.4, "r32": 99.9, "r16": 63.8, "qf": 46.1, "sf": 21.2, "final": 11.0, "champ": 4.9, "host": false}, {"code": "NED", "name": "Belanda", "flag": "🇳🇱", "group": "F", "rank": 7, "rating": 1740, "pts": 4, "gd": 4, "qual": 100.0, "gw": 81.3, "ru": 18.3, "r32": 100.0, "r16": 53.8, "qf": 39.0, "sf": 14.8, "final": 7.1, "champ": 3.1, "host": false}, {"code": "MAR", "name": "Maghribi", "flag": "🇲🇦", "group": "C", "rank": 12, "rating": 1728, "pts": 4, "gd": 1, "qual": 99.8, "gw": 42.7, "ru": 50.9, "r32": 99.8, "r16": 58.5, "qf": 40.1, "sf": 15.9, "final": 7.5, "champ": 3.0, "host": false}, {"code": "BEL", "name": "Belgium", "flag": "🇧🇪", "group": "G", "rank": 8, "rating": 1716, "pts": 1, "gd": 0, "qual": 99.6, "gw": 65.1, "ru": 26.1, "r32": 99.6, "r16": 78.7, "qf": 41.9, "sf": 18.8, "final": 7.3, "champ": 3.0, "host": false}, {"code": "MEX", "name": "Mexico", "flag": "🇲🇽", "group": "A", "rank": 15, "rating": 1659, "pts": 6, "gd": 3, "qual": 100.0, "gw": 95.6, "ru": 4.4, "r32": 100.0, "r16": 82.4, "qf": 33.1, "sf": 16.9, "final": 7.7, "champ": 2.8, "host": true}, {"code": "USA", "name": "Amerika Syarikat", "flag": "🇺🇸", "group": "D", "rank": 16, "rating": 1650, "pts": 6, "gd": 5, "qual": 100.0, "gw": 98.8, "ru": 1.1, "r32": 100.0, "r16": 81.4, "qf": 47.8, "sf": 19.2, "final": 6.1, "champ": 2.5, "host": true}, {"code": "GER", "name": "Jerman", "flag": "🇩🇪", "group": "E", "rank": 10, "rating": 1706, "pts": 6, "gd": 7, "qual": 100.0, "gw": 99.3, "ru": 0.7, "r32": 100.0, "r16": 82.5, "qf": 21.2, "sf": 10.7, "final": 4.6, "champ": 1.7, "host": false}, {"code": "COL", "name": "Colombia", "flag": "🇨🇴", "group": "K", "rank": 13, "rating": 1676, "pts": 3, "gd": 2, "qual": 99.7, "gw": 45.6, "ru": 45.2, "r32": 99.7, "r16": 63.7, "qf": 33.5, "sf": 13.9, "final": 5.1, "champ": 1.6, "host": false}, {"code": "CRO", "name": "Croatia", "flag": "🇭🇷", "group": "L", "rank": 11, "rating": 1696, "pts": 0, "gd": -2, "qual": 97.6, "gw": 1.2, "ru": 92.1, "r32": 97.6, "r16": 50.7, "qf": 20.1, "sf": 10.2, "final": 3.3, "champ": 1.3, "host": false}, {"code": "SEN", "name": "Senegal", "flag": "🇸🇳", "group": "I", "rank": 17, "rating": 1667, "pts": 0, "gd": -2, "qual": 95.1, "gw": 0.4, "ru": 77.8, "r32": 95.1, "r16": 65.9, "qf": 28.5, "sf": 10.5, "final": 4.0, "champ": 1.2, "host": false}, {"code": "SUI", "name": "Switzerland", "flag": "🇨🇭", "group": "B", "rank": 18, "rating": 1626, "pts": 4, "gd": 3, "qual": 100.0, "gw": 40.3, "ru": 59.5, "r32": 100.0, "r16": 60.6, "qf": 20.9, "sf": 5.2, "final": 1.7, "champ": 0.4, "host": false}, {"code": "JPN", "name": "Jepun", "flag": "🇯🇵", "group": "F", "rank": 19, "rating": 1634, "pts": 4, "gd": 4, "qual": 90.1, "gw": 13.5, "ru": 60.1, "r32": 90.1, "r16": 30.4, "qf": 15.4, "sf": 4.6, "final": 1.4, "champ": 0.4, "host": false}, {"code": "URU", "name": "Uruguay", "flag": "🇺🇾", "group": "H", "rank": 14, "rating": 1642, "pts": 1, "gd": 0, "qual": 91.0, "gw": 19.9, "ru": 59.9, "r32": 91.0, "r16": 31.5, "qf": 15.6, "sf": 6.5, "final": 1.8, "champ": 0.4, "host": false}, {"code": "CAN", "name": "Kanada", "flag": "🇨🇦", "group": "B", "rank": 28, "rating": 1546, "pts": 4, "gd": 6, "qual": 100.0, "gw": 59.7, "ru": 40.3, "r32": 100.0, "r16": 57.2, "qf": 18.0, "sf": 4.3, "final": 1.2, "champ": 0.2, "host": true}, {"code": "IRN", "name": "Iran", "flag": "🇮🇷", "group": "G", "rank": 20, "rating": 1611, "pts": 1, "gd": 0, "qual": 67.6, "gw": 13.6, "ru": 23.7, "r32": 67.6, "r16": 35.1, "qf": 11.5, "sf": 3.6, "final": 0.9, "champ": 0.2, "host": false}, {"code": "KOR", "name": "Korea Selatan", "flag": "🇰🇷", "group": "A", "rank": 22, "rating": 1581, "pts": 3, "gd": 0, "qual": 98.3, "gw": 4.4, "ru": 84.0, "r32": 98.3, "r16": 43.7, "qf": 11.3, "sf": 1.8, "final": 0.4, "champ": 0.1, "host": false}, {"code": "AUS", "name": "Australia", "flag": "🇦🇺", "group": "D", "rank": 26, "rating": 1574, "pts": 3, "gd": 0, "qual": 99.1, "gw": 0.9, "ru": 89.4, "r32": 99.1, "r16": 42.2, "qf": 8.6, "sf": 2.7, "final": 0.6, "champ": 0.1, "host": false}, {"code": "EGY", "name": "Mesir", "flag": "🇪🇬", "group": "G", "rank": 35, "rating": 1553, "pts": 1, "gd": 0, "qual": 95.9, "gw": 21.3, "ru": 49.6, "r32": 95.9, "r16": 45.2, "qf": 10.6, "sf": 2.4, "final": 0.4, "champ": 0.1, "host": false}, {"code": "AUT", "name": "Austria", "flag": "🇦🇹", "group": "J", "rank": 21, "rating": 1596, "pts": 3, "gd": 2, "qual": 98.5, "gw": 9.7, "ru": 67.8, "r32": 98.5, "r16": 26.9, "qf": 9.7, "sf": 3.1, "final": 0.6, "champ": 0.1, "host": false}, {"code": "RSA", "name": "Afrika Selatan", "flag": "🇿🇦", "group": "A", "rank": 59, "rating": 1359, "pts": 1, "gd": -2, "qual": 11.1, "gw": 0.0, "ru": 9.7, "r32": 11.1, "r16": 1.3, "qf": 0.1, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "CZE", "name": "Czechia", "flag": "🇨🇿", "group": "A", "rank": 39, "rating": 1474, "pts": 1, "gd": -1, "qual": 10.9, "gw": 0.0, "ru": 2.0, "r32": 10.9, "r16": 2.2, "qf": 0.4, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "QAT", "name": "Qatar", "flag": "🇶🇦", "group": "B", "rank": 55, "rating": 1513, "pts": 1, "gd": -6, "qual": 53.9, "gw": 0.0, "ru": 0.0, "r32": 53.9, "r16": 10.9, "qf": 2.5, "sf": 0.4, "final": 0.0, "champ": 0.0, "host": false}, {"code": "BIH", "name": "Bosnia & Herzegovina", "flag": "🇧🇦", "group": "B", "rank": 74, "rating": 1407, "pts": 1, "gd": -3, "qual": 22.8, "gw": 0.0, "ru": 0.1, "r32": 22.8, "r16": 2.0, "qf": 0.2, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "HAI", "name": "Haiti", "flag": "🇭🇹", "group": "C", "rank": 83, "rating": 1226, "pts": 0, "gd": -4, "qual": 0.3, "gw": 0.0, "ru": 0.0, "r32": 0.3, "r16": 0.0, "qf": 0.0, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "SCO", "name": "Scotland", "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "group": "C", "rank": 44, "rating": 1437, "pts": 3, "gd": 0, "qual": 77.2, "gw": 1.8, "ru": 9.7, "r32": 77.2, "r16": 7.6, "qf": 0.8, "sf": 0.1, "final": 0.0, "champ": 0.0, "host": false}, {"code": "PAR", "name": "Paraguay", "flag": "🇵🇾", "group": "D", "rank": 41, "rating": 1335, "pts": 3, "gd": -2, "qual": 18.8, "gw": 0.0, "ru": 4.5, "r32": 18.8, "r16": 0.9, "qf": 0.0, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "TUR", "name": "Turkiye", "flag": "🇹🇷", "group": "D", "rank": 27, "rating": 1468, "pts": 0, "gd": -3, "qual": 53.9, "gw": 0.3, "ru": 4.9, "r32": 53.9, "r16": 5.9, "qf": 0.9, "sf": 0.1, "final": 0.0, "champ": 0.0, "host": false}, {"code": "CUW", "name": "Curacao", "flag": "🇨🇼", "group": "E", "rank": 82, "rating": 1238, "pts": 1, "gd": -6, "qual": 6.6, "gw": 0.0, "ru": 5.1, "r32": 6.6, "r16": 0.3, "qf": 0.0, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "CIV", "name": "Ivory Coast", "flag": "🇨🇮", "group": "E", "rank": 42, "rating": 1526, "pts": 3, "gd": 0, "qual": 98.2, "gw": 0.7, "ru": 91.5, "r32": 98.2, "r16": 32.8, "qf": 6.7, "sf": 1.1, "final": 0.2, "champ": 0.0, "host": false}, {"code": "ECU", "name": "Ecuador", "flag": "🇪🇨", "group": "E", "rank": 24, "rating": 1588, "pts": 1, "gd": -1, "qual": 22.6, "gw": 0.0, "ru": 2.8, "r32": 22.6, "r16": 7.6, "qf": 2.5, "sf": 0.6, "final": 0.1, "champ": 0.0, "host": false}, {"code": "TUN", "name": "Tunisia", "flag": "🇹🇳", "group": "F", "rank": 49, "rating": 1481, "pts": 0, "gd": -8, "qual": 9.2, "gw": 1.1, "ru": 0.3, "r32": 9.2, "r16": 1.4, "qf": 0.3, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "SWE", "name": "Sweden", "flag": "🇸🇪", "group": "F", "rank": 35, "rating": 1487, "pts": 3, "gd": 0, "qual": 93.3, "gw": 4.2, "ru": 21.3, "r32": 93.3, "r16": 14.9, "qf": 2.7, "sf": 0.4, "final": 0.1, "champ": 0.0, "host": false}, {"code": "NZL", "name": "New Zealand", "flag": "🇳🇿", "group": "G", "rank": 86, "rating": 1159, "pts": 1, "gd": 0, "qual": 2.6, "gw": 0.1, "ru": 0.6, "r32": 2.6, "r16": 0.0, "qf": 0.0, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "CPV", "name": "Cape Verde", "flag": "🇨🇻", "group": "H", "rank": 68, "rating": 1301, "pts": 1, "gd": 0, "qual": 32.3, "gw": 0.8, "ru": 10.2, "r32": 32.3, "r16": 0.9, "qf": 0.0, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "KSA", "name": "Arab Saudi", "flag": "🇸🇦", "group": "H", "rank": 58, "rating": 1377, "pts": 1, "gd": 0, "qual": 51.5, "gw": 1.5, "ru": 11.2, "r32": 51.5, "r16": 3.5, "qf": 0.3, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "NOR", "name": "Norway", "flag": "🇳🇴", "group": "I", "rank": 29, "rating": 1456, "pts": 3, "gd": 3, "qual": 89.6, "gw": 0.6, "ru": 21.2, "r32": 89.6, "r16": 19.4, "qf": 2.9, "sf": 0.3, "final": 0.1, "champ": 0.0, "host": false}, {"code": "IRQ", "name": "Iraq", "flag": "🇮🇶", "group": "I", "rank": 57, "rating": 1353, "pts": 0, "gd": -3, "qual": 1.3, "gw": 0.0, "ru": 0.1, "r32": 1.3, "r16": 0.1, "qf": 0.0, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "ALG", "name": "Algeria", "flag": "🇩🇿", "group": "J", "rank": 36, "rating": 1506, "pts": 0, "gd": -3, "qual": 69.2, "gw": 0.2, "ru": 22.3, "r32": 69.2, "r16": 13.4, "qf": 3.2, "sf": 0.5, "final": 0.1, "champ": 0.0, "host": false}, {"code": "JOR", "name": "Jordan", "flag": "🇯🇴", "group": "J", "rank": 62, "rating": 1312, "pts": 0, "gd": -2, "qual": 7.5, "gw": 0.0, "ru": 0.2, "r32": 7.5, "r16": 0.4, "qf": 0.0, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "UZB", "name": "Uzbekistan", "flag": "🇺🇿", "group": "K", "rank": 51, "rating": 1347, "pts": 0, "gd": -2, "qual": 19.9, "gw": 0.1, "ru": 1.3, "r32": 19.9, "r16": 0.6, "qf": 0.1, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "COD", "name": "DR Congo", "flag": "🇨🇩", "group": "K", "rank": 55, "rating": 1413, "pts": 1, "gd": 0, "qual": 56.9, "gw": 2.7, "ru": 12.5, "r32": 56.9, "r16": 4.9, "qf": 0.7, "sf": 0.1, "final": 0.0, "champ": 0.0, "host": false}, {"code": "GHA", "name": "Ghana", "flag": "🇬🇭", "group": "L", "rank": 48, "rating": 1330, "pts": 3, "gd": 1, "qual": 55.0, "gw": 0.2, "ru": 5.5, "r32": 55.0, "r16": 3.0, "qf": 0.3, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "PAN", "name": "Panama", "flag": "🇵🇦", "group": "L", "rank": 32, "rating": 1401, "pts": 0, "gd": -1, "qual": 5.9, "gw": 0.0, "ru": 1.0, "r32": 5.9, "r16": 0.6, "qf": 0.1, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}], "swing": [{"code": "URU", "name": "Uruguay", "flag": "🇺🇾", "group": "H", "rank": 14, "rating": 1642, "pts": 1, "gd": 0, "qual": 91.0, "gw": 19.9, "ru": 59.9, "r32": 91.0, "r16": 31.5, "qf": 15.6, "sf": 6.5, "final": 1.8, "champ": 0.4, "host": false}, {"code": "JPN", "name": "Jepun", "flag": "🇯🇵", "group": "F", "rank": 19, "rating": 1634, "pts": 4, "gd": 4, "qual": 90.1, "gw": 13.5, "ru": 60.1, "r32": 90.1, "r16": 30.4, "qf": 15.4, "sf": 4.6, "final": 1.4, "champ": 0.4, "host": false}, {"code": "NOR", "name": "Norway", "flag": "🇳🇴", "group": "I", "rank": 29, "rating": 1456, "pts": 3, "gd": 3, "qual": 89.6, "gw": 0.6, "ru": 21.2, "r32": 89.6, "r16": 19.4, "qf": 2.9, "sf": 0.3, "final": 0.1, "champ": 0.0, "host": false}, {"code": "SCO", "name": "Scotland", "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "group": "C", "rank": 44, "rating": 1437, "pts": 3, "gd": 0, "qual": 77.2, "gw": 1.8, "ru": 9.7, "r32": 77.2, "r16": 7.6, "qf": 0.8, "sf": 0.1, "final": 0.0, "champ": 0.0, "host": false}, {"code": "ALG", "name": "Algeria", "flag": "🇩🇿", "group": "J", "rank": 36, "rating": 1506, "pts": 0, "gd": -3, "qual": 69.2, "gw": 0.2, "ru": 22.3, "r32": 69.2, "r16": 13.4, "qf": 3.2, "sf": 0.5, "final": 0.1, "champ": 0.0, "host": false}, {"code": "IRN", "name": "Iran", "flag": "🇮🇷", "group": "G", "rank": 20, "rating": 1611, "pts": 1, "gd": 0, "qual": 67.6, "gw": 13.6, "ru": 23.7, "r32": 67.6, "r16": 35.1, "qf": 11.5, "sf": 3.6, "final": 0.9, "champ": 0.2, "host": false}, {"code": "COD", "name": "DR Congo", "flag": "🇨🇩", "group": "K", "rank": 55, "rating": 1413, "pts": 1, "gd": 0, "qual": 56.9, "gw": 2.7, "ru": 12.5, "r32": 56.9, "r16": 4.9, "qf": 0.7, "sf": 0.1, "final": 0.0, "champ": 0.0, "host": false}, {"code": "GHA", "name": "Ghana", "flag": "🇬🇭", "group": "L", "rank": 48, "rating": 1330, "pts": 3, "gd": 1, "qual": 55.0, "gw": 0.2, "ru": 5.5, "r32": 55.0, "r16": 3.0, "qf": 0.3, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "QAT", "name": "Qatar", "flag": "🇶🇦", "group": "B", "rank": 55, "rating": 1513, "pts": 1, "gd": -6, "qual": 53.9, "gw": 0.0, "ru": 0.0, "r32": 53.9, "r16": 10.9, "qf": 2.5, "sf": 0.4, "final": 0.0, "champ": 0.0, "host": false}, {"code": "TUR", "name": "Turkiye", "flag": "🇹🇷", "group": "D", "rank": 27, "rating": 1468, "pts": 0, "gd": -3, "qual": 53.9, "gw": 0.3, "ru": 4.9, "r32": 53.9, "r16": 5.9, "qf": 0.9, "sf": 0.1, "final": 0.0, "champ": 0.0, "host": false}, {"code": "KSA", "name": "Arab Saudi", "flag": "🇸🇦", "group": "H", "rank": 58, "rating": 1377, "pts": 1, "gd": 0, "qual": 51.5, "gw": 1.5, "ru": 11.2, "r32": 51.5, "r16": 3.5, "qf": 0.3, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "CPV", "name": "Cape Verde", "flag": "🇨🇻", "group": "H", "rank": 68, "rating": 1301, "pts": 1, "gd": 0, "qual": 32.3, "gw": 0.8, "ru": 10.2, "r32": 32.3, "r16": 0.9, "qf": 0.0, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "BIH", "name": "Bosnia & Herzegovina", "flag": "🇧🇦", "group": "B", "rank": 74, "rating": 1407, "pts": 1, "gd": -3, "qual": 22.8, "gw": 0.0, "ru": 0.1, "r32": 22.8, "r16": 2.0, "qf": 0.2, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "ECU", "name": "Ecuador", "flag": "🇪🇨", "group": "E", "rank": 24, "rating": 1588, "pts": 1, "gd": -1, "qual": 22.6, "gw": 0.0, "ru": 2.8, "r32": 22.6, "r16": 7.6, "qf": 2.5, "sf": 0.6, "final": 0.1, "champ": 0.0, "host": false}, {"code": "UZB", "name": "Uzbekistan", "flag": "🇺🇿", "group": "K", "rank": 51, "rating": 1347, "pts": 0, "gd": -2, "qual": 19.9, "gw": 0.1, "ru": 1.3, "r32": 19.9, "r16": 0.6, "qf": 0.1, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "PAR", "name": "Paraguay", "flag": "🇵🇾", "group": "D", "rank": 41, "rating": 1335, "pts": 3, "gd": -2, "qual": 18.8, "gw": 0.0, "ru": 4.5, "r32": 18.8, "r16": 0.9, "qf": 0.0, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "RSA", "name": "Afrika Selatan", "flag": "🇿🇦", "group": "A", "rank": 59, "rating": 1359, "pts": 1, "gd": -2, "qual": 11.1, "gw": 0.0, "ru": 9.7, "r32": 11.1, "r16": 1.3, "qf": 0.1, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "CZE", "name": "Czechia", "flag": "🇨🇿", "group": "A", "rank": 39, "rating": 1474, "pts": 1, "gd": -1, "qual": 10.9, "gw": 0.0, "ru": 2.0, "r32": 10.9, "r16": 2.2, "qf": 0.4, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}, {"code": "TUN", "name": "Tunisia", "flag": "🇹🇳", "group": "F", "rank": 49, "rating": 1481, "pts": 0, "gd": -8, "qual": 9.2, "gw": 1.1, "ru": 0.3, "r32": 9.2, "r16": 1.4, "qf": 0.3, "sf": 0.0, "final": 0.0, "champ": 0.0, "host": false}], "champTop10": [{"code": "FRA", "name": "Perancis", "flag": "🇫🇷", "group": "I", "rank": 3, "rating": 1875, "pts": 3, "gd": 2, "qual": 100.0, "gw": 99.0, "ru": 0.9, "r32": 100.0, "r16": 94.5, "qf": 75.4, "sf": 58.7, "final": 41.2, "champ": 28.3, "host": false}, {"code": "ESP", "name": "Sepanyol", "flag": "🇪🇸", "group": "H", "rank": 2, "rating": 1833, "pts": 1, "gd": 0, "qual": 99.1, "gw": 77.8, "ru": 18.7, "r32": 99.1, "r16": 77.5, "qf": 56.6, "sf": 42.0, "final": 24.0, "champ": 15.1, "host": false}, {"code": "ARG", "name": "Argentina", "flag": "🇦🇷", "group": "J", "rank": 1, "rating": 1806, "pts": 3, "gd": 3, "qual": 100.0, "gw": 90.1, "ru": 9.7, "r32": 100.0, "r16": 73.7, "qf": 59.0, "sf": 40.9, "final": 24.3, "champ": 12.2, "host": false}, {"code": "ENG", "name": "England", "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "group": "L", "rank": 4, "rating": 1785, "pts": 3, "gd": 2, "qual": 100.0, "gw": 98.5, "ru": 1.4, "r32": 100.0, "r16": 89.3, "qf": 59.5, "sf": 38.7, "final": 21.9, "champ": 10.2, "host": false}, {"code": "POR", "name": "Portugal", "flag": "🇵🇹", "group": "K", "rank": 6, "rating": 1768, "pts": 1, "gd": 0, "qual": 98.2, "gw": 51.5, "ru": 41.0, "r32": 98.2, "r16": 76.5, "qf": 51.9, "sf": 29.6, "final": 15.3, "champ": 7.0, "host": false}, {"code": "BRA", "name": "Brazil", "flag": "🇧🇷", "group": "C", "rank": 5, "rating": 1753, "pts": 4, "gd": 3, "qual": 99.9, "gw": 55.4, "ru": 39.4, "r32": 99.9, "r16": 63.8, "qf": 46.1, "sf": 21.2, "final": 11.0, "champ": 4.9, "host": false}, {"code": "NED", "name": "Belanda", "flag": "🇳🇱", "group": "F", "rank": 7, "rating": 1740, "pts": 4, "gd": 4, "qual": 100.0, "gw": 81.3, "ru": 18.3, "r32": 100.0, "r16": 53.8, "qf": 39.0, "sf": 14.8, "final": 7.1, "champ": 3.1, "host": false}, {"code": "MAR", "name": "Maghribi", "flag": "🇲🇦", "group": "C", "rank": 12, "rating": 1728, "pts": 4, "gd": 1, "qual": 99.8, "gw": 42.7, "ru": 50.9, "r32": 99.8, "r16": 58.5, "qf": 40.1, "sf": 15.9, "final": 7.5, "champ": 3.0, "host": false}, {"code": "BEL", "name": "Belgium", "flag": "🇧🇪", "group": "G", "rank": 8, "rating": 1716, "pts": 1, "gd": 0, "qual": 99.6, "gw": 65.1, "ru": 26.1, "r32": 99.6, "r16": 78.7, "qf": 41.9, "sf": 18.8, "final": 7.3, "champ": 3.0, "host": false}, {"code": "MEX", "name": "Mexico", "flag": "🇲🇽", "group": "A", "rank": 15, "rating": 1659, "pts": 6, "gd": 3, "qual": 100.0, "gw": 95.6, "ru": 4.4, "r32": 100.0, "r16": 82.4, "qf": 33.1, "sf": 16.9, "final": 7.7, "champ": 2.8, "host": true}], "meta": {"nTeams": 48, "nMatches": 104, "nCities": 16, "nHosts": 3, "dataDate": "21 Jun 2026", "openDate": "11 Jun 2026", "finalDate": "19 Jul 2026"}};

let selectedRamalanGroup = "all";
let selectedSejarahYear = 2018;

const groupLetters = Object.keys(groups);
let selectedTeamGroup = "all";
let selectedMatchStatus = "all";
let selectedMatchGroup = "all";
let selectedStandingGroup = "A";
let selectedStadiumCountry = "all";

function team(code, label = "") {
  return teamByCode[code] || { name: label || (code === "TBD" ? "Akan ditentukan" : code), code, flag: "🏳", rank: "-", group: "-" };
}

function normalizedTeamCode(nameOrCode = "") {
  const value = String(nameOrCode).trim().toLowerCase();
  const canonicalCodes = {
    mexico: "MEX", "south africa": "RSA", "south korea": "KOR", czechia: "CZE",
    canada: "CAN", switzerland: "SUI", qatar: "QAT", "bosnia and herzegovina": "BIH",
    brazil: "BRA", morocco: "MAR", haiti: "HAI", scotland: "SCO",
    "united states": "USA", paraguay: "PAR", australia: "AUS", türkiye: "TUR",
    germany: "GER", curaçao: "CUW", curacao: "CUW", "ivory coast": "CIV", ecuador: "ECU",
    netherlands: "NED", japan: "JPN", tunisia: "TUN", sweden: "SWE",
    belgium: "BEL", egypt: "EGY", iran: "IRN", "new zealand": "NZL",
    spain: "ESP", "cape verde": "CPV", "saudi arabia": "KSA", uruguay: "URU",
    france: "FRA", senegal: "SEN", norway: "NOR", iraq: "IRQ",
    argentina: "ARG", algeria: "ALG", austria: "AUT", jordan: "JOR",
    portugal: "POR", colombia: "COL", uzbekistan: "UZB", "dr congo": "COD",
    england: "ENG", croatia: "CRO", ghana: "GHA", panama: "PAN",
  };
  if (canonicalCodes[value]) return canonicalCodes[value];
  const aliases = {
    "united states": "USA",
    usa: "USA",
    "south korea": "KOR",
    "korea republic": "KOR",
    "czech republic": "CZE",
    czechia: "CZE",
    "bosnia and herzegovina": "BIH",
    "bosnia & herzegovina": "BIH",
    "côte d’ivoire": "CIV",
    "côte d'ivoire": "CIV",
    "ivory coast": "CIV",
    türkiye: "TUR",
    turkey: "TUR",
    "saudi arabia": "KSA",
    "dr congo": "COD",
    "congo - kinshasa": "COD",
    "democratic republic of the congo": "COD",
  };
  if (aliases[value]) return aliases[value];
  const direct = Object.values(teamByCode).find((item) =>
    item.code.toLowerCase() === value || item.name.toLowerCase() === value,
  );
  return direct?.code || "TBD";
}

function fixtureKey(home, away) {
  return `${home}|${away}`;
}

function normalizedSlot(label = "") {
  return String(label)
    .replace(/^Winner Group ([A-L])$/i, "1$1")
    .replace(/^Runner-up Group ([A-L])$/i, "2$1")
    .replace(/^Winner Match (\d+)$/i, "W$1")
    .replace(/^Loser Match (\d+)$/i, "L$1")
    .replace(/^3rd Group /i, "3rd ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatMalaysiaKickoff(utc) {
  const date = new Date(utc);
  const dateText = new Intl.DateTimeFormat("ms-MY", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kuala_Lumpur",
  }).format(date);
  const timeText = new Intl.DateTimeFormat("ms-MY", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kuala_Lumpur",
  }).format(date);
  return { date: dateText, time: timeText };
}

function parseVhFixtures(sourceText) {
  const fixtures = [];
  const pattern = /g\(\d+,\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'[^']+',\s*\d+,\s*'([^']+)'\)/g;
  for (const match of sourceText.matchAll(pattern)) {
    fixtures.push({ date: match[1], home: match[2], away: match[3], group: match[4] });
  }
  const knockoutPattern = /ko\(\d+,\s*'([^']+)',\s*'([^']+)',\s*'[^']+',\s*'([^']+)',\s*'([^']+)'\)/g;
  for (const match of sourceText.matchAll(knockoutPattern)) {
    fixtures.push({ date: match[2], home: normalizedSlot(match[3]), away: normalizedSlot(match[4]), group: match[1] });
  }
  return fixtures;
}

function localDateFromWorldCup(value = "") {
  const [datePart] = value.split(" ");
  const [month, day, year] = datePart.split("/");
  return `${year}-${month}-${day}`;
}

function buildConsensus(worldCupData, tourData, vhSource) {
  const worldGames = worldCupData?.games || [];
  const tourGames = tourData?.matches || [];
  const vhGames = parseVhFixtures(vhSource || "");
  const tourByPair = new Map(tourGames.map((item) => [
    fixtureKey(item.home.code, item.away.code),
    item,
  ]));
  const vhByPair = new Map(vhGames.map((item) => [
    fixtureKey(item.home, item.away),
    item,
  ]));

  return worldGames.map((item) => {
    const home = normalizedTeamCode(item.home_team_name_en || item.home_team_label);
    const away = normalizedTeamCode(item.away_team_name_en || item.away_team_label);
    const isGroupMatch = item.type === "group";
    const homeIdentity = isGroupMatch ? home : normalizedSlot(item.home_team_label);
    const awayIdentity = isGroupMatch ? away : normalizedSlot(item.away_team_label);
    const key = fixtureKey(homeIdentity, awayIdentity);
    const hasNamedTeams = home !== "TBD" && away !== "TBD";
    const tour = hasNamedTeams ? tourByPair.get(key) : null;
    const vh = vhByPair.get(key);
    const sourceIds = ["worldcup26", ...(tour ? ["tour"] : []), ...(vh ? ["vh26"] : [])];
    const scheduleVerified = sourceIds.length >= 2;
    const kickoff = tour?.kickoff?.utc ? formatMalaysiaKickoff(tour.kickoff.utc) : {
      date: localDateFromWorldCup(item.local_date),
      time: item.local_date?.split(" ")[1] || "--:--",
    };
    const finished = item.finished === "TRUE";
    const live = item.time_elapsed && !["notstarted", "finished"].includes(item.time_elapsed);
    return {
      id: Number(item.id),
      date: kickoff.date,
      time: kickoff.time,
      timeZoneLabel: tour ? "MYT" : "Waktu venue",
      home,
      away,
      homeLabel: item.home_team_name_en || item.home_team_label,
      awayLabel: item.away_team_name_en || item.away_team_label,
      group: item.group,
      venue: tour?.venue || `Stadium ${item.stadium_id}`,
      stadiumId: Number(item.stadium_id),
      status: finished ? "finished" : live ? "live" : "upcoming",
      minute: live ? item.time_elapsed : null,
      score: finished || live ? [Number(item.home_score), Number(item.away_score)] : undefined,
      scorers: {
        home: item.home_scorers,
        away: item.away_scorers,
      },
      stats: null,
      verification: {
        schedule: scheduleVerified ? "verified" : "reported",
        result: finished || live ? "reported" : "pending",
        sourceIds,
        sourceCount: sourceIds.length,
      },
    };
  });
}

function getMatchTV(match) {
  if (/^[A-L]$/.test(match.group || "")) {
    return [
      { name: "Sukan+", url: "https://rtmklik.rtm.gov.my/" },
      { name: "TV Okey", url: null },
    ];
  }
  return [
    { name: "RTM1", url: null },
    { name: "TV Okey", url: null },
    { name: "Sukan+", url: "https://rtmklik.rtm.gov.my/" },
  ];
}

const DATA_SOURCE_TIMEOUT_MS = 6000;

function fetchWithTimeout(url, options = {}, timeoutMs = DATA_SOURCE_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { ...options, signal: controller.signal }).finally(() => clearTimeout(timer));
}

async function loadVerifiedData() {
  if (verificationLoading) return;
  verificationLoading = true;
  const note = document.querySelector("#updated-note");
  const refreshButton = document.querySelector("#refresh-data");
  if (refreshButton) refreshButton.disabled = true;
  if (note) note.textContent = "Menyemak sumber data...";

  // Each source gets its own timeout so one slow/dead API never stalls the others
  // or the overall refresh — Promise.allSettled still resolves quickly.
  const responses = await Promise.allSettled(DATA_SOURCES.map(async (source) => {
    const response = await fetchWithTimeout(source.url, { cache: "no-store" }, source.timeoutMs || DATA_SOURCE_TIMEOUT_MS);
    if (!response.ok) throw new Error(`${source.name}: HTTP ${response.status}`);
    return source.id === "vh26" ? response.text() : response.json();
  }));

  const payload = {};
  responses.forEach((result, index) => {
    const source = DATA_SOURCES[index];
    sourceHealth[source.id] = result.status === "fulfilled";
    if (result.status === "fulfilled") payload[source.id] = result.value;
  });
  if (payload.worldcup26) {
    const consensus = buildConsensus(payload.worldcup26, payload.tour, payload.vh26);
    if (consensus.length) {
      matches = consensus;
      lastVerifiedAt = new Date();
      localStorage.setItem("sepak26-consensus", JSON.stringify({
        savedAt: lastVerifiedAt.toISOString(),
        matches,
      }));
      renderSchedule();
      renderStandings();
      const verifiedCount = matches.filter((match) => match.verification?.schedule === "verified").length;
      if (note) note.textContent = `Dikemaskini · ${verifiedCount} jadual disahkan silang · ${lastVerifiedAt.toLocaleTimeString("ms-MY", { hour: "2-digit", minute: "2-digit" })}`;
      verificationLoading = false;
      if (refreshButton) refreshButton.disabled = false;
      return;
    }
  }

  const cached = JSON.parse(localStorage.getItem("sepak26-consensus") || "null");
  if (cached?.matches?.length) {
    matches = cached.matches;
    renderSchedule();
    renderStandings();
    if (note) note.textContent = `Menggunakan data tersimpan · Cache ${new Date(cached.savedAt).toLocaleString("ms-MY")}`;
  } else if (note) {
    note.textContent = "Pengesahan langsung tidak tersedia · menggunakan data fallback tempatan.";
  }
  verificationLoading = false;
  if (refreshButton) refreshButton.disabled = false;
}

function cleanScorerName(value = "") {
  return value
    .replace(/[{}"“”]/g, "")
    .replace(/\s+\d+'?.*$/, "")
    .trim();
}

function parseScorers(value) {
  if (!value || value === "null") return [];
  return String(value)
    .split(",")
    .map(cleanScorerName)
    .filter(Boolean);
}

function reportedGroupMatches() {
  return matches.filter((match) =>
    groupLetters.includes(match.group) &&
    ["finished", "live"].includes(match.status) &&
    Array.isArray(match.score),
  );
}

function calculateGroupTable(group) {
  const rows = Object.fromEntries(groups[group].map(([, code]) => [
    code,
    { code, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, cleanSheets: 0 },
  ]));
  reportedGroupMatches().filter((match) => match.group === group).forEach((match) => {
    const home = rows[match.home];
    const away = rows[match.away];
    if (!home || !away) return;
    const [homeGoals, awayGoals] = match.score;
    home.played += 1;
    away.played += 1;
    home.gf += homeGoals;
    home.ga += awayGoals;
    away.gf += awayGoals;
    away.ga += homeGoals;
    if (awayGoals === 0) home.cleanSheets += 1;
    if (homeGoals === 0) away.cleanSheets += 1;
    if (homeGoals > awayGoals) {
      home.won += 1; home.points += 3; away.lost += 1;
    } else if (awayGoals > homeGoals) {
      away.won += 1; away.points += 3; home.lost += 1;
    } else {
      home.drawn += 1; away.drawn += 1; home.points += 1; away.points += 1;
    }
  });
  return Object.values(rows)
    .map((row) => ({ ...row, gd: row.gf - row.ga }))
    .sort((a, b) => b.points - a.points || b.gd - a.gd || b.gf - a.gf || team(a.code).rank - team(b.code).rank)
    .map((row, index) => ({ ...row, position: index + 1 }));
}

function playerLeaders() {
  const totals = new Map();
  reportedGroupMatches().forEach((match) => {
    [
      [match.scorers?.home, match.home],
      [match.scorers?.away, match.away],
    ].forEach(([raw, code]) => {
      parseScorers(raw).forEach((name) => {
        const key = `${name}|${code}`;
        totals.set(key, { name, code, goals: (totals.get(key)?.goals || 0) + 1 });
      });
    });
  });
  return [...totals.values()].sort((a, b) => b.goals - a.goals || a.name.localeCompare(b.name));
}

function teamCleanSheetLeaders() {
  return groupLetters.flatMap(calculateGroupTable)
    .filter((row) => row.played > 0)
    .sort((a, b) => b.cleanSheets - a.cleanSheets || b.points - a.points);
}

function standingsTable(group, compact = false) {
  const table = calculateGroupTable(group);
  return `
    <article class="group-table-card ${compact ? "compact" : ""}">
      <div class="group-table-head"><strong>Kumpulan ${group}</strong><span>2 teratas mara</span></div>
      <div class="group-table-row labels"><span>#</span><span>Pasukan</span><span>P</span><span>GD</span><span>PTS</span></div>
      ${table.map((row) => {
        const item = team(row.code);
        return `
          <div class="group-table-row ${row.position <= 2 ? "qualifying" : ""}">
            <span>${row.position}</span>
            <span><i>${item.flag}</i><strong>${item.name}</strong><small>${row.won}M ${row.drawn}S ${row.lost}K</small></span>
            <span>${row.played}</span><span>${row.gd > 0 ? "+" : ""}${row.gd}</span><b>${row.points}</b>
          </div>`;
      }).join("")}
    </article>`;
}

function renderStandings() {
  const overview = document.querySelector("#stats-overview");
  if (!overview) return;
  const played = reportedGroupMatches();
  const totalGoals = played.reduce((sum, match) => sum + match.score[0] + match.score[1], 0);
  const leaders = playerLeaders();
  const cleanSheets = teamCleanSheetLeaders();
  overview.innerHTML = `
    <article><span>Perlawanan selesai</span><strong>${played.filter((match) => match.status === "finished").length}</strong><small>daripada 104</small></article>
    <article><span>Jumlah gol</span><strong>${totalGoals}</strong><small>${played.length ? (totalGoals / played.length).toFixed(2) : "0.00"} setiap perlawanan</small></article>
    <article><span>Penjaring teratas</span><strong>${leaders[0]?.goals || 0}</strong><small>${leaders[0]?.name || "Belum tersedia"}</small></article>
    <article><span>Clean sheet</span><strong>${cleanSheets.reduce((sum, row) => sum + row.cleanSheets, 0)}</strong><small>berdasarkan keputusan</small></article>`;

  document.querySelector("#standings-tabs").innerHTML = groupLetters.map((group) =>
    `<button data-standing-group="${group}" class="${selectedStandingGroup === group ? "active" : ""}">${group}</button>`,
  ).join("");
  document.querySelector("#standings-focus").innerHTML = standingsTable(selectedStandingGroup);

  const scorerRows = leaders.slice(0, 5);
  const cleanSheetRows = cleanSheets.slice(0, 5);
  document.querySelector("#leaderboard-grid").innerHTML = `
    <article class="leaderboard-card">
      <div class="leaderboard-head"><span>01</span><div><strong>Penjaring terbanyak</strong><small>Data penjaring dilaporkan</small></div></div>
      ${scorerRows.length ? scorerRows.map((item, index) => {
        const playerTeam = team(item.code);
        const groupPosition = calculateGroupTable(playerTeam.group).find((row) => row.code === item.code)?.position;
        return `<div class="leader-row"><b>${index + 1}</b><span>${playerTeam.flag}</span><div><strong>${item.name}</strong><small>${playerTeam.name} · Kumpulan ${playerTeam.group} · Posisi ${groupPosition}</small></div><em>${item.goals}</em></div>`;
      }).join("") : `<p class="leader-empty">Belum ada data penjaring.</p>`}
    </article>
    <article class="leaderboard-card">
      <div class="leaderboard-head"><span>02</span><div><strong>Bantuan gol</strong><small>Memerlukan sumber acara terperinci</small></div></div>
      <div class="metric-unavailable"><b>Belum dapat disahkan</b><p>Sumber semasa tidak menyediakan identiti pemberi assist. Ruang ini akan terisi secara automatik apabila data tersebut tersedia.</p></div>
    </article>
    <article class="leaderboard-card">
      <div class="leaderboard-head"><span>03</span><div><strong>Clean sheet pasukan</strong><small>Dikira daripada skor akhir</small></div></div>
      ${cleanSheetRows.length ? cleanSheetRows.map((item, index) => `<div class="leader-row"><b>${index + 1}</b><span>${team(item.code).flag}</span><div><strong>${team(item.code).name}</strong><small>Kumpulan ${team(item.code).group} · Posisi ${item.position}</small></div><em>${item.cleanSheets}</em></div>`).join("") : `<p class="leader-empty">Belum ada clean sheet.</p>`}
    </article>`;

  document.querySelector("#all-group-grid").innerHTML = groupLetters.map((group) => standingsTable(group, true)).join("");
}

function stadiumRow(stadium) {
  const age = 2026 - stadium.opened;
  const mapUrl = `https://www.openstreetmap.org/?mlat=${stadium.lat}&mlon=${stadium.lon}#map=15/${stadium.lat}/${stadium.lon}`;
  return `
    <article class="stadium-row" data-stadium-id="${stadium.id}" tabindex="0">
      <span class="stadium-index">${String(stadium.id).padStart(2, "0")}</span>
      <span class="stadium-name-wrap"><strong>${stadium.name}</strong><span class="stadium-sub">${stadium.city}, ${stadium.country}</span></span>
      <span class="stadium-quick">${stadium.capacity.toLocaleString("en-US")} tempat duduk · ${stadium.matches} perlawanan</span>
      <span class="expand-chevron" aria-hidden="true">›</span>
    </article>
    <div class="stadium-expand" id="stadium-expand-${stadium.id}">
      <div class="expand-inner">
        <div class="expand-section">
          <div class="expand-label">Maklumat venue</div>
          <div class="team-detail-meta">
            <span>Nama FIFA <strong>${stadium.fifaName}</strong></span>
            <span>Dibuka <strong>${stadium.opened}</strong></span>
            <span>Usia 2026 <strong>${age} tahun</strong></span>
            <span>Bumbung <strong>${stadium.roof}</strong></span>
            <span>Permukaan <strong>${stadium.surface}</strong></span>
            <span>Koordinat <strong>${stadium.lat.toFixed(3)}, ${stadium.lon.toFixed(3)}</strong></span>
          </div>
        </div>
        <div class="expand-section">
          <div class="expand-label">Sejarah ringkas</div>
          <p class="expand-venue-note">${stadium.history}</p>
          <p class="expand-venue-note"><em>${stadium.fact}</em></p>
          <a class="tv-badge" href="${mapUrl}" target="_blank" rel="noreferrer">Lihat lokasi ↗</a>
        </div>
      </div>
    </div>`;
}

function renderStadiums() {
  const list = stadiums.filter((stadium) => selectedStadiumCountry === "all" || stadium.country === selectedStadiumCountry);
  document.querySelector("#stadium-grid").innerHTML = list.map(stadiumRow).join("");
}

function toggleStadiumExpand(id) {
  const row = document.querySelector(`.stadium-row[data-stadium-id="${id}"]`);
  const expand = document.querySelector(`#stadium-expand-${id}`);
  if (!row || !expand) return;
  const isOpen = row.classList.contains("is-open");
  document.querySelectorAll(".stadium-row.is-open").forEach((r) => r.classList.remove("is-open"));
  document.querySelectorAll(".stadium-expand.is-open").forEach((e) => e.classList.remove("is-open"));
  if (!isOpen) {
    row.classList.add("is-open");
    expand.classList.add("is-open");
    expand.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function matchSortKey(m) {
  return `${m.date}T${m.time || "00:00"}`;
}

function renderGroupTabs(targetId, includeAll = false) {
  const target = document.querySelector(targetId);
  const buttons = [
    ...(includeAll ? [{ value: "all", label: "Semua" }] : []),
    ...groupLetters.map((letter) => ({ value: letter, label: `Kumpulan ${letter}` })),
  ];
  target.innerHTML = buttons.map(({ value, label }) =>
    `<button data-group="${value}" class="${selectedTeamGroup === value ? "active" : ""}">${label}</button>`,
  ).join("");
}

function teamRow(data) {
  const [name, code, flag, rank] = data;
  const group = teamByCode[code].group;
  return `
    <article class="team-row" data-team-code="${code}" tabindex="0">
      <span class="flag">${flag}</span>
      <span class="team-name-wrap"><strong>${name}</strong><span class="stadium-sub">${code} · Kumpulan ${group} · Ranking ${rank}</span></span>
      <span class="expand-chevron" aria-hidden="true">›</span>
    </article>
    <div class="team-row-expand" id="team-expand-${code}">
      <div class="expand-inner">${teamDetailHtml(code)}</div>
    </div>`;
}

function renderAllTeams() {
  renderGroupTabs("#team-page-tabs", true);
  const query = document.querySelector("#team-search").value.trim().toLowerCase();
  const list = Object.entries(groups)
    .filter(([group]) => selectedTeamGroup === "all" || group === selectedTeamGroup)
    .flatMap(([, teams]) => teams)
    .filter(([name, code]) => name.toLowerCase().includes(query) || code.toLowerCase().includes(query));
  document.querySelector("#all-teams-grid").innerHTML =
    list.length ? list.map(teamRow).join("") : `<div class="empty-state">Tiada pasukan ditemui.</div>`;
}

function renderMatchFilters() {
  const select = document.querySelector("#match-group-filter");
  select.innerHTML = `<option value="all">Semua kumpulan</option>${groupLetters.map((letter) => `<option value="${letter}">Kumpulan ${letter}</option>`).join("")}`;
}

function renderSchedule() {
  const filtered = [...matches]
    .sort((a, b) => matchSortKey(a).localeCompare(matchSortKey(b)))
    .filter((match) =>
      (selectedMatchStatus === "all" || match.status === selectedMatchStatus) &&
      (selectedMatchGroup === "all" || match.group === selectedMatchGroup),
    );
  const byDate = Object.groupBy
    ? Object.groupBy(filtered, (match) => match.date)
    : filtered.reduce((result, match) => {
        (result[match.date] ||= []).push(match);
        return result;
      }, {});
  document.querySelector("#schedule-list").innerHTML = Object.entries(byDate).map(([date, games]) => `
    <div class="date-heading">${date}</div>
    ${games.map((match) => {
      const home = team(match.home, match.homeLabel);
      const away = team(match.away, match.awayLabel);
      const hasScore = ["finished", "live"].includes(match.status);
      const score = hasScore ? `${match.score[0]} : ${match.score[1]}` : match.time;
      const verification = hasScore ? match.verification?.result || "unverified" : match.verification?.schedule || "unverified";
      const tvChannels = getMatchTV(match);
      const tvQuick = tvChannels.map(c => c.name).join(" · ");
      const tvBadgesHtml = tvChannels.map(c =>
        c.url
          ? `<a class="tv-badge" href="${c.url}" target="_blank" rel="noreferrer">${c.name} ↗</a>`
          : `<span class="tv-badge">${c.name}</span>`
      ).join("");

      return `
        <article class="schedule-row ${match.status === "live" ? "is-live" : ""}" data-match-id="${match.id}">
          <div class="schedule-meta"><span>Kumpulan ${match.group}</span><span>${match.status === "finished" ? "Tamat" : match.status === "live" ? "🔴 Langsung" : `${match.time} ${match.timeZoneLabel || "MYT"}`}</span><span class="data-badge ${verification}">${verification === "verified" ? "Disahkan" : verification === "reported" ? "Dilaporkan" : "Belum disahkan"}</span></div>
          <div class="schedule-versus">
            <button type="button" class="schedule-team" data-match-team="${match.id}|home"><strong>${home.name}</strong><span class="flag">${home.flag}</span></button>
            <div class="schedule-score">${score}</div>
            <button type="button" class="schedule-team away" data-match-team="${match.id}|away"><span class="flag">${away.flag}</span><strong>${away.name}</strong></button>
          </div>
          <div class="schedule-footer" data-match-toggle="${match.id}">
            <span class="schedule-venue-text">${match.venue}</span>
            <span class="schedule-tv-quick">📺 ${tvQuick}</span>
            <span class="expand-chevron" aria-hidden="true">›</span>
          </div>
        </article>
        <div class="match-team-expand" id="match-team-expand-${match.id}-home">
          <div class="expand-inner">${matchTeamDetailHtml(match, "home")}</div>
        </div>
        <div class="match-team-expand" id="match-team-expand-${match.id}-away">
          <div class="expand-inner">${matchTeamDetailHtml(match, "away")}</div>
        </div>
        <div class="match-expand" id="match-expand-${match.id}">
          <div class="expand-inner">
            <div class="expand-section">
              <div class="expand-label">📺 Siaran TV Malaysia</div>
              <div class="tv-channels">${tvBadgesHtml}</div>
              <p class="expand-venue-note">${match.venue}</p>
            </div>
          </div>
        </div>`;
    }).join("")}
  `).join("") || `<div class="empty-state">Tiada perlawanan bagi pilihan ini.</div>`;
}

function matchTeamDetailHtml(match, side) {
  const code = match[side];
  const t = team(code, side === "home" ? match.homeLabel : match.awayLabel);
  const hasScore = ["finished", "live"].includes(match.status);
  const goals = hasScore ? parseMatchEvents(match.scorers?.[side], side) : [];
  const scorersHtml = hasScore
    ? (goals.length
      ? goals.map(e => `
          <div class="event-row">
            <span class="event-name">${e.isOG ? `${e.name} <em>(OG)</em>` : e.name}</span>
            <span class="event-icon">⚽</span>
            <span class="event-minute">${e.minute ? e.minute + "′" : "—"}</span>
          </div>`).join("")
      : `<p class="events-empty">Tiada maklumat pencetak gol.</p>`)
    : `<p class="events-empty">Perlawanan belum bermula.</p>`;

  const sq = squads[code];
  const starters = sq?.players || [];
  const subs = sq?.subs || [];

  return `
    <div class="expand-section">
      <div class="expand-label">⚽ Pencetak Gol — ${t.name}</div>
      <div class="match-events">${scorersHtml}</div>
    </div>
    ${starters.length ? `
    <div class="expand-section">
      <div class="expand-label">Pemain Disenaraikan<span class="player-count">${starters.length} pemain</span></div>
      <div class="player-list">${playerRowsHtml(starters)}</div>
    </div>` : `<div class="expand-section"><p class="events-empty">Senarai pemain belum tersedia untuk ${t.name}.</p></div>`}
    ${subs.length ? `
    <div class="expand-section">
      <div class="expand-label">Pertukaran Pemain<span class="player-count">${subs.length} pemain ganti</span></div>
      <div class="player-list">${playerRowsHtml(subs)}</div>
      <p class="expand-disclaimer">Minit pertukaran sebenar tidak disediakan oleh sumber data semasa — senarai di atas ialah pemain ganti berdaftar pasukan.</p>
    </div>` : ""}`;
}

function toggleMatchTeamExpand(matchId, side) {
  const expand = document.querySelector(`#match-team-expand-${matchId}-${side}`);
  const btn = document.querySelector(`[data-match-team="${matchId}|${side}"]`);
  if (!expand || !btn) return;
  const isOpen = expand.classList.contains("is-open");
  document.querySelectorAll(".match-team-expand.is-open").forEach((e) => e.classList.remove("is-open"));
  document.querySelectorAll("[data-match-team].is-open").forEach((b) => b.classList.remove("is-open"));
  if (!isOpen) {
    btn.classList.add("is-open");
    expand.classList.add("is-open");
    expand.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function parseMatchEvents(scorerStr, side) {
  if (!scorerStr || scorerStr === "null") return [];
  // Handle PHP/API format: {"Player 9'","Player 67'"} or plain "Player 9', Player 67'"
  let raw = String(scorerStr).trim();
  // Strip outer { } braces if present
  if (raw.startsWith("{") && raw.endsWith("}")) {
    raw = raw.slice(1, -1);
  }
  // Split by '","' first (quoted entries), fallback to plain comma
  const parts = raw.includes('","') ? raw.split('","') : raw.split(",");
  return parts
    .map((s) => s.replace(/^["'\s]+|["'\s]+$/g, "").trim())
    .filter((s) => s && s !== "null")
    .map((entry) => {
      const minuteMatch = entry.match(/(\d+)(?:\+\d+)?['′]/);
      const minute = minuteMatch ? minuteMatch[1] : null;
      const name = entry.replace(/\d+(?:\+\d+)?['′]/g, "").replace(/\(OG\)/i, "").trim();
      const isOG = /\(OG\)/i.test(entry);
      return { name, minute, side, isOG };
    })
    .filter((e) => e.name && e.name !== "null");
}

function toggleMatchExpand(id) {
  const expand = document.querySelector(`#match-expand-${id}`);
  const row = document.querySelector(`.schedule-row[data-match-id="${id}"]`);
  if (!expand || !row) return;
  const isOpen = row.classList.contains("is-open");
  // Close all open rows first
  document.querySelectorAll(".schedule-row.is-open").forEach(r => r.classList.remove("is-open"));
  document.querySelectorAll(".match-expand.is-open").forEach(e => e.classList.remove("is-open"));
  // Open if it was closed
  if (!isOpen) {
    row.classList.add("is-open");
    expand.classList.add("is-open");
    expand.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

// ================================================================
// RAMALAN & SEJARAH — render, sheet popup, confetti
// ================================================================
function ringSvg(pct, size = 64, stroke = 6) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(pct, 100) / 100) * c;
  return `
    <svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle class="ring-track" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}" fill="none" />
      <circle class="ring-fill" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}" fill="none"
        stroke-dasharray="${c}" stroke-dashoffset="${c}" data-final-offset="${offset}"
        transform="rotate(-90 ${size / 2} ${size / 2})" />
    </svg>`;
}

function animateRings(container) {
  container.querySelectorAll(".ring-fill").forEach((ring) => {
    const target = ring.dataset.finalOffset;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      ring.style.strokeDashoffset = target;
    }));
  });
}

function renderRamalanPodium() {
  const [first, second, third] = ramalanData.champTop10;
  const slot = (t, place) => `
    <div class="podium-slot podium-${place}" data-ram-code="${t.code}">
      <span class="podium-place">${place === 1 ? "🥇" : place === 2 ? "🥈" : "🥉"}</span>
      <span class="podium-flag">${t.flag}</span>
      <strong class="podium-name">${t.name}${t.host ? " <small>(Hos)</small>" : ""}</strong>
      <span class="podium-pct">${t.champ.toFixed(1)}%</span>
      <div class="podium-bar"></div>
    </div>`;
  document.querySelector("#ram-podium").innerHTML = `
    ${slot(second, 2)}${slot(first, 1)}${slot(third, 3)}
    <button class="confetti-trigger" id="ram-confetti-btn" data-confetti="1">🎉 Raikan ramalan juara</button>`;
}

function ramRingCard(t) {
  return `
    <article class="ring-card" data-ram-code="${t.code}" tabindex="0">
      <div class="ring-wrap">
        ${ringSvg(t.champ * (100 / Math.max(ramalanData.champTop10[0].champ, 1)), 64, 6)}
        <span class="ring-flag">${t.flag}</span>
      </div>
      <strong>${t.name}</strong>
      <span class="ring-pct">${t.champ.toFixed(1)}%</span>
    </article>`;
}

function renderRamalanRings() {
  const target = document.querySelector("#ram-ringrow");
  target.innerHTML = ramalanData.champTop10.map(ramRingCard).join("");
  animateRings(target);
}

function swingRow(t) {
  return `
    <article class="swing-row" data-ram-code="${t.code}" tabindex="0">
      <span class="flag">${t.flag}</span>
      <span class="swing-name"><strong>${t.name}</strong><span class="stadium-sub">Kumpulan ${t.group} · Ranking ${t.rank}</span></span>
      <div class="swing-bar-wrap">
        <div class="swing-bar" style="width:${t.qual}%"></div>
      </div>
      <span class="swing-pct">${t.qual.toFixed(1)}%</span>
    </article>`;
}

function renderRamalanSwing() {
  document.querySelector("#ram-swing").innerHTML = ramalanData.swing.length
    ? ramalanData.swing.map(swingRow).join("")
    : `<div class="empty-state">Tiada pasukan dalam julat sengit sekarang.</div>`;
}

function renderRamGroupTabs() {
  const groupLettersRam = [...new Set(ramalanData.teams.map((t) => t.group))].sort();
  const buttons = [{ value: "all", label: "Semua" }, ...groupLettersRam.map((letter) => ({ value: letter, label: `Kumpulan ${letter}` }))];
  document.querySelector("#ram-group-tabs").innerHTML = buttons.map(({ value, label }) =>
    `<button data-ram-group="${value}" class="${selectedRamalanGroup === value ? "active" : ""}">${label}</button>`,
  ).join("");
}

function ramTeamRow(t) {
  return `
    <article class="team-row ram-team-row" data-ram-code="${t.code}" tabindex="0">
      <span class="flag">${t.flag}</span>
      <span class="team-name-wrap"><strong>${t.name}${t.host ? " 🏠" : ""}</strong><span class="stadium-sub">${t.code} · Kumpulan ${t.group} · Ranking ${t.rank}</span></span>
      <span class="chip chip-champ">${t.champ >= 1 ? t.champ.toFixed(1) + "% juara" : "<1% juara"}</span>
      <span class="expand-chevron" aria-hidden="true">›</span>
    </article>`;
}

function renderRamalanTeamList() {
  renderRamGroupTabs();
  const query = document.querySelector("#ram-search").value.trim().toLowerCase();
  const list = ramalanData.teams
    .filter((t) => selectedRamalanGroup === "all" || t.group === selectedRamalanGroup)
    .filter((t) => t.name.toLowerCase().includes(query) || t.code.toLowerCase().includes(query));
  document.querySelector("#ram-team-list").innerHTML = list.length
    ? list.map(ramTeamRow).join("")
    : `<div class="empty-state">Tiada pasukan ditemui.</div>`;
}

function teamSheetBody(t) {
  const stat = (label, value) => `<div class="sheet-stat"><span>${label}</span><strong>${value}%</strong></div>`;
  return `
    <div class="sheet-meta">
      <span>Kumpulan ${t.group}</span><span>Ranking FIFA ${t.rank}</span><span>Rating ${t.rating}</span>
      ${t.host ? "<span>🏠 Negara hos</span>" : ""}
    </div>
    <div class="sheet-rings">
      ${["r32", "r16", "qf", "sf", "final", "champ"].map((key) => {
        const labels = { r32: "32 terakhir", r16: "16 terakhir", qf: "Suku akhir", sf: "Separuh akhir", final: "Final", champ: "Juara" };
        return `<div class="sheet-ring-item">${ringSvg(t[key], 52, 5)}<span>${labels[key]}</span><strong>${t[key].toFixed(1)}%</strong></div>`;
      }).join("")}
    </div>
    <div class="sheet-stats-grid">
      ${stat("Peluang layak", t.qual.toFixed(1))}
      ${stat("Juara kumpulan", t.gw.toFixed(1))}
      ${stat("Naib juara kumpulan", t.ru.toFixed(1))}
    </div>
    <p class="sheet-disclaimer">Kebarangkalian model statistik, bukan jaminan. Tidak mengambil kira kecederaan, kad larangan atau keputusan taktikal jurulatih.</p>`;
}

function openTeamSheet(code) {
  const t = ramalanData.teams.find((x) => x.code === code);
  if (!t) return;
  document.querySelector("#sheet-flag").textContent = t.flag;
  document.querySelector("#sheet-title").textContent = `${t.name}${t.host ? " (Hos)" : ""}`;
  document.querySelector("#sheet-body").innerHTML = teamSheetBody(t);
  openSheet();
  animateRings(document.querySelector("#sheet-body"));
}

function openSheet() {
  document.querySelector("#sheet-backdrop").classList.add("is-open");
  document.querySelector("#detail-sheet").classList.add("is-open");
  document.body.classList.add("sheet-locked");
}

function closeSheet() {
  document.querySelector("#sheet-backdrop").classList.remove("is-open");
  document.querySelector("#detail-sheet").classList.remove("is-open");
  document.body.classList.remove("sheet-locked");
}

function fireConfetti() {
  const canvas = document.querySelector("#confetti-canvas");
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");
  const colors = ["#d4af37", "#ffd700", "#1850f0", "#ffffff", "#c4170c"];
  const particles = Array.from({ length: 140 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * canvas.height * 0.3,
    r: 3 + Math.random() * 4,
    vy: 2 + Math.random() * 3,
    vx: -1.5 + Math.random() * 3,
    rot: Math.random() * 360,
    vr: -6 + Math.random() * 12,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
  canvas.classList.add("is-active");
  let frame = 0;
  function tick() {
    frame += 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.r, -p.r * 0.6, p.r * 2, p.r * 1.2);
      ctx.restore();
    });
    if (frame < 150) {
      window.requestAnimationFrame(tick);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.classList.remove("is-active");
    }
  }
  window.requestAnimationFrame(tick);
}

const sejarahContent = {
  2018: {
    flag: "🇷🇺", title: "Piala Dunia 2018 — Rusia", champion: "Perancis", champFlag: "🇫🇷",
    runnerUp: "Croatia", score: "4–2", goldenBoot: "Harry Kane (England) — 6 gol",
    goldenBall: "Luka Modric (Croatia)", facts: [
      "Kali pertama VAR digunakan dalam Piala Dunia.",
      "Perancis menjuarai kali kedua, 20 tahun selepas 1998.",
      "Croatia mencapai final sulung mereka.",
      "11 bandar hos, 12 stadium di seluruh Rusia.",
    ],
  },
  2022: {
    flag: "🇶🇦", title: "Piala Dunia 2022 — Qatar", champion: "Argentina", champFlag: "🇦🇷",
    runnerUp: "Perancis", score: "3–3 (pp 4–2)", goldenBoot: "Kylian Mbappé (Perancis) — 8 gol",
    goldenBall: "Lionel Messi (Argentina)", facts: [
      "Final paling dramatik dalam sejarah — hat-trick Mbappé tidak cukup menghalang Argentina.",
      "Piala Dunia ketiga Messi sebagai juara, melengkapkan koleksi kerjayanya.",
      "Edisi pertama yang diadakan pada musim sejuk (Nov–Dis).",
      "Edisi terakhir dengan format 32 pasukan sebelum 2026 berkembang ke 48 pasukan.",
    ],
  },
};

function renderSejarahYear(year) {
  if (year === 2026) {
    const finished = matches.filter((m) => m.status === "finished").length;
    const live = matches.filter((m) => m.status === "live").length;
    const upcoming = matches.filter((m) => m.status === "upcoming").length;
    return `
      <div class="champion-banner champion-banner-live">
        <span class="champion-flag">🌎</span>
        <div>
          <strong>Piala Dunia 2026 — Mexico · Amerika Syarikat · Kanada</strong>
          <span class="stadium-sub">48 pasukan · ${ramalanData.meta.nMatches} perlawanan · ${ramalanData.meta.nCities} bandar hos · pembukaan ${ramalanData.meta.openDate}</span>
        </div>
      </div>
      <div class="leaderboard-grid">
        <div class="leaderboard-card"><div class="leaderboard-head"><strong>${finished}</strong><span>perlawanan selesai</span></div></div>
        <div class="leaderboard-card"><div class="leaderboard-head"><strong>${live}</strong><span>sedang berlangsung</span></div></div>
        <div class="leaderboard-card"><div class="leaderboard-head"><strong>${upcoming}</strong><span>akan datang</span></div></div>
      </div>
      <p class="expand-disclaimer">Edisi pertama format 48 pasukan dan hos rentas 3 negara. Lihat tab Ramalan untuk kebarangkalian juara terkini.</p>`;
  }
  const d = sejarahContent[year];
  return `
    <div class="champion-banner">
      <span class="champion-flag">${d.champFlag}</span>
      <div>
        <strong>${d.title}</strong>
        <span class="stadium-sub">Juara: ${d.champion} · Naib juara: ${d.runnerUp} (${d.score})</span>
      </div>
      <button class="confetti-trigger confetti-trigger-sm" data-confetti="1">🎉</button>
    </div>
    <div class="sheet-stats-grid">
      <div class="sheet-stat"><span>Gegelung Emas</span><strong>${d.goldenBoot}</strong></div>
      <div class="sheet-stat"><span>Bola Emas</span><strong>${d.goldenBall}</strong></div>
    </div>
    <ul class="sejarah-facts">${d.facts.map((f) => `<li>${f}</li>`).join("")}</ul>`;
}

function renderSejarah() {
  document.querySelector("#sejarah-body").innerHTML = renderSejarahYear(selectedSejarahYear);
}

function navigate(route) {
  const validRoute = ["home", "standings", "teams", "stadiums", "ramalan", "sejarah"].includes(route) ? route : "home";
  document.querySelectorAll(".page").forEach((page) => page.classList.toggle("active", page.dataset.page === validRoute));
  document.querySelectorAll(".main-nav a").forEach((link) => link.classList.toggle("active", link.dataset.route === validRoute));
  window.scrollTo({ top: 0, behavior: "instant" });
}

function globalSearch(query) {
  const normalized = query.trim().toLowerCase();
  const target = document.querySelector("#search-results");
  if (!normalized) {
    target.innerHTML = "";
    return;
  }
  const teamResults = Object.values(teamByCode)
    .filter((item) => `${item.name} ${item.code}`.toLowerCase().includes(normalized))
    .slice(0, 4)
    .map((item) => ({ label: `${item.flag} ${item.name}`, type: `Pasukan · Kumpulan ${item.group}`, route: "teams" }));
  const stadiumResults = stadiums
    .filter((item) => `${item.name} ${item.fifaName} ${item.city}`.toLowerCase().includes(normalized))
    .slice(0, 3)
    .map((item) => ({ label: `🏟 ${item.name}`, type: `${item.city} · ${item.capacity.toLocaleString("en-US")}`, route: "stadiums" }));
  const results = [...teamResults, ...stadiumResults];
  target.innerHTML = results.length
    ? results.map((item) => `<a class="search-result" href="#${item.route}"><strong>${item.label}</strong><span>${item.type}</span></a>`).join("")
    : `<div class="empty-state">Tiada hasil ditemui.</div>`;
}

function initEvents() {
  window.addEventListener("hashchange", () => navigate(location.hash.slice(1)));
  document.querySelector("#team-page-tabs").addEventListener("click", (event) => {
    if (!event.target.dataset.group) return;
    selectedTeamGroup = event.target.dataset.group;
    renderAllTeams();
  });
  document.querySelector("#team-search").addEventListener("input", renderAllTeams);
  document.querySelector("#match-status-filter").addEventListener("click", (event) => {
    if (!event.target.dataset.status) return;
    selectedMatchStatus = event.target.dataset.status;
    document.querySelectorAll("#match-status-filter button").forEach((button) => button.classList.toggle("active", button === event.target));
    renderSchedule();
  });
  document.querySelector("#match-group-filter").addEventListener("change", (event) => {
    selectedMatchGroup = event.target.value;
    renderSchedule();
  });
  document.querySelector("#standings-tabs").addEventListener("click", (event) => {
    if (!event.target.dataset.standingGroup) return;
    selectedStandingGroup = event.target.dataset.standingGroup;
    renderStandings();
  });
  document.querySelector("#stadium-country-filter").addEventListener("click", (event) => {
    if (!event.target.dataset.country) return;
    selectedStadiumCountry = event.target.dataset.country;
    document.querySelectorAll("#stadium-country-filter button").forEach((button) => button.classList.toggle("active", button === event.target));
    renderStadiums();
  });
  document.querySelector("#ram-group-tabs").addEventListener("click", (event) => {
    if (!event.target.dataset.ramGroup) return;
    selectedRamalanGroup = event.target.dataset.ramGroup;
    renderRamalanTeamList();
  });
  document.querySelector("#ram-search").addEventListener("input", renderRamalanTeamList);
  document.querySelector("#sejarah-year-filter").addEventListener("click", (event) => {
    if (!event.target.dataset.yr) return;
    selectedSejarahYear = Number(event.target.dataset.yr);
    document.querySelectorAll("#sejarah-year-filter button").forEach((button) => button.classList.toggle("active", button === event.target));
    renderSejarah();
  });
  document.querySelector("#sheet-close").addEventListener("click", closeSheet);
  document.querySelector("#sheet-backdrop").addEventListener("click", closeSheet);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSheet();
  });

  document.body.addEventListener("click", (event) => {
    const matchTeamTarget = event.target.closest("[data-match-team]");
    if (matchTeamTarget) {
      const [matchId, side] = matchTeamTarget.dataset.matchTeam.split("|");
      toggleMatchTeamExpand(matchId, side);
      return;
    }
    const matchToggleTarget = event.target.closest("[data-match-toggle]");
    if (matchToggleTarget) {
      toggleMatchExpand(matchToggleTarget.dataset.matchToggle);
      return;
    }
    const teamRowTarget = event.target.closest(".team-row[data-team-code]");
    if (teamRowTarget) {
      toggleTeamRowExpand(teamRowTarget.dataset.teamCode);
      return;
    }
    const stadiumRowTarget = event.target.closest(".stadium-row[data-stadium-id]");
    if (stadiumRowTarget) {
      toggleStadiumExpand(stadiumRowTarget.dataset.stadiumId);
      return;
    }
    const confettiTarget = event.target.closest("[data-confetti]");
    if (confettiTarget) {
      fireConfetti();
      return;
    }
    const ramCodeTarget = event.target.closest("[data-ram-code]");
    if (ramCodeTarget) openTeamSheet(ramCodeTarget.dataset.ramCode);
  });

  document.querySelector("#global-search").addEventListener("input", (event) => globalSearch(event.target.value));
  document.querySelector("#refresh-data").addEventListener("click", loadVerifiedData);
}

function init() {
  renderGroupTabs("#team-page-tabs", true);
  renderAllTeams();
  renderMatchFilters();
  renderSchedule();
  renderStandings();
  renderStadiums();
  renderRamalanPodium();
  renderRamalanRings();
  renderRamalanSwing();
  renderRamalanTeamList();
  renderSejarah();
  initEvents();
  navigate(location.hash.slice(1) || "home");
  loadVerifiedData();
  window.setInterval(loadVerifiedData, 5 * 60 * 1000);
}

init();
