type Props = {
    required: string;
    projected: string;
    gap: string;
};

export default function PensionGapCard({ required, projected, gap }: Props) {
    return (
        <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800">
                Pension Gap
            </h2>

            <div className="mt-4 space-y-2 text-sm">
                <p>
                    <span className="text-gray-500">Required Corpus:</span>{" "}
                    <strong>{required}</strong>
                </p>
                <p>
                    <span className="text-gray-500">Projected Savings:</span>{" "}
                    <strong>{projected}</strong>
                </p>
                <p className="text-red-600 font-semibold">
                    Gap: {gap}
                </p>
            </div>
        </div>
    );
}
