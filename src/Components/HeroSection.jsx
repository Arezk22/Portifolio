import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="display-3 fw-bold text-white mb-3">
              Hi, I'm <span className="text-primary">Ahmed Rezk</span>
            </h1>
            <h2 className="h3 text-secondary mb-4">
              Full-Stack Developer | Database Systems Architect
            </h2>
            <p className="lead text-light mb-5">
              Specialized in building scalable web applications and designing
              complex database schemas. From crafting responsive UIs to
              automating systems with Bash and Docker.
            </p>
            <div className="d-flex gap-3">
              <a href="#projects" className="btn btn-primary btn-lg px-4">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg px-4">
                Contact Me
              </a>
            </div>
          </div>
          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <div className="hero-image-wrapper">
              {/* هنا تقدر تحط صورتك أو Icon تقني يعبر عنك */}
              <img
                src="https://via.placeholder.com/400"
                alt="Developer Illustration"
                className="img-fluid rounded-circle shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
