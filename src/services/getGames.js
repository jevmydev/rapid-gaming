import { HOST_URL, GAMES_URL, GAMES_KEY, GAMES_RAPID_KEY } from "../constants";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": GAMES_RAPID_KEY,
        "X-RapidAPI-Host": HOST_URL
    }
};

export async function getGames() {
    try {
        const res = await fetch(`${GAMES_URL}?key=${GAMES_KEY}`, options);
        const gamesJSON = await res.json();
        const games = gamesJSON.results;

        return contractGames(games);
    } catch (err) {
        throw new Error("No se encontraron juegos");
    }
}

function contractGames(games) {
    return games.map((game) => ({
        id: game.id,
        name: game.name,
        released: game.released,
        image: game.background_image,
        rating: game.rating_top,
        genres: game.genres,
        album: game.short_screenshots
    }));
}
