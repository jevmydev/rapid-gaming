import { createContext, useState } from "react";

export const gameModalContext = createContext();

export function GameModalProvider({ children }) {
    const [gameModal, setGameModal] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const updateGameModal = (newGameModal) => setGameModal(newGameModal);
    const toggleModal = () => {
        if (!isModalOpen) document.body.classList.add("overflow-hidden");
        else document.body.classList.remove("overflow-hidden");

        setIsModalOpen(!isModalOpen);
    };

    const handleBoth = (game) => {
        updateGameModal(game);
        toggleModal();
    };

    return (
        <gameModalContext.Provider
            value={{
                gameModal,
                isModalOpen,
                updateGameModal,
                toggleModal,
                handleBoth
            }}
        >
            {children}
        </gameModalContext.Provider>
    );
}
