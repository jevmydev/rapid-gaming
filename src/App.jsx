import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Games from "./components/Games/Games";
import GameModal from "./components/GameModal/GameModal";
import Footer from "./components/Footer/Footer";
import Loading from "./elements/Loading";
import Error from "./elements/Error";
import MouseFollower from "./elements/MouseFollower";

import { useGames } from "./hooks/useGames";
import { useGameModal } from "./hooks/useGameModal";

function App() {
    const { games, heroGame, loading, error } = useGames();
    const { gameModal } = useGameModal();
    const visibility = games && heroGame && !loading && !error;

    return (
        <>
            <MouseFollower />
            <Header />
            <main>
                {visibility && (
                    <>
                        <Hero game={heroGame} />
                        <Games games={games} />
                        {gameModal && <GameModal />}
                    </>
                )}
                {loading && <Loading />}
                {error && <Error error={error} />}
            </main>
            <Footer />
        </>
    );
}

export default App;
