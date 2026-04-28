import React from "react";
import "../assets/styles/howitworks.css";
import Footer from "../components/Footer";

export default function HowItWorks() {
  return (
    <>
      {/* HERO */}
     <section className="howitworks-section">
  <div className="howitworks-body">

    <h1
      style={{
        marginTop: "3%",
        color: "#fff",
        textAlign: "center",
        fontSize: "55px"
      }}
    >
      HOW IT WORKS
    </h1>

    <p
      style={{
        textAlign: "center",
        maxWidth: "800px",
        color: "#fff",
        fontSize: "20px",
        margin: "auto"
      }}
    >
    We provide an expert team for startups to make them fast pacing tech companies. It helps them with an extra boost that helps them quickly start and scale their main product development. Our dedicated development team has a great tendency to team up with in-house engineers while using the same tools and best methodologies.
    </p>

    {/* ICONS */}
    <div className="about-icons">

      <div className="about-item">
        <img
          src="https://developers-hub.com/wp-content/uploads/2020/11/ab-1.png"
          alt="Requirement Gathering"
        />
        <p style={{ color: "#0b1133", fontSize: "20px", fontWeight: "bold" }}>
       Engineering hub
        </p>
        <p>You’ll get access to all skill sets from content writing, SEO, requirement gathering, Design and development, QA, and testing.</p>
      </div>

      <div className="about-item">
        <img
          src="https://developers-hub.com/wp-content/uploads/2020/11/ab-2.png"
          alt="Planning"
        />
        <p style={{ color: "#0b1133", fontSize: "20px", fontWeight: "bold" }}>
        Phenomenal teamwork        </p>
        <p>We work as a team. Our team enables us to think and analyze the problem in the same manner so it is very easy to streamline the relative development pace.</p>
      </div>

      <div className="about-item">
        <img
          src="https://developers-hub.com/wp-content/uploads/2020/11/ab-4.png"
          alt="Development"
        />
        <p style={{ color: "#0b1133", fontSize: "20px", fontWeight: "bold" }}>
          Experienced developers
        </p>
        <p>
          Our in-house design experts and engineers work effortlessly to produce an interactive product having a great User Interface and User Experience.
        </p>
      </div>

     

    </div>

  </div>
</section>

<section className="howitworks-section-two">
  <img src="https://developers-hub.com/wp-content/uploads/2020/11/How-it-works-page-20-18-1.png" />
</section>
      {/* FOOTER */}
      <Footer />
    </>
  );
}