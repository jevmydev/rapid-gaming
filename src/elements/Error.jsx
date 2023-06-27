export function Error({ error }) {
    return (
        <div className="max-w-screen-xl m-auto p-4 py-24 flex flex-col items-start gap-4">
            <p className="text-xl text-red-400">{error}</p>
        </div>
    );
}

export default Error;
