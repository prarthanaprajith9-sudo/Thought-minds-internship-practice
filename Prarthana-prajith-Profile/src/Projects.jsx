import "./Section.css";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="card">
        <h3>Flexion Flow</h3>

        <p>
          A physiotherapy support web application designed to help patients
          follow doctor-prescribed exercises and recovery routines.
        </p>

        <p><b>Key Features:</b></p>
        <ul>
          <li>Doctor prescription-based exercise tracking</li>
          <li>Patient progress monitoring</li>
          <li>Simple and user-friendly UI</li>
        </ul>

        <p><b>Technologies Used:</b> HTML, CSS, Java, Flutter</p>
      </div>
    </section>
  );
}