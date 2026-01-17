import { SectionProps } from "@/types/sectionProps";

export const TextBannerData: SectionProps = {
    container: "container-fluid",
    subheading: "Working Philosophy",
    heading: "A Deliberate Way of Working",
    text: "I approach admissions as a high-stakes decision, not a volume exercise. The work is intentionally selective, deeply thoughtful, and designed to create clarity—not comfort. Every choice is judged by its long-term consequence.",
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
