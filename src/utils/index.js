export const pokemonList = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise",
    "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot",
    "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash",
    "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix",
    "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect",
    "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape",
    "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke",
    "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem",
    "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio",
    "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee",
    "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee",
    "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan",
    "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz",
    "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon",
    "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno",
    "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew", "Chikorita", "Bayleef", "Meganium", 
    "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret", "Hoothoot", 
    "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou", "Lanturn", "Pichu", "Cleffa", 
    "Igglybuff", "Togepi", "Togetic", "Natu", "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill", 
    "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom", "Sunkern", "Sunflora", 
    "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", 
    "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull", "Granbull", "Qwilfish", 
    "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring", "Slugma", "Magcargo", "Swinub", 
    "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom", 
    "Kingdra", "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Smoochum", 
    "Elekid", "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", 
    "Lugia", "Ho-Oh", "Celebi", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", 
    "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", 
    "Cascoon", "Dustox", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", 
    "Wingull", "Pelipper", "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", 
    "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", 
    "Makuhita", "Hariyama", "Azurill", "Nosepass", "Skitty", "Delcatty", "Sableye", "Mawile", "Aron", "Lairon", 
    "Aggron", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle", "Minun", "Volbeat", "Illumise", 
    "Roselia", "Gulpin", "Swalot", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", "Torkoal", 
    "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", "Flygon", "Cacnea", "Cacturne", "Swablu", "Altaria", 
    "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Baltoy", 
    "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon", "Shuppet", 
    "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol", "Wynaut", "Snorunt", "Glalie", "Spheal", 
    "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon", "Shelgon", 
    "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Latias", "Latios", 
    "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", 
    "Infernape", "Piplup", "Prinplup", "Empoleon", "Starly", "Staravia", "Staraptor", "Bidoof", "Bibarel", "Kricketot", 
    "Kricketune", "Shinx", "Luxio", "Luxray", "Budew", "Roserade", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", 
    "Burmy", "Wormadam", "Mothim", "Combee", "Vespiquen", "Pachirisu", "Buizel", "Floatzel", "Cherubi", "Cherrim", 
    "Shellos", "Gastrodon", "Ambipom", "Drifloon", "Drifblim", "Buneary", "Lopunny", "Mismagius", "Honchkrow", 
    "Glameow", "Purugly", "Chingling", "Stunky", "Skuntank", "Bronzor", "Bronzong", "Bonsly", "Mime Jr.", "Happiny", 
    "Chatot", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Riolu", "Lucario", "Hippopotas", "Hippowdon", 
    "Skorupi", "Drapion", "Croagunk", "Toxicroak", "Carnivine", "Finneon", "Lumineon", "Mantyke", "Snover", "Abomasnow", 
    "Weavile", "Magnezone", "Lickilicky", "Rhyperior", "Tangrowth", "Electivire", "Magmortar", "Togekiss", "Yanmega", 
    "Leafeon", "Glaceon", "Gliscor", "Mamoswine", "Porygon-Z", "Gallade", "Probopass", "Dusknoir", "Froslass", 
    "Rotom", "Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", "Phione", 
    "Manaphy", "Darkrai", "Shaymin", "Arceus", "Victini", "Snivy", "Servine", "Serperior", "Tepig", "Pignite", "Emboar", 
    "Oshawott", "Dewott", "Samurott", "Patrat", "Watchog", "Lillipup", "Herdier", "Stoutland", "Purrloin", "Liepard", 
    "Pansage", "Simisage", "Pansear", "Simisear", "Panpour", "Simipour", "Munna", "Musharna", "Pidove", "Tranquill", 
    "Unfezant", "Blitzle", "Zebstrika", "Roggenrola", "Boldore", "Gigalith", "Woobat", "Swoobat", "Drilbur", "Excadrill", 
    "Audino", "Timburr", "Gurdurr", "Conkeldurr", "Tympole", "Palpitoad", "Seismitoad", "Throh", "Sawk", "Sewaddle", 
    "Swadloon", "Leavanny", "Venipede", "Whirlipede", "Scolipede", "Cottonee", "Whimsicott", "Petilil", "Lilligant", 
    "Basculin", "Sandile", "Krokorok", "Krookodile", "Darumaka", "Darmanitan", "Maractus", "Dwebble", "Crustle", "Scraggy", 
    "Scrafty", "Sigilyph", "Yamask", "Cofagrigus", "Tirtouga", "Carracosta", "Archen", "Archeops", "Trubbish", "Garbodor", 
    "Zorua", "Zoroark", "Minccino", "Cinccino", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus", 
    "Ducklett", "Swanna", "Vanillite", "Vanillish", "Vanilluxe", "Deerling", "Sawsbuck", "Emolga", "Karrablast", 
    "Escavalier", "Foongus", "Amoonguss", "Frillish", "Jellicent", "Alomomola", "Joltik", "Galvantula", "Ferroseed", 
    "Ferrothorn", "Klink", "Klang", "Klinklang", "Tynamo", "Eelektrik", "Eelektross", "Elgyem", "Beheeyem", "Litwick", 
    "Lampent", "Chandelure", "Axew", "Fraxure", "Haxorus", "Cubchoo", "Beartic", "Cryogonal", "Shelmet", "Accelgor", 
    "Stunfisk", "Mienfoo", "Mienshao", "Druddigon", "Golett", "Golurk", "Pawniard", "Bisharp", "Bouffalant", "Rufflet", 
    "Braviary", "Vullaby", "Mandibuzz", "Heatmor", "Durant", "Deino", "Zweilous", "Hydreigon", "Larvesta", "Volcarona", 
    "Cobalion", "Terrakion", "Virizion", "Tornadus", "Thundurus", "Reshiram", "Zekrom", "Landorus", "Kyurem", "Keldeo", 
    "Meloetta", "Genesect", "Chespin", "Quilladin", "Chesnaught", "Fennekin", "Braixen", "Delphox", "Froakie", "Frogadier", 
    "Greninja", "Bunnelby", "Diggersby", "Fletchling", "Fletchinder", "Talonflame", "Scatterbug", "Spewpa", "Vivillon", 
    "Litleo", "Pyroar", "Flabébé", "Floette", "Florges", "Skiddo", "Gogoat", "Pancham", "Pangoro", "Furfrou", "Espurr", 
    "Meowstic", "Honedge", "Doublade", "Aegislash", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Inkay", "Malamar", 
    "Binacle", "Barbaracle", "Skrelp", "Dragalge", "Clauncher", "Clawitzer", "Helioptile", "Heliolisk", "Tyrunt", "Tyrantrum", 
    "Amaura", "Aurorus", "Sylveon", "Hawlucha", "Dedenne", "Carbink", "Goomy", "Sliggoo", "Goodra", "Klefki", "Phantump", 
    "Trevenant", "Pumpkaboo", "Gourgeist", "Bergmite", "Avalugg", "Noibat", "Noivern", "Xerneas", "Yveltal", "Zygarde", 
    "Diancie", "Hoopa", "Volcanion", "Rowlet", "Dartrix", "Decidueye", "Litten", "Torracat", "Incineroar", "Popplio", "Brionne", 
    "Primarina", "Pikipek", "Trumbeak", "Toucannon", "Yungoos", "Gumshoos", "Grubbin", "Charjabug", "Vikavolt", "Crabrawler", 
    "Crabominable", "Oricorio", "Cutiefly", "Ribombee", "Rockruff", "Lycanroc", "Wishiwashi", "Mareanie", "Toxapex", "Mudbray", 
    "Mudsdale", "Dewpider", "Araquanid", "Fomantis", "Lurantis", "Morelull", "Shiinotic", "Salandit", "Salazzle", "Stufful", 
    "Bewear", "Bounsweet", "Steenee", "Tsareena", "Comfey", "Oranguru", "Passimian", "Wimpod", "Golisopod", "Sandygast", 
    "Palossand", "Pyukumuku", "Type: Null", "Silvally", "Minior", "Komala", "Turtonator", "Togedemaru", "Mimikyu", "Bruxish", 
    "Drampa", "Dhelmise", "Jangmo-o", "Hakamo-o", "Kommo-o", "Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini", "Cosmog", 
    "Cosmoem", "Solgaleo", "Lunala", "Nihilego", "Buzzwole", "Pheromosa", "Xurkitree", "Celesteela", "Kartana", "Guzzlord", 
    "Necrozma", "Magearna", "Marshadow", "Poipole", "Naganadel", "Stakataka", "Blacephalon", "Zeraora", "Meltan", "Melmetal",
    "Grookey", "Thwackey", "Rillaboom", "Scorbunny", "Raboot", "Cinderace", "Sobble", "Drizzile", "Inteleon",
    "Skwovet", "Greedent", "Rookidee", "Corvisquire", "Corviknight", "Blipbug", "Dottler", "Orbeetle", "Nickit", "Thievul",
    "Gossifleur", "Eldegoss", "Wooloo", "Dubwool", "Chewtle", "Drednaw", "Yamper", "Boltund", "Rolycoly", "Carkol", "Coalossal",
    "Applin", "Flapple", "Appletun", "Silicobra", "Sandaconda", "Cramorant", "Arrokuda", "Barraskewda", "Toxel", "Toxtricity",
    "Sizzlipede", "Centiskorch", "Clobbopus", "Grapploct", "Sinistea", "Polteageist", "Hatenna", "Hattrem", "Hatterene", 
    "Impidimp", "Morgrem", "Grimmsnarl", "Obstagoon", "Perrserker", "Cursola", "Sirfetch'd", "Mr. Rime", "Runerigus", 
    "Milcery", "Alcremie", "Falinks", "Pincurchin", "Snom", "Frosmoth", "Stonjourner", "Eiscue", "Indeedee", "Morpeko", 
    "Cufant", "Copperajah", "Dracozolt", "Arctozolt", "Dracovish", "Arctovish", "Duraludon", "Dreepy", "Drakloak", "Dragapult", 
    "Zacian", "Zamazenta", "Eternatus", "Kubfu", "Urshifu", "Zarude", "Regieleki", "Regidrago", "Glastrier", "Spectrier", 
    "Calyrex", "Wyrdeer", "Kleavor", "Ursaluna", "Basculegion", "Sneasler", "Overqwil", "Enamorus", "Sprigatito", "Floragato", 
    "Meowscarada", "Fuecoco", "Crocalor", "Skeledirge", "Quaxly", "Quaxwell", "Quaquaval", "Lechonk", "Oinkologne", 
    "Tarountula", "Spidops", "Nymble", "Lokix", "Pawmi", "Pawmo", "Pawmot", "Tandemaus", "Maushold", "Fidough", "Dachsbun", 
    "Smoliv", "Dolliv", "Arboliva", "Squawkabilly", "Nacli", "Naclstack", "Garganacl", "Charcadet", "Armarouge", "Ceruledge", 
    "Tadbulb", "Bellibolt", "Wattrel", "Kilowattrel", "Maschiff", "Mabosstiff", "Shroodle", "Grafaiai", "Bramblin", 
    "Brambleghast", "Toedscool", "Toedscruel", "Klawf", "Capsakid", "Scovillain", "Rellor", "Rabsca", "Flittle",
    "Espathra", "Tinkatink", "Tinkatuff", "Tinkaton", "Wiglett", "Wugtrio", "Bombirdier", "Finizen", "Palafin", "Varoom", 
    "Revavroom", "Cyclizar", "Orthworm", "Glimmet", "Glimmora", "Greavard", "Houndstone", "Flamigo", "Cetoddle", "Cetitan", 
    "Veluza", "Dondozo", "Tatsugiri", "Annihilape", "Clodsire", "Farigiraf", "Dudunsparce", "Kingambit", "Great Tusk", 
    "Scream Tail", "Brute Bonnet", "Flutter Mane", "Slither Wing", "Sandy Shocks", "Iron Treads", "Iron Bundle", "Iron Hands", 
    "Iron Jugulis", "Iron Moth", "Iron Thorns", "Frigibax", "Arctibax", "Baxcalibur", "Gimmighoul", "Gholdengo", "Wo-Chien", 
    "Chien-Pao", "Ting-Lu", "Chi-Yu", "Roaring Moon", "Iron Valiant", "Koraidon", "Miraidon", "Walking Wake", "Iron Leaves", 
    "Dipplin", "Poltchageist", "Sinistcha", "Okidogi", "Munkidori", "Fezandipiti", "Ogerpon", "Archaludon", "Hydrapple", 
    "Gouging Fire", "Raging Bolt", "Iron Boulder", "Iron Crown", "Terapagos", "Pecharunt" 
]

