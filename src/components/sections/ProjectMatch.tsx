interface ProjectProp {
    contributor: string;
    lead: string;
    level: string;
    image: string;
    description: string;
    techs: string;
}

export const ProjectMatch = (prop: ProjectProp) => {
    return (
        <section className="flex flex-col border-black border bg-[#fceee5]">
            <div className="flex flex-row space-x-5 p-4">
                <div className="flex flex-col">
                    <p className="text-sm font-bold">
                        Contributor
                    </p>
                    <p className="text-xl font-bold">
                        {prop.contributor}
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm font-bold">
                        Project Lead
                    </p>
                    <p className="text-xl font-bold">
                        {prop.lead}
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm font-bold">
                        Level
                    </p>
                    <p className="text-xl font-bold">
                        {prop.level}
                    </p>
                </div>
            </div>
            <div className="flex flex-row space-x-5 items-center">
                <img src={prop.image} alt="Project-Logo" className="w-30 h-30 rounded-xl mx-5"/>
                <div className="flex flex-col">
                    <p> {prop.description} </p>
                    <div className="flex flex-row justify-between items-center my-5">
                        <p className="font-bold"> {prop.techs} </p>
                        <button className="rounded border-2 border-white bg-[#f8d7c6] cursor-pointer p-3 mx-4"> 
                            Join Now 
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};