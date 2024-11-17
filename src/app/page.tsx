import { BannerSlider } from "@/components/BannerSlider";
import Carousel from "@/components/Carousel";

import Hero from "@/components/Hero";
import { sportrData, theaterData, popularEventData } from "@/images";

export default function Home() {
    return (
        <div className="w-full flex flex-col gap-5  px-[90px]">
            <Hero />

            <BannerSlider />
            <Carousel title={"Theater"} sliderData={theaterData} />
            <Carousel title={"Sport"} sliderData={sportrData} />
            <Carousel title={"Popular"} sliderData={popularEventData} />
        </div>
    );
}
