import SkillOutline from "./SkillOutline";
import { frontend_skills, backend_skills, tools_and_platforms } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-github-text mb-8">
          Technical Skills
        </h2>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-github-text">Frontend Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {frontend_skills.map((skill) => (
                <SkillOutline
                  key={skill.text}
                  Icon={skill.icon}
                  text={skill.text}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-github-text">Backend Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {backend_skills.map((skill) => (
                <SkillOutline
                  key={skill.text}
                  Icon={skill.icon}
                  text={skill.text}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-github-text">Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {tools_and_platforms.map((skill) => (
                <SkillOutline
                  key={skill.text}
                  Icon={skill.icon}
                  text={skill.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
