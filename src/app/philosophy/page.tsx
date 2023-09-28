"use client"

import React, { useState } from 'react'
import Header from '../__components/header/Header'
import Container from '../__components/container'
import Image from 'next/image'
import Button from '../__components/buttons/Button';
import philosophyPoster from '../__assets/images/svgs/philosophy-poster.svg'
import plusIcon from '../__assets/images/svgs/plusIconfilled.svg'
import footerLogo from '../__assets/images/svgs/footerLogo.svg'
import CountUp from 'react-countup';
import backArrowCircle from '../__assets/images/svgs/back-arrow-circle.svg'

const expListings = [
    {
        title: 'Testimonials',
        count: 310,
        moreThanCount: false,
        info: ''
    },
    {
        title: 'Destinations',
        count: 11,
        moreThanCount: false,
        info: ''
    },
    {
        title: 'Personalities Traveled',
        count: 102,
        moreThanCount: true,
        info: 'RELEVANT INFO'
    },
]

const PhilosophyPage = () => {

    const [selectedExp, setSelectedExp] = useState<number>(expListings.length - 1)

    return (
        <div className='bg-black w-[100vw] h-[100vh] overflow-y-auto'>
            <section className=' w-full overflow-scroll sticky top-0'>

                <div className='bg-white pt-10'>
                    <Container styles="uppercase">
                        <div className='flex justify-between items-center'>
                            <div>
                                <Image src={backArrowCircle} alt='arrow-icon' className='custom-img' fill />
                            </div>
                            <div className='hidden xl:max-w-sm max-w-xs w-full sm:flex items-end'>
                                <div className="flex justify-between gap-6 w-full">
                                    <p className='w-max text-xs'>(04)<br />RELEVANT INFO</p>
                                    <p className='w-max text-xs'>IND</p>
                                    <p className='w-max text-xs'>(04)<br />RELEVANT INFO</p>
                                </div>
                            </div>
                        </div>
                        <h1 className='2xl:text-[222px] xl:text-[180px] lg:text-[145px] md:text-8xl sm:text-[80px] text-[50px] lg:leading-[70px] lg:mt-20 md:mt-10 mt-3 text-center font-semibold'>Philosophy</h1>
                        <div className='md:w-[80%] w-full mx-auto 2xl:mt-5 xl:mt-2 lg:mt-0 md:-mt-7'>
                            <Image src={philosophyPoster} alt="philosophy-poster" className='custom-img' fill />
                        </div>
                    </Container>
                </div>

                <div className='bg-black text-white'>
                    {/* <Container styles="py-3">
                        <p className='text-xs mb-1'>(04)</p>
                        <h1 className='2xl:text-[53px] xl:text-[44px] lg:text-[35px] md:text-[25px] text-xl lg:leading-[52px] font-semibold'>
                            Your personality, your destinations, your experiences : <br />
                            <span className='sm:block hidden '>Your memories.</span>
                        </h1>
                        <h1 className='sm:hidden block mt-3 text-xl font-semibold'>Your memories.</h1>
                        <div className='flex lg:flex-row flex-col-reverse 2xl:gap-40 xl:gap-32 lg:gap-28 gap-8 lg:mt-3 mt-6'>
                            <div className='xl:max-w-sm max-w-xs w-full flex items-end'>
                                <div className="flex justify-between gap-6 w-full">
                                    <p className='w-max text-xs'>(04)<br />RELEVANT INFO</p>
                                    <p className='w-max text-xs'>IND</p>
                                    <p className='w-max text-xs'>(04)<br />RELEVANT INFO</p>
                                </div>
                            </div>
                            <p className='max-w-[658px] leading-7 w-[95%] lg:text-base md:text-sm text-xs pr-4'>
                                Kien's travel philosophy is straightforward: we prioritise the traveler before the destination. We craft personalised travel experiences that are both expressive and effective, aiming to reconnect people with the essence of travel. We encourage the celebration of the world's beauty and its diverse cultures through a wondrous and creative perspective.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Container> */}
                </div>
            </section>

            <section className=' bg-black sticky top-0 text-white'>
                <Container styles="h-full lg:py-3 pt-3 pb-32">
                    <p className='text-xs mb-1'>(04)</p>
                    <h1 className='2xl:text-[53px] xl:text-[44px] lg:text-[35px] md:text-[25px] text-xl lg:leading-[52px] font-semibold'>
                        Your personality, your destinations, your experiences : <br />
                        <span className='sm:block hidden '>Your memories.</span>
                    </h1>
                    <h1 className='sm:hidden block mt-3 text-xl font-semibold'>Your memories.</h1>
                    <div className='lg:w-9/12 ml-auto mt-3 h-full'>
                        <div className='max-w-[658px] lg:ml-44 leading-7 lg:text-base md:text-sm text-xs pr-4'>
                            <p>
                                Kien's travel philosophy is straightforward: we prioritise the traveler before the destination. We craft personalised travel experiences that are both expressive and effective, aiming to reconnect people with the essence of travel. We encourage the celebration of the world's beauty and its diverse cultures through a wondrous and creative perspective.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className='my-6'>
                                Our objective is to embody this philosophy through meticulous industry & personality research and collaborations with qualified creators.
                            </p>
                            <p>
                                We've developed our travel archetypes/signs to provide our travellers with superior experiences, lasting memories, and unique ways to commemorate both themselves and the world around them. They also provide a new creative playground for interested travel creators to connect with travellers bearing the same interests and thirst for exploration as them. A new perspective to travel that signifies a deeper connection of the humanity within landscapes and the evocative landscapes of humanity itself.
                            </p>

                            <div className='flex items-center gap-1 my-8'>
                                <div className='w-[34px] flex-shrink-0'>
                                    <Image src={plusIcon} alt="plus-icon" className='custom-img' fill />
                                </div>
                                <Button btntext="Learn more" />
                            </div>
                        </div>
                    </div>

                    <div className='border-t lg:w-9/12 w-full ml-auto pt-9'>
                        {expListings.map((data, index) =>
                            <div key={index} className='relative calc-width ml-auto'>
                                <div className={`${index === 0 && 'md:border-r md:ml-[0.5px]'} md:absolute top-0 left-0 flex-shrink-0 md:border-b md:w-40 uppercase leading-5 transform md:-translate-x-full md:-translate-y-full flex justify-between items-center md:border-0 border-b py-2 md:mt-px`}>
                                    <p>
                                        {data.title}
                                    </p>

                                    <div className='md:hidden block flex-shrink-0 mt-4 h-[22px] w-[22px] rounded-full bg-primary cursor-pointer' onClick={() => setSelectedExp(index)}></div>
                                </div>
                                <div
                                    style={{ height: `${selectedExp === index ? 'auto' : `${index * 1.5 + 5}rem`}` }}
                                    className={`${selectedExp === index ? 'pb-16' : 'pb-1'} flex items-start justify-between gap-4 md:border-l md:border-t px-4 overflow-hidden w-full transition-all duration-300 ease-linear md:-ml-[0.5px] max-h-max`}>

                                    <div className='2xl:text-[255px] xl:text-[200px] sm:text-[140px] text-[110px]  2xl:leading-[13rem] xl:leading-[12rem] leading-[10rem] 2xl:max-w-[630px] font-bold'>
                                        {data.count < 10 ? '00' : data.count < 100 && 0}
                                        <CountUp end={data.count} scrollSpyOnce={true} enableScrollSpy={true} />
                                        <span>{data.moreThanCount && '+'}</span>
                                    </div>
                                    <p className='mt-4 lg:text-[15px] sm:text-sm text-[10px]'>{data.info}</p>
                                    <div className='md:block hidden flex-shrink-0 mt-4 h-[22px] w-[22px] rounded-full bg-primary cursor-pointer' onClick={() => setSelectedExp(index)}></div>
                                </div>
                            </div>
                        )}
                        <div className='relative calc-width ml-auto'>

                            <div className={`md:absolute top-0 left-0 flex-shrink-0 md:border-b md:w-40 uppercase leading-5 transform md:-translate-x-full md:-translate-y-full flex justify-between items-center md:border-0 border-b py-2 md:mt-px`}>
                                <p>
                                    experiences provided
                                </p>

                                <div className='md:hidden block flex-shrink-0 h-[22px] w-[22px] rounded-full bg-secondary cursor-pointer' ></div>
                            </div>

                            {/* <p className='md:absolute top-0 left-0 flex-shrink-0 border-b md:w-40 w-full py-2 uppercase leading-5 transform md:-translate-x-full md:-translate-y-full mt-px'>experiences provided</p> */}
                            <div className='md:px-6 pt-7 md:border-l border-t pb-16 w-full transform -translate-x-[.5px]'>
                                <div className='flex items-start justify-between'>
                                    <p className='max-w-[630px] md:text-xl w-full leading-7'>
                                        Reflecting Kien's Philosophy, creators hold a prominent position in our approach. We are passionate about portraying the essence of destinations and cultural hotspots, much like the numerous creators dedicated to showcasing the beauty and diversity of the travel landscape in a fresh and unique manner.
                                        <br /> <br />
                                        We are highly enthusiastic about the prospect of collaborating with you and your remarkable personalities
                                    </p>
                                    {/* <p className='mt-3 text-[15px]'></p> */}
                                    <div className='md:block hidden mt-4 h-[22px] w-[22px] rounded-full bg-secondary cursor-pointer'></div>
                                </div>
                                <div className='flex items-center flex-wrap gap-4 mt-20'>
                                    <Button btntext="CONNECT" btnClasses="text-white border border-white" />
                                    <Button btntext="REGISTER NOW" btnClasses="text-white border border-white" />
                                    <Button btntext="VIEW CURATORS" btnClasses="bg-secondary text-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>


                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex flex-wrap justify-between items-center mx-auto py-3 px-8 gap-5'>
                    <div className='max-w-sm w-full flex items-end'>
                        <div className="flex justify-between gap-6 w-full">
                            <p className='w-max text-xs'>(04)<br />RELEVANT INFO</p>
                            <p className='w-max text-xs'>IND</p>
                            <p className='w-max text-xs'>(04)<br />RELEVANT INFO</p>
                        </div>
                    </div>
                    <div className='flex items-end gap-1 w-max ml-auto'>
                        <Image src={footerLogo} alt="footer-logo" className='custom-img filter invert' fill />
                        <div className='flex items-end gap-1 leading-4'><span>© </span>2023</div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default PhilosophyPage