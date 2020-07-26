import { GithubOutlined, SearchOutlined } from '@ant-design/icons';
import { Layout, Row, Input, Col } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { Navbar } from './components/navbar';
import { NavDataModel } from './models/navDataModel';
import { ResponseModel } from './models/responseModel';
import './styles/app.css';
import { ApiUtil } from './utils/apiUtil';
import { Constant } from './utils/constants';
import { HyperLink } from './components/hyperLink';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home } from './pages/home';
import { Tags } from './pages/tags';
import { Article } from './pages/article';
import { ArticleTimeline } from './pages/articleTimeline';
import { SearchResult } from './pages/searchResult'

const { Header, Content, Footer } = Layout;
const { Search } = Input;

class App extends React.Component<IProps, IState> {
    tempFilter: string = "";

    constructor(props: IProps) {
        super(props);
        this.state = {
            collapsed: false,
            navData: {
                recents: [],
                tags: [],
                timeLine: []
            },
            filter: ""
        };
    }
    setFilter(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            filter: e.target.value
        })
    }
    render() {
        return (
            <BrowserRouter>
                <Layout className="App">
                    <Navbar data={this.state.navData} />
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }} >
                            <Row style={{ display: 'inline-flex', width: "100%" }} justify="end">
                                <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4} className="header-row">
                                    <Search
                                        placeholder="请输入你想搜索的内容"
                                        enterButton={(
                                            <Link to={`/search/${this.state.filter}`}><SearchOutlined /></Link>
                                        )}
                                        size="large"
                                        style={{ display: 'inline-block', verticalAlign: 'middle' }}
                                        onChange={(e) => this.setFilter(e)}
                                    />
                                </Col>
                            </Row>
                        </Header>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div className="site-layout-background app-container" style={{ padding: 24, minHeight: 360 }}>
                                <Route path="/" exact render={(props) => (<Home {...props} key={new Date().getDate() + Math.random()}></Home>)} component={Home} />
                                <Route path="/tags/:id?" render={(props) => (<Tags {...props} key={new Date().getDate() + Math.random()}></Tags>)} key="Tags" />
                                <Route path="/article/:id?" render={(props) => (<Article {...props}></Article>)} />
                                <Route path="/timeline/:id" component={ArticleTimeline} />
                                <Route path="/search/:filter?" exact component={SearchResult} />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            <p>
                                <HyperLink href="https://github.com/DaemonWalker" text={(
                                    <GithubOutlined style={{ fontSize: '3em' }} />
                                )} target="_blank" />
                            </p>
                            <p>
                                {`© ${new Date().getFullYear()} Daemon Walker`}
                            </p>
                            <p>
                                Powered by
              <HyperLink href="https://react.docschina.org/" text="React" target="_blank" />
                                <HyperLink href="https://ant.design/index-cn" text="Ant Desgin(antd)" target="_blank" />
                                <HyperLink href="https://dotnet.microsoft.com/" text=".Net Core" target="_blank" />
                                <HyperLink href="https://www.centos.org/" text="CentOS" target="_blank" />
                                <HyperLink href="https://www.docker.com/" text="Docker" target="_blank" />
                            </p>
                            <p>
                                <HyperLink href="http://www.beian.gov.cn/portal/registerSystemInfo" text="辽ICP备16008708号-1" target="_blank" />
                            </p>
                        </Footer>
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }

    componentDidMount() {
        ApiUtil.Get(
            Constant.URL_NAV,
            (res: ResponseModel) => {
                this.setState({
                    navData: res.navData
                })
            });
    }
}

export interface IProps { }
export interface IState {
    navData: NavDataModel
    collapsed: boolean,
    filter: string
}

export default App;


