import React from 'react'
import footerLogo from "../../__assets/images/svgs/footerLogo.svg";
import BrandLogo from "../../__assets/images/pngs/logo.png"
import BrandWhiteLogo from "../../__assets/images/pngs/logoWhite.png"
import MembersBg from "../../__assets/images/pngs/members.png"
import Image from 'next/image'
import Button from '../../__components/buttons/Button'

interface Props{
  memberTheme: string;
  memberThemeCol: string;
  logoCol : boolean;
  footerCol: string;
  ProfileName: string;
  prifileStack: string;
  memeberBtnBg: string;
  stackDel: string;
}

const MembersItem = ({memberTheme, memberThemeCol, logoCol, footerCol, ProfileName, prifileStack, memeberBtnBg, stackDel} : Props) => {
  return (
    <div className='relative Space Grotesk'>
      <div className={`grid grid-cols-10 pt-[40px] uppercase ${memberTheme} `}>
        <div className="col-span-6 relative ">
          <div className="h-[226px]">

          <div className={`w-[1px] h-[100%] ${memberThemeCol} absolute top-[-10px] right-0`}></div>
          <div className="2xl:w-[318px] xl:w-[300px] lg:w-[280px] md:w-[260px] w-[70%] flex justify-between 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[15px] text-[12] leading-5 font-medium relative  ml-3">
            <div>
              <div>
                Team
              </div>
              <div>
                ( CO - FOUNDER )
              </div>
            </div>
            <div>Members</div>

            <div className={`w-[1px] h-[calc(100vh-30px)] ${memberThemeCol} absolute top-[-10px] right-[-12px]`}></div>
            <div className={`w-[1px] h-[calc(100vh-30px)] ${memberThemeCol} absolute top-[-10px] left-0`}></div>
          </div>
          <h1 className="2xl:text-[78px] xl:text-[70px] lg:text-[65px] md:text-[60px] sm:text-[50px] text-[30px] font-bold leading-[70px] mt-8  ml-3 w-[80%] CraftworkGrotesk">
         
{ProfileName}
          </h1>
          </div>

          <div className=" relative">
            <Image className='w-[100%] h-[calc(100vh-266px)]' src={MembersBg} alt=''/>
            <div className={`w-[100vw] h-[3px] ${memberThemeCol} absolute top-0 left-0`}></div>
            <div className="absolute bottom-[23px]">
            <h1 className="2xl:text-[78px] xl:text-[70px] lg:text-[65px] md:text-[60px] sm:text-[50px] text-[30px] font-bold leading-[70px]  ml-3 text-white w-[80%] CraftworkGrotesk">
            
{prifileStack}
          </h1>
            </div>
          </div>
        </div>
        <div className="col-span-4">

          <div className="grid grid-cols-12">
            <div className="col-span-5 relative px-3 2xl:px-0">
              <Image className='2xl:w-[253px] xl:w-[100%]  2xl:h-[75px] xl:h-[75px] mx-3' src={logoCol ?  BrandWhiteLogo : BrandLogo} alt='' />
              <div className="relative">

                <div className="text-[48px] lg:text-[68px] xl:text-[78px] 2xl:text-[88px] font-medium tracking-[-5.28px] 2xl:w-[145px] xl:w-[115px] md:w-[42%] w-[52%]   break-words 2xl:leading-[68px] leading-[50px] mt-2 relative text-end m-auto ">
                  2023
                </div>
                <div className={`2xl:w-[46px] w-[40px] h-[428px] ${memberThemeCol} absolute top-[14%] xl:left-[29%] md:left-[20%] left-[12%]`}></div>
              </div>

              <div className={`w-[1px] h-[calc(100vh-30px)] ${memberThemeCol} absolute top-[-10px] right-[-24px]`}></div>
              {/* <div className="w-[1px] h-[100vh] ${memberThemeCol} absolute top-[-10px] left-[-12px]"></div> */}
            </div>
            <div className="col-span-7 pl-7 pr-3">
              <div className='h-[226px]'>
                <div className=" flex justify-between 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[15px] text-[12] leading-5 font-medium relative ">
                  <div>
                    <div>
                      Team
                    </div>

                  </div>
                  <div>Members</div>

                </div>
                <div className="mt-[10px] 2xl:text-[12px] text-[10px] font-medium pl-1">

                  <div className=" flex justify-between">
                    <div>
                      (01)
                    </div>
                    <div>
                      SIVA CHUKERWARTHY
                    </div>
                  </div>
                  <div className="  flex justify-between">
                    <div>
                      (02)
                    </div>
                    <div>
                      SIVA CHUKERWARTHY
                    </div>
                  </div>
                  <div className="  flex justify-between">
                    <div>
                      (03)
                    </div>
                    <div>
                      SIVA CHUKERWARTHY
                    </div>
                  </div>
                  <div className="  flex justify-between">
                    <div>
                      (04)
                    </div>
                    <div>
                      SIVA CHUKERWARTHY
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="2xl:mb-[115px] xl:mb-[85px] mb-[25px] ">
                  <div className=" flex justify-between 2xl:text-[12px] text-[10px] leading-[15px] font-medium relative tracking-[-0.72px]">
                    <div>
                      <div>
                        (04)
                      </div>
                      <div>
                        RELEVANT INFO
                      </div>
                    </div>
                    <div>IND</div>
                    <div>
                      <div>
                        (04)
                      </div>
                      <div>
                        RELEVANT INFO
                      </div>
                    </div>

                  </div>
                  <div className="2xl:text-[78px] xl:text-[68px] lg:text-[65px] md:text-[55px] sm:text-[50px] text-[30px] font-bold leading-[65px] text-right tracking-[-4.68px] CraftworkGrotesk">
                    2023
                  </div>
                </div>

              </div>
            </div>
            <div className="col-span-12 mt-[115px]">
              <div className=" pr-3 relative">
                <div className="2xl:text-[78px] xl:text-[70px] lg:text-[65px] md:text-[50px] sm:text-[50px] text-[30px] 2xl:leading-[70px] leading-[55px] tracking-[-4.68px] font-bold text-end CraftworkGrotesk">
                  {stackDel}
                </div>
                <div className={`w-full h-[1px] ${memberThemeCol} absolute top-[2px] `}></div>
              </div>

            </div>

            <div className="col-span-4"></div>
            <div className="col-span-8 pl-7 pr-3">
              <div className=" 2xl:text-[12px] text-[10px] leading-[15px] font-medium relative tracking-[-0.72px]">
                <div className='w-[60%] flex justify-between'>
                  <div className=''>
                    (04)
                  </div>
                  <div className=''>
                    IND
                  </div>
                </div>
                <div className='flex flex-col 2xl:flex-row 2xl:justify-between'>
                  <div>
                    chakkaravarthy@kien.travel
                  </div>
                  <div className='mt-2 2xl:mt-0'>
                    <Button btnClasses={`${memeberBtnBg} SpaceGrotesk w-[122px] h-[20px] rounded-[19.5px] text-[10px] 2xl:text-[12px]`} btntext={"Connect Here"} />
                  </div>
                </div>
              </div>

            </div>

          </div>


        </div>
      </div>
      <div className="absolute right-3  bottom-3">
      <div className="flex items-end gap-1 w-max ml-auto">
            <Image
              src={footerLogo}
              alt="footer-logo"
              className={logoCol ? "custom-img filter invert" : ""}
            />
            <div className={`flex items-end gap-1 leading-4 ${footerCol}`}>
              <span>© </span>2023
            </div>
          </div>
          </div>
    </div>
  )
}

export default MembersItem 
