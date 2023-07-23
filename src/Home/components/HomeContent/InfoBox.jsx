import { useContext, useState } from "react"
import { Button } from "antd"
import { InfoCircleOutlined } from "@ant-design/icons"
import { AuthContext } from "../../../auth"

export const InfoBox = (props) => {

    // const { theme } = useContext( AuthContext )
    const theme = JSON.parse( localStorage.getItem('theme') )
    const [showBox, setShowBox] = useState(false)

    return (

        <>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <Button 
            shape="circle" 
            style={{
                display: `${props.selectedItem === props.index ? 'block' : 'none'}`,
                position: 'absolute',
                top: '4vh',
                right: '2vw',
                backgroundColor: props.color,
                border: `${(theme)? '' : '1px solid #465c70'}`,
                zIndex: 1
                }}
            className='info-button'
            onMouseEnter={() => setShowBox(true)}
            onMouseLeave={() => setShowBox(false)}
        >
            <InfoCircleOutlined/>
        </Button>

        <div className="infobox-container">
 
            {(showBox === true) && (
                <div className="info-box">
                    <p>{props.text}</p>
                </div>
            )}

        </div>

        </div>
        
        </>
        
    )
}
