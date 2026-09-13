import { useEffect, useState } from "react";
import TechnologyCard, { type Technology } from "./TechnologyCard";
import StackPanel from "./StackPanel";

const TechnologySection = () => {

    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [stack, setStack] = useState<Technology[]>([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setTechnologies(data));
    }, []);

    const addToStack = (technology: Technology) => {
        setStack((currentStack) => {

            const alreadyExists = currentStack.some(
                (item) => item.id === technology.id
            );

            if (alreadyExists) {
                return currentStack;
            }

            return [...currentStack, technology];
        });
    };

    const removeFromStack = (id: string) => {
        setStack((currentStack) =>
            currentStack.filter((technology) => technology.id !== id)
        );
    };

    const removeAll = () => {
        setStack([]);
    };

    return (
        <section className="container mx-auto px-5 py-16">

            <div className="text-center mb-10">

                <h2 className="text-3xl md:text-4xl font-bold">
                    Explore the{" "}
                    <span className="text-pink-500">
                        Technologies
                    </span>
                </h2>

                <p className="text-gray-500 mt-2">
                    Pick one technology per category to build your ideal stack.
                </p>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                <div className="lg:col-span-3">

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                                onAdd={addToStack}
                                isSelected={stack.some(
                                    (item) => item.id === technology.id
                                )}
                            />
                        ))}

                    </div>

                </div>

                <div className="lg:col-span-1">

                    <StackPanel
                        stack={stack}
                        onRemove={removeFromStack}
                        onRemoveAll={removeAll}
                    />

                </div>

            </div>

        </section>
    );
};

export default TechnologySection;