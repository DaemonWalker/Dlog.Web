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
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home } from './pages/home';
import { Tags } from './pages/tags';
import { Article } from './pages/article';
import { ArticleTimeline } from './pages/articleTimeline';
import { SearchResult } from './pages/searchResult'
import { Helmet } from 'react-helmet'
import { Diary } from './pages/diary'

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
                <Helmet>
                    <meta charSet="utf-8" />
                    <link rel="apple-touch-icon" href="/logo192.png" />
                </Helmet>
                <Layout className="App">
                    <Header className="site-layout-background header" style={{ padding: 0 }} >
                        <Row>
                            <Col xs={24} sm={14} md={14} lg={16} xl={18} xxl={20}>
                                <Navbar data={this.state.navData} />
                            </Col>
                            <Col xs={0} sm={10} md={10} lg={8} xl={6} xxl={4} className="header-row">
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
                        <Row justify="center">
                            <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                                <div className="site-layout-background app-container" style={{ padding: 24, minHeight: 360 }}>
                                    <Route path="/" exact render={(props) => (<Home {...props} key={new Date().getDate() + Math.random()}></Home>)} component={Home} />
                                    <Route path="/tags/:id?" exact render={(props) => (<Tags {...props} />)} key="Tags" />
                                    <Route path="/article/:id?" exact render={(props) => (<Article {...props}></Article>)} />
                                    <Route path="/timeline/:id" component={ArticleTimeline} />
                                    <Route path="/search/:filter?" exact component={SearchResult} />
                                    <Route path="/diary/:id?" exact component={Diary} />
                                </div>
                            </Col>
                        </Row>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        <p>
                            <a href="https://github.com/DaemonWalker" target="_blank" rel="noopener noreferrer">
                                <GithubOutlined style={{ fontSize: '3em' }} />
                            </a>
                        </p>
                        <p>
                            {`© ${new Date().getFullYear()} Daemon Walker`}
                        </p>
                        <p>
                            Powered by
              <a href="https://react.docschina.org/" target="_blank" rel="noopener noreferrer">React</a>
                            <a href="https://ant.design/index-cn" target="_blank" rel="noopener noreferrer">Ant Desgin(antd)</a>
                            <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer">.Net Core</a>
                            <a href="https://redis.io/" target="_blank" rel="noopener noreferrer">Redis</a>
                            <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB</a>
                            <a href="https://www.elastic.co/cn/" target="_blank" rel="noopener noreferrer">Elasticsearch</a>
                            <a href="https://www.centos.org/" target="_blank" rel="noopener noreferrer">CentOS</a>
                            <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a>
                        </p>
                        <p>
                            <a href="http://www.beian.gov.cn/portal/registerSystemInfo" target="_blank" rel="noopener noreferrer">
                                辽ICP备16008708号-1
                            </a>
                        </p>
                    </Footer>
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


