import React from 'react';
import { List, Avatar } from 'antd';
import { MessageOutlined, LikeOutlined, EyeOutlined } from '@ant-design/icons';
import { ArticleSummaryModel } from '../models/articleSummaryModel'
import { ApiUtil } from '../utils/apiUtil';
import { Constant } from '../utils/constants';
import { ResponseModel } from '../models/responseModel';
import { ArticleStatics } from '../components/articleStatics'
import MyAvatar from '../contents/avatar/me.jpg'

export class Home extends React.Component<IProps, IState> {
    render() {
        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page: number) => {
                        console.log(page);
                    },
                    pageSize: 10,
                }}
                dataSource={this.state && this.state.listData ? this.state.listData : []}
                renderItem={(item: ArticleSummaryModel) => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <ArticleStatics icon={EyeOutlined} number={item.seen} key="list-vertical-star-o" />,
                            <ArticleStatics icon={LikeOutlined} number={item.likes} key="list-vertical-like-o" />,
                            <ArticleStatics icon={MessageOutlined} number={item.comments} key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={MyAvatar} />}
                            title={<a href={`acrticle/${item.url}`}>{item.title}</a>} />
                        {item.summary}
                    </List.Item>
                )}
            />
        )
    }

    componentDidMount() {
        ApiUtil.Get(Constant.URL_INDEX_LIST,
            (res: ResponseModel) => {
                this.setState({
                    listData: res.indexArticles
                })
            },
            (err: any) => {

            })
    }
}

export interface IProps { }
export interface IState {
    listData: ArticleSummaryModel[];
}