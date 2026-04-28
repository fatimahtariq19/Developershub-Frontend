import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import Footer from "../components/Footer";
import WarningModal from "../components/WarningModal";

const ServiceItem = ({ title, children }) => {
  return (
    <>
      <h4 className="with-icon">
        <span className="icon">➤</span>
        {title}
      </h4>
      <p className="service-text">{children}</p>
    </>
  );
};


 
const features = [
  { title: "Optimization that works", img: "/icon1.png" },
  { title: "Executable Plan", img: "/icon2.png" },
  { title: "Real Time alerts", img: "/icon3.png" },
  { title: "Seasoned team members", img: "/icon4.png" },
  { title: "100% Transparency", img: "/icon5.png" },
  { title: "Funnel Driven Leads", img: "/icon6.png" },
];


export default function Home() {


   const [active, setActive] = useState(0);

  const testimonials = [
    { text: "Great service, amazing team. Highly recommended!", name: "Rivka", role: "Word Advisor" },
    { text: "Professional developers and fast delivery.", name: "Chris Babchuk", role: "Client" },
    { text: "Our experience was smooth and efficient.", name: "Keisha Williams", role: "Support" },
    { text: "Very responsive and skilled team.", name: "Ali", role: "CEO" },
    { text: "Loved working with them!", name: "Sara", role: "Manager" },
    { text: "Top quality delivery.", name: "Usman", role: "Developer" },
    { text: "Highly recommended company.", name: "John", role: "Founder" },
  ];

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* MODAL */}
      <WarningModal />

      {/* HERO */}
     <section className="hero">
  <div className="hero-container">
    <h1>
      Creative and dedicated Design &{" "}
      <span className="highlight">Development</span> Team
    </h1>

    <p style={{justifyContent:"left"}}>
 Developers Hub creates engaging and immersive game experiences. Our success stems from a passionate and skilled design and development team. We have helped numerous companies bring their game and website ideas to life and expand their digital presence.
    </p>

    <div className="hero-icons">
      <div className="hero-item">
        <img src="https://developers-hub.com/wp-content/uploads/2020/09/bann-circle02.png" />
        <p>Convert More</p>
      </div>

      <div className="hero-item">
        <img src="https://developers-hub.com/wp-content/uploads/2020/09/bann-circle03.png" />
        <p>Build Trust</p>
      </div>

      <div className="hero-item">
        <img src="https://developers-hub.com/wp-content/uploads/2020/09/bann-circle01.png" />
        <p>Boost Engagement</p>
      </div>
    </div>
  </div>
</section>


      {/* WHAT WE DO */}
      <section className="what-we-do">
        <div className="w-container">
          <div className="w-left">
            <h3 className="section-tag">What We Do</h3>

            <h2>We Have The Best Experts To Boost Your Business</h2>

            <p>Our expert team can give a great helping hand in bringing your game ideas to life. We specialize in developing high-quality games for mobile, PC, and consoles, ensuring smooth performance, stunning visuals, and engaging gameplay. Whether you need a mobile-friendly game, a cross-platform experience, or a cloud-based gaming solution, we are here to elevate your game development journey.</p>

            <ServiceItem title="Game Development">
If you are looking to create immersive and engaging games, we are here to help! Our team specializes in developing high-quality, interactive, and performance-optimized games across multiple platforms. Whether it's mobile, PC, or console, we ensure smooth gameplay, stunning visuals, and an exceptional user experience. Let’s bring your game idea to life!            </ServiceItem>

            <ServiceItem title="Web Development">
Developer’s Hub is highly dedicated to provide optimal software solutions capable of high performance. We develop single page static to high performing and secure E-Commerce website            </ServiceItem>

            <ServiceItem title="Mobile Optimization">
It is crucial to develop mobile-friendly websites because mobile retains the major search share. We pay special attention to website mobile-friendliness and AMP pages because it matters the most.            </ServiceItem>
          </div>

          <div className="w-right">
            <img
              src="https://developers-hub.com/wp-content/uploads/2020/11/MOBILE-DEV-02.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* CUSTOM SECTION */}
      <section className="custom-section">
        <div className="w-container">
          <div className="w-left">
            <h4 className="section-tag">Light as feather</h4>

            <h2>Custom Software Development</h2>

            <p>
Apart from CMS based websites, we develop easy to navigate and highly intuitive custom websites. We’ll develop feather-light custom websites that both your browser and the visitor will love to visit.            </p>

            <Link to="/about" className="learn-btn">
              LEARN MORE
            </Link>
          </div>

          <div className="w-right">
            <img
              src="https://developers-hub.com/wp-content/uploads/2020/09/05.png"
              alt=""
            />
          </div>
        </div>
      </section>



<section>
  <div className="steps-wrapper">

    <div className="steps-row-check">

      <div className="step">
        <img src="https://developers-hub.com/wp-content/uploads/2020/11/homico12-1.png" />
        <h3>Stay Open 24/7</h3>
      </div>

      <div className="step">
        <img src="https://developers-hub.com/wp-content/uploads/2020/11/h-e-1.png" />
        <h3>Conversion Hike Rate</h3>
      </div>

      <div className="step">
        <img src="https://developers-hub.com/wp-content/uploads/2020/11/h-e-2.png" />
        <h3>SkyRocket Sales</h3>
      </div>

      {/* DUPLICATE FOR SMOOTH LOOP */}
      <div className="step">
        <img src="https://developers-hub.com/wp-content/uploads/2020/11/homico12-1.png" />
        <h3>Stay Open 24/7</h3>
      </div>

      <div className="step">
        <img src="https://developers-hub.com/wp-content/uploads/2020/11/h-e-1.png" />
        <h3>Conversion Hike Rate</h3>
      </div>

      <div className="step">
        <img src="https://developers-hub.com/wp-content/uploads/2020/11/h-e-2.png" />
        <h3>SkyRocket Sales</h3>
      </div>

    </div>

  </div>
