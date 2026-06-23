export default function Contact() {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Contact Me</h2>

      <div style={styles.card}>
        <p style={styles.text}>
          Feel free to reach out for collaboration, internships, or project opportunities.
        </p>

        <div style={styles.info}>
          <p><b>Email:</b>prarthanaprajith9@gmail.com</p>
          <p><b>GitHub:</b> https://github.com/prarthanaprajith9-sudo</p>
          <p><b>LinkedIn:</b> www.linkedin.com/in/prarthana-prajith-704a6b3a9</p>
        </div>

        <button
  style={styles.button}
  onClick={() =>
    window.location.href = "prarthanaprajith9@gmail.com"
  }
>
  Hire Me
</button>
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
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
  },
  text: {
    fontSize: "14px",
    opacity: 0.85,
    marginBottom: "15px",
  },
  info: {
    fontSize: "14px",
    lineHeight: "1.8",
    marginBottom: "20px",
    opacity: 0.9,
  },
  button: {
    padding: "10px 18px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};