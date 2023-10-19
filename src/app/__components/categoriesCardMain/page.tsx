import React from "react";
import Card from "../card/Card";
import Image from "next/image";
import DarkPlus from "../../__assets/images/svgs/darkPlus.svg"
import NextArrow from "../../__assets/images/svgs/backArrow.svg";
import Button from "../buttons/Button";

interface Props{
  card:  {
    Name: string;
    CountryName: string;
    title: string;
    subTitle: string;
    travel: string;
    status: string;
    logo: any;
}[],
  handleContentChange:  any,
}

const CategoriesCardMain = ({handleContentChange, card} : Props) => {
  return (
    <div>
      <div className="w-[100%] 2xl:m-auto pr-[43px] relative " id= "3" style={{
        boxShadow: " 1px 0px 19px 15px white",
        borderBottomLeftRadius: "20px",
        borderTopLeftRadius: "20px",
      }}>
      <div className="flex items-center gap-2 absolute right-5 -top-[47px]">
        <Image src={DarkPlus} alt='DarkPlus' />
        <Button btnClasses={"SpaceGrotesk bg-transparent text-black border-[1px] border-black w-[122px] h-[25px] rounded-[19.5px] text-[12px]"} btntext={"VIEW ALL CARDS"} />
      </div>
      <div className="2xl:h-[calc(100vh-450px)] xl:h-[calc(100vh-420px)] h-[calc(100vh-400px)] overflow-hidden bg-white no-scrollbar grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4" id="cardMainCon">

      {card.map((item, index)=>{
        return <Card key={index} title={item.title} subTitle={item.subTitle} Name={item.Name} CountryName={item.CountryName} travel={item.travel} logo={item.logo} status={item.status}/>
      })}
      </div>
        
        <div className="absolute -bottom-[82px] right-5 " onClick={handleContentChange}>
        <Image
          className="w-[50px] cursor-pointer sm:w-[55px] md:w-[60px] lg:w-[70px] 2xl:w-[90px] rotate-180"
          src={NextArrow}
          alt="NextArrow"
          
          id="categaryNextBtn"
        />
      </div>
      </div>

    </div>
  );
};

export default CategoriesCardMain;
