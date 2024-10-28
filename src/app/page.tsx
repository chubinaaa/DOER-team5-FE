import { BannerSlider } from "@/components/BannerSlider";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <div className="w-full flex flex-col gap-5  px-[90px]">
            <Hero />
            <BannerSlider />
        </div>
    );
}
