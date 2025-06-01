export const About = () => {
    return (
        <section className="flex w-full flex-row items-center">
            <div className="flex flex-col bg-[#87CDFF] items-center justify-center h-[383px] w-1/2">
                <h1 className="text-black font-bold text-center text-4xl p-2">
                    What is ContribMatch?
                </h1>
                <p className="text-black text-xl text-left p-2 m-10">
                    ContribMatch is a online platform focused on bringing contributors into open source projects with a click of a button!
                </p>
                <button className="rounded border-2 border-white text-black font-bold text-3xl cursor-pointer p-2">
                    Learn More
                </button>
            </div>
            <div className="flex flex-col bg-[#C3E5FE] h-[383px] items-center justify-center w-1/2">
                <div className="flex flex-row space-x-6">
                    <div className="flex flex-col p-4">
                        <h1 className="text-black font-bold text-left text-3xl">
                            200+
                        </h1>
                        <p className="text-black text-left text-xl">
                            New Contributors
                        </p>
                    </div>
                    <div className="flex flex-col p-4">
                        <h1 className="text-black font-bold text-left text-3xl">
                            5
                        </h1>
                        <p className="text-black text-left text-xl">
                            Countries
                        </p>
                    </div>
                    <div className="flex flex-col p-4">
                        <h1 className="text-black font-bold text-left text-3xl">
                            50
                        </h1>
                        <p className="text-black text-left text-xl">
                            Projects
                        </p>
                    </div>
                </div>
                <div className="flex flex-row space-x-6">
                    <div className="flex flex-col p-4">
                        <h1 className="text-black font-bold text-left text-3xl">
                            100K
                        </h1>
                        <p className="text-black text-left text-xl">
                            Lines of Code
                        </p>
                    </div>
                    <div className="flex flex-col p-4">
                        <h1 className="text-black font-bold text-left text-3xl">
                            X
                        </h1>
                        <p className="text-black text-left text-xl">
                            Insert Text
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};