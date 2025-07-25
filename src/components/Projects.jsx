function Projects() {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-2">Projects</h2>
      <hr className="mb-2" />
      <div className="space-y-4">
        <div>
          <h3 className="font-bold">ProjectHub</h3>
          <p>
            Full-stack project management tool using React, Node.js, and
            MongoDB.
          </p>
        </div>
        <div>
          <h3 className="font-bold">DevBlog</h3>
          <p>Markdown-powered blog for developers with custom themes.</p>
        </div>
        <div>
          <h3 className="font-bold">InvoiceX</h3>
          <p>PDF invoice generator with Stripe payment integration.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
