export default function Hero() {
  return (
    <section className="section" style={styles.container}>
      <h1 style={styles.title}>Hi, I'm Prarthana Prajith 👋</h1>

      <p style={styles.subtitle}>
        B.Tech AI & ML Student | Frontend Developer
      </p>

      <p style={styles.description}>
        I am passionate about building modern web applications using React.
        I love creating clean, responsive and user-friendly interfaces.
      </p>

      <div style={styles.buttonGroup}>
        <button style={styles.primaryButton}>Contact Me</button>
        <button style={styles.secondaryButton}>View Projects</button>
      </div>
    </section>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "white",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    opacity: 0.8,
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    opacity: 0.7,
    maxWidth: "500px",
    marginBottom: "20px",
  },
  buttonGroup: {
    display: "flex",
    gap: "15px",
  },
  primaryButton: {
    padding: "10px 18px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    color: "black",
    fontWeight: "bold",
  },
  secondaryButton: {
    padding: "10px 18px",
    background: "transparent",
    border: "2px solid #38bdf8",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#38bdf8",
    fontWeight: "bold",
  },
};
