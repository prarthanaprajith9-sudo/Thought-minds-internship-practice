export default function Certifications() {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Certifications</h2>

      <div style={styles.card}>

        <div style={styles.item}>
          <h3 style={styles.name}>Web Development Workshop</h3>
          <p style={styles.org}>Inov Media</p>
        </div>

        <div style={styles.item}>
          <h3 style={styles.name}>Flutter Workshop Participation</h3>
          <p style={styles.org}>
            Rajiv Gandhi Institute of Technology, Kottayam
          </p>
        </div>

        <div style={styles.item}>
          <h3 style={styles.name}>
            Unlock the Power of Data Science with AI
          </h3>
          <p style={styles.org}>Eduberg</p>
        </div>

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
    maxWidth: "700px",
    margin: "0 auto",
    background: "#1e293b",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "left",
  },
  item: {
    marginBottom: "20px",
    paddingBottom: "10px",
    borderBottom: "1px solid #334155",
  },
  name: {
    color: "#38bdf8",
    fontSize: "16px",
    marginBottom: "5px",
  },
  org: {
    fontSize: "14px",
    opacity: 0.8,
  },
};