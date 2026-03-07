// import { projectsData, randColor } from "../projectData.js";
// import { useState } from "react";
// import { ProjectPreview } from "./ProjectPreview";
// import { Link } from "react-router-dom";

// export function Project() {
//   // let [data, setData] = useState(``);
//   var r = document.querySelector(":root");
//   let [prev, setPrev] = useState(projectsData[0]);
//   // let [bgColor , setBgColor] = useState(randColor[0])
//   function renderProjects(e) {
//     let clickTool = e.target.innerText;
//     projectsData.map((tools, ind) => {
//       if (tools.name == clickTool) {
       
//         setPrev(tools);
     
//         let randomNumber = Math.floor(Math.random() * randColor.length);
//         let randomColor = randColor[randomNumber];
//         r.style.setProperty("--random", `${randomColor}`);
 
//         document
//           .querySelector(".projectActive")
//           .classList.remove("projectActive");

//         e.target.classList.add("projectActive");
//       }
//     });
//   }
//   return (
//     <div className="pDiv w-full h-[100%] overflow-scroll flex py-[5px]">
//       <div className="projects_name w-[25%]">
//         <ul onClick={renderProjects} className="flex flex-col gap-[8px]">
//           <li className="projectActive">little tools</li>
//           <li>draggable notepad</li>
//           <li>megh visuals</li>
//           <li>Portfolio Website</li>
//         </ul>
//       </div>
//       <div className="projectsPreview w-[75%] overflow-scroll pl-[15px] px-[6px] h-[200px] flex flex-col gap-[10px]">
        
//         <ProjectPreview {...prev} />
//       </div>
//     </div>
//   );
// }

import { projectsData, randColor } from "../projectData";
import { useState } from "react";
import { ProjectPreview } from "./ProjectPreview";

export function Project() {
  const [prev, setPrev] = useState(projectsData[0]);
  const [activeColor, setActiveColor] = useState(randColor[0]);

  const handleProjectClick = (project) => {
    // Set the current project object
    setPrev(project);

    // Generate and set random color
    const randomColor = randColor[Math.floor(Math.random() * randColor.length)];
    setActiveColor(randomColor);
    
    // Set the CSS variable on the root (optional, if other components need it)
    document.documentElement.style.setProperty("--random", randomColor);
  };

  return (
    <div className="pDiv w-full h-full overflow-scroll flex py-[5px]">
      {/* Sidebar Section */}
      <div className="projects_name w-[25%]">
        <ul className="flex flex-col gap-[8px] cursor-pointer">
          {projectsData.map((project) => (
            <li
              key={project.name}
              onClick={() => handleProjectClick(project)}
              className={prev.name === project.name ? "projectActive" : ""}
              style={{ 
                backgroundColor: prev.name === project.name ? activeColor : 'transparent' 
              }}
            >
              {project.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Preview Section */}
      <div className="projectsPreview w-[75%] overflow-scroll pl-[15px] px-[6px] h-[200px] flex flex-col gap-[10px]">
        <ProjectPreview {...prev} />
      </div>
    </div>
  );
}