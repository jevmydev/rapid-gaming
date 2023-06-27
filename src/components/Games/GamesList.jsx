import GamesItem from "./GamesItem";

function GamesList({ games }) {
    return (
        <ul className="flex flex-wrap items-start gap-8 pt-16 justify-center lg:justify-between">
            {games.map((game) => {
                const { id } = game;
                return <GamesItem key={id} game={game} />;
            })}
        </ul>
    );
}

export default GamesList;