export const pokemonFormList = [
    "Rattata", "Rattata-alola", "Raticate", "Raticate-alola", "Raichu", "Raichu-alola", "Sandshrew", "Sandshrew-alola", 
    "Sandslash", "Sandslash-alola", "Vulpix", "Vulpix-alola", "Ninetales", "Ninetales-alola", "Diglett", "Diglett-alola", 
    "Dugtrio", "Dugtrio-alola", "Meowth", "Meowth-alola", "Meowth-galar", "Persian", "Persian-alola", "Growlithe", 
    "Growlithe-hisui", "Arcanine", "Arcanine-hisui", "Geodude", "Geodude-alola", "Graveler", "Graveler-alola", "Golem", 
    "Golem-alola", "Ponyta", "Ponyta-galar", "Rapidash", "Rapidash-galar", "Slowpoke", "Slowpoke-galar", "Slowbro", 
    "Slowbro-galar", "Farfetchd", "Farfetchd-galar", "Grimer", "Grimer-alola", "Muk", "Muk-alola", "Voltorb", "Voltorb-hisui", 
    "Electrode", "Electrode-hisui", "Exeggutor", "Exeggutor-alola", "Marowak", "Marowak-alola", "Weezing", "Weezing-galar", 
    "Mr-mime", "Mr-mime-galar", "Tauros", "Tauros-paldea-combat-breed", "Tauros-paldea-blaze-breed", "Tauros-paldea-aqua-breed",
    "Articuno", "Articuno-galar", "Zapdos", "Zapdos-galar", "Moltres", "Moltres-galar", "Typhlosion", "Typhlosion-hisui", "Wooper", 
    "Wooper-paldea", "Slowking", "Slowking-galar", "Qwilfish", "Qwilfish-hisui", "Sneasel", "Sneasel-hisui", "Corsola", 
    "Corsola-galar", "Zigzagoon", "Zigzagoon-galar", "Linoone", "Linoone-galar", "Castform", "Castform-sunny", "Castform-rainy", 
    "Castform-snowy", "Deoxys-normal", "Deoxys-attack", "Deoxys-defense", "Deoxys-speed", "Wormadam-plant", "Wormadam-sandy", 
    "Wormadam-trash", "Rotom", "Rotom-heat", "Rotom-wash", "Rotom-frost", "Rotom-fan", "Rotom-mow", "Dialga", "Dialga-origin", "Palkia", 
    "Palkia-origin", "Giratina-altered", "Giratina-origin", "Shaymin-land", "Shaymin-sky", "Samurott", "Samurott-hisui", "Lilligant", 
    "Lilligant-hisui", "Basculin-red-striped", "Basculin-blue-striped", "Basculin-white-striped", "Darumaka", "Darmanitan-standard", 
    "Darmanitan-zen", "Darmanitan-galar-standard", "Darmanitan-galar-zen", "Yamask", "Yamask-galar", "Zorua", "Zorua-hisui", "Zoroark", 
    "Zoroark-hisui", "Stunfisk", "Stunfisk-galar", "Braviary", "Braviary-hisui", "Tornadus-incarnate", "Tornadus-therian", 
    "Thundurus-incarnate", "Thundurus-therian", "Landorus-incarnate", "Landorus-therian", "Kyurem", "Kyurem-black", "Kyurem-white", 
    "Keldeo-ordinary", "Keldeo-resolute", "Meloetta-aria", "Meowstic-male", "Meowstic-female", "Aegislash-shield", "Aegislash-blade", 
    "Sliggoo", "Sliggoo-hisui", "Goodra", "Goodra-hisui", "Avalugg", "Avalugg-hisui", "Zygarde-50", "Zygarde-10", "Zygarde-complete", 
    "Hoopa", "Hoopa-unbound", "Decidueye", "Decidueye-hisui", "Oricorio-baile", "Oricorio-pau", "Oricorio-pom-pom", "Oricorio-sensu", 
    "Lycanroc-midday", "Lycanroc-midnight", "Lycanroc-dusk", "Wishiwashi-solo", "Wishiwashi-school", "Minior-red-meteor", 
    "Minior-orange-meteor", "Minior-yellow-meteor", "Minior-green-meteor", "Minior-blue-meteor", "Minior-indigo-meteor", 
    "Minior-violet-meteor", "Minior-red", "Minior-orange", "Minior-yellow", "Minior-green", "Minior-blue", "Minior-indigo", "Minior-violet",   
    "Mimikyu-disguised", "Mimikyu-busted", "Necrozma", "Necrozma-dusk", "Necrozma-dawn", "Necrozma-ultra", "Toxtricity-amped", 
    "Toxtricity-low-key", "Eiscue-ice", "Eiscue-noice", "Indeedee-male", "Indeedee-female", "Morpeko-full-belly", "Morpeko-hangry", 
    "Zacian", "Zacian-crowned", "Zamazenta", "Zamazenta-crowned", "Eternatus", "Eternatus-eternamax", "Urshifu-single-strike", 
    "Urshifu-rapid-strike", "Ursaluna", "Ursaluna-bloodmoon", "Basculegion-male", "Basculegion-female", "Enamorus-incarnate", 
    "Enamorus-therian", "Calyrex", "Calyrex-ice", "Calyrex-shadow", "Oinkologne-male", "Oinkologne-female", "Maushold-family-of-four", 
    "Maushold-family-of-three", "Squawkabilly-green-plumage", "Squawkabilly-blue-plumage", "Squawkabilly-yellow-plumage", 
    "Squawkabilly-white-plumage", "Palafin-zero", "Palafin-hero", "Tatsugiri-curly", "Tatsugiri-droopy", "Tatsugiri-stretchy", 
    "Dudunsparce-two-segment", "Dudunsparce-three-segment", "Gimmighoul", "Gimmighoul-roaming", "Ogerpon", "Ogerpon-wellspring-mask", 
    "Ogerpon-hearthflame-mask", "Ogerpon-cornerstone-mask", "Terapagos", "Terapagos-terastal", "Terapagos-stellar", 
]

