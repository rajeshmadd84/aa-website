import { SectionProps } from "@/types/sectionProps";
import AboutImage from "@/public/img/image-text/aboutme.jpg";

export const AboutMeData: SectionProps = {
    wrapperCls: "mt-100 mb-100",
    container: "container",
    subheading: "About Me",
    heading: "What Years Inside Admissions Taught Me",
    text: "I bring years of experience in admissions leadership, candidate evaluation, and strategic program positioning to help individuals make high-stakes education decisions with confidence.<br><br>Over the course of my career, I have reviewed thousands of applications, interviewed candidates across industries, and worked closely with admissions committees and academic leadership. I’ve seen exceptional candidates succeed and equally strong profiles fall short not because of lack of merit, but because of unclear positioning or misaligned choices.",
    image: {
        src: AboutImage.src,
        width: 1200,
        height: 1000,
        alt: "Aneesha Advisory",
        loading: "lazy"
    },
    heading2: "What I’ve learned is simple",
    text2: "<strong>Admissions is not about sounding impressive.</strong> <br><strong>It’s about being coherent, intentional, and honest.</strong>",
    text3: "I help candidates step back, think clearly, and present a version of themselves that is both authentic and compelling without over-engineering or performative storytelling.<br><br><strong>I don’t just help you apply. I help you decide well and then execute with focus.",
}

