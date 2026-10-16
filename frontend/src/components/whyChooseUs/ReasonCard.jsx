
const ReasonCard = ({ elem }) => {
  return (
    <article className="rounded-2xl border border-border bg-surface p-5 md:p-6">
      <span className="font-display text-3xl text-brand">
        {elem.number}
      </span>

      <h3 className="mt-5 text-base font-extrabold text-text md:text-lg">
        {elem.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-text-muted">
        {elem.description}
      </p>
    </article>
  );
};

export default ReasonCard;
