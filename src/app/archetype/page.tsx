import React from 'react'
import Header from '../__components/header/Header';
import Image from 'next/image';
import Archetype1 from "../__assets/images/pngs/archetype1.png"
import Archetype2 from "../__assets/images/pngs/archetype2.png"
import Archetype3 from "../__assets/images/pngs/archetype3.png"
import Archetype4 from "../__assets/images/pngs/archetype4.png"
import Archetype5 from "../__assets/images/pngs/archetype5.png"
import Container from '../__components/container/Container';

const ArchetypePage = () => {
  return (
    <div>
      <Header navTheme={"bg-[#E3FF00]"} />
      <Container>

        <div className="">
          <h1 className="mt-[45px] sm:mt-[55px] md:mt-[65px]  xl:mt-[75px]  2xl:mt-[95px] text-center text-[50px] sm:text-[75px] md:text-[85px] lg:text-[110px] xl:text-[125px] 2xl:text-[160px] tracking-[-4.8px] 
        lg:tracking-[-4.8px] font-bold leading-9">
            BEGIN A STORY
          </h1>

          <div className="flex w-[450px] sm:w-[580px] md:w-[720px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1180px] h-[300px] sm:h-[400px]  md:h-[450px] lg:h-[544px] xl:h-[484px] 
          2xl:h-[684px] m-auto">
            <div className="relative">
              <Image className='w-[90px] sm:w-[116px] md:w-[144px] lg:w-[180px] xl:w-[220px] 2xl:w-[236px] h-[100%] ' src={Archetype1} alt='' />
              <div className="absolute rotate-[-90deg] right-[-40px] sm:right-[-40px] md:right-[-35px] lg:right-[-30px] xl:right-[40px] 2xl:right-[-20px] top-[55%]  sm:top-[55%] md:top-[55%] lg:top-[58%] xl:top-[60%] text-white">
                <div className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[33px] 2xl:text-[50px]">CONTEMPLATIVE</div>
                <div className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[15px] 2xl:text-[20px]">ADDITIONAL INFO</div>
              </div>
            </div>
            <div className="relative">
              <Image className='w-[90px] sm:w-[116px] md:w-[144px] lg:w-[180px] xl:w-[220px] 2xl:w-[236px] h-[100%] ' src={Archetype2} alt='' />
              <div className="absolute rotate-[-90deg] right-[-40px] sm:right-[-40px] md:right-[-35px] lg:right-[-30px] xl:right-[40px] 2xl:right-[-20px] top-[55%]  sm:top-[55%] md:top-[55%] lg:top-[58%] xl:top-[60%] text-white">
                <div className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[33px] 2xl:text-[50px]">CONTEMPLATIVE</div>
                <div className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[15px] 2xl:text-[20px]">ADDITIONAL INFO</div>
              </div>
            </div>
            <div className="relative">
              <Image className='w-[90px] sm:w-[116px] md:w-[144px] lg:w-[180px] xl:w-[220px] 2xl:w-[236px] h-[100%] ' src={Archetype3} alt='' />
              <div className="absolute rotate-[-90deg] right-[-40px] sm:right-[-40px] md:right-[-35px] lg:right-[-30px] xl:right-[40px] 2xl:right-[-20px] top-[55%]  sm:top-[55%] md:top-[55%] lg:top-[58%] xl:top-[60%] text-white">
                <div className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[33px] 2xl:text-[50px]">CONTEMPLATIVE</div>
                <div className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[15px] 2xl:text-[20px]">ADDITIONAL INFO</div>
              </div>
            </div>
            <div className="relative">
              <Image className='w-[90px] sm:w-[116px] md:w-[144px] lg:w-[180px] xl:w-[220px] 2xl:w-[236px] h-[100%] ' src={Archetype4} alt='' />
              <div className="absolute rotate-[-90deg] right-[-40px] sm:right-[-40px] md:right-[-35px] lg:right-[-30px] xl:right-[40px] 2xl:right-[-20px] top-[55%]  sm:top-[55%] md:top-[55%] lg:top-[58%] xl:top-[60%] text-white">
                <div className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[33px] 2xl:text-[50px]">CONTEMPLATIVE</div>
                <div className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[15px] 2xl:text-[20px]">ADDITIONAL INFO</div>
              </div>
            </div>
            <div className="relative">
              <Image className='w-[90px] sm:w-[116px] md:w-[144px] lg:w-[180px] xl:w-[220px] 2xl:w-[236px] h-[100%] ' src={Archetype5} alt='' />
              <div className="absolute rotate-[-90deg] right-[-40px] sm:right-[-40px] md:right-[-35px] lg:right-[-30px] xl:right-[40px] 2xl:right-[-20px] top-[55%]  sm:top-[55%] md:top-[55%] lg:top-[58%] xl:top-[60%] text-white">
                <div className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[33px] 2xl:text-[50px]">CONTEMPLATIVE</div>
                <div className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[15px] 2xl:text-[20px]">ADDITIONAL INFO</div>
              </div>
            </div>

          </div>
        </div>

      </Container>

    </div>
  )
}

export default ArchetypePage