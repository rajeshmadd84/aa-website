import { SectionProps } from "@/types/sectionProps";
import Image1 from "@/public/img/project/1.jpg";
import Image2 from "@/public/img/project/2.jpg";
import Image3 from "@/public/img/project/3.jpg";

export const StickyBannerData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    heading: "Results That Matter!",
    text: "Admissions outcomes matter—but clarity, confidence, and direction matter more.",
    blockList: [
        {
            subheading: "Admissions Outcomes",
            heading: "Top Global Programs",
            text: "Clients have earned admits to leading global MBA programs, executive education tracks, and specialized international master’s degrees.",    
            button: {
                label: "Learn More",
                href: "/projects",
                type: "primary"
            },
            image: {
                src: Image1.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "Image",
            },
        },
        {
            subheading: "Decision Outcomes",
            heading: "Confidence to Choose.",
            text: "Beyond admits, clients gain clarity and conviction—knowing why they chose a program and what it enables next.",    
            
            image: {
                src: Image2.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "Image",
            },
        },
        {
            subheading: "Long-Term Outcomes",
            heading: "Direction That Compounds",
            text: "Each decision aligns education with career and life direction, creating momentum that continues well beyond graduation.",
           
            image: {
                src: Image3.src,
                width: 1000,
                height: 707,
                loading: "lazy",
                alt: "Image",
            },
        }
    ]
}
