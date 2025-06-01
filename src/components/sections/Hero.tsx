export const Hero = () => {
    return (
      <section className="flex flex-col items-center bg-[#E5BFBF] px-16 py-16">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-black text-center text-7xl font-bold">
            ContribMatch
          </h1>
          <p className="text-black text-center text-3xl">
            Bringing contributors and projects together by a touch of a button!
          </p>
        </div>
        <div className="h-20"></div>
        <button className="rounded border-2 border-[#B27878] text-black text-2xl font-bold cursor-pointer bg-[#C28888] p-2 border-solid">
            CM 2025
        </button>
      </section>
    );
  };
  