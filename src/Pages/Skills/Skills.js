import React from 'react';

const Skills = () => {
    const skills = [
        "HTML-5",
        "CSS-3",
        "Bootstrap",
        "Tailwind",
        "Javascript",
        "React Js",
        "Node Js",
        "Express Js",
        "Mongo DB",
        "Firebase",
    ]
    return (
        <div class=" pt-10 flex flex-row justify-center items-start flex-wrap min-w-full">
            <div class="rounded-full p-2 m-1 bg-[#FFE071] text-black  w-24 h-24 flex items-center justify-center text-xl font-bold"> HTML </div>
            <div class="rounded-full p-2 m-1 bg-[#171F26] text-[#FFE071]  w-40 h-40 flex items-center justify-center text-xl font-bold"> React </div>
            <div class="rounded-full p-2 m-1 bg-[#171F26] text-[#FFE071]  w-32 h-32 flex items-center justify-center text-xl font-bold"> Firebase </div>
            <div class="rounded-full p-2 m-1 bg-[#FFE071] text-black  w-40 h-40 flex items-center justify-center text-xl font-bold"> Mongo DB </div>
            <div class="rounded-full p-2 m-1 bg-[#171F26] text-[#FFE071]  w-24 h-24 flex items-center justify-center text-xl font-bold"> Bootstrap </div>
            <div class="rounded-full p-2 m-1 bg-[#FFE071] text-black  w-40 h-40 flex items-center justify-center text-xl font-bold"> Express JS </div>
            <div class="rounded-full p-2 m-1 bg-[#171F26] text-[#FFE071]  w-32 h-32 flex items-center justify-center text-xl font-bold"> Node Js </div>
            <div class="rounded-full p-2 m-1 bg-[#FFE071] text-black  w-40 h-40 flex items-center justify-center text-xl font-bold"> Tailwind </div>
            <div class="rounded-full p-2 m-1 bg-[#171F26] text-[#FFE071]  w-24 h-24 flex items-center justify-center text-xl font-bold"> HTML-5 </div>
            <div class="rounded-full p-2 m-1 bg-[#FFE071] text-black  w-40 h-40 flex items-center justify-center text-xl font-bold"> Javascript </div>
            <div class="rounded-full p-2 m-1 bg-[#171F26] text-[#FFE071]  w-32 h-32 flex items-center justify-center text-xl font-bold"> CSS-3 </div>
            </div>
    );
};

export default Skills;