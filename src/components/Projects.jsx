import { Section } from "./Section";

function Projects() {
  const projects = [
    {
      name: "ProjectHub",
      description:
        "Full-stack project management tool using React, Node.js, and MongoDB.",
    },
    {
      name: "DevBlog",
      description: "Markdown-powered blog for developers with custom themes.",
    },
    {
      name: "InvoiceX",
      description: "PDF invoice generator with Stripe payment integration.",
    },
  ];

  return (
    <Section title="Projects">
      <div className="space-y-2 text-base font-light text-gray-700 dark:text-gray-300">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-4 rounded-md bg-white/60 dark:bg-gray-800/50 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-base font-light text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
