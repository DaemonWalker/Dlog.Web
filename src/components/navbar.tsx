import { CalendarOutlined, ClockCircleOutlined, TagsOutlined } from '@ant-design/icons'
import { Menu, Row, Typography } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import { NavDataModel } from '../models/navDataModel'
import { HyperLink } from './hyperLink'
const { SubMenu } = Menu;
const { Title } = Typography;

export class Navbar extends React.Component<IProps, IState> {


    render() {
        return (
            <>
                <div className="logo" >
                    <Row justify="space-around" align="middle">
                        <HyperLink href="/" text={(
                            <Title level={3}>
                                <span role="img" aria-label="jd">💊</span>
                            </Title>
                        )} />
                    </Row>
                </div>
                <Menu defaultSelectedKeys={['1']} mode="horizontal">
                    <SubMenu key="sub1" icon={<ClockCircleOutlined />} title="最新发表">
                        <Menu.ItemGroup>
                            {
                                this.props.data.recents.map(e => (
                                    <Menu.Item key={new Date().getDate() + Math.random()}>
                                        <HyperLink href={`/article/${e.url}`} text={e.content} />
                                    </Menu.Item>
                                ))
                            }
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TagsOutlined />} title="标签">
                        <Menu.ItemGroup>
                            {
                                this.props.data.tags.map(e => (
                                    <Menu.Item key={new Date().getDate() + Math.random()}>
                                        <HyperLink href={`/tags/${e.url}`} text={e.content} />
                                    </Menu.Item>
                                ))
                            }
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<CalendarOutlined />} title="时间">
                        <Menu.ItemGroup>
                            {
                                this.props.data.timeLine.map(e => (
                                    <Menu.Item key={new Date().getDate() + Math.random()}>
                                        <HyperLink href={`/timeline/${e.url}`} text={e.content} />
                                    </Menu.Item>
                                ))
                            }
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
            </>
        );
    }

    onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
}

export interface IProps {
    data: NavDataModel;
}

export interface IState {
    collapsed: boolean;
}