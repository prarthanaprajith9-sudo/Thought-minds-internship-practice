export default function About() {
  return (
    <section className="section" style={styles.container}>
      <h2 style={styles.title}>About Me</h2>

      <div style={styles.box}>
        <p style={styles.text}>
          Hi, I'm a B.Tech student specializing in Artificial Intelligence and Machine Learning.
          I am passionate about frontend development and building modern web applications using React.
        </p>

        <h3 style={styles.subTitle}>🎓 Educational Background</h3>
        <p style={styles.text}>
          Currently pursuing B.Tech in AI & ML. I have a strong interest in web development,
          programming, and problem-solving.
        </p>

        <h3 style={styles.subTitle}>🚀 Career Goals</h3>
        <p style={styles.text}>
          My goal is to become a Full Stack Developer and later grow into an AI Engineer
          who builds impactful real-world applications.
        </p>

        <h3 style={styles.subTitle}>💡 Interests</h3>
        <p style={styles.text}>
          I enjoy coding, learning new technologies, building UI designs,
          and exploring AI-based applications.
        </p>
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    background: "#111827",
    color: "white",
    textAlign: "center",
  },
  title: {
    fontSize: "30px",
    marginBottom: "20px",
  },
  box: {
    maxWidth: "700px",
    margin: "0 auto",
    textAlign: "left",
    background: "#1e293b",
    padding: "25px",
    borderRadius: "12px",
  },
  subTitle: {
    fontSize: "18px",
    marginTop: "15px",
    color: "#38bdf8",
  },
  text: {
    fontSize: "15px",
    opacity: 0.85,
    lineHeight: "1.6",
  },
};