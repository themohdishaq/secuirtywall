"use client";

import Image from 'next/image';
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  type CarouselApi 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface SliderShow {
  title: string;
  description: string;
  content: string;
  image: string;
}

const sliderShow: SliderShow[] = [
  {
    title: 'Hybrid Testing Model',
    description: 'Application Penetration Testing',
    content: 'Penetration testing is an art of finding vulnerabilities in a web application. Computer system, or a Network that an attacker could use to exploit it.',
    image: '/slider-image-1.png'
  },
  {
    title: 'Hybrid Testing Model',
    description: 'Vulnerability Assessment',
    content: "Applications, System, having known loop holes, let us classify it via assessment and let's make it more secure than ever.",
    image: '/slider-image-2.png'
  },
  {
    title: 'Best Assessment Model',
    description: 'Cloud Security',
    content: 'Cloud security is the protection of data stored online via cloud computing platforms from theft, leakage, and deletion.',
    image: '/slider-image-3.png'
  },
  {
    title: 'Best Compliance Model',
    description: 'SOC 2 Compliance',
    content: 'SOC 2 compliance is a component of the American Institute of CPAs (AICPA)’s Service Organization Control reporting platform.',
    image: '/slider-image-4.png'
  }
];

export default function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrentSlide] = React.useState(0);
console.log("current", current)
  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const goToSlide = (index: number) => {
    console.log("api", api)
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <>
      <main className='max-w-6xl my-20 mx-auto'>
        <div className='w-full flex sm:flex-row flex-col'>
          <Carousel className="w-full h-full" setApi={setApi}>
            <CarouselContent className="m-1">
              {sliderShow.map((slide, index) => (
                <CarouselItem key={index} className="flex-0 w-full h-full">
                  <div className="p-1">
                    <Card className='outline-none border-none'>
                      <CardContent className='outline-none border-none'>
                        <div className='w-full flex sm:flex-row flex-col'>
                          <div className='w-1/2'>
                            <Image src={slide.image} alt={slide.title} width={513} height={360} />
                          </div>
                          <div className='w-1/2'>
                            <h3 className='text-red-600 text-2xl font-bold py-4'>{slide.title}</h3>
                            <h1 className='text-5xl font-extrabold space-y-9'>
                              {slide.description}
                            </h1>
                            <p className='text-gray-400 my-4 text-xl'>
                              {slide.content}
                            </p>
                            <button className='bg-red-600 p-3 mt-5 text-xs uppercase tracking-tight rounded-md text-white'>
                              Learn More
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </main>
      <div className='h-24 bg-gray-400 hidden sm:flex items-center w-full text-black'>
        <div className={` w-1/4 cursor-pointer h-full flex justify-center items-center ${current === 0 ? 'bg-white' : ''} text-xl hover:bg-white `} onClick={() => goToSlide(0)}>
          <h1>Pentesting</h1>
        </div>
        <div className={` w-1/4 cursor-pointer h-full flex justify-center items-center ${current === 1 ? 'bg-white' : ''} text-xl hover:bg-white`} onClick={() => goToSlide(1)}>
          <h1>Vulnerability Assessment</h1>
        </div>
        <div className={` w-1/4 cursor-pointer h-full flex justify-center items-center ${current === 2 ? 'bg-white' : ''} text-xl hover:bg-white`} onClick={() => goToSlide(2)}>
          <h1>Virus Protection</h1>
        </div>
        <div className={` w-1/4 cursor-pointer h-full flex justify-center items-center ${current === 3 ? 'bg-white' : ''} text-xl hover:bg-white`} onClick={() => goToSlide(3)}>
          <h1>Technical Assistance</h1>
        </div>
      </div>
    </>
  );
}
