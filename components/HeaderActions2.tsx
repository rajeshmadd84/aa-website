import SlimButton from "./buttons/SlimButton";
import Hamburger from "./menus/Hamburger";

const HeaderActions2 = () => {
    return (
        <div className="header-actions flex items-center">
            <SlimButton 
                label="Let's Talk"
                href="/#footer-contact"
                ariaLabel="contact us"
                cls="button--primary"
            />
            <Hamburger />
        </div>
    )
}

export default HeaderActions2;