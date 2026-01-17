import { SectionProps } from "@/types/sectionProps";
import WhyChooseUsImage from "@/public/img/promotion/1.jpg";
import Icons from "@/components/Icons";

export const WorkingProcessData: SectionProps = {
    wrapperCls: "mt-100 mb-100",
    container: "container-fluid",
    subheading: "Full Package Admissions Advisory",
    heading: "Turning Decisions into Outcomes",
    text: "This is a <strong>high touch</strong>, <strong>end-to-end service</strong> for professionals making <strong>complex</strong>, <strong>high-stakes education decisions</strong>.",
    text2: "<strong>Engagement Length:</strong> 8–12 weeks",
    text3: "<strong>Format:</strong> 1:1, limited monthly capacity",
    button: {
        label: "Discover More",
        href: "/about-us",
        type: "secondary"
    },
    promotions: [
        {
            icon: <Icons.Discover />,
            title: "Strategic Diagnostic",
            text: "We analyze your career arc and inflection points to define the real decision this degree must solve.",
        },
        {
            icon: <Icons.Analyze />,
            title: "Decision Clarity",
            text: "You get a clear apply or don’t apply stance, a tight shortlist, and a success definition.",
        },
        {
            icon: <Icons.Strategy />,
            title: "Narrative Spine",
            text: "We build one coherent story linking your past, goals, and differentiation across materials.",
        },
        {
            icon: <Icons.Design />,
            title: "Essay Strategy & Feedback",
            text: "Essays follow your core narrative, with precise feedback that sharpens clarity without distortion.",
        },
        {
            icon: <Icons.Refine />,
            title: "Interview Preparation",
            text: "Mock interviews refine how you communicate fit, intent, and judgment to global panels.",
        },
        {
            icon: <Icons.Launch />,
            title: "Guardrails for Execution ",
            text: "We prevent over-editing and keep your application focused on fit, not validation.",
        },
    ],
}