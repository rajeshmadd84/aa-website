import { SectionProps } from "@/types/sectionProps";
import Image1 from '@/public/img/image-text/admissions.jpg';

export const ImageTextData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    subheading: "What I Do",
    heading: "Not a Process. A Decision. A Story.",
    text: "Admissions is not about compliance; it’s about conviction. Committees make irreversible choices under uncertainty. I help you clarify intent and craft a narrative that removes doubt and makes the decision feel inevitable.",
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
