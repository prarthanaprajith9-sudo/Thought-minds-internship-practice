import "./Section.css";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">

        <div className="card">
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React.js, Flutter UI</p>
        </div>

        <div className="card">
          <h3>Backend</h3>
          <p>Basic Node.js, API Understanding</p>
        </div>

        <div className="card">
          <h3>Databases</h3>
          <p>MySQL, Firebase (Basics)</p>
        </div>

        <div className="card">
          <h3>Tools</h3>
          <p>VS Code, Git, GitHub, Vercel</p>
        </div>

        <div className="card">
          <h3>Programming</h3>
          <p>Java, Python</p>
        </div>

        <div className="card">
          <h3>Soft Skills</h3>
          <p>Leadership, Time Management, Teamwork, Communication, Problem Solving</p>
        </div>

      </div>
    </section>
  );
}