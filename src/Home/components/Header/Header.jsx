
import { Layout, Button, Avatar, Dropdown, Menu, Switch } from "antd"

import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { IoLanguageOutline } from "react-icons/io5";
import { BsFillBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom"
import { BackToHome } from "./BackToHome"
import { useContext, useState } from "react"
import { AuthContext } from "../../../auth/"

import { useTranslation } from 'react-i18next';
import i18n from '../../../translations/i18n'

const { Header } = Layout


export const HeaderComp = (props) => {


    const { t } = useTranslation();
    const navigate = useNavigate()
    const { logout, enLanguage, esLanguage, lightTheme, darkTheme } = useContext(AuthContext)
    const language = JSON.parse(localStorage.getItem('language'))
    const theme = JSON.parse(localStorage.getItem('theme'))
    const [logoutbg, setLogoutbg] = useState(false)
    const [themebg, setThemebg] = useState(false)
    const [languagebg, setLanguagebg] = useState(false)
    const [userbg, setUserbg] = useState(false)
    const [logoState, setLogoState] = useState(false)
    const [logoBackground, setLogoBackground] = useState(0)


    const [visible, setVisible] = useState(false);


    const handleTheme = (event) => {

        if (!event) {
            darkTheme()
            // window.location.reload()
        }
        else {
            lightTheme()
            // window.location.reload()
        }
    }
    const handleLanguage = (event) => {

        console.log(event)

        if (!event) {

            i18n.changeLanguage('en')
            enLanguage()
        }
        else {
            i18n.changeLanguage('es')
            esLanguage()
        }

    }

    const handleReturn = () => {

        logout()
        navigate("/send-review/login", {
            replace: true
        })
    }

    const handleVisibleChange = (flag) => {
        setVisible(flag);
    };

    const handleLogoutbg = () => {
        if (logoutbg) setLogoutbg(false)
        else setLogoutbg(true)
    }

    const handleThemebg = () => {
        if (themebg) setThemebg(false)
        else setThemebg(true)
    }

    const handleLanguagebg = () => {
        if (languagebg) setLanguagebg(false)
        else setLanguagebg(true)
    }

    const handleUserbg = () => {
        if (userbg) setUserbg(false)
        else setUserbg(true)
    }


    const menu = (
        <Menu style={{
            backgroundColor: `${theme ? '#f1f1f1' : '#333437'}`, width: 300,
            border: '2px solid #000', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}>
            <Menu.Item
                onMouseEnter={handleUserbg} onMouseLeave={handleUserbg}
                style={{ color: `${theme ? '' : (userbg ? '#333333' : '#e3e3e3')}`, cursor: 'default', border: '2px solid #000', backgroundColor: `${theme ? (userbg ? '#a8c1f4' : '#fff') : (userbg ? '#a8c1f4' : '#333437')}`, }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left', marginTop: '0' }}>
                    {/* <FaUserCircle size={30} style={{ marginRight: 10, color: `${theme ? '#000' : '#e3e3e3'}` }} /> */}
                    <Avatar shape="square" size={50} src={props.Profile_Picutre} icon={<UserOutlined />} style={{ marginLeft: 0, marginRight: 15, border: '2px solid #000', borderRadius: '0.5vw' }} />
                    {/* <Avatar size={30} src={props.Profile_Picutre} icon={<UserOutlined />} style={{ marginRight: 8, border: '1.5px solid #000' }} /> */}
                    <p style={{ fontWeight: 'bold', wordBreak: 'break-word' }}>Username</p>
                </div>
                <hr style={{ width: '100%', border: `1px solid ${theme ? (userbg ? '#333437' : '#e3e3e3') : '#000'}` }} />
                <ul style={{ listStyle: 'none', marginTop: '0.8em', marginBottom: '1vh', marginLeft: -30 }}>
                    <li style={{ wordBreak: 'break-word' }}><b>Email: </b>username@gmail.com</li>
                    <li><b>Hub: </b> MX</li>
                    <li><b>{t('Header.Role')}</b>Admin</li>
                    <li><b>{t('Header.Team')}</b>Blue</li>
                    {/* <li style={{wordBreak: 'break-word'}}>{t('Header.Menu.dayoff') + ": "}{props.Day_Off}</li> */}
                </ul>
                {/* <hr style={{width: '90%'}}/> */}
            </Menu.Item>

            <Menu.Item
                onMouseEnter={handleLanguagebg} onMouseLeave={handleLanguagebg}
                style={{
                    color: `${theme ? '' : (languagebg ? '#333333' : '#e3e3e3')}`, marginTop: '0.4em', height: 50, cursor: 'default', border: '2px solid #000',
                    backgroundColor: `${theme ? (languagebg ? '#a8c1f4' : '#fff') : (languagebg ? '#a8c1f4' : '#333437')}`, fontWeight: `${languagebg ? 'bold' : ''}`
                }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left', paddingLeft: '1em', paddingRight: '1em' }}>
                    <div style={{ width: '15%' }}>
                        <IoLanguageOutline size={15} />
                    </div>
                    <div style={{ width: '70%', fontStyle: 'italic' }}>

                        <p>{t('Header.Menu.language')}</p>

                    </div>
                    <div style={{ width: '20%' }}>
                        <Switch
                            checked={language}
                            onChange={handleLanguage}
                            size="small"
                            style={{ width: '50%' }}
                        />
                    </div>
                </div>
                {/* <hr/> */}
            </Menu.Item>

            <Menu.Item
                onMouseEnter={handleThemebg} onMouseLeave={handleThemebg}
                style={{
                    color: `${theme ? '' : (themebg ? '#333333' : '#e3e3e3')}`, marginTop: '0.4em', height: 50, cursor: 'default', border: '2px solid #000',
                    backgroundColor: `${theme ? (themebg ? '#a8c1f4' : '#fff') : (themebg ? '#a8c1f4' : '#333437')}`, fontWeight: `${themebg ? 'bold' : ''}`
                }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left', paddingLeft: '1em', paddingRight: '1em' }}>
                    <div style={{ width: '15%' }}>
                        {
                            (theme)
                                ? <BsFillBrightnessHighFill size={15} />
                                : <BsFillMoonFill size={15} />
                        }

                    </div>
                    <div style={{ width: '70%', fontStyle: 'italic' }}>
                        {
                            (theme)
                                ? <p>{t('Header.Menu.Theme.light')}</p>
                                : <p>{t('Header.Menu.Theme.dark')}</p>
                        }
                    </div>
                    <div style={{ width: '20%' }}>
                        <Switch
                            z={theme}
                            onChange={handleTheme}
                            size="small"
                            style={{ width: '50%' }}
                        />
                    </div>
                </div>
                {/* <hr/> */}
            </Menu.Item>


            <Menu.Item
                onMouseEnter={handleLogoutbg} onMouseLeave={handleLogoutbg} onClick={handleReturn}
                style={{
                    color: `${theme ? '' : (logoutbg ? '#333333' : '#e3e3e3')}`, marginTop: '0.4em', height: 50, cursor: 'pointer', border: '2px solid #000',
                    backgroundColor: `${theme ? (logoutbg ? '#f9afcd' : '#fff') : (logoutbg ? '#ef83ae' : '#333437')}`, fontWeight: `${logoutbg ? 'bold' : ''}`
                }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left', paddingLeft: '1em', paddingRight: '1em' }}>
                    <div style={{ width: '15%' }}>
                        <FiLogOut size={15} style={{ color: `${theme ? '#000' : ''}`, cursor: 'pointer', }} />
                    </div>
                    <div style={{ width: '60%' }}>
                        <p style={{ color: `${theme ? '#000' : ''}`, cursor: 'pointer' }}>{t('Header.Menu.logout')}</p>
                    </div>
                </div>


            </Menu.Item>
        </Menu>
    )

    const handleLogo = () => {
        setLogoState(!logoState)
        setLogoBackground(logoBackground + 1)
        if (logoBackground > 3) setLogoBackground(0)
        // console.log((props.Name.split(" ")[0]).length)
    }




    return (
        <Header
            className="site-layout-background"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                height: '11vh',
                transition: 'all 0.55s ease-in-out',
                backgroundColor: `${(theme) ? '#a8c1f4' : '#27282c'}`,
                borderTop: '2px solid black',
                // borderRight: '2px solid black',
                borderBottom: '2px solid black',

                borderTopRightRadius: '1vw',
                borderTopLeftRadius: '1vw'
                // borderBottomRightRadius: '1vw',


            }}
        >



            <div
                className="logo-header"
                style={{
                    color: `${(theme) ? '#000' : '#e3e3e3'}`, fontSize: '1.4em',
                    marginLeft: '-3vw', flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'left', width: '50%',
                    height: '100%'
                }}>

                <Avatar
                    shape="circle"
                    style={{
                        border: '2px solid black',
                        transition: 'all 0.55s ease-in-out', position: 'absolute', cursor: 'pointer'
                    }}
                    size={60}
                    src={theme ? props.avatarUrl : props.avatarDarkUrl}
                    onMouseEnter={handleLogo}
                    icon={<RiSendPlane2Fill style={{color:'#000'}} />}
                    className={'app-title'} />
                <div
                    style={{
                        height: '4.5vh', marginLeft: '2.5vh',
                        backgroundColor: `${theme ? '#fff' : '#393b3f'}`,
                        borderRadius: '2vh', border: '2px solid #000', transition: 'all 0.25s ease-in-out',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                    <p style={{ fontSize: '1em', paddingLeft: '6vh', paddingRight: '2vh', lineHeight: '0em' }}>{props.text}</p>
                </div>
                {/* {props.icon} */}



            </div>

            <div
                className="home-menu"
                style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', height: '100%', }}>

                <BackToHome active={props.isHome} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '3%' }}>

                    <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={visible}>
                        <Button
                            className={`${theme ? "user-menu" : "user-menu-dark"}`}
                            style={{
                                display: 'flex', alignItems: 'center',
                                border: '1.8px solid #000', borderRadius: '1.5vh',
                                color: `${theme ? '#000' : '#e3e3e3'}`, width: 170, height: 40, display: 'flex', justifyContent: 'left',
                                backgroundColor: `${theme ? '#8cadff' : '#393b3f'}`
                            }}
                        // icon={<FaUserCircle size={18} style={{ marginRight: 25, color: `${theme ? '#000' : '#e3e3e3'}` }} />}
                        // icon={<Avatar shape="square" size={35} src={props.Profile_Picutre} icon={<UserOutlined />} style={{ marginLeft: -13, marginRight:10, border: '2px solid #000' ,borderRadius: '0.5vw' }} />}

                        >
                            <div className="header-menu-text"
                                style={{ width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', position: 'absolute', color: `${theme ? '#000' : '#e3e3e3'}` }}>
                                <div style={{ width: '80%', display: 'flex', justifyContent: 'left', alignItems: 'center', }}>
                                    <FaUserCircle size={20} style={{ marginRight: 10, }} />
                                    <span style={{ fontSize: '1.1em', textAlign: 'left' }}><b>Username</b></span>
                                </div>

                                <div style={{ width: '30%', display: 'flex', justifyContent: 'right', }}>
                                    {/* <Avatar shape="square" size={35} src={props.Profile_Picutre} icon={<UserOutlined />} style={{ marginLeft: 0, marginRight: 0, border: '2px solid #000', borderRadius: '0.5vw' }} /> */}
                                    {/* <FaUserCircle size={40} style={{ marginRight: 25, color: `${theme ? '#000' : '#e3e3e3'}`, }} /> */}
                                    <DownOutlined style={{ marginRight: 10, fontSize: '1.3em', display: 'flex', justifyContent: 'right' }} />
                                </div>
                            </div>

                            {/* <DownOutlined style={{ marginLeft: 25, fontSize: '1.3em', display:'flex', justifyContent:'right' }} /> */}


                        </Button>
                    </Dropdown>

                </div>







            </div>


        </Header>
    )
}
