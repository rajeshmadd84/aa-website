import { SectionProps } from "@/types/sectionProps";
import Image1 from '@/public/img/image-text/admissions.jpg';
import BgImage from "@/public/img/slider/slider-bg.jpg";

export const ImageTextData: SectionProps = {
    wrapperCls: "mt-100 section-padding",
    backgroundImage: {
        src: BgImage.src,
    },
    container: "container",
    subheading: "What I Do",
    heading: "Not a Process. A Decision. A Story.",
    text: "Admissions success isn’t just about essays or scores. It’s about having conviction, clarity in your decisions, alignment in your story, and discipline in execution.",
    image: {
        src: Image1.src,
        width: 992,
        height: 863,
        alt: 'Image',
        loading: 'lazy'
    },
    textList: [
        {
            text: "Define your career arc"
        },
        {
            text: "Align past and future"
        },
        {
            text: "Signal clarity and intent"
        },
        {
            text: "Reduce decision friction"
        },
        {
            text: "Execute with precision"
        }
    ]
}
