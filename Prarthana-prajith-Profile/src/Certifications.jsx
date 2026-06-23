import "./Section.css";

export default function Certifications() {
  return (
    <section id="certifications">
      <h2 className="section-title">Certifications</h2>

      <div className="skills-grid">

        <div className="card">
          <h3>Web Development Workshop</h3>
          <p><b>Organized by:</b> Inov Media</p>
          <p>
            Participated in a hands-on workshop covering modern web development
            fundamentals including HTML, CSS, JavaScript and React basics.
          </p>
        </div>

        <div className="card">
          <h3>Flutter Workshop</h3>
          <p><b>Institution:</b> Rajiv Gandhi University Institute of Technology, Kottayam</p>
          <p>
            Attended a Flutter development workshop focusing on mobile app UI
            development and cross-platform application basics.
          </p>
        </div>

        <div className="card">
          <h3>Unlock the Power of Data Science with AI</h3>
          <p><b>Organized by:</b> Eduberg</p>
          <p>
            Participated in a workshop introducing Data Science concepts,
            AI fundamentals, and real-world applications of machine learning.
          </p>
        </div>

      </div>
    </section>
  );
}