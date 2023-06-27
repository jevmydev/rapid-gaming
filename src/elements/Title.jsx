export function Title({ isSecondary = false, ...props }) {
    const secondaryClass = isSecondary ? "text-2xl to-zinc-950 from-zinc-50" : "text-4xl sm:text-6xl to-orange-700 from-orange-500";

    return <h2 className={`${secondaryClass} tracking-tight font-bold bg-gradient-to-r bg-clip-text text-transparent`} {...props} />;
}

export default Title;
