import Button from "../../elements/Button";

import { useGameModal } from "../../hooks/useGameModal";

function GamesItem({ game }) {
    const { name, image, rating } = game;
    const { handleBoth } = useGameModal();

    const handleClickModal = () => handleBoth(game);

    return (
        <li>
            <Button isCard title={`Más información sobre ${name}`} onClick={handleClickModal}>
                <article className="flex flex-col gap-4 w-full sm:max-w-sm">
                    <header>
                        <picture>
                            <img className="object-cover rounded-md select-none sm:w-96 sm:h-52" src={image} alt={name} loading="lazy" decoding="async" />
                        </picture>
                    </header>
                    <section>
                        <div className="flex justify-between">
                            <h3>{name}</h3>
                            <p className="text-orange-500">{rating} Estrellas</p>
                        </div>
                    </section>
                </article>
            </Button>
        </li>
    );
}

export default GamesItem;
