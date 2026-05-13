import { Link } from "@inertiajs/react";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white border-r h-screen p-4">
            <h1 className="text-2xl font-bold mb-8">
                BILLIX
            </h1>

            <nav className="space-y-2">
                <Link
                    href="/dashboard"
                    className="block px-4 py-2 rounded-lg bg-indigo-100 text-indigo-600"
                >
                    Dashboard
                </Link>

                <Link
                    href="/quotes"
                    className="block px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                    Quotes
                </Link>

                <Link
                    href="/invoices"
                    className="block px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                    Invoices
                </Link>

                <Link
                    href="/clients"
                    className="block px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                    Clients
                </Link>
            </nav>
        </aside>
    );
}