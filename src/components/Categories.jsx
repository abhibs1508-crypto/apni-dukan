import "./Categories.css";

const data = ["Electronics", "Fashion", "Grocery", "Sports"];

export default function Categories() {
  return (
    <section className="categories">
      {data.map((c) => (
        <div key={c} className="category-card">{c}</div>
      ))}
    </section>
  );
}
