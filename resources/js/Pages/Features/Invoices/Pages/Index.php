export default function Index({ invoices }) {
    return (
        <div>
            <h1>Invoices</h1>
            <p>Total: {invoices.length}</p>
        </div>
    );
}

export default function Index({ invoices }) {
    return (
        <div className="px-4 md:px-8 py-6">
            
            {/* Header */}
            <div className="flex flex-col gap-1 mb-6">
                <h1 className="text-2xl font-bold text-slate-900">
                    Invoices
                </h1>

                <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span>Dashboard</span>
                    <span>/</span>
                    <span className="font-medium text-slate-700">
                        Invoices
                    </span>
                </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3 flex-1 min-w-[280px]">
                    
                    {/* Search */}
                    <div className="relative flex-1 max-w-sm">
                        <input
                            type="text"
                            placeholder="Search invoices..."
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Count */}
                    <div className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600">
                        {invoices.length}
                    </div>
                </div>

                {/* Button */}
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm">
                    New Invoice
                </button>
            </div>

            {/* Empty State */}
            {invoices.length === 0 && (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                    <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100">
                        📄
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                        No invoices yet
                    </h3>

                    <p className="text-slate-500 mb-8 max-w-sm">
                        Create your first invoice to get started
                    </p>

                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold text-sm">
                        New Invoice
                    </button>
                </div>
            )}
        </div>
    );
}