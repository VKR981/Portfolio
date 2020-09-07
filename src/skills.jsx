import React from "react";

export default function skills() {
  let skills = [
    {
      name: "Python",
      proficiancy: 7,
    },
    {
      name: "JavaScript",
      proficiancy: 7,
    },
    {
      name: "SQL",
      proficiancy: 7,
    },
    {
      name: "React.js",
      proficiancy: 7,
    },
    {
      name: "Flask",
      proficiancy: 7,
    },
    {
      name: "HTML",
      proficiancy: 7,
    },
    {
      name: "CSS",
      proficiancy: 7,
    },
    {
      name: "Pytorch",
      proficiancy: 2,
    },
    {
      name: "Keras",
      proficiancy: 3,
    },
    {
      name: "PostgreSQL",
      proficiancy: 2,
    },
  ];
  return (
    <div className="skills-container">
      <h3 className="section-title"> Skills </h3>
      <div className="skill-subsection">
        <div>
          {skills.map((skill) => (
            <div className="skillbar-pair">
              <p className="skill">{skill.name}</p>
              <div
                className="skill-bar"
                style={{ width: skill.proficiancy * 10 + "px" }}
              ></div>
            </div>
          ))}
        </div>
        <div>
          {skills.map((skill) => (
            <div className="skillbar-pair">
              <p className="skill">{skill.name}</p>
              <div
                className="skill-bar"
                style={{ width: skill.proficiancy * 10 + "px" }}
              ></div>
            </div>
          ))}
        </div>
        <div>
          {skills.map((skill) => (
            <div className="skillbar-pair">
              <p className="skill">{skill.name}</p>
              <div
                className="skill-bar"
                style={{ width: skill.proficiancy * 10 + "px" }}
              ></div>
              <div
                className="skill-empty-bar"
                style={{
                  width: (10 - skill.proficiancy) * 10 + "px",
                  color: "red",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
