import { ArticleSummaryModel } from './articleSummaryModel'
import { NavDataModel } from './navDataModel'
import { ServerResponseModel } from './serverResponseModel'
import { TimelineNodeModel } from './timelineNodeModel'

export interface ResponseModel {
    serverResponse: ServerResponseModel;
    navData: NavDataModel;
    token: string;
    indexArticles: ArticleSummaryModel[];
    timeLine: TimelineNodeModel[];
}