import DashboardLayout from "../Layouts/DashboardLayout";
import MetricCard from "../Components/MetricCard";
import InvoiceStatus from "../Components/InvoiceStatus";
import EmptyState from "../Components/EmptyState";

export default function Index() {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

                <MetricCard
                    title="Total Revenue"
                    value="0 MAD"
                    description="Lifetime paid earnings"
                />

                <MetricCard
                    title="Pending"
                    value="0 MAD"
                    description="Sent but not paid"
                />

                <MetricCard
                    title="Clients"
                    value="0"
                    description="0 Individuals, 0 Companies"
                />

                <MetricCard
                    title="Delivery Notes"
                    value="0"
                    description="Total delivery notes"
                />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

                <div className="xl:col-span-3 bg-white rounded-2xl border p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-semibold">
                                Invoices Overview
                            </h2>

                            <p className="text-sm text-gray-500">
                                Last 30 days
                            </p>
                        </div>

                        <button className="border px-4 py-2 rounded-xl">
                            30 DAYS
                        </button>
                    </div>

                    <EmptyState
                        title="No data available for the selected period"
                        buttonText="Create your first invoice"
                    />
                </div>

                <InvoiceStatus />
            </div>
        </DashboardLayout>
    );
}