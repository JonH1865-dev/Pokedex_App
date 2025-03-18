import Modal from "./Modal";
import { alolanPokemonList, galarianPokemonList, hisuianPokemonList, megaPokemonList, paldeanPokemonList, regularPokemonList, therianPokemonList, kantoPokemonList, 
    johtoPokemonList, hoennPokemonList, originPokemonList, sinnohPokemonList, 
    unovanPokemonList,
    incarnatePokemonList,
    malePokemonList,
    femalePokemonList,
    kalosPokemonList} from "../utils";

export default function FormCard({ selectedPokemon, setSelectedPokemon, name, capitalizeFirstLetter, handleCloseModal}) {
    const formsMap = {
        18: 10090, 10090: 18, 19: 10091, 10091: 19, 25: 10099, 10099: 25, 26: 10100, 10100: 26, 27: 10101, 10101: 27, 36: 10102, 10102: 36, 37: 10103, 10103: 37, 
        49: 10104, 10104: 49, 50: 10105, 10105: 50, 52: 10107, 10107: 52, 73: 10108, 10108: 73, 74: 10109, 10109: 74, 75: 10110, 10110: 75, 87: 10111, 10111: 87,
        88: 10112, 10112: 88, 102: 10113, 10113: 102, 104: 10114, 10114: 104, 76: 10161, 10161: 76, 77: 10162, 10162: 77, 78: 10163, 10163: 78, 79: 10164, 10164: 79, 
        82: 10165, 10165: 82, 109: 10166, 10166: 109, 121: 10167, 10167: 121, 143: 10168, 10168: 143, 144: 10169, 10169: 144, 145: 10170, 10170: 145, 193: 10252, 
        198: 10171, 10171: 198, 221: 10172, 10172: 221, 262: 10173, 10173: 262, 263: 10174, 10174: 263, 553: 10175, 10175: 553, 554: 10176, 10176: 554, 
        461: 10178, 10178: 461, 482: 10244, 10244: 482, 483: 10245, 10245: 483, 486: 10006, 10006: 486, 617: 10179, 10179: 617, 57: 10228, 10228: 57, 
        58: 10229, 10229: 58, 99: 10230, 10230: 99, 100: 10231, 10231: 100, 156: 10232, 10232: 156, 210: 10233, 10233: 210, 214: 10234, 10234: 214, 502: 10235, 
        10235: 502, 548: 10236, 10236: 548, 569: 10237, 10237: 569, 570: 10238, 10238: 570, 627: 10239, 10239: 627, 704: 10240, 10240: 704, 705: 10241, 10241: 705, 
        712: 10242, 10242: 712, 723: 10243, 10243: 723, 127: 10249, 10249: 127, 194: 10252, 10252: 194, 640: 10018, 10018: 640, 641: 10019, 10019: 641, 644: 10020,
        10020:644, 904: 10248, 10248: 904, 561: 10178, 10178: 561, 677: 10024, 10024: 677, 901: 10247, 10247: 901, 875: 10185, 10185: 875, 915: 10253, 10253: 915,

        // meowth
        51: { alolan: 10106, galarian: 10160 },
        10160: { kantonian: 51, alolan: 10106 },
        10106: { kantonian: 51, galarian: 10160 },

        //tauros
        127: { "Paldean Combat Breed": 10249, "Paldean Blaze Breed": 10250, "Paldean Aqua Breed": 10251 },
        10249: { kantonian: 127, "Paldean Blaze Breed": 10250, "Paldean Aqua Breed": 10251 },
        10250: { kantonian: 127, "Paldean Combat Breed": 10249, "Paldean Aqua Breed": 10251 },
        10251: { kantonian: 127, "Paldean Combat Breed": 10249, "Paldean Blaze Breed": 10250 },

        //castform
        350: { sunny: 10012, rainy: 10013, snowy: 10014 },
        10012: { base: 350, rainy: 10013, snowy: 10014 },
        10013: { base: 350, sunny: 10012, snowy: 10014 },
        10014: { base: 350, sunny: 10012, rainy: 10013 },

        //deoxys
        385: { attack: 10000, defense: 10001, speed: 10002 },
        10000: { normal: 385, defense: 10001, speed: 10002 },
        10001: { normal: 385, attack: 10000, speed: 10002 },
        10002: { normal: 385, attack: 10000, defense: 10001 },

        //wormadam
        412: { "Sandy Cloak": 10003, "Trash Cloak": 10004 },
        10003: { "Plant Cloak": 412, "Trash Cloak": 10004 },
        10004: { "Plant Cloak": 412, "Sandy Cloak": 10003 },

        //rotom
        478: { heat: 10007, wash: 10008, frost: 10009, fan: 10010, mow: 10011 },
        10007: { base: 478, wash: 10008, frost: 10009, fan: 10010, mow: 10011 },
        10008: { base: 478, heat: 10007, frost: 10009, fan: 10010, mow: 10011 },
        10009: { base: 478, heat: 10007, wash: 10008, fan: 10010, mow: 10011 },
        10010: { base: 478, heat: 10007, wash: 10008, frost: 10009, mow: 10011 },
        10011: { base: 478, heat: 10007, wash: 10008, frost: 10009, fan: 10010 },

        //Shaymin
        491: { sky: 10005 },
        10005: { land: 491 },

        //basculin
        549: { "Blue Striped": 10015, "White Striped": 10246 },
        10015: { "Red Striped": 549, "White Striped": 10246 },
        10246: { "Red Striped": 549, "Blue Striped": 10015 },

        //darmanitan
        554: { "Unovan Zen": 10016, "Galarian Standard": 10176, "Galarian Zen": 10177 },
        10016: { "Unovan Standard": 554, "Galarian Standard": 10176, "Galarian Zen": 10177 },
        10177: { "Unovan Standard": 554, "Unovan Zen": 10016, "Galarian Standard": 10176, },
        10176: { "Unovan Standard": 554, "Unovan Zen": 10016, "Galarian Zen": 10177 },

        //kyurem
        645: { black: 10021, white: 10022 },
        10021: { regular: 645, white: 10022 },
        10022: { regular: 645, black: 10021 },

        //keldeo
        646: { resolute: 10023 },
        10023: { ordinary: 646 },

        //meloetta
        647: { pirouette: 10017},
        10017: {aria: 647},

        //aegislash
        680: { "Blade Form": 10025 },
        10025: { "Shield Form": 680 },

        //zygarde
        717: { "10% Form": 10180, "Complete Form": 10119 },
        10180: { "50% Form": 717, "Complete Form": 10119 },
        10119: { "50% Form": 717, "10% Form": 10180 },

        //hoopa
        719: { "Unbound": 10085 },
        10085: { "Confined": 719 },

        //oricorio
        740: { "Pom-Pom Style": 10122, "Pa'u Style": 10123, "Sensu Style": 10124 },
        10122: { "Baile Style": 740, "Pa'u Style": 10123, "Sensu Style": 10124 },
        10123: { "Baile Style": 740, "Pom-Pom Style": 10122, "Sensu Style": 10124 },
        10124: { "Baile Style": 740, "Pom-Pom Style": 10122, "Pa'u Style": 10123 },

        //lycanroc
        744: { midnight: 10125, dusk: 10151 },
        10125: { midday: 744, dusk: 10151 },
        10151: { midday: 744, midnight: 10125 },

        //wishiwashi
        745: { "School Form": 10126 },
        10126: { "Solo Form": 745 },

        //minior
        773: { "Orange Meteor": 10129, "Yellow Meteor": 10130, "Green Meteor": 10131, 
            "Blue Meteor": 10132, "Indigo Meteor": 10133, "Violet Meteor": 10134, 
            "Red Core": 10135, "Orange Core": 10136, "Yellow Core": 10137, 
            "Green Core": 10138, "Blue Core": 10139, "Indigo Core": 10140, "Violet Core": 10141 },
        10129: { "Red Meteor": 773, "Yellow Meteor": 10130, "Green Meteor": 10131, 
            "Blue Meteor": 10132, "Indigo Meteor": 10133, "Violet Meteor": 10134, 
            "Red Core": 10135, "Orange Core": 10136, "Yellow Core": 10137, 
            "Green Core": 10138, "Blue Core": 10139, "Indigo Core": 10140, "Violet Core": 10141 },
        10130: { "Red Meteor": 773, "Orange Meteor": 10129, "Green Meteor": 10131, 
            "Blue Meteor": 10132, "Indigo Meteor": 10133, "Violet Meteor": 10134, 
            "Red Core": 10135, "Orange Core": 10136, "Yellow Core": 10137, 
            "Green Core": 10138, "Blue Core": 10139, "Indigo Core": 10140, "Violet Core": 10141 },
        10131: { "Red Meteor": 773, "Orange Meteor": 10129, "Yellow Meteor": 10130, 
            "Blue Meteor": 10132, "Indigo Meteor": 10133, "Violet Meteor": 10134, 
            "Red Core": 10135, "Orange Core": 10136, "Yellow Core": 10137, 
            "Green Core": 10138, "Blue Core": 10139, "Indigo Core": 10140, "Violet Core": 10141 },
        10132: { "Red Meteor": 773, "Orange Meteor": 10129, "Yellow Meteor": 10130, 
            "Green Meteor": 10131, "Indigo Meteor": 10133, "Violet Meteor": 10134, 
            "Red Core": 10135, "Orange Core": 10136, "Yellow Core": 10137, 
            "Green Core": 10138, "Blue Core": 10139, "Indigo Core": 10140, "Violet Core": 10141 },
        10133: { "Red Meteor": 773, "Orange Meteor": 10129, "Yellow Meteor": 10130, 
            "Green Meteor": 10131, "Blue Meteor": 10132, "Violet Meteor": 10134, 
            "Red Core": 10135, "Orange Core": 10136, "Yellow Core": 10137, 
            "Green Core": 10138, "Blue Core": 10139, "Indigo Core": 10140, "Violet Core": 10141 },
        10134: { "Red Meteor": 773, "Orange Meteor": 10129, "Yellow Meteor": 10130, 
            "Green Meteor": 10131, "Blue Meteor": 10132, "Indigo Meteor": 10133, 
            "Red Core": 10135, "Orange Core": 10136, "Yellow Core": 10137, 
            "Green Core": 10138, "Blue Core": 10139, "Indigo Core": 10140, "Violet Core": 10141 },
        10135: { "Red Meteor": 773, "Orange Meteor": 10129, "Yellow Meteor": 10130, 
            "Green Meteor": 10131, "Blue Meteor": 10132, "Indigo Meteor": 10133, 
            "Violet Meteor": 10134, "Orange Core": 10136, "Yellow Core": 10137, 
            "Green Core": 10138, "Blue Core": 10139, "Indigo Core": 10140, "Violet Core": 10141 },
        10136: { "Red Meteor": 773, "Orange Meteor": 10129, "Yellow Meteor": 10130, 
            "Green Meteor": 10131, "Blue Meteor": 10132, "Indigo Meteor": 10133, 
            "Violet Meteor": 10134, "Red Core": 10135, "Yellow Core": 10137, 
            "Green Core": 10138, "Blue Core": 10139, "Indigo Core": 10140, "Violet Core": 10141 },
        10137: { "Red Meteor": 773, "Orange Meteor": 10129, "Yellow Meteor": 10130, 
            "Green Meteor": 10131, "Blue Meteor": 10132, "Indigo Meteor": 10133, 
            "Violet Meteor": 10134, "Red Core": 10135, "Orange Core": 10136, 
            "Green Core": 10138, "Blue Core": 10139, "Indigo Core": 10140, "Violet Core": 10141 },
        10138: { "Red Meteor": 773, "Orange Meteor": 10129, "Yellow Meteor": 10130, 
            "Green Meteor": 10131, "Blue Meteor": 10132, "Indigo Meteor": 10133, 
            "Violet Meteor": 10134, "Red Core": 10135, "Orange Core": 10136, 
            "Yellow Core": 10137, "Blue Core": 10139, "Indigo Core": 10140, "Violet Core": 10141 },
        10139: { "Red Meteor": 773, "Orange Meteor": 10129, "Yellow Meteor": 10130, 
            "Green Meteor": 10131, "Blue Meteor": 10132, "Indigo Meteor": 10133, 
            "Violet Meteor": 10134, "Red Core": 10135, "Orange Core": 10136, 
            "Yellow Core": 10137, "Green Core": 10138, "Indigo Core": 10140, "Violet Core": 10141 }, 
        10140: { "Red Meteor": 773, "Orange Meteor": 10129, "Yellow Meteor": 10130, 
            "Green Meteor": 10131, "Blue Meteor": 10132, "Indigo Meteor": 10133, 
            "Violet Meteor": 10134, "Red Core": 10135, "Orange Core": 10136, 
            "Yellow Core": 10137, "Green Core": 10138, "Blue Core": 10139, "Violet Core": 10141 },
        10141: { "Red Meteor": 773, "Orange Meteor": 10129, "Yellow Meteor": 10130, 
            "Green Meteor": 10131, "Blue Meteor": 10132, "Indigo Meteor": 10133, 
            "Violet Meteor": 10134, "Red Core": 10135, "Orange Core": 10136, 
            "Yellow Core": 10137, "Green Core": 10138, "Blue Core": 10139, "Indigo Core": 10140, },

        //mimikyu
        777: { "Busted": 10142 },
        10142: { "Disguised": 777 },

        //necrozma
        799: { "Dusk Mane": 10154, "Dawn Wings": 10155, "Ultra": 10156 },
        10154: { "Base Form": 799, "Dawn Wings": 10155, "Ultra": 10156 },
        10155: { "Base Form": 799, "Dusk Mane": 10154, "Ultra": 10156 },
        10156: { "Base Form": 799, "Dusk Mane": 10154, "Dawn Wings": 10155 },

        //toxtricity
        848: { "Low-Key Form": 10183 },
        10183: { "Amped Form": 848 },

        //eiscue
        874: { "Noice Face": 10184 },
        10184: { "Ice Face": 874 },

        //morpeko
        876: { "Hangry Mode": 10186 },
        10186: { "Full Belly Mode": 876 },

        //zacian
        887: { "Crowned Sword": 10187 },
        10187: { "Hero of Many Battles": 887 },

        //zamazenta
        888: { "Crowned Shield": 10188 },
        10188: { "Hero of Many Battles": 888 },

        //eternatus
        889: { "Eternamax": 10189 },
        10189: { "Base Form": 889 },

        //urshifu
        891: { "Rapid Strike Style": 10190 },
        10190: { "Single Strike Style": 891 },

        //calyrex
        897: { "Ice Rider": 10192, "Shadow Rider": 10193 },
        10192: { "Base Form": 897, "Shadow Rider": 10193 },
        10193: { "Base Form": 897, "Ice Rider": 10192 },


        //ursaluna
        900: { "Bloodmoon": 10271 },
        10271: { "Hisuian": 900 },

        //dudunsparce
        981: { "Three Segment": 10254 },
        10254: { "Two Segment": 981 },

        //maushold
        924: { "Family of Three": 10256 },
        10256: { "Family of Four": 924 },

        //squawkabilly
        930: { "Blue Plumage": 10259, "Yellow Plumage": 10260, "White Plumage": 10261 },
        10259: { "Green Plumage": 930, "Yellow Plumage": 10260, "White Plumage": 10261 },
        10260: { "Green Plumage": 930, "Blue Plumage": 10259, "White Plumage": 10261 },
        10261: { "Green Plumage": 930, "Blue Plumage": 10259, "Yellow Plumage": 10260 },

        //palafin
        963: { "Hero Form": 10255 },
        10255: { "Zero Form": 963 },

        //tatsugiri
        977: { "Droopy": 10257, "Stretchy": 10258 },
        10257: { "Curly": 977, "Stretchy": 10258 },
        10258: { "Curly": 977, "Droopy": 10257 },

        //gimmighoul
        998: { "Roaming Form": 10262 },
        10262: { "Chest Form": 998 },

        //ogerpon
        1016: { "Wellspring Mask": 10272, "Hearthflame Mask": 10273, "Cornerstone Mask": 10274 },
        10272: { "Teal Mask": 1016, "Hearthflame Mask": 10273, "Cornerstone Mask": 10274 },
        10273: { "Teal Mask": 1016, "Wellspring Mask": 10272, "Cornerstone Mask": 10274 },
        10274: { "Teal Mask": 1016, "Wellspring Mask": 10272, "Hearthflame Mask": 10273 },

        //terapagos
        1023: { "Terastal Form": 10275, "Stellar Form": 10276 },
        10275: { "Normal Form": 1023, "Stellar Form": 10276 },
        10276: { "Normal Form": 1023, "Terastal Form": 10275 },

        
    };

    const handleSelectPokemon = (formId) => {
        setSelectedPokemon(formId);
        handleCloseModal();
    };

    // Mapping for different regional forms
    const formLists = [
        { list: alolanPokemonList, label: "Alolan" },
        { list: galarianPokemonList, label: "Galarian" },
        { list: hisuianPokemonList, label: "Hisuian" },
        { list: paldeanPokemonList, label: "Paldean" },
        { list: therianPokemonList, label: "Therian" },
        { list: incarnatePokemonList, label: "Incarnate"},
        { list: megaPokemonList, label: "Mega"},
        { list: kantoPokemonList, label: "Kantonian"},
        { list: johtoPokemonList, label: "Johto"},
        { list: hoennPokemonList, label: "Hoenn"},
        { list: sinnohPokemonList, label: "Base"},
        { list: unovanPokemonList, label: "Unovan"},
        { list: kalosPokemonList, label: "Kalos"},
        { list: originPokemonList, label: "Origin"},
        { list: malePokemonList, label: "Female"},
        { list: femalePokemonList, label: "Male"},
    ];

    return (
        
            <div>
                <h2>Form Modal</h2>

                {/* Handle Pokémon with multiple alternative forms */}
                {selectedPokemon in formsMap && typeof formsMap[selectedPokemon] === "object" &&
                    Object.entries(formsMap[selectedPokemon]).map(([formName, formId]) => (
                        <button className="form-card" key={formName} onClick={() => handleSelectPokemon(formId)}>
                            {capitalizeFirstLetter(formName)}
                        </button>
                    ))
                }

                {/* Dynamically render buttons based on regional form lists */}
                {formLists.map(({ list, label }) =>
                    list.includes(capitalizeFirstLetter(name)) &&
                    selectedPokemon !== 51 &&
                    formsMap[selectedPokemon] ? (
                    <button className="form-card" key={label} onClick={() => handleSelectPokemon(formsMap[selectedPokemon])}>
                        {label}
                    </button>
                ) : null
)}


                
            </div>
        
    );
}
