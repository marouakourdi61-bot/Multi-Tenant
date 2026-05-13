export default function Navbar() {
    return (
        <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
                Dashboard
            </h2>

            <div className="flex items-center gap-4">
                <button className="px-4 py-2 border rounded-lg">
                    EN
                </button>

                <div className="w-10 h-10 rounded-full bg-gray-300" />
            </div>
        </header>
    );
}