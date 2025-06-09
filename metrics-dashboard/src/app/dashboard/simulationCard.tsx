import React from "react";


interface simulationCardProps{
    title : string,
    count : number
}



const simulationCard : React.FC<simulationCardProps> = ({title , count}) => {
  return (
    <div className="max-2xl:p-6 max-xld:p-4 max-lgd:p-3 flex flex-col gap-5 justify-start items-center bg-[#333334] grow rounded-3xl shadow-[0_0_10px_rgba(0,255,0,0.2)] max-2xl:w-1/5 max-xl:w-[40%] max-xs:w-4/5 max-xs:grow-0 hover:scale-105 transition-all duration-200">
      <p className="font-normal text-nowrap max-2xl:text-[22px] max-2xld:text-[20px] max-xl:text-2xl max-lgd:text-[18px] max-xs:text-xl text-green-300">
        {title}
      </p>
      <p className="text-green-100 text-xl max-2xld:text-[18px] max-xl:text-xl font-normal">
        {count}
      </p>
    </div>
  );
}

export default simulationCard;
