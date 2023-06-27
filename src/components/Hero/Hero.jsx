import Title from "../../elements/Title";
import Button from "../../elements/Button";
import Shadow from "../../elements/Shadow";

import { useGameModal } from "../../hooks/useGameModal";

function Hero({ game }) {
    const { name, image } = game;
    const { handleBoth } = useGameModal();

    const handleClickModal = () => handleBoth(game);

    return (
        <section id="hero">
            <picture className="relative">
                <Shadow />
                <img className="w-full h-[65vh] object-cover object-top select-none" src={image} alt={name} decoding="async" />
            </picture>
            <div className="max-w-screen-xl m-auto p-4 pt-16 flex flex-col items-start gap-4">
                <Title>{name}</Title>
                <div className="flex items-center gap-4">
                    <Button title="Más información" onClick={handleClickModal}>
                        Más información
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
