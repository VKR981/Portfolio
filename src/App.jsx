import React, { useState } from "react";
import Candidate from "./candidate";
import Skills from "./skills";
import Desc from "./description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import Education from "./education";
import Experience from "./experience";
import "./App.css";

function App() {
  const Pages = ["About", "Expirience", "Projects"];
  const [Page, setPage] = useState(0);
  const [Pagename, setPagename] = useState(Pages[0]);
  const [currentPage, setCurrentPage] = useState({
    load: About,
  });

  const Changepage = (e) => {
    const nextpage = (e + Page) % 3;
    setPagename(Pages[Math.abs(nextpage)]);
    switch (Math.abs(nextpage)) {
      case 0:
        setCurrentPage({ load: About });
        break;
      case 1:
        setCurrentPage({ load: Experience_Education });
        break;
      case 2:
        setCurrentPage({ load: Projects });
        break;
      default:
        setCurrentPage({ load: About });
    }
    setPage(nextpage);
  };

  return (
    <div className="maincontainer">
      <div className="background1"></div>
      <div className="background2"></div>

      <h1> Candidate Profile </h1>
      <div className="nav-bar">
        <h3></h3>
        <FontAwesomeIcon
          onClick={(e) => Changepage(-1)}
          icon={faCaretLeft}
          size="3x"
          transform="down-3"
        />
        <h2>{` ${Pagename} `}</h2>
        <FontAwesomeIcon
          onClick={(e) => Changepage(+1)}
          icon={faCaretRight}
          size="3x"
          transform="down-3"
        />
      </div>
      {currentPage.load()}
    </div>
  );
}
const About = () => {
  return (
    <div className="grid">
      <Candidate />
      <div>
        <Skills />
      </div>
    </div>
  );
};

const Experience_Education = () => {
  return (
    <div className="grid">
      <Education />
      <Experience />
    </div>
  );
};

const Projects = () => {
  return 0;
};

export default App;
