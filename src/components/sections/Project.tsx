export const Project = ({name, description, image, techs}: {name:string; description:string, image:string, techs: string}) => {
    return (
        <section className="rounded-3xl border-30 border-white bg-white items-center w-1/2">
            <div className="rounded-3xl bg-[#C3E5FE] h-full">
                <div className="flex flex-col items-center">
                    <img src={image} alt="Project-Logo" className="w-30 h-30 rounded-xl m-5"/>
                    <h1 className="font-bold text-2xl mx-4 self-start">
                        {name}
                    </h1>
                    <p className="text-xl p-4">
                        {description}
                    </p>
                    <p className="font-bold self-start mx-4">
                        {techs}
                    </p>
                    <button className="rounded border-2 border-white cursor-pointer self-end p-3 mb-5 mr-5">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};