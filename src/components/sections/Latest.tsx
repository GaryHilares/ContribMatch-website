import { Project } from "./Project";
import image from "../../assets/algopet.png"

export const Latest = () => {
    return (
        <section className="flex flex-col bg-[#E8835175] items-center justify-center h-[700px]">
            <h1 className="font-bold text-6xl p-8">
                Latest Projects
            </h1>
            <div className="flex flex-row justify-center h-3/4">
                <button className="text-7xl text-bold mx-10 cursor-pointer">
                    {"<"}
                </button>
                <Project
                    name="AlgoPet"
                    description="A browser-based TypeScript playground for learning and testing code with live feedback. It features a GitHub-style UI and built-in guides for beginners."
                    image={image}
                    techs="TypeScript, HTML, CSS, React"
                />
                <button className="text-7xl text-bold mx-10 cursor-pointer">
                    {">"}
                </button>
            </div>
            <button className="rounded border-2 font-bold text-3xl cursor-pointer p-2 m-10">
                View all projects
            </button>
        </section>
    );

};