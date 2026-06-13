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
    ["Scotland", "SCO", "🏴", 44],
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
    ["England", "ENG", "🏴", 4],
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

function openTeamDialog(code) {
  const t = teamByCode[code];
  const sq = squads[code];
  if (!t) return;

  const dialog = document.querySelector("#team-dialog");
  const content = document.querySelector("#team-dialog-content");

  const starters = sq?.players || [];
  const subs = sq?.subs || [];

  const playerRows = (list) => list.map(p => `
    <div class="player-row">
      <span class="no">${String(p.no).padStart(2, "0")}</span>
      <span class="pos ${p.pos}">${posLabel(p.pos)}</span>
      <span class="name-meta">
        <span class="pname">${p.name}</span>
        <span class="pmeta">${p.age ? p.age + " thn" : ""}${p.age && p.club ? " · " : ""}${p.club || ""}</span>
      </span>
    </div>`).join("");

  const contrastFor = (hex) => {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return (r*299 + g*587 + b*114) / 1000 > 128 ? "#111" : "#fff";
  };

  const jerseyBlock = (color, label) => color ? `
    <div class="jersey-item">
      <span class="jersey-label">${label}</span>
      <div class="jersey-swatch">
        <div class="swatch" style="background:${color}; border-color: rgba(0,0,0,0.15);"></div>
        <span>${sq[label === "JERSI HOME" ? "jerseyHomeName" : "jerseyAwayName"] || color}</span>
      </div>
    </div>` : "";

  content.innerHTML = `
    <div class="team-dialog-head">
      <span class="flag">${t.flag}</span>
      <h2>${t.name}</h2>
      <div class="team-dialog-meta">
        <span>KUMPULAN <strong>${t.group}</strong></span>
        <span>·</span>
        <span>FIFA RANKING <strong>#${t.rank}</strong></span>
      </div>
      <div class="team-dialog-info">
        <div>
          <span>PENGURUS</span>
          <strong>${sq?.manager || "—"}</strong>
        </div>
        <div>
          <span>KEM LATIHAN WC2026</span>
          <strong>${sq?.trainingBase || "—"}</strong>
        </div>
      </div>
    </div>
    <div class="team-dialog-body">
      ${starters.length ? `
        <div class="squad-section">
          <div class="squad-label">
            Pemain Utama
            <span class="player-count">${starters.length} pemain</span>
          </div>
          <div class="player-list">${playerRows(starters)}</div>
        </div>` : ""}
      ${subs.length ? `
        <div class="squad-section">
          <div class="squad-label">
            Pemain Ganti
            <span class="player-count">${subs.length} pemain</span>
          </div>
          <div class="player-list">${playerRows(subs)}</div>
        </div>` : ""}
      ${sq?.jerseyHome || sq?.jerseyAway ? `
        <div class="jersey-section">
          ${jerseyBlock(sq.jerseyHome, "JERSI HOME")}
          ${jerseyBlock(sq.jerseyAway, "JERSI AWAY")}
        </div>` : ""}
    </div>`;

  dialog.showModal();
}

let matches = [
  {
    id: 1,
    date: "11 Jun 2026",
    time: "03:00",
    home: "MEX",
    away: "RSA",
    group: "A",
    venue: "Estadio Azteca, Mexico City",
    status: "finished",
    score: [2, 0],
    stats: null,
  },
  {
    id: 2,
    date: "12 Jun 2026",
    time: "10:00",
    home: "KOR",
    away: "CZE",
    group: "A",
    venue: "Estadio Akron, Guadalajara",
    status: "finished",
    score: [2, 1],
    stats: null,
  },
  {
    id: 3,
    date: "13 Jun 2026",
    time: "03:00",
    home: "CAN",
    away: "BIH",
    group: "B",
    venue: "BMO Field, Toronto",
    status: "upcoming",
    stats: null,
  },
  {
    id: 4,
    date: "13 Jun 2026",
    time: "06:00",
    home: "SUI",
    away: "QAT",
    group: "B",
    venue: "Levi's Stadium, Santa Clara",
    status: "upcoming",
    stats: null,
  },
  {
    id: 5,
    date: "13 Jun 2026",
    time: "09:00",
    home: "BRA",
    away: "SCO",
    group: "C",
    venue: "MetLife Stadium, New York / New Jersey",
    status: "upcoming",
    stats: null,
  },
  {
    id: 6,
    date: "14 Jun 2026",
    time: "00:00",
    home: "MAR",
    away: "HAI",
    group: "C",
    venue: "Gillette Stadium, Boston",
    status: "upcoming",
    stats: null,
  },
  {
    id: 7,
    date: "14 Jun 2026",
    time: "03:00",
    home: "USA",
    away: "TUR",
    group: "D",
    venue: "SoFi Stadium, Los Angeles",
    status: "upcoming",
    stats: null,
  },
  {
    id: 8,
    date: "14 Jun 2026",
    time: "06:00",
    home: "PAR",
    away: "AUS",
    group: "D",
    venue: "BC Place, Vancouver",
    status: "upcoming",
    stats: null,
  },
  {
    id: 9,
    date: "15 Jun 2026",
    time: "03:00",
    home: "GER",
    away: "ECU",
    group: "E",
    venue: "Lincoln Financial Field, Philadelphia",
    status: "upcoming",
    stats: null,
  },
  {
    id: 10,
    date: "16 Jun 2026",
    time: "09:00",
    home: "ARG",
    away: "JOR",
    group: "J",
    venue: "Hard Rock Stadium, Miami",
    status: "upcoming",
    stats: null,
  },
];

