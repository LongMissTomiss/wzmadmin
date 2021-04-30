import React,{ useState, useEffect, useRef } from 'react';
import './home.less'
import { Layout, Menu, Breadcrumb, Tabs } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import logoImg from '../../components/banner/logo.png'
const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;

const Home = (props) => {
    console.log(props,"Home");
    const [state, setState] = useState({ collapsed: false});
    
    const refH1 = useRef(null);
    
    const toggle = () => {
        setState({ collapsed: !state.collapsed });
        refH1.current.style.display = state.collapsed ? "block" : "none";
    }

    const panes = [{ title:"首页", content:"我是首页", key: "1" }];

    const [tableState,setTableState] = useState({
        activeKey: panes[0].key,
        panes,
    })

    const onChange = activeKey => {
        setTableState({ ...tableState, activeKey });
    };

    const onEdit = (targetKey) => {
        remove(targetKey);
    };

    const add = (key) => {
        if (tableState.panes.find((item) => { return item.key === key })) {
            return;
        }
        const { panes } = tableState;
        const activeKey = key;
        let title = "";
        switch (key) {
            case "1":
                title = "首页";
                break;
            case "2":
                title = "用户管理";
                break;
            case "3":
                title = "角色管理";
                break;
            default:
                break;
        }
        panes.push({ title, content:`${title}`, key: activeKey });
        setTableState({ panes, activeKey });
    };

    const remove = targetKey => {
        let { activeKey } = tableState;
        let lastIndex;
        tableState.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
            lastIndex = i - 1;
        }
        });
        const panes = tableState.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
        } else {
            activeKey = panes[0].key;
        }
        }
        setTableState({ panes, activeKey });
    };

    const menuClick = ({ item }) => {
        if (tableState.panes.find(item1 => (item1.key === item.props.eventKey))) {
            setTableState({ ...tableState, activeKey: item.props.eventKey });
            
        } else {
            add(item.props.eventKey);
        }
    }

    return (
      <Layout style={ { minHeight: '100vh' } } >
        <Sider trigger={null} collapsible collapsed={state.collapsed}>
            <div className="logo" >
               <img src={logoImg} alt="logo图"/> 
               <h1 ref={refH1} >React Admin</h1>  
            </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}
                        onClick={menuClick} >
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        首页
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        用户管理
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        角色管理
                    </Menu.Item>
             </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background header" style={{ padding: 0,background: "#2F54EB" }}>
            {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <Breadcrumb>
                <Breadcrumb.Item href="">
                    <HomeOutlined />
                        <span>首页</span>
                    </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                    <UserOutlined />
                    <span>ant Design官网</span>
                </Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
             <Tabs
                hideAdd
                onChange={onChange}
                activeKey={tableState.activeKey}
                type="editable-card"
                onEdit={onEdit}
                >
                {tableState.panes.map(pane => (
                    <TabPane tab={pane.title} key={pane.key}>
                    {pane.content}
                    </TabPane>
                ))}
            </Tabs>
          </Content>
        </Layout>
      </Layout>
    );
}

export default Home;