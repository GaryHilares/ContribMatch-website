import { useState } from "react";

export const LevelInput = () => {
  const [level, setLevel] = useState("");

  return (
    <section className="flex justify-center items-center bg-white pt-[53.621px] pb-[191.379px] px-0">
      <input
        type="text"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        placeholder="Level"
        className="text-black text-[64px] w-[355px] h-[138px] gap-2.5 border shadow-[0_4px_4px_rgba(0,0,0,0.25),0_4px_4px_rgba(0,0,0,0.25)] bg-white p-2.5 rounded-[5px] border-solid border-black max-md:text-5xl max-md:w-[300px] max-md:h-[120px] max-sm:text-4xl max-sm:w-[250px] max-sm:h-[100px]"
      />
    </section>
  );
};