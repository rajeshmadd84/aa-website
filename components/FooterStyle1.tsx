import FooterContact from "./FooterContact";
import FooterContactImage from "@/public/img/contact/contact.jpg";
import FooterContactBgImage from "@/public/img/contact/contact-bg.jpg";
import FooterBgImage from "@/public/img/footer/footer-bg-large.jpg";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

interface FooterProps {
    container: string;
}

const FooterStyle1 = ({ container }: FooterProps) => {
    return (
        <>
            <FooterContact 
                container={container}
                bgImage={FooterContactBgImage.src}
                imageUrl={FooterContactImage.src}
                width={1290}
                height={1400}
                alt="Contact image"
                aosAnchor=".contact-box"
                subheading="Contact Me"
                heading="Let's explore your path together"
                text="Start with a conversation to access your current position and next steps."
            />

            <div
                className="footer-main bg-contain"
                style={{ backgroundImage: `url(${FooterBgImage.src})` }}
            >
                <FooterTop container={container} />
                <FooterBottom container={container} />
            </div></>
    )
}

export default FooterStyle1;