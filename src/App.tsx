import { GithubOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { Navbar } from './components/navbar';
import { NavDataModel } from './models/navDataModel';
import { ResponseModel } from './models/responseModel';
import './styles/app.css';
import { ApiUtil } from './utils/apiUtil';
import { Constant } from './utils/constants';
import { HyperLink } from './components/hyperLink';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Tags } from './pages/tags';
import { Article } from './pages/article';
import { ArticleTimeline } from './pages/articleTimeline';

const { Header, Content, Footer } = Layout;

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      collapsed: false,
      navData: {
        recents: [],
        tags: [],
        timeLine: []
      }
    };
  }
  render() {
    return (<BrowserRouter>
      <Layout className="App">
        <Navbar data={this.state.navData} />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background app-container" style={{ padding: 24, minHeight: 360 }}>
              <Route path="/" exact render={(props) => (<Home {...props} key={new Date().getDate()}></Home>)} component={Home} />
              <Route path="/tags/:id?" render={(props) => (<Tags {...props} key={new Date().getDate()}></Tags>)} key="Tags" />
              <Route path="/article/:id?" render={(props) => (<Article {...props} key={new Date().getDate()}></Article>)} key="Article" />
              <Route path="/timeline/:id" component={ArticleTimeline} key={new Date().getDate()} />
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
  collapsed: boolean
}

export default App;


