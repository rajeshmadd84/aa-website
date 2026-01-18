import { SectionProps } from "@/types/sectionProps";
import Image from "next/image";
import Heading from "../Heading";
import Subheading from "../Subheading";
import Text from "../Text";

const AboutMe = ({ data }: { data: SectionProps }) => {
    const {
        wrapperCls,
        container,
        subheading,
        heading,
        heading2,
        text,
        text2,
        text3,
        image
    } = data || {};

    return (
        <div id="about-me" className={`about-me ${wrapperCls}`}>
            <div className={container}>
                <div className="section-headings text-center !max-w-full">
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
                            aosDelay="100"
                        />
                    }

                    {text && 
                        <div className="mt-2 max-w-[800px] mx-auto">
                            <Text 
                                text={text}
                                cls="text-18"
                                aos="fade-up"
                                aosDelay="150"
                            />
                        </div>
                    }
                </div>

                {image &&
                    <div className="section-content radius18 overflow-hidden max-w-[600px] mx-auto" data-aos="zoom-in" data-aos-delay="200">
                        <Image
                            src={image.src}
                            width={image.width}
                            height={image.height}
                            loading={image.loading}
                            alt={image.alt ? image.alt : 'About Me Image'}
                            className="w-full h-auto object-cover max-h-[800px]"
                        />
                    </div>
                }

                {heading2 && 
                    <div className="mt-2 text-center">
                        <Heading 
                            title={heading2}
                            cls="text-28 fw-600"
                            aos="fade-up"
                            aosDelay="225"
                            style={{ color: '#1C2C4B' }}
                        />
                    </div>
                }

                {text2 && 
                    <div className="mt-1 text-center max-w-[800px] mx-auto">
                        <Text 
                            text={text2}
                            cls="text-16"
                            aos="fade-up"
                            aosDelay="250"
                            style={{ lineHeight: '1.3' }}
                        />
                    </div>
                }

                {text3 && 
                    <div className="mt-1 text-center max-w-[800px] mx-auto">
                        <Text 
                            text={text3}
                            cls="text-16"
                            aos="fade-up"
                            aosDelay="275"
                            style={{ lineHeight: '1.3' }}
                        />
                    </div>
                }
                
            </div>
        </div>
    )
}

export default AboutMe;

