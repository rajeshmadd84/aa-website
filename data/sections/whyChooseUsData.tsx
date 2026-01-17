import { SectionProps } from "@/types/sectionProps";
import WhyChooseUsImage from "@/public/img/promotion/1.jpg";
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
    subheading: "Why Choose me",
    heading: "Admissions is a directional choice, not a transaction.",
    text: "We clarify the decision before the application begins, then execute with focus, coherence, and intent so every choice compounds long after admission.",
    button: {
        label: "Discover More",
        href: "/about-us",
        type: "secondary"
    },
    promotions: [
        {
            title: "Upstream Consulting",
            text: "Decide direction before essays or rankings.",
        },
        {
            title: "Narrative Alignment",
            text: "One coherent story across every decision.",
        },
    ],
    counterData: [
        {
            number: 20,
            suffix: "k+",
            title: "Project completed",
            aos: "fade-up",
            aosDelay: 20,
        },
        {
            number: 12,
            suffix: "k+",
            title: "Happy customers",
        },
        {
            number: 25,
            suffix: "+",
            title: "Years experiences",
        },
    ],
}