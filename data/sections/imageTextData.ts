import { SectionProps } from "@/types/sectionProps";
import Image1 from '@/public/img/image-text/aneesha2.jpg';

export const ImageTextData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    subheading: "What I Do",
    heading2: "Admissions isn’t a process problem.",
    heading: "It’s a decision problem and a story problem.",
    text: "I help candidates to ",
    button: {
        label: "More About Us",
        href: "/contact-us",
        type: "primary"
    },
    image: {
        src: Image1.src,
        width: 992,
        height: 863,
        alt: 'Image',
        loading: 'lazy'
    },
    textList: [
        {
            text: "Clarify why they are applying"
        },
        {
            text: "Choose where to apply"
        },
        {
            text: "Build what story to tell"
        },
        {
            text: "Decide when to act"
        }
    ]
}
