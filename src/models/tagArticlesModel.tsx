import { ArticleSummaryModel } from './articleSummaryModel'

export interface TagArticlesModel {
    tagName: string;
    articles: ArticleSummaryModel[];
}