const fallbackNews = [
  {
    category: "Kejohanan",
    date: "12 Jun 2026",
    title: "Kejohanan 48 pasukan membuka lembaran baharu bola sepak dunia",
    excerpt: "Format diperluas membawa lebih banyak negara, cerita dan pertembungan rentas benua ke pentas terbesar.",
  },
  {
    category: "Pasukan",
    date: "12 Jun 2026",
    title: "Mexico bermula dengan tenaga tuan rumah",
    excerpt: "Sorakan di Mexico City menjadi latar kepada permulaan kempen yang penuh keyakinan.",
  },
  {
    category: "Analisis",
    date: "12 Jun 2026",
    title: "Apa yang berubah dalam format 12 kumpulan?",
    excerpt: "Dua pasukan teratas dan lapan pasukan tempat ketiga terbaik akan mara ke pusingan 32.",
  },
  {
    category: "Pasukan",
    date: "11 Jun 2026",
    title: "Kanada bersedia menjadikan Toronto kubu sendiri",
    excerpt: "Skuad tuan rumah mahu menggunakan intensiti dan sokongan penyokong untuk mengawal kumpulan B.",
  },
  {
    category: "Analisis",
    date: "11 Jun 2026",
    title: "Lima pemain muda yang wajar diberi perhatian",
    excerpt: "Generasi baharu tiba dengan kelajuan, keberanian dan reputasi yang semakin besar.",
  },
  {
    category: "Kejohanan",
    date: "10 Jun 2026",
    title: "16 bandar tuan rumah bersedia menyambut dunia",
    excerpt: "Dari Mexico City ke Vancouver dan Miami, pentas sudah tersedia untuk 104 perlawanan.",
  },
];

let newsPayload = window.SEPAK26_NEWS || {
  metadata: {
    updatedAt: null,
    sourceCount: 0,
    status: "fallback",
    methodology: "Paparan sandaran tempatan.",
  },
  articles: fallbackNews,
};
let news = newsPayload.articles;

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

const STADIUM_MEDIA = {
  1: ["assets/stadiums/01-estadio-azteca.jpg", "Vista aérea del Estadio Azteca - 2026 - 02.jpg"],
  2: ["assets/stadiums/02-estadio-akron.jpg", "Estadio Akron 02-07-2022 cabecera sur lado derecho (3).jpg"],
  3: ["assets/stadiums/03-estadio-bbva.jpg", "Mexico Guadalupe Monterrey Estadio BBVA Bancomer fifa world cup 2026 6.JPG"],
  4: ["assets/stadiums/04-att-stadium.jpg", "Arlington June 2020 4 (AT&T Stadium).jpg"],
  5: ["assets/stadiums/05-nrg-stadium.jpg", "Nrg stadium.jpg"],
  6: ["assets/stadiums/06-arrowhead-stadium.jpg", "Aerial view of Arrowhead Stadium 08-31-2013.jpg"],
  7: ["assets/stadiums/07-mercedes-benz-stadium.jpg", "Mercedes Benz Stadium time lapse capture 2017-08-13.jpg"],
  8: ["assets/stadiums/08-hard-rock-stadium.jpg", "Hard Rock Stadium for Super Bowl LIV (49606710103).jpg"],
  9: ["assets/stadiums/09-gillette-stadium.jpg", "Gillette Stadium (Top View).jpg"],
  10: ["assets/stadiums/10-lincoln-financial-field.jpg", "Lincoln Financial Field (Aerial view).jpg"],
  11: ["assets/stadiums/11-metlife-stadium.jpg", "Metlife stadium (Aerial view).jpg"],
  12: ["assets/stadiums/12-bmo-field.jpg", "Toronto BMO Field in 2024.jpg"],
  13: ["assets/stadiums/13-bc-place.jpg", "BC Place 2015 Women's FIFA World Cup.jpg"],
  14: ["assets/stadiums/14-lumen-field.jpg", "2025 FIFA Club World Cup - Seattle Sounders FC vs. Atlético Madrid - 05.jpg"],
  15: ["assets/stadiums/15-levis-stadium.jpg", "Levi's Stadium in February 2016 prior to Super Bowl 50 (24398261729).jpg"],
  16: ["assets/stadiums/16-sofi-stadium.jpg", "SoFi Stadium 2023.jpg"],
};

