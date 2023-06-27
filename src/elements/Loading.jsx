import Shadow from "./Shadow";

export function Loading() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center relative">
            <div className="flex gap-4 w-full relative">
                <Shadow />
                <div className="bg-zinc-800 w-full h-[65vh] rounded-md animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-4 w-full relative max-w-screen-xl m-auto p-4">
                <div className="bg-zinc-800 w-1/2 h-16 rounded-md animate-pulse"></div>
                <div className="flex gap-4 w-1/2">
                    <div className="bg-zinc-800 w-1/2 h-16 rounded-md animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}

export default Loading;
