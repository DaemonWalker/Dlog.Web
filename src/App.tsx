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
              <a href="https://react.docschina.org/" target="_blank" >React</a>
                            <a href="https://ant.design/index-cn" target="_blank" >Ant Desgin(antd)</a>
                            <a href="https://dotnet.microsoft.com/" target="_blank">.Net Core</a>
                            <a href="https://redis.io/" target="_blank">Redis</a>
                            <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>
                            <a href="https://www.elastic.co/cn/" target="_blank">Elasticsearch</a>
                            <a href="https://www.centos.org/" target="_blank">CentOS</a>
                            <a href="https://www.docker.com/" target="_blank" >Docker</a>
                        </p>
                        <p>
                            <HyperLink href="http://www.beian.gov.cn/portal/registerSystemInfo" text="辽ICP备16008708号-1" target="_blank" />
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


