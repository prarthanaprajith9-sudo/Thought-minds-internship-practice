export default function Skills() {
  const skillData = {
    "Programming Languages": ["HTML", "CSS", "Java", "Python"],
    "Frontend": ["React", "JavaScript"],
    "Backend": ["Node.js (learning)"],
    "Database": ["MySQL (basic)"],
    "Tools": ["VS Code", "Git", "GitHub"],
    "Soft Skills": ["Time Management", "Leadership", "Communication"],
  };

  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Skills</h2>

      <div style={styles.grid}>
        {Object.entries(skillData).map(([category, items], index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.category}>{category}</h3>

            <div style={styles.items}>
              {items.map((item, i) => (
                <span key={i} style={styles.badge}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
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
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "center",
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    width: "250px",
  },
  category: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#38bdf8",
  },
  items: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    justifyContent: "center",
  },
  badge: {
    background: "#334155",
    padding: "5px 10px",
    borderRadius: "6px",
    fontSize: "12px",
  },
};