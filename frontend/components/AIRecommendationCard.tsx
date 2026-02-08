type Props = {
    recommendation: string;
};

export default function AIRecommendationCard({ recommendation }: Props) {
    return (
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h2 className="text-lg font-semibold text-blue-900">
                AI Recommendation
            </h2>

            <p className="mt-3 text-sm text-blue-800">
                {recommendation}
            </p>

            <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg text-sm">
                Start Contribution
            </button>
        </div>
    );
}