stadiums.forEach((stadium) => {
  const [image, commonsFile] = STADIUM_MEDIA[stadium.id];
  stadium.image = image;
  stadium.imageCredit = "Wikimedia Commons";
  stadium.imageSource = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(commonsFile).replaceAll("%20", "_")}`;
});

const DATA_SOURCES = [
  {
    id: "worldcup26",
    name: "WorldCup26 API",
    url: "https://worldcup26.ir/get/games",
    role: "jadual + keputusan",
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

const groupLetters = Object.keys(groups);
let selectedHomeGroup = "A";
let selectedTeamGroup = "all";
let selectedMatchStatus = "all";
let selectedMatchGroup = "all";
let selectedNewsCategory = "all";
let selectedStandingGroup = "A";
let selectedStadiumCountry = "all";
const favorites = new Set(JSON.parse(localStorage.getItem("sepak26-favorites") || "[]"));

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

function renderSourceLedger() {
  const ledger = document.querySelector("#source-ledger");
  if (!ledger) return;
  ledger.innerHTML = DATA_SOURCES.map((source) => `
    <a class="source-item" href="${source.id === "vh26" ? "https://github.com/tuitamogamer-gpt/vh26-worldcup-2026" : source.url}" target="_blank" rel="noreferrer">
      <strong>${source.name}</strong>
      <span>${source.role}</span>
      <b class="${sourceHealth[source.id] ? "" : "offline"}">${sourceHealth[source.id] ? "Tersambung" : "Tidak tersedia"}</b>
    </a>
  `).join("");
}

async function loadVerifiedData() {
  if (verificationLoading) return;
  verificationLoading = true;
  const panel = document.querySelector(".verification-panel");
  const title = document.querySelector("#verification-title");
  const summary = document.querySelector("#verification-summary");
  const refreshButton = document.querySelector("#refresh-data");
  if (refreshButton) refreshButton.disabled = true;
  panel?.classList.remove("ready", "error");
  if (title) title.textContent = "Menyemak sumber data...";
  if (summary) summary.textContent = "Menghubungkan tiga sumber bebas.";

  const responses = await Promise.allSettled(DATA_SOURCES.map(async (source) => {
    const response = await fetch(source.url, { cache: "no-store" });
    if (!response.ok) throw new Error(`${source.name}: HTTP ${response.status}`);
    return source.id === "vh26" ? response.text() : response.json();
  }));

  const payload = {};
  responses.forEach((result, index) => {
    const source = DATA_SOURCES[index];
    sourceHealth[source.id] = result.status === "fulfilled";
    if (result.status === "fulfilled") payload[source.id] = result.value;
  });
  renderSourceLedger();

  if (payload.worldcup26) {
    const consensus = buildConsensus(payload.worldcup26, payload.tour, payload.vh26);
    if (consensus.length) {
      matches = consensus;
      lastVerifiedAt = new Date();
      localStorage.setItem("sepak26-consensus", JSON.stringify({
        savedAt: lastVerifiedAt.toISOString(),
        matches,
      }));
      renderTicker();
      renderHomeMatches();
      renderSchedule();
      renderLiveCenter();
      renderStandings();
      panel?.classList.add("ready");
      const verifiedCount = matches.filter((match) => match.verification?.schedule === "verified").length;
      const reportedResults = matches.filter((match) => match.verification?.result === "reported").length;
      if (title) title.textContent = `${verifiedCount} jadual disahkan silang`;
      if (summary) summary.textContent = `${reportedResults} keputusan dilaporkan oleh satu sumber · Semakan ${lastVerifiedAt.toLocaleTimeString("ms-MY", { hour: "2-digit", minute: "2-digit" })}`;
      verificationLoading = false;
      if (refreshButton) refreshButton.disabled = false;
      return;
    }
  }

  const cached = JSON.parse(localStorage.getItem("sepak26-consensus") || "null");
  if (cached?.matches?.length) {
    matches = cached.matches;
    renderTicker();
    renderHomeMatches();
    renderSchedule();
    renderLiveCenter();
    renderStandings();
    if (title) title.textContent = "Menggunakan konsensus tersimpan";
    if (summary) summary.textContent = `Sumber utama tidak tersedia · Cache ${new Date(cached.savedAt).toLocaleString("ms-MY")}`;
  } else {
    panel?.classList.add("error");
    if (title) title.textContent = "Pengesahan langsung tidak tersedia";
    if (summary) summary.textContent = "Data fallback tempatan sedang digunakan.";
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

function renderLiveCenter() {
  const target = document.querySelector("#live-center");
  if (!target) return;
  const liveMatches = matches.filter((match) => match.status === "live");
  if (!liveMatches.length) {
    target.classList.remove("active");
    target.innerHTML = "";
    return;
  }
  target.classList.add("active");
  target.innerHTML = `
    <div class="live-center-head">
      <div><span class="live-pulse"></span><strong>LIVE NOW</strong><small>${liveMatches.length} perlawanan sedang berlangsung</small></div>
      <span>Dikemas kini ${lastVerifiedAt ? lastVerifiedAt.toLocaleTimeString("ms-MY", { hour: "2-digit", minute: "2-digit" }) : "sekarang"}</span>
    </div>
    <div class="live-game-grid">
      ${liveMatches.map((match) => {
        const home = team(match.home, match.homeLabel);
        const away = team(match.away, match.awayLabel);
        return `
          <button class="live-game" data-match-id="${match.id}">
            <span class="live-minute">${match.minute || "LIVE"}</span>
            <span>${home.flag} ${home.name}</span>
            <strong>${match.score[0]} : ${match.score[1]}</strong>
            <span>${away.flag} ${away.name}</span>
            <small>Kumpulan ${match.group} · ${match.venue}</small>
          </button>`;
      }).join("")}
    </div>`;
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

  document.querySelector("#all-standings").innerHTML = `
    <div class="section-heading"><div><span class="kicker">GAMBARAN KESELURUHAN</span><h2>Semua <i>kumpulan</i></h2></div></div>
    <div class="all-group-grid">${groupLetters.map((group) => standingsTable(group, true)).join("")}</div>`;
}

function renderStadiumMap(list = stadiums) {
  const target = document.querySelector("#stadium-map");
  if (!target) return;
  const selectedIds = new Set(list.map((stadium) => stadium.id));
  target.innerHTML = `
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <path class="map-land" d="M11 18 26 10 43 13 55 22 74 24 88 34 84 49 73 54 76 70 65 75 53 68 45 74 37 87 28 80 30 67 19 58 15 43Z"></path>
      <path class="map-border" d="M18 35 33 39 48 37 62 42 77 40M29 67 43 70 54 65"></path>
      ${stadiums.map((stadium) => `
        <g class="map-pin ${selectedIds.has(stadium.id) ? "" : "muted"}" data-stadium-id="${stadium.id}" tabindex="0" role="button" aria-label="${stadium.name}, ${stadium.city}">
          <circle cx="${stadium.mapX}" cy="${stadium.mapY}" r="2.2"></circle>
          <text x="${stadium.mapX}" y="${stadium.mapY - 3.8}">${stadium.id}</text>
        </g>`).join("")}
    </svg>`;
}

function stadiumCard(stadium) {
  const age = 2026 - stadium.opened;
  return `
    <article class="stadium-card" data-stadium-id="${stadium.id}" tabindex="0">
      <div class="stadium-card-photo">
        <img src="${stadium.image}" alt="Pandangan ${stadium.name}" loading="lazy">
        <a href="${stadium.imageSource}" target="_blank" rel="noreferrer" data-photo-credit onclick="event.stopPropagation()">Foto · ${stadium.imageCredit} ↗</a>
      </div>
      <div class="stadium-card-index">${String(stadium.id).padStart(2, "0")}</div>
      <div class="stadium-card-top"><span>${stadium.country}</span><span>${stadium.matches} perlawanan</span></div>
      <h3>${stadium.name}</h3>
      <p>${stadium.city}</p>
      <div class="stadium-metrics">
        <div><strong>${stadium.capacity.toLocaleString("en-US")}</strong><span>Kapasiti</span></div>
        <div><strong>${age}</strong><span>Usia pada 2026</span></div>
        <div><strong>${stadium.opened}</strong><span>Dibuka</span></div>
      </div>
      <button>Lihat cerita &amp; peta →</button>
    </article>`;
}

function renderStadiums() {
  const list = stadiums.filter((stadium) => selectedStadiumCountry === "all" || stadium.country === selectedStadiumCountry);
  document.querySelector("#stadium-grid").innerHTML = list.map(stadiumCard).join("");
  document.querySelector("#stadium-count").textContent = `${list.length} stadium`;
  renderStadiumMap(list);
}

function openStadiumDialog(id) {
  const stadium = stadiums.find((item) => item.id === Number(id));
  if (!stadium) return;
  const age = 2026 - stadium.opened;
  const mapUrl = `https://www.openstreetmap.org/?mlat=${stadium.lat}&mlon=${stadium.lon}#map=15/${stadium.lat}/${stadium.lon}`;
  document.querySelector("#stadium-dialog-content").innerHTML = `
    <div class="stadium-dialog-hero" style="--stadium-image: linear-gradient(90deg, rgba(13,15,18,.88), rgba(13,15,18,.2)), url('${stadium.image}')">
      <span class="kicker">${stadium.country} · VENUE ${String(stadium.id).padStart(2, "0")}</span>
      <h2>${stadium.name}</h2>
      <p>${stadium.fifaName} · ${stadium.city}</p>
      <a href="${stadium.imageSource}" target="_blank" rel="noreferrer">Foto · ${stadium.imageCredit} · atribusi &amp; lesen ↗</a>
    </div>
    <div class="stadium-dialog-body">
      <div class="stadium-detail-metrics">
        <div><strong>${stadium.capacity.toLocaleString("en-US")}</strong><span>Kapasiti kejohanan</span></div>
        <div><strong>${stadium.opened}</strong><span>Tahun dibuka</span></div>
        <div><strong>${age} tahun</strong><span>Usia pada 2026</span></div>
        <div><strong>${stadium.matches}</strong><span>Perlawanan</span></div>
      </div>
      <div class="stadium-story"><h3>Sejarah ringkas</h3><p>${stadium.history}</p><blockquote>${stadium.fact}</blockquote></div>
      <div class="stadium-facilities">
        <div><span>Bumbung</span><strong>${stadium.roof}</strong></div>
        <div><span>Permukaan</span><strong>${stadium.surface}</strong></div>
        <div><span>Koordinat</span><strong>${stadium.lat.toFixed(3)}, ${stadium.lon.toFixed(3)}</strong></div>
      </div>
      <a class="map-link" href="${mapUrl}" target="_blank" rel="noreferrer">Buka lokasi di OpenStreetMap ↗</a>
    </div>`;
  document.querySelector("#stadium-dialog").showModal();
}

