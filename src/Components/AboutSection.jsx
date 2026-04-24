import "./AboutSection.css";

const About = () => {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-content">
              <h2 className="display-5 fw-bold text-white mb-4">About Me</h2>
              <p className="text-light opacity-75 mb-3">
                iam a passionate Full-Stack Developer and Database Systems
                Architect with a strong focus on building scalable web
                applications and designing efficient database schemas. With
                expertise in both front-end and back-end technologies, I
                specialize in crafting responsive user interfaces using React
                and optimizing database performance through advanced SQL
                techniques. My skill set extends to DevOps practices, including
                containerization with Docker and Linux system administration,
                enabling me to deliver end-to-end solutions that are robust,
                maintainable, and performant.
              </p>
              <p className="text-light opacity-75 mb-4">
                Whether it's developing dynamic web applications, architecting
                complex database systems, or automating deployment processes, I
                am dedicated to creating high-quality software that meets the
                needs of users and businesses alike.
              </p>
              <div className="row g-3">
                <div className="col-6">
                  <div className="stat-card p-3 rounded shadow-sm">
                    <h4 className="text-primary mb-1">Architecture</h4>
                    <p className="small text-muted mb-0">System & DB Design</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card p-3 rounded shadow-sm">
                    <h4 className="text-primary mb-1">DevOps</h4>
                    <p className="small text-muted mb-0">Docker & Bash</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skills-highlight p-4 rounded shadow">
              <h5 className="text-white mb-4">Key Focus Areas:</h5>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center text-light">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Full-Stack Development (React & Node/SQL)
                </li>
                <li className="mb-3 d-flex align-items-center text-light">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Database Architecture & Query Optimization
                </li>
                <li className="mb-3 d-flex align-items-center text-light">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Containerization & Deployment Automation
                </li>
                <li className="mb-3 d-flex align-items-center text-light">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Linux System Administration (Ubuntu)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
