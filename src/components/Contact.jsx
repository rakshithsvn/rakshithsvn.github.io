function Contact() {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <hr className="mb-2" />
      <p>
        Email:{" "}
        <a href="mailto:rakshithsvn@gmail.com" className="text-blue-500">
          rakshithsvn@gmail.com
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/rakshithsvn" className="text-blue-500">
          github.com/rakshithsvn
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/rakshith-svn"
          className="text-blue-500"
        >
          linkedin.com/in/rakshith-svn
        </a>
      </p>
      <p>
        <a href="/resume.pdf" className="text-blue-500">
          Download Resume
        </a>
      </p>
    </section>
  );
}

export default Contact;
