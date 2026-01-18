import { SectionProps } from "@/types/sectionProps";
import WhyChooseUsImage from "@/public/img/promotion/aa4.jpg";
import Icons from "@/components/Icons";

export const WhyChooseUsData: SectionProps = {
    wrapperCls: "mt-100 section-padding",
    container: "container",
    image: {
        src: WhyChooseUsImage.src,
        width: 1000,
        height: 1469,
        loading: "lazy",
        alt: "Promotion image"
    },
    subheading: "Why Admissions Strategist",
    heading: "Admissions is a directional choice, not a transaction.",
    text: "Most admissions consultants start at essays. I start before that.",
    textList: [
        {
            text: "Decide if applying makes sense now"
        },
        {
            text: "Choose the right programs for your goals"
        },
        {
            text: "Build a single, consistent narrative across the application"
        },
        {
            text: "Avoid regret-driven or prestige-chasing decisions"
        },
    ],
    text2: "This work happens upstream and this is where the real leverage is!",
}