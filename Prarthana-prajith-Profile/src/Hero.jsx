import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-text">
        <h1>
          Hi, I'm <span className="gradient-text">Prarthana Prajith</span>
        </h1>

        <h3>Front-End Developer | AI & ML Student</h3>

        <p>
          A passionate first-year BTech AI & ML student with a strong interest
          in Front-End Development, UI/UX Design, and innovative technologies.
          Currently building modern and responsive web applications while
          exploring real-world projects.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>

          <a href="#projects" className="btn btn-outline">
            View Projects
          </a>
        </div>
      </div>

    </section>
  );
}