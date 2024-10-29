"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface SliderDataItem {
    id: number;
    img: StaticImageData;
    title: string;
    data: string;
}

interface CarouselProps {
    title: string;
    sliderData: SliderDataItem[];
}

const Carousel = ({ title, sliderData }: CarouselProps) => {
    const itemsPerPage = 3;
    const totalItems = sliderData.length;

    const [currentPage, setCurrentPage] = useState<number>(0);

    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(totalItems / itemsPerPage));
    };

    const handlePrev = () => {
        setCurrentPage(
            (prevPage) =>
                (prevPage - 1 + Math.ceil(totalItems / itemsPerPage)) %
                Math.ceil(totalItems / itemsPerPage),
        );
    };

    const startIndex = currentPage * itemsPerPage;
    const displayedItems = sliderData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="flex items-center justify-center mb-[190px]">
            <div className="w-[1260px] h-[296px]">
                <div className="flex items-center justify-between mb-16">
                    <h2 className="text-2xl font-semibold text-white">{title}</h2>
                    <div className="flex items-center justify-around w-[160px] h-[46px] border border-[#6D6F744D] rounded-3xl">
                        <button onClick={handlePrev} className="text-white">
                            &lt;
                        </button>

                        <span className="text-lg font-medium text-white">
                            {currentPage + 1} of {Math.ceil(totalItems / itemsPerPage)}
                        </span>

                        <button onClick={handleNext} className="text-white">
                            &gt;
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center h-full ">
                    {displayedItems.map((item) => (
                        <div key={item.id} className="w-96 h-72">
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div>
                                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                                <p className="text-gray-600">{item.data}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
