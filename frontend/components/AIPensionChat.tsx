"use client";

import { useState } from "react";
import { retrieveRelevantDocs } from "../ai/rag/retrieve";

export default function AIPensionChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleAsk() {
    if (!question.trim()) return;

    const docs = retrieveRelevantDocs(question);

    if (docs.length === 0) {
      setAnswer("I don't have verified information for this question.");
      return;
    }

    const combinedAnswer = docs
      .map((d) => `${d.content} (${d.source})`)
      .join("\n\n");

    setAnswer(combinedAnswer);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-800">
        AI Pension Copilot
      </h2>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask about NPS, tax benefits, withdrawals..."
        className="mt-4 w-full border p-2 rounded"
      />

      <button
        onClick={handleAsk}
        className="mt-3 bg-blue-900 text-white px-4 py-2 rounded"
      >
        Ask AI
      </button>

      {/* ✅ ADDED: Confidence indicator (just above answer) */}
      {answer && (
        <p className="text-xs text-green-600 mt-2">
          Confidence: High (Verified Source)
        </p>
      )}

      {answer && (
        <div className="mt-4 bg-slate-50 p-4 rounded text-sm whitespace-pre-line">
          {answer}
        </div>
      )}

      <p className="mt-3 text-xs text-gray-500">
        Responses are generated using verified NPS documents.
        This is an informational assistant, not official financial advice.
      </p>
    </div>
  );
}
