export type AIQuery = {
    question: string;
    language: "en" | "hi";
};

export type AIResponse = {
    answer: string;
    sources?: string[];
};