function renderTicker() {
  const target = document.querySelector("#ticker-track");
  const highlighted = [...matches].sort((a, b) => (a.status === "live" ? -1 : 0) - (b.status === "live" ? -1 : 0)).slice(0, 3);
  target.innerHTML = highlighted.map((match) => {
    const home = team(match.home, match.homeLabel);
    const away = team(match.away, match.awayLabel);
    const status = ["finished", "live"].includes(match.status) ? `${match.score[0]} — ${match.score[1]}` : match.time;
    return `
      <div class="ticker-game">
        <span class="flag">${home.flag}</span>
        <div><strong>${home.code} ${status} ${away.code}</strong><small>Kumpulan ${match.group} · ${match.date}</small></div>
        <span class="flag">${away.flag}</span>
      </div>`;
  }).join("");
}

function matchCard(match) {
  const home = team(match.home, match.homeLabel);
  const away = team(match.away, match.awayLabel);
  const score = ["finished", "live"].includes(match.status) ? match.score : ["–", "–"];
  const verification = match.verification?.schedule || "unverified";
  return `
    <article class="match-card" data-match-id="${match.id}" tabindex="0">
      <div class="match-card-head"><span>Kumpulan ${match.group}</span><span>${match.status === "finished" ? "Tamat" : match.status === "live" ? "Langsung" : `${match.time} ${match.timeZoneLabel || "MYT"}`}</span></div>
      <div class="match-card-teams">
        <div class="match-card-team"><span class="flag">${home.flag}</span><strong>${home.name}</strong><b>${score[0]}</b></div>
        <div class="match-card-team"><span class="flag">${away.flag}</span><strong>${away.name}</strong><b>${score[1]}</b></div>
      </div>
      <div class="match-card-foot"><span>${match.venue.split(",")[0]}</span><span class="data-badge ${verification}">${verification === "verified" ? "Disahkan" : verification === "reported" ? "Dilaporkan" : "Belum disahkan"}</span></div>
    </article>`;
}

