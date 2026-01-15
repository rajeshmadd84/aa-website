import { BannerSliderType } from "@/types/bannerSlider";
import BannerSliderImage from "@/public/img/slider/slider-bg.jpg";

export const BannerWithSliderData: BannerSliderType = {
    wrapperCls: "with-floating-header",
    backgroundImage: BannerSliderImage.src,
    subheading: "Expert Consulting",
    heading: "Make the right admissions decision",
    styledText: "Admissions",
    text: "I help professionals applying to top global business and executive programs make aligned, strategic choices and craft applications that reflect their true potential.",
    subheading2: "Full-package admissions strategy",
    subheading3: "Execution for high-stakes decisions",
    button: {
        label: "Get Started",
        href: "/services",
        type: "primary"
    },
    logoIconName: "LogoRotate",
    heroImage: "/img/slider/aa3.JPG",
}
