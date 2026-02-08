type Props = {
    withoutInvestment: string;
    withInvestment: string;
};

export default function RetirementSimulator({
    withoutInvestment,
    withInvestment,
}: Props) {
    return (
        <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800">
                Your Life at Age 60
            </h2>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-500">Without Planning</p>
                    <p className="mt-2 text-xl font-bold text-red-600">
                        {withoutInvestment}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        Basic lifestyle
                    </p>
                </div>

                <div className="border rounded-lg p-4 bg-green-50">
                    <p className="text-sm text-gray-500">With NPS Planning</p>
                    <p className="mt-2 text-xl font-bold text-green-700">
                        {withInvestment}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        Comfortable lifestyle
                    </p>
                </div>
            </div>
        </div>
    );
}