function renderHomeMatches() {
  const featured = matches.find((match) => match.status === "live") || matches.find((match) => match.status === "upcoming");
  if (!featured) return;
  const home = team(featured.home, featured.homeLabel);
  const away = team(featured.away, featured.awayLabel);
  document.querySelector("#featured-match").innerHTML = `
    <div class="featured-team"><span class="flag">${home.flag}</span><div><strong>${home.name}</strong><small>${home.code} · Kumpulan ${featured.group}</small></div></div>
    <div class="featured-center ${featured.status === "live" ? "is-live" : ""}"><span class="versus">${featured.status === "live" ? featured.minute || "LIVE" : "vs"}</span><strong>${featured.status === "live" ? `${featured.score[0]} : ${featured.score[1]}` : featured.time}</strong><small>${featured.date}<br>${featured.venue.split(",")[0]}</small></div>
    <div class="featured-team away"><span class="flag">${away.flag}</span><div><strong>${away.name}</strong><small>${away.code} · Kumpulan ${featured.group}</small></div></div>`;

  const preview = [...matches].sort((a, b) => (a.status === "live" ? -1 : 0) - (b.status === "live" ? -1 : 0)).slice(0, 3);
  document.querySelector("#match-preview-grid").innerHTML = preview.map(matchCard).join("");
}

