type Props = {
  score: number;
  risk: string;
};

export default function ScoreCircle({ score, risk }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <div className="text-4xl font-bold text-blue-900">
        {score}%
      </div>
      <div className="text-gray-600 mt-2">
        Retirement Readiness
      </div>
      <div className="text-yellow-600 font-semibold">
        {risk} Risk
      </div>
    </div>
  );
}
