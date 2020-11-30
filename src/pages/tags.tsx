import React from 'react';
import { ApiUtil } from '../utils/apiUtil';
import { Constant } from '../utils/constants';
import { ResponseModel } from '../models/responseModel';
import { TagArticlesModel } from '../models/tagArticlesModel';
import { Loading } from '../components/loading';
import { Collapse } from 'antd';
import { ArticleSummaryList } from '../components/articleSummaryList';
import { PageTitle } from '../components/pageTitle';
import { RouteComponentProps } from 'react-router';
import { StringUtil } from '../utils/stringUtil';
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
            <>
                <PageTitle title="标签们"></PageTitle>
                {
                    this.state.tags.length === 0 ?
                        <Loading isLoading={this.state.isLoading}></Loading> :
                        <Collapse accordion={true} onChange={this.fetchArticles.bind(this)} defaultActiveKey={this.getId()}>
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
                }
            </>
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
                }, () => {
                    if (StringUtil.isStringNotEmpty(this.getId())) {
                        this.fetchArticles(this.getId())
                    }
                })
            })
    }
    fetchArticles(key: string | string[]): void {
        let tags = this.state.tags;
        let targetTag: TagArticlesModel | null = null;
        for (let tag of tags) {
            if (tag.tagName === key) {
                targetTag = tag;
                if (tag.articles.length !== 0) {
                    return;
                }
            }
        }
        if (targetTag === undefined || targetTag === null) {
            return;
        }
        ApiUtil.Post(Constant.URL_TAGARTICLES, key,
            (res: ResponseModel) => {
                if (targetTag) {
                    targetTag.articles = res.articleSummaries;
                    this.setState({
                        tags: tags
                    })
                }
            })

    }
    getId(): string {
        if (StringUtil.isStringNotEmpty(this.props.match?.params?.id)) {
            return this.props.match.params.id;
        }
        else {
            return "";
        }
    }
}
export interface MatchParams {
    id: string
}
export interface IProps extends RouteComponentProps<MatchParams> {
}
export interface IState {
    tags: TagArticlesModel[],
    isLoading: boolean
}