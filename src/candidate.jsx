import React from "react";
import Education from "./education";

export default function candidate() {
  let details = [
    "Name: Vikram R",
    "Occupation: Web Developer",
    "Email: vkr.rdy@gmail.com",
    "Location: Banglore",
  ];
  return (
    <div>
      <div className="candidate-container">
        <div className="candidate">
          {details.map((value, index) => (
            <div>
              <p className="candidate-li">{value}</p>
              {index + 1 !== details.length && (
                <div className="seperater"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Education />
    </div>
  );
}
