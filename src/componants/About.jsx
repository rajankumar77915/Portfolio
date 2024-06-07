import React from 'react'
import { useTransition, useState } from "react";
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className='flex flex-wrap justify-start md:justify-between gap-10 '>
                <div className='flex flex-col w-1/3 sm:w-auto'>
                    <h2 className='text-2xl mb-1 sm:mb-3'>Front-End</h2>
                    <ul className="pl-2">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div className='flex flex-col '>
                    <h2 className='text-2xl mb-1 sm:mb-3'>Back-End</h2>
                    <ul className="pl-2">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Django (with REST API)</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-2xl mb-1 sm:mb-3'>Databases</h2>
                    <ul className="pl-2">
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>SQLite</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-2xl mb-1 sm:mb-3'>Android</h2>
                    <ul className="pl-2">
                        <li>Flutter</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-2xl mb-1 sm:mb-3'>Tools</h2>
                    <ul className="pl-2">
                        <li>git</li>
                        <li>PostMan</li>
                        <li>VSCode</li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Dharmsinh Desai University, Nadiad</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>MERN Stack dotBatch From CodeHelp</li>
                <li>internselite Flutter Dart</li>
            </ul>
        ),
    },
];
export default function About() {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="">

                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a full stack web developer and Flutter developer with a passion for creating
                        interactive web applications. I have experience
                        working with JavaScript, React, Redux,Recoil, Node.js, Express,SQL, MongoDB,
                        HTML, CSS,Flutter, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}