export function ProjectPreview(props) {
  console.log(props);

  return (
    <>
      <div className="preview_name mt-[10px]">
        <h1>{props.name}</h1>
      </div>
      <div className="weap">
        <ul className="flex gap-[5px] text-wrap flex-wrap">
          {
              props["weapons"].map((weapons ,index)=>{
                return(
                 <li key={11 + index}>{weapons},</li>
                )
              })
            }
        </ul>
      </div>
      <button className="projectVisitBtn w-[max-content] border-[0.5px] border-gray-300 px-[5px] text-gray-300 py-[2px] hover:text-white">
        <a href={props.link} className="w-full h-full ">
          visit
        </a>
      </button>

      <div className="discription mt-[8px] " >

        <p className="">
        --&nbsp;
           {props.description}
        </p>
      </div>
      <div className="points">
        <ul>
          {
              props["points"].map((poin, inde)=>{
                return  <li key={20 + inde} className="">
                  <span className="text-pink-300">&bull;</span>
                  <p>{poin}</p>
                </li>
              })
            } 
        </ul>
      </div>

      <div className="func">
        <ul>
          {
              props["functions"].map((func , index)=>{
                     return <li key={30 + index} className="">
                  <span className="text-green-300">&bull;</span>
                  <p>
                    {func}
                  </p>
                </li>
              })
            }
        </ul>
      </div>
    </>
  );
}
