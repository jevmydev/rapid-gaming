import GamesList from "./GamesList";
import Title from "../../elements/Title";

function Games({ games }) {
    return (
        <section id="trends">
            <div className="max-w-screen-xl m-auto p-4 py-24">
                <Title isSecondary>Tendencias</Title>
                <GamesList games={games} />
            </div>
        </section>
    );
}

export default Games;
