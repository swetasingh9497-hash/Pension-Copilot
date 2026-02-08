import { npsDocuments } from "./mockDocuments";

export function retrieveRelevantDocs(question: string) {
    const lower = question.toLowerCase();

    return npsDocuments.filter((doc) =>
        doc.keywords.some((kw) => lower.includes(kw))
    );
}
