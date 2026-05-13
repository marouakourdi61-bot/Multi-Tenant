import DashboardLayout from "../Layouts/DashboardLayout";
import MetricCard from "../Components/MetricCard";
import InvoiceStatus from "../Components/InvoiceStatus";

export default function Index() {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <MetricCard
                    title="Total Revenue"
                    value="0 MAD"
                    description="Lifetime earnings"
                />

                <MetricCard
                    title="Pending"
                    value="0 MAD"
                    description="Waiting payments"
                />

                <MetricCard
                    title="Clients"
                    value="0"
                    description="0 Individuals, 0 Companies"
                />

                <MetricCard
                    title="Delivery Notes"
                    value="0"
                    description="Total created notes"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 bg-white p-5 rounded-xl border shadow-sm">
                    <h3 className="text-lg font-semibold mb-6">
                        Invoices Overview
                    </h3>

                    <EmptyState
                        title="No invoices found"
                        buttonText="Create Invoice"
                    />
                </div>

                <InvoiceStatus />
            </div>
        </DashboardLayout>
    );
}