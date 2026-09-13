export interface Technology {
    id: string;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: string;
}

interface TechnologyCardProps {
    technology: Technology;
    onAdd: (technology: Technology) => void;
    isSelected: boolean;
}

const TechnologyCard = ({
    technology,
    onAdd,
    isSelected
}: TechnologyCardProps) => {
    return (
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">

            <div className="flex justify-between items-start mb-4">

                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-7 h-7 object-contain"
                />

                <span className="text-xs px-2 py-1 rounded-full bg-pink-50 text-pink-500">
                    {technology.badge}
                </span>

            </div>

            <h3 className="text-lg font-semibold text-gray-900">
                {technology.name}
            </h3>

            <p className="text-sm text-gray-500 mt-2 min-h-[60px]">
                {technology.description}
            </p>

            <div className="flex justify-between items-center mt-4 text-xs text-gray-500">

                <span className="bg-gray-100 px-2 py-1 rounded">
                    {technology.category}
                </span>

                <span>
                    {technology.difficulty}
                </span>

                <span className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    {technology.rating}
                </span>

            </div>

            <button
                onClick={() => onAdd(technology)}
                disabled={isSelected}
                className={`w-full mt-4 py-2 rounded-md text-sm font-medium transition ${
                    isSelected
                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                        : "bg-[#080D19] text-white hover:bg-[#D91B7E]"
                }`}
            >
                {isSelected ? "Added to Stack" : "Add to Stack"}
            </button>

        </div>
    );
};

export default TechnologyCard;