// import React from 'react';
import "./EducationSection.css";

const Education = () => {
  const educationData = [
    {
      institution: "Information Technology Institute (ITI)",
      degree: "Software Development",
      duration: "2026 - Present", // تقدر تعدل التواريخ حسب حالتك
      description:
        "Intensive professional training focused on full-stack development, advanced database architecture, and DevOps practices. Gained hands-on experience through real-world projects like Online Examination Systems and CLI-based DBMS.",
    },
    {
      institution: "Computer Science and Information Technology", // ضع اسم جامعتك هنا
      degree: "Bachelor of Computer Science and Information Technology",
      duration: "2021 - 2025",
      description:
        "Foundational studies in algorithms, data structures, operating systems, and software engineering principles.",
    },
  ];

  return (
    <section className="education-section py-5" id="education">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white">Education</h2>
          <div className="underline mx-auto"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="timeline">
              {educationData.map((item, index) => (
                <div className="timeline-item mb-5" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="education-card p-4 shadow-sm">
                    <div className="d-flex justify-content-between flex-wrap mb-2">
                      <h4 className="text-primary fw-bold">
                        {item.institution}
                      </h4>
                      <span className="badge bg-dark-blue text-primary border border-primary px-3 py-2">
                        {item.duration}
                      </span>
                    </div>
                    <h5 className="text-white mb-3">{item.degree}</h5>
                    <p className="text-light opacity-75 mb-0">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
