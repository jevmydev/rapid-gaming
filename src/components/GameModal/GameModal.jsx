import Button from "../../elements/Button";
import Title from "../../elements/Title";

import { useGameModal } from "../../hooks/useGameModal";

function GameModal() {
    const { gameModal, isModalOpen, toggleModal } = useGameModal();
    const { name, rating, released, genres, album } = gameModal;

    const isModalOpenClass = isModalOpen ? "flex" : "hidden";

    const handleClickModal = () => toggleModal();

    return (
        gameModal && (
            <section className={`${isModalOpenClass} w-full h-full fixed top-0 z-40 backdrop-blur-md`} id="gameModal">
                <div className="max-w-screen-sm m-auto w-full h-full flex items-center overflow-auto">
                    <article className="bg-zinc-950 flex flex-col p-8 gap-12 w-full rounded-xl">
                        <header>
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-4 items-start">
                                    <picture className="flex gap-4 overflow-x-auto mr-16 pb-4">
                                        {album.map((imageAlbum) => {
                                            const { id, image } = imageAlbum;
                                            return <img key={id} className="object-cover rounded-md w-96 h-52 select-none" src={image} alt={name} loading="lazy" decoding="async" />;
                                        })}
                                    </picture>
                                    <Title>{name}</Title>
                                </div>
                                <div>
                                    <Button isSecondary onClick={handleClickModal} title="Cerrar">
                                        Cerrar
                                    </Button>
                                </div>
                            </div>
                        </header>
                        <section>
                            <div className="text-zinc-50 text-2xl">
                                <h3>{rating} Estrellas</h3>
                                <h3>Publicado en {released}</h3>
                            </div>
                        </section>
                        <footer>
                            <div className="flex gap-4 text-zinc-300">
                                {genres.map((genre) => {
                                    const { id, name } = genre;
                                    return <p key={id}>{name}</p>;
                                })}
                            </div>
                        </footer>
                    </article>
                </div>
            </section>
        )
    );
}

export default GameModal;
