import { useEffect, useState } from "react";
import "../assets/styles/portfolio.css";
import Footer from "../components/Footer";

export default function Portfolio() {
  const [categories, setCategories] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  // 1️⃣ GET CATEGORIES
  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log("CATEGORIES:", data);
        setCategories(data);

        // auto select first category
        if (data.length > 0) {
          setActiveCategory(data[0]._id);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // 2️⃣ FETCH PORTFOLIOS WHEN CATEGORY CHANGES (MAIN FIX)
useEffect(() => {
  if (!activeCategory) return;

  const fetchData = async () => {
    try {
      setLoading(true);

      console.log("ACTIVE CATEGORY CHANGED:", activeCategory);

      const res = await fetch(
        `http://localhost:5000/api/categories/portfolio/category/${activeCategory}`
      );

      const data = await res.json();

      console.log("PORTFOLIOS:", data);

      setPortfolios(Array.isArray(data) ? data : data.portfolios || []);

    } catch (error) {
      console.log("ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [activeCategory]);


  return (
    <>
      {/* HERO */}
      <section className="portfolio">
        <div className="portfolio-body">
          <h1 className="portfolio-title" style={{ color: "white" }}>
            Our Portfolio
          </h1>
        </div>
      </section>

      {/* WORK SECTION */}
      <section className="portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-left">
            <h1 style={{textAlign:"left"}}>Our Works</h1>
            <p>
It’s hard to pick a specific project as the best one because every time we exert maximum effort to deliver the best for our reputation and stakeholders’ expectations.            </p>
          </div>

          <div className="portfolio-right">
            <img
              src="https://developers-hub.com/wp-content/uploads/2020/11/portfoliomainimge.png"
              alt="portfolio"
            />
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "nowrap",
            overflowX: "auto",
            padding: "10px 0",
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat._id}
              onClick={() => {
                console.log("CLICKED CATEGORY:", cat._id);
                setActiveCategory(cat._id); // 🔥 MAIN FIX HERE
              }}
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                borderBottom:
                  activeCategory === cat._id
                    ? "2px solid #0b1133"
                    : "none",
                fontWeight:
                  activeCategory === cat._id ? "600" : "400",
                color: "#0b1133",
                whiteSpace: "nowrap",
              }}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIOS */}
      <section style={{ padding: "40px" }}>
        {loading ? (
          <p>Loading portfolios...</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {portfolios.length > 0 ? (
              portfolios.map((item) => (
                <div key={item._id}>
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "100%" }}
                  />
                  <h3>{item.title}</h3>
                </div>
              ))
            ) : (
              <p>No portfolios found</p>
            )}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
