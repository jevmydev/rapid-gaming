import { useEffect, useState } from "react";
import { getGames } from "../services/getGames";

export function useGames() {
    const [games, setGames] = useState(null);
    const [heroGame, setHeroGame] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const updateGames = async () => {
        try {
            setLoading(true);

            const newGames = await getGames();
            const newHeroGame = newGames?.at(0);

            setGames(newGames);
            setHeroGame(newHeroGame);
        } catch (err) {
            setError(err.message);
            throw new Error("La actualización de búsqueda de juegos falló");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        updateGames();
    }, []);

    return { games, heroGame, loading, error, updateGames };
}
