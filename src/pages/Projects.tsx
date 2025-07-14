import { Header } from "../components/layout/Header";
import { ProjectMatch } from "../components/sections/ProjectMatch";
import image from "../assets/algopet.png";

const Projects = () => {
    return (
        <div className="flex flex-col">
            <Header />
            <section className="flex flex-col">
                <div className="flex flex-row bg-[#f8d7c6] h-52 justify-between">
                    <div className="flex flex-col items-start p-4 mx-10 h-full justify-center">
                        <p className="text-xl font-bold mb-2"> 2025 </p>
                        <h1 className="text-7xl font-bold"> Projects for you </h1> 
                    </div>
                    <div className="flex flex-row justify-center items-center p-4 w-4/9 space-x-15">
                        <button className="rounded border border-black bg-[#fceee5] text-3xl font-bold cursor-pointer h-1/3 p-2">
                            Languages
                        </button>
                        <button className="rounded border border-black bg-[#fceee5] text-3xl font-bold cursor-pointer h-1/3 p-2">
                            Skill Level
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row space-x-20 p-10">
                        <ProjectMatch
                            contributor="Gazala Yasin"
                            lead="N/A"
                            level="Beginner"
                            image={image}
                            description="A browser-based TypeScript playground for learning and testing code with live feedback. It features a GitHub-style UI and built-in guides for beginners."
                            techs="TypeScript, HTML, CSS, React"
                        />
                        <ProjectMatch
                            contributor="Gary"
                            lead="Andrew"
                            level="Experienced"
                            image={image}
                            description="A browser-based TypeScript playground for learning and testing code with live feedback. It features a GitHub-style UI and built-in guides for beginners."
                            techs="TypeScript, HTML, CSS, React"
                        />
                    </div>
                    <div className="flex flex-row space-x-20 p-10">
                        <ProjectMatch
                            contributor="Florence"
                            lead="Gary"
                            level="Pro"
                            image={image}
                            description="A browser-based TypeScript playground for learning and testing code with live feedback. It features a GitHub-style UI and built-in guides for beginners."
                            techs="TypeScript, HTML, CSS, React"
                        />
                        <ProjectMatch
                            contributor="Martin"
                            lead="Patrick"
                            level="Intermediate"
                            image={image}
                            description="A browser-based TypeScript playground for learning and testing code with live feedback. It features a GitHub-style UI and built-in guides for beginners."
                            techs="TypeScript, HTML, CSS, React"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;