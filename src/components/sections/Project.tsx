interface ProjectProp {
    name:string; 
    description:string;
    image:string;
    techs: string;
}

export const Project = (prop: ProjectProp) => {
    return (
        <section className="rounded-3xl border-30 border-white bg-white items-center w-1/2">
            <div className="rounded-3xl bg-[#C3E5FE] h-full">
                <div className="flex flex-col items-center">
                    <img src={prop.image} alt="Project-Logo" className="w-30 h-30 rounded-xl m-5"/>
                    <h1 className="font-bold text-2xl mx-4 self-start">
                        {prop.name}
                    </h1>
                    <p className="text-xl p-4">
                        {prop.description}
                    </p>
                    <p className="font-bold self-start mx-4">
                        {prop.techs}
                    </p>
                    <button className="rounded border-2 border-white cursor-pointer self-end p-3 mb-5 mr-5">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};