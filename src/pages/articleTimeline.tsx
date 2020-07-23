import { Timeline } from 'antd';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { ResponseModel } from '../models/responseModel';
import { TimelineNodeModel } from '../models/timelineNodeModel';
import { ApiUtil } from '../utils/apiUtil';
import { Constant } from '../utils/constants';
import { Loading } from '../components/loading'
import { HyperLink } from '../components/hyperLink';

export class ArticleTimeline extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { timeline: [] };
    }
    render() {
        return (
            <div>

                <Timeline mode="left">
                    {
                        this.state.timeline.map((ele: TimelineNodeModel) => {
                            return (
                                <Timeline.Item label={ele.blogDate} key={new Date().getUTCMilliseconds() + Math.random()}>
                                    <HyperLink href={encodeURI(`/article/${ele.url}`)} text={ele.title} />
                                </Timeline.Item>
                            )
                        })
                    }
                </Timeline>
                <Loading isLoading={!(this.state && this.state.timeline && this.state.timeline.length > 0)} />
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        let url: string = Constant.URL_TIMELINE;
        if (this.props.match.params.id) {
            url = `${Constant.URL_TIMELINE}?year=${this.props.match.params.id}`
        }
        ApiUtil.Get(url,
            (res: ResponseModel) => {
                this.setState({
                    timeline: res.timeLine
                })
            })
    }
}
interface MatchParams {
    id: string;
}
export interface IProps extends RouteComponentProps<MatchParams> { }
export interface IState {
    timeline: TimelineNodeModel[]
}