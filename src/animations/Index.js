export const sentence = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delay: 0.1, staggerChildren: 0.08 },
    },
}

export const letter = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
    },
}

export const scrollFade = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    },
}

export const scrollZoom = {
    offscreen: { opacity: 0, scale: 0.8 },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    },
}

export const listContainer = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 5,
        },
    },
};

export const listItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