</section>


      {/* CORE VALUES */}
   <section className="core-values">
  <h2 className="core-title">We Live by Core Values</h2>

  <div className="core-grid">
    {[
      {
        title: "Find and retain Ultimate Potential",
        img: "https://developers-hub.com/wp-content/uploads/2020/11/h-e-live-chat-icon-9.png",
        para: "We are maintaining a healthy working environment that encourages every employee. That’s the main reason they keep on evolving and love to stay as long as they can in Developers Hub."
      },
      {
        title: "Different but the same under the skin",
        img: "https://developers-hub.com/wp-content/uploads/2020/11/h-e-live-chat-icon-10.png",
        para:"Our team retains strength in different disciplines that thoroughly helps in problem-solving. While combining it creates a great blend that yields versatile solutions."
      },
      {
        title: "The best from the rest",
        img: "https://developers-hub.com/wp-content/uploads/2020/11/h-e-live-chat-icon-11.png",
        para:"It takes 5 to 6 weeks to hunt out a dedicated and passionate individual. Our working framework requires only 2-3 weeks to fully integrate an individual in the workstream."

      },
      {
        title: "We are output-oriented",
        img: "https://developers-hub.com/wp-content/uploads/2020/11/h-e-live-chat-icon-9.png",
        para:"We believe in qualitative outcomes rather than quantitative output. We are not concerned with a line of codes instead optimized code with better execution is preferable."
      },
    ].map((item, i) => (
      <div className="core-card" key={i}>
        <div className="icon-box">
          <img src={item.img} alt="icon" />
        </div>

        <h3>{item.title}</h3>
        <p>{item.para}</p>
       
      </div>
    ))}
  </div>
</section>

      {/* PARTNERSHIP */}
     <section className="partner-section">
  <div className="partner-wrapper">

    {/* LEFT CONTENT */}
    <div className="partner-left">
     <h1 className="partner-title">
  <span className="big-text" style={{fontSize:"70px", justifyContent:"left"}}>Partnership for</span><br />
  <span className="small-text" style={{ textAlign:"right"}}>Long-term Success</span>
</h1>

      <p className="partner-text">
        We help you build scalable web and mobile applications that grow your business
        and deliver real impact.
      </p>

      <button className="partner-btn">
        OUR PROJECTS
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="partner-right">
      <img
        src="https://developers-hub.com/wp-content/uploads/2020/09/804945276-flipchart-lecturing-seminar-diagram.jpg"
        alt="Partnership"
      />
    </div>

  </div>
</section>




  <section className="career-section-three">

  <h1 className="section-title" style={{textAlign:"center"}}>
    How it <span>Works?</span>
  </h1>

  <div className="home-section-seven">

    <div className="seven">
            <h3>Optimization that works</h3>
      <img src="https://developers-hub.com/wp-content/uploads/2020/11/h-e-homicolor.png" />
    </div>

     <div className="seven">
            <h3>Executable Plan</h3>
      <img src="https://developers-hub.com/wp-content/uploads/2020/11/homicolr05.png"  />
    </div>

     <div className="seven">
            <h3>Real Time alerts</h3>
      <img src="https://developers-hub.com/wp-content/uploads/2020/11/homicolr04.png"  />
    </div>

     <div className="seven">
            <h3>Seasoned team members</h3>
      <img src="https://developers-hub.com/wp-content/uploads/2020/11/homicolr03.png" />
    </div>

     <div className="seven">
            <h3>100% Transparency</h3>
      <img src="https://developers-hub.com/wp-content/uploads/2020/11/h-e-homicolor-2-1.png"  />
    </div>

     <div className="seven">
            <h3>Funnel Driven Leads</h3>
      <img src="https://developers-hub.com/wp-content/uploads/2020/11/h-e-homicolor-3.png" />
    </div>



  </div>
 <Link to="/contact-us" className="seven-btn">
              GET STARTED
            </Link>
</section>

   
      {/* TESTIMONIALS */}
 <section className="testimonial-section">
  <h2 style={{marginBottom:"20px"}}>
    This Is What Our <span>Clients Think</span>
  </h2>
  <p style={{textAlign:"center", marginBottom:"20px"}}> Successful businesses all around the world are thriving in customer service using our expertise.
See what they have to say and get inspired.</p>

  <div className="testimonial-carousel">

    {testimonials.map((item, i) => {
      let position = "next";

      if (i === active) position = "active";
      else if (
        i === active - 1 ||
        (active === 0 && i === testimonials.length - 1)
      ) {
        position = "prev";
      }

      return (
        <div key={i} className={`testimonial-card ${position}`}>
          <p>{item.text}</p>
          <h4>{item.name}</h4>
          <span>{item.role}</span>
        </div>
      );
    })}

  </div>

  {/* DOTS */}
  <div className="dots">
    {testimonials.map((_, i) => (
      <span
        key={i}
        className={`dot ${i === active ? "active-dot" : ""}`}
        onClick={() => setActive(i)}
      />
    ))}
  </div>
</section>


      <Footer />
    </>
  );
}
