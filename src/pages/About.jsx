import React from "react";
import { experiences, skills } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { CTA } from "../components";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello I'm <span>Sonu</span> 👋{" "}
      </h1>

      <div className=" mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in India, specializing in Web development.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className=" mt-16 flex flex-wrap gap-12">
          {skills.map((skill, i) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-6">
        <h3 className="subhead-text">Work Experience</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((exp) => (
              <VerticalTimelineElement
                key={exp.company_name}
                date={exp.date}
                iconStyle={{ background: exp.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={exp.icon}
                      className="w-[60%] h-[60%]"
                      alt={exp.company_name}
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: "solid",
                  borderBottomColor: exp.iconBg,
                  boxShadow: "none"
                }}
              >

                <div>
                  <h3 className=" text-black text-xl font-poppins font-semibold">
                    {exp.title}
                  </h3>
                  <p className=" text-black-500 font-medium text-base" style={{margin: 0}}>{exp.company_name}</p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {exp.points.map((point, i)=> (
                    <li className="text-black-500/50 font-normal pl-1 text-sm" key={`experience-point-${i}`}>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200"/>

      <CTA/>
    </section>
  );
};

export default About;
