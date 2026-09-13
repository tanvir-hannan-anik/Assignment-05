import heroImage from '../assets/banner-stack.png';

const HeroSection = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-8 p-5">

            <div className="flex-1">

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Build Your Ideal
                    <span className="block text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="mt-4 text-gray-600 max-w-lg">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                    <button className="btn btn-secondary">
                        Explore Technologies
                    </button>

                    <button className="btn btn-active">
                        Learn More
                    </button>

                </div>

            </div>

            <div className="flex-1 flex justify-center">

                <img
                    src={heroImage}
                    alt="Development stack illustration"
                    className="w-full max-w-md object-contain"
                />

            </div>

        </div>
    );
};

export default HeroSection;