function renderGroupTabs(targetId, includeAll = false) {
  const target = document.querySelector(targetId);
  const buttons = [
    ...(includeAll ? [{ value: "all", label: "Semua" }] : []),
    ...groupLetters.map((letter) => ({ value: letter, label: `Kumpulan ${letter}` })),
  ];
  target.innerHTML = buttons.map(({ value, label }) =>
    `<button data-group="${value}" class="${(includeAll ? selectedTeamGroup : selectedHomeGroup) === value ? "active" : ""}">${label}</button>`,
  ).join("");
}

function teamTile(data) {
  const [name, code, flag, rank] = data;
  const group = teamByCode[code].group;
  return `
    <article class="team-tile" data-team-code="${code}" role="button" tabindex="0" aria-label="Lihat skuad ${name}">
      <button class="favorite ${favorites.has(code) ? "active" : ""}" data-favorite="${code}" aria-label="Tandakan ${name} sebagai kegemaran">★</button>
      <span class="team-rank">${String(rank).padStart(2, "0")}</span>
      <span class="flag">${flag}</span>
      <h3>${name}</h3>
      <p>${code} · Kumpulan ${group} · Ranking ${rank}</p>
    </article>`;
}

function renderHomeTeams() {
  renderGroupTabs("#home-group-tabs");
  document.querySelector("#home-team-strip").innerHTML = groups[selectedHomeGroup].map(teamTile).join("");
}

function renderAllTeams() {
  renderGroupTabs("#team-page-tabs", true);
  const query = document.querySelector("#team-search").value.trim().toLowerCase();
  const list = Object.entries(groups)
    .filter(([group]) => selectedTeamGroup === "all" || group === selectedTeamGroup)
    .flatMap(([, teams]) => teams)
    .filter(([name, code]) => name.toLowerCase().includes(query) || code.toLowerCase().includes(query));
  document.querySelector("#all-teams-grid").innerHTML =
    list.length ? list.map(teamTile).join("") : `<div class="empty-state">Tiada pasukan ditemui.</div>`;
}

function newsCard(article) {
  const sources = Array.isArray(article.sources) ? article.sources : [];
  return `
    <article class="news-card">
      <div class="news-meta"><span class="news-category">${article.category}</span><span>${article.date}</span></div>
      <h3>${article.title}</h3>
      <p>${article.excerpt}</p>
      ${article.analysis ? `<p class="news-analysis-text">${article.analysis}</p>` : ""}
      ${sources.length ? `
        <div class="news-sources">
          <span>${sources.length} sumber · Keyakinan ${article.confidence || "belum dinilai"}</span>
          ${sources.map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.name} ↗</a>`).join("")}
        </div>` : ""}
    </article>`;
}

function renderNewsStatus() {
  const title = document.querySelector("#news-update-title");
  const summary = document.querySelector("#news-update-summary");
  if (!title || !summary) return;
  const updated = newsPayload.metadata?.updatedAt
    ? new Intl.DateTimeFormat("ms-MY", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kuala_Lumpur" }).format(new Date(newsPayload.metadata.updatedAt))
    : "tidak tersedia";
  const sourceCount = newsPayload.metadata?.sourceCount || new Set(news.flatMap((article) => article.sources?.map((source) => source.name) || [])).size;
  title.textContent = newsPayload.metadata?.status === "verified" ? "Analisis terkini telah diterbitkan" : "Menggunakan berita sandaran";
  summary.textContent = `Kemas kini ${updated} · ${sourceCount} sumber berita dirujuk · ${newsPayload.metadata?.methodology || ""}`;
}

function renderNews() {
  document.querySelector("#home-news-grid").innerHTML = news.slice(0, 3).map(newsCard).join("");
  const filtered = news.filter((article) => selectedNewsCategory === "all" || article.category === selectedNewsCategory);
  document.querySelector("#all-news-grid").innerHTML = filtered.map(newsCard).join("");
  renderNewsStatus();
}

function refreshNewsData() {
  const previous = document.querySelector("#news-data-refresh");
  if (previous) previous.remove();
  const script = document.createElement("script");
  script.id = "news-data-refresh";
  script.src = `data/news-data.js?ts=${Date.now()}`;
  script.onload = () => {
    if (!window.SEPAK26_NEWS?.articles?.length) return;
    newsPayload = window.SEPAK26_NEWS;
    news = newsPayload.articles;
    renderNews();
  };
  document.head.appendChild(script);
}

function renderMatchFilters() {
  const select = document.querySelector("#match-group-filter");
  select.innerHTML = `<option value="all">Semua kumpulan</option>${groupLetters.map((letter) => `<option value="${letter}">Kumpulan ${letter}</option>`).join("")}`;
}

function renderSchedule() {
  const filtered = matches.filter((match) =>
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
      return `
        <article class="schedule-row ${match.status === "live" ? "is-live" : ""}" data-match-id="${match.id}" tabindex="0">
          <div class="schedule-meta"><span>Kumpulan ${match.group}</span><span>${match.status === "finished" ? "Tamat" : match.status === "live" ? "Langsung" : `${match.time} ${match.timeZoneLabel || "MYT"}`}</span><span class="data-badge ${verification}">${verification === "verified" ? "Disahkan" : verification === "reported" ? "Dilaporkan" : "Belum disahkan"}</span></div>
          <div class="schedule-versus">
            <div class="schedule-team"><strong>${home.name}</strong><span class="flag">${home.flag}</span></div>
            <div class="schedule-score">${score}</div>
            <div class="schedule-team away"><strong>${away.name}</strong><span class="flag">${away.flag}</span></div>
          </div>
          <div class="schedule-venue">${match.venue}<br><strong>Lihat sumber →</strong></div>
        </article>`;
    }).join("")}
  `).join("") || `<div class="empty-state">Tiada perlawanan bagi pilihan ini.</div>`;
}

