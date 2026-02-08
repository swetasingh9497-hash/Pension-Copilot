"use client";

import { useState } from "react";
import ScoreCircle from "../components/ScoreCircle";
import PensionGapCard from "../components/PensionGapCard";
import AIRecommendationCard from "../components/AIRecommendationCard";
import RetirementSimulator from "../components/RetirementSimulator";
import { calculateRetirement } from "../utils/retirementCalculator";
import AIPensionChat from "../components/AIPensionChat";

export default function Home() {
  // STATE
  const [age, setAge] = useState(25);
  const [monthlyIncome, setMonthlyIncome] = useState(50000);
  const [currentSavings, setCurrentSavings] = useState(200000);

  // LOGIC
  const {
    futureSavings,
    pensionGap,
    requiredCorpus,
    score,
    risk,
    yearsLeft,
  } = calculateRetirement({
    age,
    monthlyIncome,
    currentSavings,
  });

  return (
    <main className="min-h-screen bg-slate-100 p-6">

      {/* 🔹 YOUR DETAILS (COMPACT & LEFT ALIGNED) */}
      <div className="bg-white p-6 rounded-xl shadow mb-6 max-w-xl">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Your Details
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Age
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full h-10 px-3 border rounded-lg"
              placeholder="e.g. 30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Annual Income (₹)
            </label>
            <input
              type="number"
              value={monthlyIncome * 12}
              onChange={(e) =>
                setMonthlyIncome(Number(e.target.value) / 12)
              }
              className="w-full h-10 px-3 border rounded-lg"
              placeholder="e.g. 600000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Retirement Savings (₹)
            </label>
            <input
              type="number"
              value={currentSavings}
              onChange={(e) =>
                setCurrentSavings(Number(e.target.value))
              }
              className="w-full h-10 px-3 border rounded-lg"
              placeholder="e.g. 200000"
            />
          </div>
        </div>
      </div>

      {/* 🔹 DASHBOARD */}
      <div className="max-w-3xl mx-auto space-y-6">
        <ScoreCircle score={score} risk={risk} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PensionGapCard
            required="₹3.2 Cr"
            projected={`₹${(futureSavings / 100000).toFixed(2)} Cr`}
            gap={`₹${(pensionGap / 100000).toFixed(2)} Cr`}
          />

          <AIRecommendationCard
            recommendation={`Increase savings by ₹${Math.ceil(
              pensionGap / (yearsLeft * 12)
            )} per month to close your retirement gap.`}
          />
        </div>

        <RetirementSimulator
          withoutInvestment="₹18,000 / month"
          withInvestment="₹75,000 / month"
        />

        <AIPensionChat />
      </div>
    </main>
  );
}
