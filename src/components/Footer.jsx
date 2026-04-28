export default function Footer() {
  return (
    <footer style={{ background: "#0d0d0d", color: "#ffffff", fontFamily: "Arial, sans-serif" }}>
      
      {/* Top Bar */}
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        borderTop: "1px solid #333",
        borderBottom: "1px solid #333",
        padding: "15px 0",
        fontSize: "14px",
        flexWrap: "wrap",
        gap: "10px"
      }}>

  {/* <div className="line"></div> */}

        <p>📍 Office No. 07 Second Floor Khumrial Center, G-8/4 Islamabad, 44000</p>
        <p>✉️ Hr@developers-hub.com</p>
        <p>📞 Tel: +92 518 447 063</p>

  {/* <div className="line"></div> */}

      </div>

      {/* Main Content */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        flexWrap: "wrap",
        gap: "30px",
        color:"#fff"
      }}>

        {/* Column */}
        {[
          {
            title: "SERVICES",
            items: [
              "Android Game development",
              "IOS Game Development",
              "IOS Apps",
              "Android Apps",
              "Native/Hybrid Apps",
              "Technical SEO"
            ]
          },
          {
            title: "INDUSTRIES",
            items: [
              "Fin Tech",
              "Health Tech",
              "E-Commerce",
              "Real Estate",
              "Marketing and ADTech"
            ]
          },
          {
            title: "TECHNOLOGIES",
            items: [
              "React & Angular",
              "Unity",
              "Flutter",
              "Python",
              "PHP / My SQL",
              ".Net"
            ]
          },
          {
            title: "CONNECT WITH US",
            items: [
              "Facebook",
              "Instagram",
              "LinkedIn"
            ]
          }
        ].map((col, index) => (
          <div key={index}>
            <h3 style={{ color: "#fff", marginBottom: "15px", fontSize: "16px" }}>
              {col.title}
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {col.items.map((item, i) => (
                <li key={i} style={{
                  marginBottom: "10px",
                  cursor: "pointer",
                  transition: "0.3s"
                }}
                onMouseEnter={e => {
                  e.target.style.color = "#ff3c3c";
                  e.target.style.transform = "translateX(5px)";
                }}
                onMouseLeave={e => {
                  e.target.style.color = "#ccc";
                  e.target.style.transform = "translateX(0)";
                }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom */}
      <div style={{
        textAlign: "center",
        borderTop: "1px solid #333",
        padding: "15px 0",
        fontSize: "14px",
        color: "#ffffff"
      }}>
        Copyright © 2025 | Developers Hub Private Limited
      </div>

    </footer>
  );
}