function openMatchDialog(id) {
  const match = matches.find((item) => item.id === Number(id));
  if (!match) return;
  const home = team(match.home, match.homeLabel);
  const away = team(match.away, match.awayLabel);
  const hasScore = ["finished", "live"].includes(match.status);
  const score = hasScore ? `${match.score[0]} — ${match.score[1]}` : match.time;
  const stats = match.stats ? Object.entries(match.stats).map(([label, values]) => {
    const total = values[0] + values[1] || 1;
    return `
      <div class="stat-row">
        <strong>${values[0]}</strong>
        <div><div>${label}</div><div class="stat-bars"><span><i style="width:${(values[0] / total) * 100}%"></i></span><span><i style="width:${(values[1] / total) * 100}%"></i></span></div></div>
        <strong>${values[1]}</strong>
      </div>`;
  }).join("") : "";
  const sourceNames = (match.verification?.sourceIds || []).map((id) => DATA_SOURCES.find((source) => source.id === id)).filter(Boolean);
  document.querySelector("#match-dialog-content").innerHTML = `
    <div class="dialog-head">
      <div class="match-card-head"><span>Kumpulan ${match.group} · ${match.date}</span><span>${match.status === "finished" ? "Tamat" : match.status === "live" ? "Langsung" : "Akan datang"}</span></div>
      <div class="dialog-teams">
        <div class="dialog-team"><span class="flag">${home.flag}</span><strong>${home.name}</strong></div>
        <div class="dialog-score">${score}</div>
        <div class="dialog-team"><span class="flag">${away.flag}</span><strong>${away.name}</strong></div>
      </div>
    </div>
    <div class="stats-panel">
      <h3>Statistik perlawanan</h3>
      ${stats || `<div class="stats-unavailable"><strong>Belum dapat disahkan.</strong><br>Ketiga-tiga sumber semasa tidak menyediakan metrik silang seperti penguasaan bola, percubaan dan sepakan sudut. Statistik demonstrasi tidak dipaparkan sebagai data sebenar.</div>`}
      <div class="provenance-list">
        ${sourceNames.map((source) => `<div><span>${source.name}</span><strong>${source.role}</strong></div>`).join("") || `<div><span>Fallback tempatan</span><strong>Belum disahkan</strong></div>`}
      </div>
      <p class="match-card-foot"><span>${match.venue}</span><span>${match.time} ${match.timeZoneLabel || "MYT"}</span></p>
    </div>`;
  document.querySelector("#match-dialog").showModal();
}

function navigate(route) {
  const validRoute = ["home", "matches", "standings", "teams", "stadiums", "news"].includes(route) ? route : "home";
  document.querySelectorAll(".page").forEach((page) => page.classList.toggle("active", page.dataset.page === validRoute));
  document.querySelectorAll(".main-nav a").forEach((link) => link.classList.toggle("active", link.dataset.route === validRoute));
  // Sync bottom nav active state
  document.querySelectorAll(".bottom-nav-item").forEach((item) => item.classList.toggle("active", item.dataset.route === validRoute));
  document.querySelector(".main-nav").classList.remove("open");
  document.body.classList.remove("menu-open");
  const menuBtn = document.querySelector(".menu-button");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
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
  const newsResults = news
    .filter((item) => item.title.toLowerCase().includes(normalized))
    .slice(0, 3)
    .map((item) => ({ label: item.title, type: item.category, route: "news" }));
  const stadiumResults = stadiums
    .filter((item) => `${item.name} ${item.fifaName} ${item.city}`.toLowerCase().includes(normalized))
    .slice(0, 3)
    .map((item) => ({ label: `🏟 ${item.name}`, type: `${item.city} · ${item.capacity.toLocaleString("en-US")}`, route: "stadiums" }));
  const results = [...teamResults, ...stadiumResults, ...newsResults];
  target.innerHTML = results.length
    ? results.map((item) => `<a class="search-result" href="#${item.route}"><strong>${item.label}</strong><span>${item.type}</span></a>`).join("")
    : `<div class="empty-state">Tiada hasil ditemui.</div>`;
}

