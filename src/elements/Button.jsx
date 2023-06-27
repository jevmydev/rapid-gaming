export function Button({ isSecondary = false, isCard = false, ...props }) {
    const secondaryClass = isSecondary ? "bg-zinc-800" : "bg-orange-600";
    const cardClass = isCard ? "bg-transparent px-0 py-0 backdrop-blur-md" : "px-4 py-2";

    return <button className={`${secondaryClass} ${cardClass} text-zinc-200 flex items-center gap-4 rounded-md transition-transform hover:scale-105 active:scale-100`} {...props} />;
}

export default Button;
