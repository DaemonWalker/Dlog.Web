import { ArticleModel } from './articleModel'
import { ArticleSummaryModel } from './articleSummaryModel'
import { NavDataModel } from './navDataModel'
import { ServerResponseModel } from './serverResponseModel'
import { TimelineNodeModel } from './timelineNodeModel'

export interface ResponseModel {
    serverResponse: ServerResponseModel;
    navData: NavDataModel;
    token: string;
    articleSummaries: ArticleSummaryModel[];
    timeLine: TimelineNodeModel[];
    article: ArticleModel;
}