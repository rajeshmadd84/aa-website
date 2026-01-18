import Image from "next/image";
import Link from 'next/link';
import { LogoType } from "@/types/logo";

const Logo = ({ 
    src, 
    url, 
    width, 
    height, 
    alt, 
    cls, 
    ariaLabel, 
    loading 
}: LogoType) => {
    const closeDrawer = () => {
        const drawers = document.querySelectorAll('.drawer-menu, .drawer-additional, .theme-drawer');
        const overlay = document.querySelector('#drawer-overlay');
        
        drawers.forEach(drawer => {
            drawer.classList.remove('show');
        });
        
        if (overlay) {
            overlay.classList.remove('show');
        }
        
        document.body.classList.remove('scroll-lock');
    };

    return (
        <Link className={cls} href={url} aria-label={ariaLabel} onClick={closeDrawer}>
            <Image
                src={src}
                width={width}
                height={height}
                alt={alt}
                loading={loading}
            />
        </Link>
    )
}

export default Logo;