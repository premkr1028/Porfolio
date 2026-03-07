
import { useState, useEffect } from "react";
import { imgData, imgFullData } from "../../skillImageData";
// import { useState , useEffect } from `react`
export function Skills() {
  const [cards, setCards] = useState([]);
  const [imgDet, setImgDet] = useState("");
  const [skiName, setSkiName] = useState("");
  const [mobile, setMobile] =  useState("false")
  const handleMouseOver = (e) => {
    e.currentTarget.style.left = "15%";
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
      let lilInfo = imgFullData[e.target.parentElement.id - 3];
      console.log(lilInfo);
      setImgDet(lilInfo.det);
      setSkiName(lilInfo.name);
    }
  };
  const showDets = () =>{
    if(window.innerHeight > window.innerWidth){
      // return
      setMobile(true)
      document.getElementsByClassName("card").removeAttribute("onMouseLeave")
    }
  }
  const handleMouseOut = (e) => {
    e.currentTarget.style.left = "0%";
    setImgDet("")
    setSkiName('')
  };
  useEffect(() => {
    const newlyCards = imgFullData.map((imgData, index) => ({
      id: index + 1,
      imgSrc: imgData["sor"],
      imgDet: imgData["det"],
    }));
    setCards(newlyCards);

  }, []);
  return (
    <div className="skillCont h-[60vh] overflow-hidden">
 <p className="skillQue w-[50%] h-[20vh] text-[1.8vw] text-white mt-[4px]">
   Things I'm <span className="text-blue-300 text-[20px]">good</span> at
   skills, interests, passion and hobbies
 </p>
      
      <div className="slider">
        {cards.map((card) => (
          <div
            onClick={showDets}
            id={card.id + 2}
            key={card.id}
            className="card"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            <img 
  src={new URL(`../assets/images/${card.imgSrc}`, import.meta.url).href} 
  alt={`img${card.id}`} 
/>
          </div>
        ))}
      </div>

      <div className="dets  absolute bottom-0 right-[2vw] w-[40%] h-[20vh] overflow-hidden">
        <h1 className="text-[12px] skillName">{skiName}</h1>
        <div className="skillDetail">
          <p className="text-[1.1vw]">{imgDet} </p>
        </div>
      </div>
    </div>
  );
}

