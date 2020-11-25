import React from 'react';
import { ApiUtil } from '../utils/apiUtil';
import { Constant } from '../utils/constants';
import { ResponseModel } from '../models/responseModel';
import { TagArticlesModel } from '../models/tagArticlesModel';
import { Loading } from '../components/loading';
import { Collapse } from 'antd';
import { ArticleSummaryList } from '../components/articleSummaryList';
const { Panel } = Collapse;

export class Tags extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            tags: [],
            isLoading: true
        };
    }
    render() {
        return (
            this.state.tags.length === 0 ?
                <Loading isLoading={this.state.isLoading}></Loading> :
                <Collapse accordion={true} onChange={this.fetchArticles.bind(this)}>
                    {
                        this.state.tags.map((ele: TagArticlesModel, index: number) => {
                            return (
                                <Panel header={ele.tagName} key={`${ele.tagName}`}>
                                    <ArticleSummaryList
                                        articleSummaries={ele.articles}
                                        isLoading={ele.articles.length === 0}
                                        isSimpleMode={true}
                                    />
                                </Panel>)
                        })
                    }
                </Collapse>
        )
    }
    componentDidMount() {
        ApiUtil.Get(Constant.URL_TAGS,
            (res: ResponseModel) => {
                var array = new Array<TagArticlesModel>();
                for (let tag of res.tags) {
                    array.push({ tagName: tag, articles: [] });
                }
                this.setState({
                    tags: array,
                    isLoading: false
                })
            })
    }
    fetchArticles(key: string | string[]): void {
        let tags = this.state.tags;
        let targetTag: TagArticlesModel;
        for (let tag of tags) {
            if (tag.tagName === key) {
                targetTag = tag;
                if (tag.articles.length !== 0) {
                    return;
                }
            }
        }
        ApiUtil.Post(Constant.URL_TAGARTICLES, key,
            (res: ResponseModel) => {
                targetTag.articles = res.articleSummaries;
                this.setState({
                    tags: tags
                })
            })

    }
}
export interface IProps {
}
export interface IState {
    tags: TagArticlesModel[],
    isLoading: boolean
}