export const alolanPokemonList = [
    "Rattata", "Raticate", "Raichu", "Sandshrew", "Sandslash", "Vulpix", "Ninetales", "Diglett", "Dugtrio", "Meowth", 
    "Persian", "Geodude", "Graveler", "Golem", "Grimer", "Muk", "Exeggutor", "Marowak", "Decidueye-hisui"
]

export const galarianPokemonList = [
    "Meowth", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Farfetchd", "Weezing", "Mr-mime", "Articuno", "Zapdos", 
    "Moltres", "Slowking", "Corsola", "Zigzagoon", "Linoone", "Darumaka", "Darmanitan", "Yamask", "Stunfisk"
]

export const hisuianPokemonList = [
    "Growlithe", "Arcanine", "Voltorb", "Electrode", "Typhlosion", "Qwilfish", "Sneasel", "Samurott", "Lilligant", "Zorua", 
    "Zoroark", "Braviary", "Sliggoo", "Goodra", "Avalugg", "Decidueye"
]

export const paldeanPokemonList = [
    "Wooper"
]

export const unovanPokemonList = [
    "Yamask-galar", "Lilligant-hisui", "Zorua-hisui", "Zoroark-hisui", "Stunfisk-galar", "Braviary-hisui"
]

export const kalosPokemonList = [
    "Avalugg-hisui", "Sliggoo-hisui", "Goodra-hisui"
]

