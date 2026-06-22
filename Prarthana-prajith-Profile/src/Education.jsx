export default function Education() {
  return (
    <section className="section" style={styles.container}>
      <h2 style={styles.title}>Education</h2>

      <div style={styles.card}>
        <h3 style={styles.degree}>
          B.Tech – Artificial Intelligence & Machine Learning
        </h3>

        <p style={styles.college}>
          Mentor Academy for Design, Entrepreneurship, Innovation & Technology (MADEIT), KTU
        </p>

        <p style={styles.duration}>
          Duration: 2025 – 2029
        </p>

        <p style={styles.desc}>
          Currently pursuing Bachelor of Technology in Artificial Intelligence and Machine Learning.
          Focused on building strong foundations in programming, AI concepts, and software development.
        </p>

        <h4 style={styles.subTitle}>Key Focus Areas</h4>
        <ul style={styles.list}>
          <li>Artificial Intelligence Fundamentals</li>
          <li>Machine Learning Basics</li>
          <li>Data Structures & Algorithms</li>
          <li>Web Development (React, JavaScript)</li>
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
    margin: "0 auto",
    textAlign: "left",
  },
  degree: {
    color: "#38bdf8",
    marginBottom: "10px",
  },
  college: {
    fontSize: "14px",
    opacity: 0.85,
    marginBottom: "5px",
  },
  duration: {
    fontSize: "13px",
    opacity: 0.7,
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