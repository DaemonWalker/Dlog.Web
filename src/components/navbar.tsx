import { CalendarOutlined, ClockCircleOutlined, TagsOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { NavDataModel } from '../models/navDataModel'
import '../styles/navbar.css'

const { SubMenu } = Menu;
const { Sider } = Layout;

export class Navbar extends React.Component<IProps, IState> {
    handleClick = (e: any) => {
        console.log('click ', e);
    };

    render() {
        return (
            <BrowserRouter>
                <Sider collapsible
                    breakpoint="md"
                    collapsed={this.state && this.state.collapsed ? true : false}
                    onCollapse={this.onCollapse}
                    onBreakpoint={(broken: boolean) => {
                        if (broken) {
                            this.setState({
                                collapsed: true
                            })
                        }
                        else {
                            this.setState({
                                collapsed: false
                            })
                        }
                    }}>
                    <div className="logo" />
                    <Menu onClick={this.handleClick} theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu key="sub1" icon={<ClockCircleOutlined />} title="最新发表">
                            {
                                this.props.data.recents.map(e => (
                                    <Menu.Item key="1">
                                        <Link to={"/article/" + e.url}>
                                            {e.content}
                                        </Link>
                                    </Menu.Item>
                                ))
                            }
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TagsOutlined />} title="标签">
                            {
                                this.props.data.tags.map(e => (
                                    <Menu.Item key="2">
                                        <Link to={"/tags/" + e.url}>
                                            {e.content}
                                        </Link>
                                    </Menu.Item>
                                ))
                            }
                        </SubMenu>
                        <SubMenu key="sub3" icon={<CalendarOutlined />} title="时间">
                            {
                                this.props.data.timeLine.map(e => (
                                    <Menu.Item key="3">
                                        <Link to={"/timeline/" + e.url}>
                                            {e.content}
                                        </Link>
                                    </Menu.Item>
                                ))
                            }
                        </SubMenu>
                    </Menu>
                </Sider>
            </BrowserRouter>
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