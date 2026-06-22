export default function Experience() {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Experience</h2>

      {/* Internship */}
      <div style={styles.card}>
        <h3 style={styles.role}>Intern – Frontend Development</h3>

        <p style={styles.company}>
          Thought Minds – 1 Month Internship
        </p>

        <p style={styles.desc}>
          Completed a 1-month internship at Thought Minds focusing on frontend
          development. Gained hands-on experience in building responsive web
          interfaces and understanding real-world development workflows.
        </p>

        <h4 style={styles.subTitle}>Key Learnings</h4>
        <ul style={styles.list}>
          <li>React.js fundamentals and component structure</li>
          <li>HTML, CSS responsive design practices</li>
          <li>UI development and layout building</li>
          <li>Team collaboration and project workflow understanding</li>
        </ul>
      </div>

      {/* Self Learning Experience */}
      <div style={styles.card}>
        <h3 style={styles.role}>Frontend Development (Self Learning)</h3>

        <p style={styles.company}>
          Academic Projects & Personal Practice
        </p>

        <p style={styles.desc}>
          Continuously building frontend development skills through personal
          projects like portfolio website and Flexion Flow physiotherapy app.
        </p>

        <h4 style={styles.subTitle}>Skills Gained</h4>
        <ul style={styles.list}>
          <li>React.js development</li>
          <li>JavaScript logic building</li>
          <li>UI/UX design understanding</li>
          <li>Responsive web design</li>
        </ul>
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    background: "#0f172a",
    color: "white",
    textAlign: "center",
  },
  title: {
    fontSize: "30px",
    marginBottom: "25px",
  },
  card: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "12px",
    maxWidth: "650px",
    margin: "20px auto",
    textAlign: "left",
  },
  role: {
    color: "#38bdf8",
    marginBottom: "5px",
  },
  company: {
    fontSize: "14px",
    opacity: 0.8,
    marginBottom: "10px",
  },
  desc: {
    fontSize: "14px",
    opacity: 0.85,
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  subTitle: {
    fontSize: "15px",
    marginTop: "15px",
    color: "#60a5fa",
  },
  list: {
    fontSize: "13px",
    opacity: 0.85,
    paddingLeft: "18px",
  },
};
