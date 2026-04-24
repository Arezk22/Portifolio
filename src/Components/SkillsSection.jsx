import "./SkillsٍSection.css";

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      icon: "bi-code-slash",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Bootstrap 5"],
    },
    {
      title: "Database Engineering",
      icon: "bi-database-fill-gear",
      skills: [
        "SQL Server",
        "PostgreSQL",
        "Stored Procedures",
        "Schema Design",
      ],
    },
    {
      title: "DevOps & Systems",
      icon: "bi-terminal-fill",
      skills: ["Docker", "Bash Scripting", "Linux (Ubuntu)", "Git & GitHub"],
    },
    {
      title: "Core Concepts",
      icon: "bi-gear-wide-connected",
      skills: ["OOP", "RESTful APIs", "System Design", "Agile/Scrum"],
    },
  ];

  return (
    <section className="skills-section py-5" id="skills">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white">Technical Skills</h2>
          <div className="underline mx-auto"></div>
        </div>

        <div className="row g-4">
          {skillsData.map((category, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="skill-card h-100 p-4">
                <div className="icon-box mb-3">
                  <i className={`bi ${category.icon}`}></i>
                </div>
                <h4 className="text-white h5 mb-3">{category.title}</h4>
                <ul className="list-unstyled">
                  {category.skills.map((skill, sIndex) => (
                    <li key={sIndex} className="skill-item">
                      <span className="dot"></span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
