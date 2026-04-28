import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/jobs/${id}`
        );

        console.log("JOB DATA:", res.data);

        // ✅ direct backend object
        setJob(res.data);
      } catch (err) {
        console.log("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!job) return <p>No Job Found</p>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>{job.name}</h1>
      <p><b>Experience:</b> {job.experience}</p>
      <p><b>Job Type:</b> {job.jobType}</p>
      <p>{job.description}</p>
    </div>
  );
}
