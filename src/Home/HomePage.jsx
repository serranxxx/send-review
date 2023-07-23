
import { Layout, Row, } from "antd"
import { FooterComp, HeaderComp, HomeButtons } from "./"
import useGetUser from "./hooks/useGetUser"
import { HomeFilled } from '@ant-design/icons';
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../auth";

const { Content } = Layout


export const ContentHome = () => {


  const user = useGetUser()
  // const theme = JSON.parse(localStorage.getItem('theme'))
  const { theme } = useContext(AuthContext)
  const [homeState, setHomeState] = useState(0)
  const [text, setText] = useState(0)
  const { t } = useTranslation();

  const handlehomeState = () => {
    setHomeState(homeState + 1)
    if (homeState > 2) setHomeState(0)
    console.log(homeState)
  }

  const handleText = () => {
    setText(text + 1)
    if (text > 2) setText(0)
  }

  const handleFunctions = () => {
    handlehomeState()
    handleText()
  }

  useEffect(() => {
    const changeBody = () => {
      document.body.style.backgroundColor = `${theme ? '#e3e3e3' : '#333333'}`;
    }

    changeBody()
  }, [theme])


  return (

    <div
      className="background-app"
      style={{
        borderLeft: '2px solid #000', borderRight: '2px solid #000', borderRadius: '2vh',
        backgroundColor: `${theme ? '#f3f3f3' : '#333437'}`, transition: 'all 0.05s ease-in-out',

      }}>
      <HeaderComp text={<p><b>Sender</b>Reviewer</p>} {...user} icon={<HomeFilled />} isHome={true} />
      <Content>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', height: 'auto', width: 'auto', flexWrap: 'wrap'
        }}>
          <Row style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
            width: 'auto', height: 'auto', marginTop: '2%', flexWrap: 'wrap'
          }}>

            <div onMouseEnter={handleFunctions}
              className={`${theme ? `image-home-${homeState} home-move` : `dark-image-home-${homeState} home-move`}`}
              style={{ height: '40vh', }} />

            <div
              onMouseEnter={handleFunctions}
              className="title"
              style={{
                alignItems: 'center', marginLeft: '3vh',
                justifyContent: 'left',
              }}>
              <h2
                className="header-title"
                style={{
                  color: `${theme ? '#333333' : `${text === 1 ? '#fff0e7' : text === 2 ? '#fcd9e7' : text === 3 ? '#ccf2f3' : text === 0 ? '#d1c8f7' : '#fff'}`}`,
                  fontFamily: " Tahoma, Geneva, Verdana, sans-serif", transition: 'all 0.55s ease-in-out',
                  wordWrap: 'break-word', WebkitTextStroke: `2px  ${theme ? '#333333' : `${text === 1 ? '#fff0e7' : text === 2 ? '#fcd9e7' : text === 3 ? '#ccf2f3' : text === 0 ? '#d1c8f7' : '#fff'}`}`, fontWeight: 'bolder'
                }}>
                {t('Home.text')}</h2>

            </div>


          </Row>

          <div style={{
            display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column',
            width: '80%', height: 'auto'
          }}>
            <h2
              className="lets-start-sending"
              style={{
                fontWeight: 'bold', justifyContent: 'left', fontStyle: 'italic', color: `${theme ? '#000' : '#e3e3e3'}`,
                marginLeft: '10vh', marginBottom: '-2vh', width: '100%'
              }}>{t('Home.lestsStart')}</h2>
            <HomeButtons />

          </div>

          {/* <LatestShipments /> */}

          {/* <div
            className="home-table"
            style={{
              alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column',
              width: '80%', height: 'auto', 
            }}>
            <h2 style={{
              fontWeight: 'bold', display: 'flex', justifyContent: 'left', fontStyle: 'italic', color: `${theme ? '#000' : '#e3e3e3'}`,
              marginLeft: '10vh', marginBottom: '-3vh', width: '100%'
            }}>{t('Home.latestShipment')}</h2>
            <LatestShipments />

          </div> */}
        </div>
        <FooterComp />
      </Content>
    </div>


  )
}
