export default function Projects() {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Projects</h2>

      <div style={styles.card}>
        <h3 style={styles.name}>Flexion Flow</h3>

        <p style={styles.desc}>
          Flexion Flow is a physiotherapy mobile application designed to assist
          users in improving physical wellness through guided exercises,
          rehabilitation programs, and personalized recovery plans. The
          application aims to bridge the gap between patients and physiotherapy
          support by providing accessible and user-friendly digital healthcare
          solutions.
        </p>

        <h4 style={styles.subTitle}>Technologies Used</h4>
        <ul style={styles.list}>
          <li>Flutter</li>
          <li>JavaScript</li>
          <li>Firebase</li>
          <li>UI/UX Design</li>
        </ul>

        <h4 style={styles.subTitle}>Key Features</h4>
        <ul style={styles.list}>
          <li>Guided physiotherapy exercises</li>
          <li>Personalized recovery tracking</li>
          <li>Exercise progress monitoring</li>
          <li>User-friendly mobile interface</li>
          <li>Health and wellness support</li>
        </ul>
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    background: "#0f172a", // dark blue theme
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
  name: {
    color: "#38bdf8",
    marginBottom: "10px",
  },
  desc: {
    fontSize: "14px",
    opacity: 0.85,
    marginBottom: "15px",
    lineHeight: "1.6",
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