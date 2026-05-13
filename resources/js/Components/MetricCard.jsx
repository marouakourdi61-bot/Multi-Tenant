export default function MetricCard({
    title,
    value,
    description,
}) {
    return (
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <div className="mb-4">
                <p className="text-sm text-gray-500 uppercase">
                    {title}
                </p>
            </div>

            <h2 className="text-3xl font-bold mb-6">
                {value}
            </h2>

            <p className="text-sm text-gray-400">
                {description}
            </p>
        </div>
    );
}