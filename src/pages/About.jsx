import Footer from "../components/Footer";
import "../assets/styles/about.css";

export default function About() {
    return (
        <>
            {/* HERO SECTION */} {/*check*/}
            <section className="about-section">
                <div className="about-body" style={{ marginTop: "-2%" }}>

                    <h1 className="about-title" style={{ marginTop: "8%", color:"#fff",textAlign: "center", fontSize: "55px" }}>
                        ABOUT US
                    </h1>

                    <p style={{ textAlign: "center", maxWidth: "800px",color:"#fff", fontSize: 'px', margin: "auto" }}>
                        Welcome to the Creative World of developers – A Renowned Web/Mobile Consulting and Development Firm
                    </p>

                    {/* ICONS */}
                    <div className="about-icons">

                        <div className="about-item">
                            <img src="https://developers-hub.com/wp-content/uploads/2020/11/ab-1.png" alt="" />
                            <p style={{ color: "#0b1133", fontSize: "20px", fontWeight: "bold" }}>Quick Response</p>
                        </div>

                        <div className="about-item">
                            <img src="https://developers-hub.com/wp-content/uploads/2020/11/ab-2.png" alt="" />
                            <p style={{ color: "#0b1133", fontSize: "20px", fontWeight: "bold" }}>Team Synchronization</p>
                        </div>

                        <div className="about-item">
                            <img src="https://developers-hub.com/wp-content/uploads/2020/11/ab-4.png" alt="" />
                            <p style={{ color: "#0b1133", fontSize: "20px", fontWeight: "bold" }}>Visitors Retention</p>
                        </div>

                        <div className="about-item">
                            <img
                                src="https://developers-hub.com/wp-content/uploads/2020/11/ab-4.png"
                                alt=""
                                className="about-img"
                            />              <p style={{ color: "#0b1133", fontSize: "20px", fontWeight: "bold" }}>Survey & Feedback</p>
                        </div>

                    </div>

                </div>
            </section>


            <section className="two-col-section" style={{ marginTop: "10%" }}>

                <div className="container">

                    <div className="left">
                        <div className="col-left">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1670884441849-779eb186fb9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZXRpbmclMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D"
                                alt="What We Do" style={{ height: "650px" }}
                            />
                        </div>

                    </div>

                    <div className="right">
                        <h3 style={{ color: "red", marginLeft: "10%" }}>ABOUT US
                        </h3>
                        <h3 style={{ marginLeft: "10%", fontSize: "30px" }}>We are Developers Hub</h3>

                        <p style={{ fontSize: "20px", marginLeft: "10%", }}>
                            Developers Hub comprises senior and expert staff members having tremendous experience in their respective areas of expertise. Developers Hub makes sure to utilize their knowledge in the best way to provide products aligned with the latest market practices.
                        </p>

                        <h2 style={{ fontSize: "30px", marginLeft: "10%", }}>Best in the Business</h2>

                        <p style={{ fontSize: "20px", marginLeft: "10%", }}>
                            Our software development company is operating for many years. We have kept the young nerd and tech-savvy alive so that we explore all the new development methodologies to deliver the best.
                        </p>

                        {/* FEATURES LIST */}
                        <div className="feature-list">

                            <div className="feature-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 640 640">
                                    <path d="M64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM451.3 331.3L347.3 435.3C342.7 439.9 335.8 441.2 329.9 438.8C324 436.4 320 430.5 320 424L320 368L224 368C206.3 368 192 353.7 192 336L192 304C192 286.3 206.3 272 224 272L320 272L320 216C320 209.5 323.9 203.7 329.9 201.2C335.9 198.7 342.8 200.1 347.3 204.7L451.3 308.7C457.5 314.9 457.5 325.1 451.3 331.3z" />
                                </svg>
                                <span>Acquire live chat enables sales</span>
                            </div>

                            <div className="feature-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 640 640">
                                    <path d="M64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM451.3 331.3L347.3 435.3C342.7 439.9 335.8 441.2 329.9 438.8C324 436.4 320 430.5 320 424L320 368L224 368C206.3 368 192 353.7 192 336L192 304C192 286.3 206.3 272 224 272L320 272L320 216C320 209.5 323.9 203.7 329.9 201.2C335.9 198.7 342.8 200.1 347.3 204.7L451.3 308.7C457.5 314.9 457.5 325.1 451.3 331.3z" />
                                </svg>
                                <span>Engage - marketing automation</span>
                            </div>

                            <div className="feature-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 640 640">
                                    <path d="M64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM451.3 331.3L347.3 435.3C342.7 439.9 335.8 441.2 329.9 438.8C324 436.4 320 430.5 320 424L320 368L224 368C206.3 368 192 353.7 192 336L192 304C192 286.3 206.3 272 224 272L320 272L320 216C320 209.5 323.9 203.7 329.9 201.2C335.9 198.7 342.8 200.1 347.3 204.7L451.3 308.7C457.5 314.9 457.5 325.1 451.3 331.3z" />
                                </svg>
                                <span>Acquire live chat enables sales</span>
                            </div>

                            <div className="feature-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 640 640">
                                    <path d="M64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM451.3 331.3L347.3 435.3C342.7 439.9 335.8 441.2 329.9 438.8C324 436.4 320 430.5 320 424L320 368L224 368C206.3 368 192 353.7 192 336L192 304C192 286.3 206.3 272 224 272L320 272L320 216C320 209.5 323.9 203.7 329.9 201.2C335.9 198.7 342.8 200.1 347.3 204.7L451.3 308.7C457.5 314.9 457.5 325.1 451.3 331.3z" />
                                </svg>
                                <span>Engage - marketing automation</span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>



            <section className="about-section-third">
                <h3>We have provided software solutions to more than 500+ Clients</h3>
                <p>
                    We have clients from all industries including mechanical parts assemblers,
                    fashion industries, news blogs, company portfolios, fitness blogs, and
                    E-Commerce stores. This huge diversity has earned an enormous experience
                    for us and helped to establish our venerable reputation.
                </p>
            </section>



            <section className="WWC">

                <div className="WWC-item">
                    <p>World Wide Clients</p>
                    <img src="https://developers-hub.com/wp-content/uploads/2020/11/ab-1.png" alt="" />
                </div>

                <div className="WWC-item">
                    <p>Massive Client Base</p>
                    <img src="https://developers-hub.com/wp-content/uploads/2020/11/icon-6.png" alt="" />
                </div>

                <div className="WWC-item">
                    <p>Immense Experience</p>
                    <img src="https://developers-hub.com/wp-content/uploads/2020/11/icon-8.png" alt="" />
                </div>

                <div className="WWC-item">
                    <p>Positive Feedback</p>
                    <img src="https://developers-hub.com/wp-content/uploads/2020/11/icon-8.png" alt="" />
                </div>

            </section>

      <h1 style={{ textAlign: "center" }}>
  What makes us <span className="highlight">"Us"</span>
</h1>

<section className="lr-section">

  {/* LEFT */}
  <div className="lr-left ">

    <h2>Our Client base is our strength</h2>
    <p>
      The confidence our clients have expressed on our services in the form of overwhelming reviews is the driving force that keeps us going and defines us who we are.
    </p>

    <h2>Geniuses under one roof</h2>
    <p>
      Our success is connecting skilled individuals with diverse skill sets and further hone their skills. The principal recipe is to gel them together to do wonders.
    </p>

  </div>

  {/* RIGHT */}
  <div className="lr-right">
    <img
      src="https://developers-hub.com/wp-content/uploads/2020/09/ftr-graph.png"
      alt="graph"
    />
  </div>

</section>
            <Footer />
        </>
    );
}