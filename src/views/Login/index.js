import { BrowserRouter as Router,Redirect,Switch } from "react-router-dom";
import {Helmet} from 'react-helmet';
import {Input, Button, Form,message} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import Banner from "../../components/banner"
import { useState,useEffect } from "react"
import "./login.less"

function Login(props) {
   
    const [states,setStates] = useState({isMount:false,loading:false})
    useEffect(()=>{
        setTimeout(() => setStates({...states,isMount:true}), 300);
    },[])
    //{isMount:true}
    const formItemStyleName = states.isMount ? 'form-item active' : 'form-item';

    function submit(values) {
        window.localStorage.setItem("loginstatus", JSON.stringify(values));
        window.location.href = "http://localhost:3000/home";
    }
    return (
        <>
            <Helmet title="欢迎登陆"></Helmet>
            <div className="left">
                <Banner></Banner>
            </div>
            <div className="right">
                <div className="box">
                    <Form
                    name="login"
                    className=""
                    onFinish={submit}
                    >
                        <div className={formItemStyleName}>
                            <div className="header">欢迎登录</div>
                        </div>
                        <div className={formItemStyleName}>
                            <Form.Item
                                name="userName"
                                rules={[{required: true, message: '请输入用户名'}]}
                            >
                                <Input allowClear prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
                            </Form.Item>
                        </div>
                        <div className={formItemStyleName}>
                            <Form.Item
                                name="password"
                                rules={[{required: true, message: '请输入密码000'}]}
                            >
                                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="密码"
                                    visibilityToggle={true} />
                            </Form.Item>
                        </div>
                        <div className={formItemStyleName}>
                            <Button
                                className="submit-btn"
                                loading={states.loading}
                                type="primary"
                                htmlType="submit"
                            >
                                登录
                           </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login;
