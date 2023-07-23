
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { VscDebugStart } from "react-icons/vsc";
import { InfoBox } from "./InfoBox"
import { AuthContext } from "../../../auth"
import { Button } from "antd"
import { t } from 'i18next';

export const HomeButtons = () => {

    // const { theme } = useContext( AuthContext )
    const theme = JSON.parse(localStorage.getItem('theme'))
    const navigate = useNavigate()
    const [selectedItem, setSelectedItem] = useState(0)
    const [randomText, setRandomText] = useState(true);
    const [customerText, setCustomerText] = useState(false);
    const [reviewText, setReviewText] = useState(false);
    const [randombg, setRandombg] = useState(true)
    const [customerbg, setCustomerbg] = useState(true)
    const [reviewbg, setReviewbg] = useState(true)

    const showText = (index) => {
        switch (index) {
            case 0:

                setCustomerText(false)
                setReviewText(false)
                setTimeout(() => {
                    setRandomText(true);
                }, 300);

                break;

            case 1:

                setRandomText(false)
                setReviewText(false)
                setTimeout(() => {
                    setCustomerText(true);
                }, 300);

                break;

            case 2:

                setRandomText(false)
                setCustomerText(false)
                setTimeout(() => {
                    setReviewText(true);
                }, 300);

                break;

            default:
                break;
        }

    }

    const handleItemClick = (index) => {
        setSelectedItem(index);
        showText(index)

    }


    const handleRandomBakcground = () => {
        if (randombg) setRandombg(false)
        else setRandombg(true)
    }


    const handleCustomerBakcground = () => {
        if (customerbg) setCustomerbg(false)
        else setCustomerbg(true)
    }

    const handleReviewBakcground = () => {
        if (reviewbg) setReviewbg(false)
        else setReviewbg(true)
    }


    const textReview = t('Home.reviewText')
    const textRandom = t('Home.randomText')
    const textCustomer = t('Home.customerText')

    const data = [
        {
            type: 'Sent',
            value: 27,
        },
        {
            type: 'Reviewd',
            value: 25,
        },
    ];

    const customColors = ['#7fcac4', '#6edfc7'];

    const config = {

        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.39,
        color: customColors,
        tooltip: false,
        label: {
            type: 'inner',
            offset: '-50%',
            content: ({ percent, value }) => `${value}`,
            style: {
                fontWeight: 'bolder',
                fill: '#000000',
                height: '80%',
                textAlign: 'center',
                fontSize: 25,
                border: '2px solid #000',
                // lineColor: 'black',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            },
        },
        style: {
            stroke: '#000000', // Color del borde (negro en este caso)
            lineWidth: 3, // Ancho del borde
        },

        legend: false,

    };


    return (

        <>
            <div className="slider-container home-buttons"
                style={{ margin: '7vh 4vw', }} >

                {/* <Button onClick={nonHomeLocation()}>nonHome</Button> */}

                < div
                    style={{ position: 'relative', backgroundColor: 'transparent' }
                    }
                    className={`slider-item ${selectedItem === 0 ? 'selected' : ''}`}
                    onMouseMove={() => handleItemClick(0)}

                >

                    <div
                        style={{
                            border: '2px solid #000', borderRadius: '1vw', display: 'flex', flexDirection: 'row', marginTop: '-2vh', transition: 'all 0.55s ease-in-out',
                            alignItems: 'center', justifyContent: 'center', height: '30vh', backgroundColor: `${theme ? '#fff' : '#27282c'}`
                        }}
                    >

                        {
                            selectedItem === 0
                                ?
                                <>
                                    <div className="shipment-prueba" onMouseEnter={handleRandomBakcground} onMouseLeave={handleRandomBakcground}
                                        style={{ height: '100%', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'default' }}>

                                        <div className="random-shipment-img" style={{
                                            height: '80%', width: '80%', borderRadius: '0.5vw', marginLeft: '-2vh',
                                            border: '2px solid #000', backgroundColor: `${(randombg) ? '#aca0fa' : '#dcd8f7'}`
                                        }} />

                                    </div>

                                    <div
                                        style={{
                                            height: '100%', width: '50%', flexDirection: 'column', backgroundColor: `${theme ? '#fff' : '#27282c'}`, borderRadius: '1vw',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', color: `${theme ? '#000' : '#e3e3e3'}`, transition: 'all 0.55s ease-in-out',
                                            cursor: 'default'
                                        }}>

                                        <div style={{ height: '15%', }}>
                                            <h1 style={{ fontSize: 15, fontStyle: 'italic' }}>{t('Home.buttonRandom')}</h1>
                                        </div>

                                        <div style={{ height: '35%', padding: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                                            <p style={{
                                                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontStyle: 'italic',
                                                fontSize: 14
                                            }}
                                            >{(randomText) ? textRandom : ''}</p>
                                        </div>

                                        <div style={{ height: '20%', }}>
                                            {
                                                (randomText)
                                                    ? <Button style={{
                                                        backgroundColor: '#aca0fa', border: '1.8px solid #000', width: 180, height: 40, borderRadius: '0.5vw',
                                                        color: '#000', lineHeight: '0em'
                                                    }}
                                                        className="random-home" type="primary"  >
                                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <VscDebugStart size={20} />
                                                            <p style={{ fontWeight: 'bold' }}>{t('Home.randomStar')}</p>
                                                        </div>

                                                    </Button>

                                                    : <></>
                                            }

                                        </div>

                                    </div>

                                </>

                                :
                                <div className="shipment-prueba"
                                    style={{
                                        height: '100%', width: '100%', backgroundColor: `${theme ? '#fff' : '#27282c'}`, borderRadius: '1.5vw',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.55s ease-in-out'
                                    }}>
                                    <div className="random-shipment-img" style={{ height: '80%', width: '80%', borderRadius: '0.5vw', border: '2px solid #000', backgroundColor: `${(randombg) ? '#aca0fa' : '#dcd8f7'}` }} />
                                </div>
                        }

                    </div>

                </div >


                <div
                    style={{
                        border: '2px solid #000', borderRadius: '1vw', display: 'flex', flexDirection: 'row', margin: '0 2vw', marginTop: '-2vh',
                        alignItems: 'center', justifyContent: 'center', height: '30vh', backgroundColor: `${theme ? '#fff' : '#27282c'}`, cursor: 'default'
                    }}
                    className={`slider-item ${selectedItem === 1 ? 'selected' : ''}`}
                    onMouseMove={() => handleItemClick(1)}  >

                    {
                        selectedItem === 1
                            ?
                            <>
                                <div className="shipment-prueba"
                                    onMouseEnter={handleCustomerBakcground} onMouseLeave={handleCustomerBakcground}
                                    style={{ height: '100%', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                    <div className="customer-complaint-img" style={{
                                        height: '80%', width: '80%', borderRadius: '0.5vw', marginLeft: '-2vh',
                                        border: '2px solid #000', backgroundColor: `${(customerbg) ? '#6edfc7' : '#b0f0e3'}`
                                    }} />
                                </div>

                                <div
                                    style={{
                                        transition: 'all 0.55s ease-in-out',
                                        height: '100%', width: '50%', borderRadius: '1vw', flexDirection: 'column', backgroundColor: `${theme ? '#fff' : '#27282c'}`, borderRadius: '1vw',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: `${theme ? '#000' : '#e3e3e3'}`, cursor: 'default'
                                    }}>

                                    <div style={{ height: '15%', }}>
                                        <h1 style={{ fontSize: 15, fontStyle: 'italic' }}>{t('Home.buttonCustomer')}</h1>
                                    </div>

                                    <div style={{ height: '40%', padding: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                                        <p style={{
                                            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontStyle: 'italic',
                                            fontSize: 14
                                        }}
                                        >{(customerText) ? textCustomer : ''}</p>
                                    </div>

                                    <div style={{ height: '20%', }}>
                                        {
                                            (customerText)
                                                ? <Button style={{
                                                    backgroundColor: '#6edfc7', border: '1.8px solid #000', width: 180, height: 40, borderRadius: '0.5vw',
                                                    color: '#000', lineHeight: '0em'
                                                }}
                                                    className="customer-home" type="primary" >
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <VscDebugStart size={20} />
                                                        <p style={{ fontWeight: 'bold' }}>{t('Home.customerStar')}</p>
                                                    </div>
                                                </Button>
                                                : <></>
                                        }

                                    </div>

                                </div>

                            </>

                            :
                            <div className="shipment-prueba"
                                style={{ height: '100%', width: '100%', backgroundColor: `${theme ? '#fff' : '#27282c'}`, borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.55s ease-in-out' }}>
                                <div className="customer-complaint-img" style={{
                                    height: '80%', width: '80%', borderRadius: '0.5vw', border: '2px solid #000', backgroundColor: `${(customerbg) ? '#6edfc7' : '#b0f0e3'}`, display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {/* <Pie {...config} /> */}
                                </div>
                            </div>
                    }




                </div>

                <div
                    style={{
                        border: '2px solid #000', borderRadius: '1vw', display: 'flex', flexDirection: 'row', marginTop: '-2vh',
                        alignItems: 'center', justifyContent: 'center', height: '30vh', backgroundColor: `${theme ? '#fff' : '#27282c'}`, cursor: 'default'
                    }}
                    className={`slider-item ${selectedItem === 2 ? 'selected' : ''}`}
                    onMouseMove={() => handleItemClick(2)}
                >

                    {

                        selectedItem === 2
                            ?
                            <>
                                <div className="shipment-prueba" onMouseEnter={handleReviewBakcground} onMouseLeave={handleReviewBakcground}
                                    style={{ height: '100%', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                    <div className="random-test-img" style={{
                                        height: '80%', width: '80%', borderRadius: '0.5vw', marginLeft: '-2vh',
                                        border: '2px solid #000', backgroundColor: `${(reviewbg) ? '#ef83ae' : '#f9afcd'}`
                                    }} />
                                </div>

                                <div
                                    style={{
                                        transition: 'all 0.55s ease-in-out',
                                        height: '100%', width: '50%', borderRadius: '1vw', flexDirection: 'column', color: `${theme ? '#000' : '#e3e3e3'}`, cursor: 'default',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: `${theme ? '#fff' : '#27282c'}`, border: '1vw'
                                    }}>

                                    <div style={{ height: '15%', }}>
                                        <h1 style={{ fontSize: 15, fontStyle: 'italic' }}>{t('Home.buttonReview')}</h1>
                                    </div>

                                    <div style={{ height: '40%', padding: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                                        <p style={{
                                            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontStyle: 'italic',
                                            fontSize: 14
                                        }}
                                        >{(reviewText) ? textReview : ''}</p>
                                    </div>

                                    <div style={{ height: '20%', }}>
                                        {
                                            (reviewText)
                                                ? <Button style={{
                                                    backgroundColor: '#ef83ae', border: '1.8px solid #000', width: 180, height: 40, borderRadius: '0.5vw',
                                                    color: '#000', lineHeight: '0em'
                                                }}
                                                    className="review-home" type="primary"  >
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <VscDebugStart size={20} />
                                                        <p style={{ fontWeight: 'bold' }}>{t('Home.reviewStar')}</p>
                                                    </div>
                                                </Button>
                                                : <></>
                                        }

                                    </div>

                                </div>

                            </>

                            :
                            <div className="shipment-prueba"
                                style={{ height: '100%', width: '100%', backgroundColor: `${theme ? '#fff' : '#27282c'}`, borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.55s ease-in-out' }}>
                                <div className="random-test-img" style={{ height: '80%', width: '80%', borderRadius: '.5vw', border: '2px solid #000', backgroundColor: `${(reviewbg) ? '#f9afcd' : '#f9afcd'}` }} />
                            </div>
                    }



                </div>


            </div >

            <div
                className="home-buttons-2"
                style={{
                    alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
                    width: '100%', marginTop: '5vh', marginBottom: '5vh'
                }}>

                <div
                    className="div-searcher"
                    style={{
                        transition: 'all 0.55s ease-in-out',
                        height: '30vh', aspectRatio: '1/1', border: '1px solid red', borderRadius: '1.5vw',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#aca0fa', border: '2px solid #000'
                    }}>
                    <div className="random-shipment-img"
                        style={{
                            height: '90%', aspectRatio: '1/1', borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            backgroundColor: '#aca0fa'
                        }}>

                        <Link  style={{
                            marginBottom: '-20vh'
                        }}>
                            <Button
                                className="div-searcher"
                                style={{
                                    backgroundColor: '#dcd8f7', border: '2px solid #000', width: '25vh', height: '5vh',
                                    color: '#000', lineHeight: '0em',
                                }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <VscDebugStart size={20} />
                                    <p style={{ fontWeight: 'bold' }}>{t('Home.randomStar')}</p>
                                </div>

                            </Button>
                        </Link>
                    </div>


                </div>

                <div
                    className="div-searcher"
                    style={{
                        transition: 'all 0.55s ease-in-out',
                        height: '30vh', aspectRatio: '1/1', border: '1px solid red', borderRadius: '1.5vw', margin: '0 3vh 0 3vh',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#6edfc7', border: '2px solid #000'
                    }}>
                    <div className="customer-complaint-img"
                        style={{
                            height: '90%', aspectRatio: '1/1', borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            backgroundColor: '#6edfc7'
                        }}>

                        <Link  style={{
                            marginBottom: '-20vh'
                        }}>
                            <Button
                                className="div-searcher"
                                style={{
                                    backgroundColor: '#b0f0e3', border: '2px solid #000', width: '25vh', height: '5vh',
                                    color: '#000', lineHeight: '0em',
                                }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <VscDebugStart size={20} />
                                    <p style={{ fontWeight: 'bold' }}>{t('Home.customerStar')}</p>
                                </div>

                            </Button>
                        </Link>
                    </div>


                </div>

                <div
                    className="div-searcher"
                    style={{
                        transition: 'all 0.55s ease-in-out',
                        height: '30vh', aspectRatio: '1/1', border: '1px solid red', borderRadius: '1.5vw',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ef83ae', border: '2px solid #000'
                    }}>
                    <div className="random-test-img"
                        style={{
                            height: '90%', aspectRatio: '1/1', borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            backgroundColor: '#ef83ae'
                        }}>

                        <Link  style={{
                            marginBottom: '-20vh'
                        }}>
                            <Button
                                className="div-searcher"
                                style={{
                                    backgroundColor: '#f9afcd', border: '2px solid #000', width: '25vh', height: '5vh',
                                    color: '#000', lineHeight: '0em',
                                }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <VscDebugStart size={20} />
                                    <p style={{ fontWeight: 'bold' }}>{t('Home.reviewStar')}</p>
                                </div>

                            </Button>
                        </Link>
                    </div>


                </div>


            </div>

            <div
                className="home-buttons-3"
                style={{
                    alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
                    width: '100%', marginTop: '5vh', marginBottom: '5vh', flexDirection: 'column'
                }}>

                <Link  style={{
                }}>
                    <Button
                        className="div-searcher"
                        style={{
                            backgroundColor: '#aca0fa', border: '2px solid #000', width: '45vh', height: '7vh',
                            color: '#000', lineHeight: '0em', borderRadius: '2vh'
                        }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <VscDebugStart size={20} />
                            <p style={{ fontWeight: 'bold' }}>{t('Home.randomStar')}</p>
                        </div>

                    </Button>
                </Link>

                <Link  style={{

                }}>
                    <Button
                        className="div-searcher"
                        style={{
                            backgroundColor: '#6edfc7', border: '2px solid #000', width: '45vh', height: '7vh',
                            color: '#000', lineHeight: '0em', margin: '3vh 0 3vh 0', borderRadius: '2vh'
                        }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <VscDebugStart size={20} />
                            <p style={{ fontWeight: 'bold' }}>{t('Home.customerStar')}</p>
                        </div>

                    </Button>
                </Link>

                <Link  style={{
                }}>
                    <Button
                        className="div-searcher"
                        style={{
                            backgroundColor: '#ef83ae', border: '2px solid #000', width: '45vh', height: '7vh',
                            color: '#000', lineHeight: '0em', borderRadius: '2vh'
                        }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <VscDebugStart size={20} />
                            <p style={{ fontWeight: 'bold' }}>{t('Home.reviewStar')}</p>
                        </div>

                    </Button>
                </Link>

            </div>

        </>

    )
}
