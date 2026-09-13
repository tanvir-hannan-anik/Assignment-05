import React from "react";
import type { Technology } from "./TechnologyCard";

interface StackPanelProps {
    stack: Technology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const StackPanel = ({
    stack,
    onRemove,
    onRemoveAll
}: StackPanelProps) => {
    return (
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm h-fit">

            <div className="mb-4">

                <h2 className="font-bold text-gray-900">
                    Your Stack
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                    {stack.length} Technology Selected
                </p>

            </div>

            <div className="space-y-3">

                {stack.map((technology) => (
                    <div
                        key={technology.id}
                        className="flex items-center justify-between border border-gray-200 rounded-lg p-3"
                    >

                        <div className="flex items-center gap-3">

                            <img
                                src={technology.icon}
                                alt={technology.name}
                                className="w-6 h-6 object-contain"
                            />

                            <span className="text-sm font-medium">
                                {technology.name}
                            </span>

                        </div>

                        <button
                            onClick={() => onRemove(technology.id)}
                            className="text-gray-400 hover:text-red-500 text-lg"
                        >
                            ×
                        </button>

                    </div>
                ))}

            </div>

            {stack.length > 0 && (
                <button
                    onClick={onRemoveAll}
                    className="w-full mt-5 py-2 border border-red-300 text-red-500 rounded-md text-sm hover:bg-red-50"
                >
                    Remove All
                </button>
            )}

        </div>
    );
};

export default StackPanel;