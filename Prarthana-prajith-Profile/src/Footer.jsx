export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © 2026 Prarthana Prajith. All rights reserved.
      </p>

      <p style={styles.subText}>
        Built with React.js 💙
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#0f172a",
    color: "white",
    textAlign: "center",
    padding: "20px",
    borderTop: "1px solid #1e293b",
  },
  text: {
    fontSize: "14px",
    marginBottom: "5px",
    opacity: 0.9,
  },
  subText: {
    fontSize: "12px",
    opacity: 0.6,
  },
};