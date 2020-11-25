import { ArticleModel } from './articleModel'
import { ArticleSummaryModel } from './articleSummaryModel'
import { NavDataModel } from './navDataModel'
import { ServerResponseModel } from './serverResponseModel'
import { TimelineNodeModel } from './timelineNodeModel'
import { SearchResultModel } from './searchResultModel'
import { TagArticlesModel } from './tagArticlesModel'

export interface ResponseModel {
    serverResponse: ServerResponseModel;
    navData: NavDataModel;
    token: string;
    articleSummaries: ArticleSummaryModel[];
    timeLine: TimelineNodeModel[];
    article: ArticleModel;
    searchResult: SearchResultModel[];
    tags: string[];
}