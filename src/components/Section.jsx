export function Section({ title, children }) {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-bold mb-4 tracking-tight font-serif border-l-4 pl-3 border-blue-400 dark:border-blue-300">
        {title}
      </h2>
      <hr className="mb-2" />
      {children}
    </section>
  );
}