export const malePokemonList = [
    "Meowstic-male", "Indeedee-male", "Basculegion-male", "Oinkologne-male"
]

export const femalePokemonList = [
    "Meowstic-female", "Indeedee-female", "Basculegion-female", "Oinkologne-female"
]

export const originPokemonList = [
    "Dialga", "Palkia", "Giratina-altered"
]


export const therianPokemonList = [
    "Tornadus-incarnate", "Thundurus-incarnate", "Landorus-incarnate", "Enamorus-incarnate"
]

export const incarnatePokemonList = [
    "Tornadus-therian", "Thundurus-therian", "Landorus-therian", "Enamorus-therian"
]

export const megaPokemonList = [

]

export const regularPokemonList = [
    
]

export const kantoPokemonList = [
    "Rattata-alola", "Raticate-alola", "Raichu-alola", "Sandshrew-alola", "Sandslash-alola", "Vulpix-alola", "Ninetales-alola", 
    "Diglett-alola", "Dugtrio-alola", "Persian-alola", "Growlithe-hisui", "Arcanine-hisui", "Geodude-alola", "Graveler-alola", 
    "Golem-alola", "Ponyta-galar", "Rapidash-galar", "Slowpoke-galar", "Slowbro-galar", "Farfetchd-galar", "Grimer-alola", 
    "Muk-alola", "Voltorb-hisui", "Electrode-hisui", "Exeggutor-alola", "Marowak-alola", "Weezing-galar", "Mr-mime-galar", 
    "Articuno-galar", "Zapdos-galar", "Moltres-galar"
]

