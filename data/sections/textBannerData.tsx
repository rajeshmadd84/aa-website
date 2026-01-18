import { SectionProps } from "@/types/sectionProps";

export const TextBannerData: SectionProps = {
    container: "container-fluid",
    subheading: "Working Philosophy",
    heading: "A Purposeful Way of Working",
    text: "I approach admissions as a high stakes decision, not a volume exercise.  I intentionally work with a limited number of candidates each month so I can offer focused, thoughtful guidance and stay closely involved at every stage of the process.",
    textList: [
        {
            text: "Fewer clients to enable deeper, higher quality work."
        },
        {
            text: "Clarity prioritized over reassurance or hype."
        },
        {
            text: "Judgment applied before tactics or templates."
        },
        {
            text: "Outcomes measured beyond admits alone."
        }
    ],
    button: {
        label: "Learn More",
        href: "/services",
        type: "secondary"
    }
}
