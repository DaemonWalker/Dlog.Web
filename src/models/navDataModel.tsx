import { LinkModel } from './linkModel'
export interface NavDataModel {
    recents: LinkModel[],
    tags: LinkModel[],
    timeLine: LinkModel[]
}