export const johtoPokemonList = [
    "Typhlosion-hisui", "Wooper-paldea", "Slowking-galar", "Quilfish-hisui", "Sneasel-hisui", "Corsola-galar"
]

export const hoennPokemonList = [
    "Zigzagoon-galar", "Linoone-galar", 
]

export const sinnohPokemonList = [
    "Dialga-origin", "Palkia-origin", "Giratina-origin"
]

export const pokemonTypeColors = {
    normal: {
        color: "#6C6C6C",
        background: "#A8A77A"
    },
    fire: {
        color: "#FFFFFF",
        background: "#EE8130"
    },
    water: {
        color: "#FFFFFF",
        background: "#6390F0"
    },
    electric: {
        color: "#000000",
        background: "#F7D02C"
    },
    grass: {
        color: "#FFFFFF",
        background: "#7AC74C"
    },
    ice: {
        color: "#000000",
        background: "#96D9D6"
    },
    fighting: {
        color: "#FFFFFF",
        background: "#C22E28"
    },
    poison: {
        color: "#FFFFFF",
        background: "#A33EA1"
    },
    ground: {
        color: "#FFFFFF",
        background: "#E2BF65"
    },
    flying: {
        color: "#000000",
        background: "#A98FF3"
    },
    psychic: {
        color: "#FFFFFF",
        background: "#F95587"
    },
    bug: {
        color: "#000000",
        background: "#A6B91A"
    },
    rock: {
        color: "#FFFFFF",
        background: "#B6A136"
    },
    ghost: {
        color: "#FFFFFF",
        background: "#735797"
    },
    dragon: {
        color: "#FFFFFF",
        background: "#6F35FC"
    },
    dark: {
        color: "#FFFFFF",
        background: "#705746"
    },
    steel: {
        color: "#000000",
        background: "#B7B7CE"
    },
    fairy: {
        color: "#000000",
        background: "#D685AD"
    }
}


export function getPokedexNumber(index) {
    return index + 1
   
}

export function getFullPokedexNumber(index) {
    return `${index + 1 > 99 ? index + 1 : index + 1 > 9 ? `0${index + 1}` : `00${index + 1}`}`
}