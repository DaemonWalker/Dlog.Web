export interface ArticleSummaryModel {
    title: string;
    summary: string;
    imgPath: string;
    url: string;
    tags: string[];
    seen: number;
    likes: number;
    comments: number;
    cover: string;
}