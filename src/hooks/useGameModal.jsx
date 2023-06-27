import { useContext } from "react";
import { gameModalContext } from "../context/gameModal";

export function useGameModal() {
    const gameModal = useContext(gameModalContext);
    if (!gameModal) throw new Error("useGameModal no tiene acceso al contexto gameModal");

    return gameModal;
}
