import { useState } from "react";
import { pokemonTypeColors } from "../utils";
import Modal from "./Modal";

export default function TypeCard({ type }) {
    const [typeData, setTypeData] = useState(null);
    const [loadingType, setLoadingType] = useState(false);
    const [selectedType, setSelectedType] = useState(null); // Track selected type

    // Capitalize function
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Extract type names and capitalize
    function extractTypeNames(arr) {
        return arr?.map(t => capitalizeFirstLetter(t.name)) || [];
    }

    // Fetch Type Data
    async function fetchTypeData(typeName, typeUrl) {
        if (!typeName || !typeUrl) return;
        if (loadingType) return;

        setSelectedType(typeName); // Store the current type being fetched

        let cache = JSON.parse(localStorage.getItem("pokemon-types") || "{}");

        if (cache[typeName]) {
            setTypeData(cache[typeName]);
            return;
        }

        try {
            setLoadingType(true);
            const res = await fetch(typeUrl);
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

            const typeData = await res.json();
            const currentTypeData = {
                weaknesses: extractTypeNames(typeData?.damage_relations?.double_damage_from),
                superEffectiveAgainst: extractTypeNames(typeData?.damage_relations?.double_damage_to),
                resistances: extractTypeNames(typeData?.damage_relations?.half_damage_from),
                resistedBy: extractTypeNames(typeData?.damage_relations?.half_damage_to),
                immunities: extractTypeNames(typeData?.damage_relations?.no_damage_from),
                noDamageTo: extractTypeNames(typeData?.damage_relations?.no_damage_to),
            };

            setTypeData(currentTypeData);
            cache[typeName] = currentTypeData;
            localStorage.setItem("pokemon-types", JSON.stringify(cache));
        } catch (err) {
            console.error("Error fetching type data:", err);
        } finally {
            setLoadingType(false);
        }
    }

    // Component for displaying type buttons
    function TypeButton({ type, fetchTypeData }) {
        const typeName = type ? type.toLowerCase() : ""; // Convert to lowercase only for color lookup

        return (
            <button
                onClick={() => fetchTypeData(type, `https://pokeapi.co/api/v2/type/${typeName}`)}
                className="type-tile"
                style={{
                    color: pokemonTypeColors?.[typeName]?.color || "black",
                    background: pokemonTypeColors?.[typeName]?.background || "gray",
                }}
            >
                {capitalizeFirstLetter(type || "Unknown")}
            </button>
        );
    }

    // Component for displaying type relations
    function TypeRelations({ title, types }) {
        return (
            <div>
                <strong>{title}:</strong>
                <div className="type-list">
                    {types.length > 0 ? (
                        types.map((type, index) => (
                            <TypeButton key={index} type={type} fetchTypeData={fetchTypeData} />
                        ))
                    ) : (
                        <span>None</span>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Main Type Button */}
            <TypeButton type={type} fetchTypeData={fetchTypeData} />

            {/* Loading Indicator */}
            {loadingType && <p>Loading...</p>}

            {/* Type Details Modal */}
            {typeData && selectedType && (
                <Modal handleCloseModal={() => setTypeData(null)}>
                    <div className="type-data">
                        {/* Display Current Type with Styling */}
                        <div
                            className="current-type-header"
                            style={{
                                color: pokemonTypeColors?.[selectedType.toLowerCase()]?.color || "black",
                                background: pokemonTypeColors?.[selectedType.toLowerCase()]?.background || "gray",
                                width: "200px",
                                padding: "10px",
                                borderRadius: "8px",
                                textAlign: "center",
                                fontSize: "25px",
                                fontWeight: "bold",
                            }}
                        >
                            {capitalizeFirstLetter(selectedType)}
                        </div>

                        <h4>Type Details</h4>
                        <TypeRelations title="Is Weak To" types={typeData.weaknesses} />
                        <TypeRelations title="Is Super Effective Against" types={typeData.superEffectiveAgainst} />
                        <TypeRelations title="Resists" types={typeData.resistances} />
                        <TypeRelations title="Is Resisted By" types={typeData.resistedBy} />
                        <TypeRelations title="Is Immune To" types={typeData.immunities} />
                        <TypeRelations title="Deals No Damage To" types={typeData.noDamageTo} />
                    </div>
                </Modal>
            )}
        </div>
    );
}
