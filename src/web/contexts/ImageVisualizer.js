import React from "react";

const ImageVisualizerContext = React.createContext();

export function ImageVisualizerProvider({ children }) {
    const [isVisualizerOpen, setIsVisualizerOpen] = React.useState(false);
    const [openedImage, setOpenedImage] = React.useState("");
    
    return (
        <ImageVisualizerContext.Provider
            value={{
                isVisualizerOpen,
                setIsVisualizerOpen,
                openedImage,
                setOpenedImage,
            }}
        >
        {children}
        </ImageVisualizerContext.Provider>
    );
}

export function useImageVisualizer() {
    const context = React.useContext(ImageVisualizerContext);
    if (context === undefined) {
        throw new Error(
            "useImageVisualizer must be used within a ImageVisualizerProvider"
        );
    }
    return context;
}


