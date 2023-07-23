

import { Button, Checkbox, Col, Form, Input, Layout, Modal, Row } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/SVG/login-bg.svg'
import metamap from '../assets/SVG/metamap-logo.svg'
import { t } from 'i18next';
import useGetUser from '../Home/hooks/useGetUser';

const { Content } = Layout

export const LoginPage = () => {
    const navigate = useNavigate()
    const user = useGetUser()
    const [visible, setVisible] = useState(false)

    const onFinish = (values) => {
        console.log(values)
        navigate("/send-review/home-page")

    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleOk = () => {
        setVisible(false)
    }

    const handleCancel = () => {
        setVisible(false)
    }


    return (
        <>

            <Layout>

                <Modal
                    // title = 'Press "OK" if you want to cancel the operation'

                    style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', }}
                    open={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    modalStyle={{ backgroundColor: 'blue', color: 'white' }}
                    maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}

                    footer={
                        <div style={{ textAlign: 'center' }}>
                            {/* <Button className='div-searcher' type='primary' style={{backgroundColor: '#95abed', color: '#000', borderRadius:'1.5vw', border: '2px solid #000', width: '20vh'}} >Try again</Button> */}
                            {/* <Button className='div-searcher' type='primary' style={{backgroundColor: '#95abed', color: '#000', borderRadius:'1.5vw', border: '2px solid #000', width: '20vh'}} >Try again</Button> */}

                        </div>
                    }>
                    <div className="user-not-found" style={{ height: '60vh', width: '70vh' }}>

                    </div>
                </Modal>

                <Content
                    className='fondo-login login-normal'
                    style={{
                        height: '98vh', alignItems: 'center',
                        justifyContent: 'center', backgroundColor: '#fff0e7', width: 'auto'
                    }}>


                    <div
                        className='div-searcher'
                        style={{
                            height: '100%', width: 'auto',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}>
                        <div
                            className='login-fff-side'
                            // className='div-searcher'
                            style={{
                                width: '60vh', height: '70%', backgroundColor: '#fefefe',
                                border: '1.8px solid #000',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                                // flexWrap: 'wrap'
                            }}>

                            <div style={{
                                height: '20%', width: '100%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                            }}>
                                <Row style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <img shape='square' src={user.login} style={{
                                        height: '12vh'
                                    }} />


                                </Row>

                                <h1
                                    style={{
                                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                        fontSize: '2rem', marginTop: '-1vh'
                                    }}>{t('Login.welcome')}</h1>

                            </div>

                            <div
                                style={{
                                    height: '60%', width: '100%', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                }}>

                                <Form
                                    name="basic"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    style={{
                                        height: '100%', width: '100%', marginLeft: '-1em',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                                    }}

                                >
                                    <div style={{ display: 'flex', justifyContent: 'left', width: '18vw', marginBottom: '-1em' }}>
                                        <p style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", }}>{t('Login.username')}<b style={{ color: 'red' }}> *</b></p>
                                    </div>

                                    <Form.Item
                                        // label="Username"
                                        name="username"
                                        style={{ display: 'flex', justifyContent: 'center', marginBottom: '-0.1em' }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            }
                                        ]}
                                    >
                                        <Input style={{ width: '18vw', marginBottom: '-2em', border: '1.2px solid black' }} />
                                    </Form.Item>

                                    <div style={{ display: 'flex', justifyContent: 'left', width: '18vw', marginBottom: '-1em' }}>
                                        <p style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", }}>{t('Login.password')}<b style={{ color: 'red' }}> *</b></p>
                                    </div>
                                    <Form.Item

                                        name="password"
                                        style={{ display: 'flex', justifyContent: 'center', marginBottom: '1em' }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password style={{ width: '18vw', marginBottom: '-2em', border: '1.2px solid black' }} />
                                    </Form.Item>

                                    <Form.Item
                                        name="remember"
                                        valuePropName="checked"
                                        style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', marginBottom: '1em', width: '18vw', }}

                                    >

                                        <Checkbox style={{ width: '18vw', marginBottom: '-2em', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", }}>{t('Login.remember')}</Checkbox>
                                    </Form.Item>

                                    <Form.Item
                                        style={{
                                            display: 'flex', justifyContent: 'center', marginBottom: '1em',
                                            marginTop: '2vh'
                                        }}

                                    >
                                        <Button className='login-button' type="primary" htmlType="submit"

                                            style={{
                                                width: '20vh', fontSize: '1.2em', lineHeight: '0em',
                                                fontWeight: 500, fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                                            }} >
                                            {t('Login.login')}
                                        </Button>
                                    </Form.Item>
                                </Form>


                            </div>



                        </div>

                        <div
                            className='login-color-side'
                            style={{
                                width: '60vh', height: '70%', backgroundColor: '#fff0e7',
                                border: '1.8px solid #000', marginLeft: '1vh',
                                borderTopRightRadius: '2vw', borderBottomRightRadius: '2vw',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                            <img
                                src={logo}
                                style={{
                                    height: '95%',
                                }} />


                        </div>

                    </div>




                </Content>

                <div
                    className='login-small'
                    style={{
                        alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                        backgroundColor: '#fff0e7', height: '100vh', width: '100%'
                    }}>
                    <div style={{
                        height: '20%', width: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                    }}>
                        <Row style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <img shape='sqaure' src={user.loginSmall} style={{
                                height: '12vh', marginTop:'3vh'
                            }} />
                            
                        </Row>

                        <h1
                            style={{
                                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontSize: '2rem', marginTop: '-1vh'
                            }}>{t('Login.welcome')}</h1>

                    </div>

                    <div

                        style={{
                            height: '60%', width: '70%', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                        }}>

                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            style={{
                                height: '100%', width: '100%',
                                // marginLeft: '-1em',
                                display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column',
                            }}

                        >
                            <div style={{ display: 'flex', width: '100%', marginBottom: '-1em' }}>
                                <p style={{
                                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                }}>{t('Login.username')}<b style={{ color: 'red' }}> *</b></p>
                            </div>

                            <Form.Item
                                // label="Username"
                                name="username"
                                style={{
                                    display: 'flex', justifyContent: 'flex-start', marginBottom: '-0.1em',
                                    width: '100%',
                                }}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    }
                                ]}
                            >
                                <Input style={{ width: '35vh', marginBottom: '-2em', border: '1.2px solid black' }} />
                            </Form.Item>

                            <div style={{ display: 'flex', justifyContent: 'left', width: '18vw', marginBottom: '-1em' }}>
                                <p style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", }}>{t('Login.password')}<b style={{ color: 'red' }}> *</b></p>
                            </div>
                            <Form.Item

                                name="password"
                                style={{ display: 'flex', justifyContent: 'center', marginBottom: '1em' }}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password style={{ width: '35vh', marginBottom: '-2em', border: '1.2px solid black' }} />
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', marginBottom: '1em', width: '30vh', }}

                            >

                                <Checkbox style={{ width: '30vh', marginBottom: '-2em', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", }}>{t('Login.remember')}</Checkbox>
                            </Form.Item>

                            <Form.Item
                                style={{
                                    display: 'flex', justifyContent: 'center', marginBottom: '1em',
                                    marginTop: '2vh', width: '100%'
                                }}

                            >
                                <Button className='login-button' type="primary" htmlType="submit"
                                    style={{
                                        width: '20vh', fontSize: '1.2em', lineHeight: '0em',
                                        fontWeight: 500, fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                                    }} >
                                    {t('Login.login')}
                                </Button>
                            </Form.Item>
                        </Form>


                    </div>
                </div>

            </Layout>

        </>
    )


}

