import { HeadingType } from "@/types/heading";

const Heading = ({
    title,
    styledText,
    styledTextCls,
    aos,
    aosAnchor,
    aosDelay,
    cls,
    style,
}: HeadingType) => {
    const isAos = aos ? { 'data-aos': `${aos}` } : null;
    const isAosAnchor = aosAnchor ? { 'data-aos-anchor': `${aosAnchor}` } : null;
    const isAosDelay = aosDelay ? { 'data-aos-delay': `${aosDelay}` } : null;
    const conditionalAttributes = {...isAos, ...isAosAnchor, ...isAosDelay};
    
    // Split the title around the decorated text
    if(styledText) {
        // Escape special regex characters in styledText
        const escapedStyledText = styledText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const parts = title.split(new RegExp(`(${escapedStyledText})`, "gi"));

        return (
            <h2 className={`heading ${cls}`} style={style} {...conditionalAttributes}>
                {parts.map((part, index) =>
                    part.toLowerCase() === styledText.toLowerCase() ? (
                    <span key={index} className={styledTextCls}>
                        <span>{part}</span>
                    </span>
                    ) : (
                    part
                    )
                )}
            </h2>
        )
    }

    return (
        <h2 className={`heading ${cls}`} style={style} {...conditionalAttributes}>
            {title}
        </h2>
    )
}

export default Heading;