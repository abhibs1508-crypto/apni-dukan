import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {

  useEffect(() => {
    const els = document.querySelectorAll(".fade");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
    }, { threshold: 0.2 });
    els.forEach(el => obs.observe(el));
  }, []);

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content fade">
          <h1>Welcome to <span>Apni Dukan</span></h1>
          <p>Premium shopping experience for modern India</p>
          <button>Explore Store</button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <h2 className="title fade">Shop by Category</h2>
        <div className="grid">
          {["Electronics","Fashion","Grocery","Sports"].map((c,i)=>(
            <div className="card fade" key={i}>
              <img src={`https://source.unsplash.com/400x300/?${c}`} alt={c}/>
              <h3>{c}</h3>
              <p>Top quality {c.toLowerCase()} products</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <h2 className="title fade">Trending Products</h2>
        <div className="grid">
          {[1,2,3,4].map(i=>(
            <Link to={`/product/${i}`} className="card fade product" key={i}>
              <img src={`https://source.unsplash.com/400x300/?tech,${i}`} alt="product"/>
              <h3>Premium Product {i}</h3>
              <p>High quality modern product</p>
              <button>Add to Cart</button>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
