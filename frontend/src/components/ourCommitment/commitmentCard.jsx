
const CommitmentCard = ({ elem }) => {
  return (
    <article className="flex gap-5 py-6 first:pt-0 last:pb-0">
      <span className="shrink-0 font-display text-2xl text-brand">
        {elem.id}
      </span>

      <div>
        <h3 className="text-base font-bold text-surface md:text-lg">
          {elem.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          {elem.description}
        </p>
      </div>
    </article>
  );
};

export default CommitmentCard;
