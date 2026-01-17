import "@/styles/hero-banner.css";
import { SectionProps } from "@/types/sectionProps";
import Heading from "../Heading";
import Subheading from "../Subheading";
import Text from "../Text";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Icons from "../Icons";
import Image from "next/image";


const TextBanner = ({ data }: { data: SectionProps }) => {
    const {
        wrapperCls,
        container,
        subheading,
        heading,
        text,
        textList,
        button,
        image,
    } = data || {};

    return (
        <div className={`text-banner ${wrapperCls}`}>
            <div className={container}>
                <div className="text-banner-inner radius18 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-4 order-2 lg:order-1">
                            <div className="section-headings !max-w-full">
                                {subheading &&
                                    <Subheading 
                                        title={subheading}
                                        cls="text-20"
                                        aos="fade-up"
                                    />
                                }

                                {heading &&
                                    <Heading 
                                        title={heading}
                                        cls="text-50"
                                        aos="fade-up"
                                    />
                                }

                                {text &&
                                    <Text 
                                        text={text}
                                        cls="text-18"
                                        aos="fade-up"
                                    />
                                }

                                {textList &&
                                    <ul className="text-lists list-unstyled mt-6">
                                        {textList.map((item, index) => (
                                            <li 
                                                className="text-item text text-16" 
                                                data-aos="fade-up" 
                                                data-aos-delay={index * 50}
                                                key={`text-item-${index}`}
                                                style={{ color: 'white' }}
                                            >
                                                <Icons.Check />
                                                {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                }

                                {button &&
                                    <div className="buttons" data-aos="fade-up">
                                        {button.type == 'primary' &&
                                            <PrimaryButton 
                                                label={button.label}
                                                href={button.href}
                                                ariaLabel={button.label}
                                            />
                                        }

                                        {button.type == 'secondary' &&
                                            <SecondaryButton 
                                                label={button.label}
                                                href={button.href}
                                                ariaLabel={button.label}
                                            />
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="lg:col-span-8 order-1 lg:order-2">
                            {image && 
                                <div className="media-wrap h-full" data-aos="fade-left">
                                    <Image 
                                        src={image.src}
                                        width={image.width}
                                        height={image.height}
                                        alt={image.alt || 'Banner Image'}
                                        className="radius18 w-full h-full object-cover max-h-[500px]"
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextBanner;