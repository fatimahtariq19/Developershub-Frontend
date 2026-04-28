import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "../assets/styles/career.css";
import { useNavigate } from "react-router-dom";

export default function Career() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs/all");
        setJobs(res.data.jobs);
      } catch (error) {
        console.log("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    
    fetchJobs();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="career-section">
        <div className="career-body" style={{ marginTop: "-2%" }}>
          <h1
            className="about-title"
            style={{
              marginTop: "8%",
              color: "#fff",
              textAlign: "center",
              fontSize: "55px",
            }}
          >
            CAREERS
          </h1>
        </div>
      </section>

      {/* JOBS SECTION */}

      <section className="career-section-two">
        <h1 className="section-title">Latest Jobs</h1>

        <div className="container">


          {loading ? (
            <p>Loading jobs...</p>
          ) : (
            <div className="job-grid">
              {jobs.map((job) => (
                <div className="job-card" key={job._id}>

                  {/* LEFT IMAGE */}
                  <div className="job-left">
                    <img
                      src="https://developers-hub.com/wp-content/uploads/2022/06/9b3c032b0685a0b51758f292161c286f-min-300x300.png"
                      className="job-img"
                      alt="job"
                    />
                  </div>

                  {/* CENTER CONTENT */}
                  <div className="job-middle">
                    <h2 className="job-title">{job.name}</h2>

                    <div className="job-meta">
                      <p>
                        <span className="label">Experience:</span> {job.experience}
                      </p>

                      <p>
                        <span className="label">Job Type:</span> {job.jobType}
                      </p>
                    </div>

                    <p className="job-desc">{job.description}</p>
                  </div>

                  {/* RIGHT BUTTON */}
                  <div className="job-right">
              <button
  className="apply-btn"
  onClick={() => navigate(`${job._id}`)}
>
  APPLY NOW
</button>


                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>


  <section className="career-section-three">

  <h1 className="section-title" style={{textAlign:"center"}}>
    How it <span>Works?</span>
  </h1>

  <div className="steps-row">

    <div className="step">
      <img src="https://developers-hub.com/wp-content/uploads/2022/06/homicolr05.png" alt="Apply for job" />
      <h3>Apply for Job</h3>
    </div>

    <div className="step">
      <img src="https://developers-hub.com/wp-content/uploads/2022/06/homicolr03.png" alt="Get Interviewed" />
      <h3>Get Interviewed</h3>
    </div>

    <div className="step">
      <img src="https://developers-hub.com/wp-content/uploads/2022/06/h-e-homicolor-2-1.png" alt="Get Hired" />
      <h3>Get Hired</h3>
    </div>

  </div>

</section>


      <Footer />
    </>
  );
}
