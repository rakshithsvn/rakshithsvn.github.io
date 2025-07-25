import { Section } from "./Section";

function Contact() {
  return (
    <Section title="Contact">
      <div className="space-y-2 text-base font-light text-gray-700 dark:text-gray-300">
        <p className="text-base font-light">
          Email:{" "}
          <a
            href="mailto:rakshithsvn@gmail.com"
            className="text-blue-500 font-medium"
          >
            rakshithsvn@gmail.com
          </a>
        </p>
        <p className="text-base font-light">
          GitHub:{" "}
          <a
            href="https://github.com/rakshithsvn"
            className="text-blue-500 font-medium"
          >
            github.com/rakshithsvn
          </a>
        </p>
        <p className="text-base font-light">
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/rakshith-svn"
            className="text-blue-500 font-medium"
          >
            linkedin.com/in/rakshith-svn
          </a>
        </p>
        <p className="text-base font-light">
          <a href="/resume.pdf" className="text-blue-500 font-medium">
            Download Resume
          </a>
        </p>
      </div>
    </Section>
  );
}

export default Contact;
