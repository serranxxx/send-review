
import { Button } from 'antd'
import { HomeFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../../auth';
import { useTranslation } from 'react-i18next';

export const BackToHome = (props) => {

    const { t } = useTranslation();
    const navigate = useNavigate()
    // const { theme } = useContext( AuthContext )
    const theme = JSON.parse(localStorage.getItem('theme'))


    const HandleBackToHome = () => {
        navigate("/home-page", {
            replace: true
        })
    }

    return (

        <Button className={`${theme ? 'back-to-home' : 'back-to-home-dark'}`}
            style={{
                color: '#000', color: `#000`, width: 150, height: 40,
                border: '1.8px solid #000', borderRadius: '1.5vh',
                fontWeight: 500, lineHeight: '0em',
                backgroundColor: `${theme ? '#f3f3f3' : '#8cadff'}`,
                textAlign:'left', display:`${props.active?'none':''}`
                

            }}

            onClick={HandleBackToHome}
            
        >
            <HomeFilled style={{
                marginRight: 0, fontSize: '1.3em',
            }} />
            {t('BackToHome.Button')}
        </Button>



    )
}