function initEvents() {
  window.addEventListener("hashchange", () => navigate(location.hash.slice(1)));
  document.querySelector(".menu-button").addEventListener("click", (event) => {
    const nav = document.querySelector(".main-nav");
    nav.classList.toggle("open");
    const isOpen = nav.classList.contains("open");
    document.body.classList.toggle("menu-open", isOpen);
    event.currentTarget.setAttribute("aria-expanded", String(isOpen));
    event.currentTarget.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  });
  document.querySelector("[data-scroll-target]").addEventListener("click", (event) => {
    document.querySelector(`#${event.currentTarget.dataset.scrollTarget}`).scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#home-group-tabs").addEventListener("click", (event) => {
    if (!event.target.dataset.group) return;
    selectedHomeGroup = event.target.dataset.group;
    renderHomeTeams();
  });
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
  document.querySelector("#news-filter").addEventListener("click", (event) => {
    if (!event.target.dataset.category) return;
    selectedNewsCategory = event.target.dataset.category;
    document.querySelectorAll("#news-filter button").forEach((button) => button.classList.toggle("active", button === event.target));
    renderNews();
  });
  document.querySelector(".team-dialog-close").addEventListener("click", () => document.querySelector("#team-dialog").close());

  document.body.addEventListener("click", (event) => {
    const teamTarget = event.target.closest("[data-team-code]");
    if (teamTarget && !event.target.closest("[data-favorite]")) openTeamDialog(teamTarget.dataset.teamCode);
    const matchTarget = event.target.closest("[data-match-id]");
    if (matchTarget) openMatchDialog(matchTarget.dataset.matchId);
    const favorite = event.target.closest("[data-favorite]");
    if (favorite) {
      event.stopPropagation();
      const code = favorite.dataset.favorite;
      favorites.has(code) ? favorites.delete(code) : favorites.add(code);
      localStorage.setItem("sepak26-favorites", JSON.stringify([...favorites]));
      renderHomeTeams();
      renderAllTeams();
    }
    const stadiumTarget = event.target.closest("[data-stadium-id]");
    if (stadiumTarget) openStadiumDialog(stadiumTarget.dataset.stadiumId);
  });
  document.querySelector(".dialog-close").addEventListener("click", () => document.querySelector("#match-dialog").close());
  document.querySelector(".stadium-dialog-close").addEventListener("click", () => document.querySelector("#stadium-dialog").close());
  const overlay = document.querySelector(".search-overlay");
  document.querySelector(".search-trigger").addEventListener("click", () => {
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    setTimeout(() => document.querySelector("#global-search").focus(), 50);
  });
  document.querySelector(".search-close").addEventListener("click", () => {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
  });
  document.querySelector("#global-search").addEventListener("input", (event) => globalSearch(event.target.value));
  document.querySelector("#refresh-data").addEventListener("click", loadVerifiedData);
  document.querySelector("#search-results").addEventListener("click", () => {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
      const nav = document.querySelector(".main-nav");
      nav.classList.remove("open");
      document.body.classList.remove("menu-open");
      const mb = document.querySelector(".menu-button");
      if (mb) { mb.setAttribute("aria-expanded", "false"); mb.setAttribute("aria-label", "Buka menu"); }
    }
    if ((event.key === "Enter" || event.key === " ") && event.target.closest("[data-team-code]")) {
      event.preventDefault();
      openTeamDialog(event.target.closest("[data-team-code]").dataset.teamCode);
    }
  });
}

function init() {
  renderTicker();
  renderHomeMatches();
  renderHomeTeams();
  renderGroupTabs("#team-page-tabs", true);
  renderAllTeams();
  renderNews();
  renderMatchFilters();
  renderSchedule();
  renderLiveCenter();
  renderStandings();
  renderStadiums();
  renderSourceLedger();
  initEvents();
  navigate(location.hash.slice(1) || "home");
  loadVerifiedData();
  window.setInterval(loadVerifiedData, 5 * 60 * 1000);
  window.setInterval(refreshNewsData, 5 * 60 * 1000);
}

init();
