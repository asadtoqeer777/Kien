"use client";
import React, { useState } from "react";

interface Props {
  btnLabel: string;
  btnLabelDetail: string;
  clickFcun: any;
  toggleBtn: boolean
}

const CatagoryButton = ({ btnLabel, btnLabelDetail,clickFcun, toggleBtn }: Props) => {


  return (
    <button
      className={
        toggleBtn
          ? "relative bg-black text-white border-[1px] h-[156px] border-black w-[122px] rounded-[19.5px] text-[12px]  py-px px-3 text-center min-w-[162px] md:text-base text-sm uppercase"
          : "bg-transparent text-black border-[1px] border-black w-[122px] rounded-[19.5px] text-[12px] py-px px-3 text-center min-w-[162px] md:text-base text-sm uppercase h-[25px]"
      }
      onClick={clickFcun}
    >
      <div className="flex flex-col w-full justify-start items-center h-full">
        <div className="mb-[40px]">{btnLabel}</div>
        {toggleBtn ? <div>{btnLabelDetail}</div> : ""}
      </div>
    </button>
  );
};

export default CatagoryButton;
