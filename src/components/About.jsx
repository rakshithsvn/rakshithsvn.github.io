import { Section } from "./Section";

function About() {
  return (
    <Section title="About Me">
      <div className="space-y-2 text-base font-light text-gray-700 dark:text-gray-300">
        <p className="text-lg leading-relaxed font-light">
          Passionate developer with experience building scalable web
          applications using React, Node.js, and Laravel. I love clean code and
          solving real-world problems.
        </p>
      </div>
    </Section>
  );
}

export default About;
