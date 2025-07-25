import { Section } from "./Section";

function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "PHP",
    "React",
    "Laravel",
    "Docker",
    "MySQL",
    "MongoDB",
    "Tailwind CSS",
  ];

  return (
    <Section title="Skills">
      <div className="space-y-2 text-base font-light text-gray-700 dark:text-gray-300">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc pl-5 text-base font-medium">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Skills;
