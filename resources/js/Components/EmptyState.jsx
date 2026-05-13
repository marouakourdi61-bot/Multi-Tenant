export default function EmptyState({
    title,
    buttonText,
}) {
    return (
        <div className="h-[300px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center bg-gray-50">

            <p className="text-gray-500 mb-4">
                {title}
            </p>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl">
                {buttonText}
            </button>
        </div>
    );
}