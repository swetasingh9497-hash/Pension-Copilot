type Inputs = {
    age: number;
    monthlyIncome: number;
    currentSavings: number;
};

export function calculateRetirement(inputs: Inputs) {
    const retirementAge = 60;
    const yearsLeft = retirementAge - inputs.age;

    const yearlySavings = inputs.monthlyIncome * 0.1 * 12;
    const futureSavings =
        inputs.currentSavings + yearlySavings * yearsLeft;

    const requiredCorpus = 32000000; // ₹3.2 Cr
    const pensionGap = requiredCorpus - futureSavings;

    const score = Math.min(
        100,
        Math.floor((futureSavings / requiredCorpus) * 100)
    );

    let risk: "Low" | "Medium" | "High" = "Low";
    if (pensionGap > 1500000) risk = "High";
    else if (pensionGap > 500000) risk = "Medium";

    return {
        yearsLeft,
        futureSavings,
        pensionGap,
        requiredCorpus,
        score,
        risk,
    };
}
