export default function InvoiceStatus() {
    return (
        <div className="bg-white border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6">
                Invoice Status
            </h2>

            <div className="space-y-4">

                <div className="flex justify-between">
                    <span>Paid</span>
                    <span>0%</span>
                </div>

                <div className="flex justify-between">
                    <span>Unpaid</span>
                    <span>0%</span>
                </div>

                <div className="flex justify-between">
                    <span>Overdue</span>
                    <span>0%</span>
                </div>

            </div>
        </div>
    );
}