import { Button, Input, Modal, Row, Space, Table, Tag, Image, DatePicker } from 'antd';
import React, { useState, useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { BsFillCaretUpFill, BsFillCaretRightFill } from "react-icons/bs";

import { FaFileDownload } from "react-icons/fa";
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import gif from '../../../assets/gifs/Ellipsis-1.9s-237px.svg'


export const LatestShipments = () => {

    const { RangePicker } = DatePicker;

    const theme = JSON.parse(localStorage.getItem('theme'))
    const { Search } = Input
    const { t } = useTranslation();
    const Rainbow = gif

    const [tableReady, setTableReady] = useState(false)
    const [data, setData] = useState([])

    const imageFront = 'https://drive.google.com/uc?id=11JJ9CCx2FQgIPcMHn81C2oXfBpmhf1Su'
    const imageBack = 'https://drive.google.com/uc?id=1OJxl0M0iCO7rcSwIko8TZGX8CSChX5TD'

    const imageFront_ = 'https://drive.google.com/uc?id=11CWoC6z_sPihXmfRJpAJZn3c8poJiSSf'
    const imageBack_ = 'https://drive.google.com/uc?id=1CI7ZBXSW3ExADR5s5l-OTmMJExwcZ419'

    const [image, setImage] = useState(false)
    const [imageViewer, setImageViewer] = useState(false)

    const [currentDate, setCurrentDate] = useState('')
    const [currentTester, setCurrentTester] = useState('')
    const [currentConfig, setCurrentConfig] = useState('')
    const [currentIdentity, setCurrentIdentity] = useState('')
    const [currentDocument, setCurrentDocument] = useState('')
    const [currentStatus, setCurrentStatus] = useState('')
    const [currentReason, setCurrentReason] = useState('')

    const columns = [
        {
            title: `${t('LatestShipments.tester')}`,
            width: '20vh',
            dataIndex: 'tester',
            key: 'tester',
            fixed: 'left',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{
                    padding: 8, backgroundColor: `${theme ? '' : '#222326'}`,
                    border: `${theme ? '' : '2px solid #000'}`,
                }}>
                    <Input
                        placeholder="Search by tester"
                        value={selectedKeys[0]}
                        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={confirm}
                        className='inputs-filters'
                        style={{
                            width: 188, marginBottom: 8, display: 'block',
                        }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button
                            type="primary"
                            onClick={confirm}
                            icon={<SearchOutlined />}
                            size="small"
                            style={{ width: 90, }}
                        >
                            Search
                        </Button>
                        <Button onClick={clearFilters} size="small" style={{
                            width: 90, border: `${theme ? '' : '1.5px solid #000'}`,
                            backgroundColor: `${theme ? '' : '#2b2c2e'}`, color: `${theme ? '' : '#e3e3e3'}`
                        }}>
                            Clean
                        </Button>
                    </div>
                </div>
            ),
            filterIcon: (filtered) => (
                <SearchOutlined style={{ color: filtered ? theme ? '#1890ff' : '#e3e3e3' : undefined }} />
            ),
            onFilter: (value, record) => record.tester.toLowerCase().includes(value.toLowerCase()),
            sorter: (a, b) => a.tester.length - b.tester.length,
            sortDirections: ['descend'],
            render: (value) =>
                <p style={{ fontWeight: 500, }}>{value}</p>

        },
        {
            title: `${t('LatestShipments.date')}`,
            width: '15vh',
            dataIndex: 'date',
            key: 'date',
            fixed: 'left',
        },
        {
            title: `${t('LatestShipments.country')}`,
            width: '18vh',
            dataIndex: 'country',
            key: 'country',
            // filters: filterCountry,
            filterSearch: true,
            onFilter: (value, record) => record.country.includes(value),
            onFilter: (text, record) => record.country === text,
            sorter: (a, b) => a.country.localeCompare(b.country),
            sortDirections: ['ascend']



        },
        {
            title: `${t('LatestShipments.document')}`,
            width: '18vh',
            dataIndex: 'document',
            key: 'document',
            // filters: filterDocuments,
            filterSearch: true,
            onFilter: (value, record) => record.document.includes(value),
            onFilter: (text, record) => record.document === text,
            sorter: (a, b) => a.document.localeCompare(b.document),
            sortDirections: ['ascend']

        },
        {
            title: `${t('LatestShipments.difficulty')}`,
            width: '18vh',
            dataIndex: 'difficulty',
            key: 'difficulty',
            // filters: filterDifficulties,
            filterSearch: true,
            onFilter: (value, record) => record.difficulty.includes(value),
            onFilter: (text, record) => record.difficulty === text,
            sorter: (a, b) => a.difficulty.localeCompare(b.difficulty),
            sortDirections: ['ascend']

        },
        {
            title: `${t('LatestShipments.identityID')}`,
            width: '20vh',
            dataIndex: 'identityID',
            key: 'identityID',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{
                    padding: 8, backgroundColor: `${theme ? '' : '#222326'}`,
                    border: `${theme ? '' : '2px solid #000'}`,
                }}>
                    <Input
                        placeholder="Search by identity ID"
                        value={selectedKeys[0]}
                        className='inputs-filters'
                        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={confirm}
                        style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button
                            type="primary"
                            onClick={confirm}
                            icon={<SearchOutlined />}
                            size="small"
                            style={{ width: 90 }}
                        >
                            Search
                        </Button>
                        <Button onClick={clearFilters} size="small" style={{
                            width: 90, border: `${theme ? '' : '1.5px solid #000'}`,
                            backgroundColor: `${theme ? '' : '#2b2c2e'}`, color: `${theme ? '' : '#e3e3e3'}`
                        }}>
                            Clean
                        </Button>
                    </div>
                </div>
            ),
            filterIcon: (filtered) => (
                <SearchOutlined style={{ color: filtered ? theme ? '#1890ff' : '#e3e3e3' : undefined }} />
            ),
            onFilter: (value, record) => record.identityID.toLowerCase().includes(value.toLowerCase()),
        },

        {
            title: `${t('LatestShipments.documentID')}`,
            width: '20vh',
            dataIndex: 'documentID',
            key: 'documentID',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{
                    padding: 8, backgroundColor: `${theme ? '' : '#222326'}`,
                    border: `${theme ? '' : '2px solid #000'}`,
                }}>
                    <Input
                        placeholder="Search by document ID"
                        value={selectedKeys[0]}
                        className='inputs-filters'
                        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={confirm}
                        style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button
                            type="primary"
                            onClick={confirm}
                            icon={<SearchOutlined />}
                            size="small"
                            style={{ width: 90 }}
                        >
                            Search
                        </Button>
                        <Button onClick={clearFilters} size="small" style={{
                            width: 90, border: `${theme ? '' : '1.5px solid #000'}`,
                            backgroundColor: `${theme ? '' : '#2b2c2e'}`, color: `${theme ? '' : '#e3e3e3'}`
                        }}>
                            Clean
                        </Button>
                    </div>
                </div>
            ),
            filterIcon: (filtered) => (
                <SearchOutlined style={{ color: filtered ? theme ? '#1890ff' : '#e3e3e3' : undefined }} />
            ),
            onFilter: (value, record) => record.documentID.toLowerCase().includes(value.toLowerCase()),

        },
        {
            title: `${t('LatestShipments.status')}`,
            width: '15vh',
            dataIndex: 'status',
            key: 'status',
            filters: [
                { text: 'Accepted', value: 'Accepted' },
                { text: 'Rejected', value: 'Rejected' },
            ],
            onFilter: (text, record) => record.status === text,
            render: (text) => (
                <>
                    {
                        text === 'Accepted'
                            ? <Tag color='#6edfc770' key={text}
                                style={{
                                    color: '#000', border: '2px solid #000', height: '3vh',
                                    width: '90%', textAlign: 'center', fontWeight: 500, lineHeight: '1.4em'
                                }}>
                                {text}
                            </Tag>
                            : <Tag color='#ef83ae80' key={text}
                                style={{
                                    color: '#000', border: '2px solid #000', height: '3vh',
                                    width: '90%', textAlign: 'center', fontWeight: 500, lineHeight: '1.4em'
                                }}>
                                {text}
                            </Tag>
                    }

                </>
            )
        },
        {
            title: `${t('LatestShipments.reason')}`,
            dataIndex: 'reason',
            key: 'reason',
            render: (text) =>
                <p
                    style={{
                        color: '#aaa', textAlign: 'left', wordWrap: 'break-word',
                        fontSize: '0.9em', fontWeight: 400
                    }}
                >{text}</p>

        },
        {
            title: `${t('LatestShipments.details')}`,
            key: 'operation',
            fixed: 'right',
            width: '22vh',
            render: (text, record) =>
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <Button
                        // (date, tester, ctry, document, difficulty, id1, id2, state, reason)
                        onClick={() => AsingData(record.date, record.tester, record.country, record.document, record.difficulty, record.identityID, record.documentID, record.status, record.reason)}
                        className='div-searcher'
                        style={{
                            backgroundColor: '#a8c1f4', border: '1.8px solid #000', color: '#000',
                            fontWeight: 500, width: '80%', borderRadius: '0.3vw'
                        }}
                    >{t('LatestShipments.details')}</Button>
                </div>,
        },
    ];

    const handleOk = () => {
        setImageViewer(false)
    }

    const handleCancel = () => {
        setImageViewer(false)
    }

    const AsingData = (date, tester, ctry, document, difficulty, id1, id2, state, reason) => {
        setImageViewer(true)
        setCurrentDate(date)
        setCurrentTester(tester)
        setCurrentConfig(`${ctry} - ${document} - ${difficulty}`)
        setCurrentIdentity(id1)
        setCurrentDocument(id2)
        setCurrentStatus(state)
        setCurrentReason(reason)
    }


    return (
        <>
            {
                !tableReady
                    ? <div style={{
                        height:'100%', display:'flex', justifyContent:'flex-start', alignItems:'flex-start',
                        flexDirection:'column', 
                        margin: '7vh 3.5vw',
                    }}>
                        <Row style={{
                            
                        }}>
                            <RangePicker
                                // onChange={handleDateChange}
                                style={{
                                    marginBottom: '1vh', marginRight: '1vh',
                                    border:'2px solid #000'
                                }} />

                            <Button
                                icon={<FaFileDownload size={20} style={{ color: '#000' }} />}
                                // onClick={handleDownload}
                                style={{
                                    aspectRatio: '1/1',
                                    border:'2px solid #000',
                                    backgroundColor:'#fff'
                                }} />


                        </Row>
                        <div style={{
                            
                            width: 'auto', padding: '1%', border: '2px solid #000', borderRadius: '1vw', height: '50vh',
                            display: 'flex', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: `${theme ? '#fff' : '#2b2c2e'}`,
                        }}>
                            <Table

                                style={{
                                    width:'70vw'
                                }}
                                // className={}
                                className={`${theme ? 'latest-shipments' : 'my-table-2-'}`}
                                columns={columns}
                                dataSource={data}
                                scroll={{
                                    y: '40vh',
                                    x: '190vh',
                                }}
                                pagination={false} />


                        </div>
                        {/* <Row>
                            <Button onClick={addData} />
                            <Button onClick={addDataRejected} />
                        </Row> */}
                    </div>

                    : <div style={{ height: '80vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>


                        <img src={Rainbow} style={{ marginTop: '-20vh', width: '20%' }} />
                        {/* <img src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" size={200} alt='GIF' /> */}


                    </div>
            }



            <Modal
                visible={imageViewer}
                onOk={handleOk}
                onCancel={handleCancel}
                className={`${theme ? 'task-content' : 'task-content-dark'}`}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}

                maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                footer={<></>}
            >
                <div
                    style={{
                        height: '60vh', width: '100vh',
                        display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row'
                    }}>


                    <div
                        className='div-seracher'
                        style={{
                            height: '60vh', width: '55%', border: '2px solid #000', borderRadius: '1vw',
                            marginRight: '3vh', backgroundColor: `${theme ? '#fff' : '#27282c'}`
                        }}>
                        <div style={{
                            width: '100%', height: '10%', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', borderBottom: '2px solid #000', backgroundColor: '#a8c1f4',
                            borderTopRightRadius: '1vw', borderTopLeftRadius: '1vw'
                        }}>
                            <p style={{ fontWeight: 500, fontSize: '1.2em', color: '#000' }}>{t('TableDetails.about')}</p>

                        </div>

                        <div style={{
                            width: '100%', height: '90%', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', flexDirection: 'column',
                        }}>
                            <Row style={{
                                width: '95%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'row', height: '10%'
                            }}>
                                <p style={{
                                    width: '40%', fontWeight: 500, fontSize: '1.1em'
                                }}>{t('TableDetails.date')}</p>
                                <p style={{
                                    width: '60%', fontSize: '1.1em'
                                }}>{currentDate}</p>
                            </Row>
                            <Row style={{
                                width: '95%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'row', height: '10%'
                            }}>
                                <p style={{
                                    width: '40%', fontWeight: 500, fontSize: '1.1em'
                                }}>{t('TableDetails.tester')}</p>
                                <p style={{
                                    width: '60%', fontSize: '1.1em'
                                }}>{currentTester}</p>
                            </Row>
                            <Row style={{
                                width: '95%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'row', height: '10%'
                            }}>
                                <p style={{
                                    width: '40%', fontWeight: 500, fontSize: '1.1em'
                                }}>{t('TableDetails.config')}</p>
                                <p style={{
                                    width: '60%', fontSize: '1.1em'
                                }}>{currentConfig}</p>
                            </Row>
                            <Row style={{
                                width: '95%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'row', height: '10%'
                            }}>
                                <p style={{
                                    width: '40%', fontWeight: 500, fontSize: '1.1em'
                                }}>{t('LatestShipments.identityID')}</p>
                                <p style={{
                                    width: '60%', fontSize: '1.1em'
                                }}>{currentIdentity}</p>
                            </Row>
                            <Row style={{
                                width: '95%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'row', height: '10%'
                            }}>
                                <p style={{
                                    width: '40%', fontWeight: 500, fontSize: '1.1em'
                                }}>{t('LatestShipments.documentID')}</p>
                                <p style={{
                                    width: '60%', fontSize: '1.1em'
                                }}>{currentDocument}</p>
                            </Row>
                            <Row style={{
                                width: '95%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'row', height: '10%'
                            }}>
                                <p style={{
                                    width: '40%', fontWeight: 500, fontSize: '1.1em'
                                }}>{t('LatestShipments.status')}</p>
                                <p style={{
                                    width: '60%', fontSize: '1.1em'
                                }}>{
                                        // const text = 'Rejected'
                                        currentStatus === 'Accepted'
                                            ? <Tag color='#6edfc770' key={currentStatus}
                                                style={{
                                                    color: '#000', border: '2px solid #000', height: '3.5vh',
                                                    width: '40%', textAlign: 'center', fontWeight: 500,
                                                }}>
                                                {currentStatus}
                                            </Tag>
                                            : <Tag color='#ef83ae80' key={currentStatus}
                                                style={{
                                                    color: '#000', border: '2px solid #000', height: '3.5vh',
                                                    width: '40%', textAlign: 'center', fontWeight: 500,
                                                }}>
                                                {currentStatus}
                                            </Tag>
                                    }</p>
                            </Row>
                            <Row style={{
                                width: '95%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'row', height: '10%'
                            }}>
                                <p style={{
                                    width: '40%', fontWeight: 500, fontSize: '1.1em'
                                }}>{t('LatestShipments.reason')}</p>
                                <p style={{
                                    width: '60%', fontSize: '1.1em', lineHeight: '1.1em'
                                }}>{currentReason}</p>
                            </Row>

                            <div style={{
                                height: '15%', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Button
                                    onClick={handleOk}
                                    className='div-searcher'
                                    style={{
                                        marginBottom: '-3vh', width: '20vh', backgroundColor: `${theme ? '#fff' : '#2b2c2e'}`, borderRadius: '0.4vw',
                                        border: '1.8px solid #000', color: `${theme ? '#000' : '#e3e3e3'}`, fontWeight: 500, marginTop: '2vh'

                                    }}>{t('TableDetails.close')}</Button>
                            </div>

                        </div>

                    </div>


                    <div
                        className='div-seracher'
                        style={{
                            height: '60vh', width: '40%',
                            borderRadius: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexDirection: 'column', border: '2px solid #000', backgroundColor: `${theme ? '#fff' : '#27282c'}`
                        }}>
                        <div style={{
                            width: '100%', height: '10%', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', borderBottom: '2px solid #000', backgroundColor: '#a8c1f4',
                            borderTopRightRadius: '1vw', borderTopLeftRadius: '1vw'
                        }}>
                            <p style={{ fontWeight: 500, fontSize: '1.2em', color: '#000' }}>{`${image ? `${t('TableDetails.back')}` : `${t('TableDetails.front')}`}`}</p>
                            <Button
                                className={`${!image ? 'click-left' : 'clik-right'}`}
                                onClick={() => setImage(!image)}
                                shape='circle'
                                icon={<BsFillCaretRightFill size={20}
                                    style={{ marginTop: '0.7vh', color: '#000', }} />}
                                style={{
                                    position: 'absolute', right: `${image ? '38vh' : '5vh'}`, top: '3vh',
                                    backgroundColor: 'transparent', border: '0px solid #000',
                                    width: '6vh', height: '6vh', transition: 'all 0.75s ease-in-out'
                                }} />
                        </div>
                        <div style={{
                            width: '100%', height: '90%', display: 'flex', alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image src={`${image ? imageBack : imageFront}`} alt='Image' width={'90%'}
                                className='div-searcher'
                                style={{
                                    borderRadius: '0.5vw', border: '2px solid #000',
                                    marginTop: '0vh',
                                }} />

                        </div>

                    </div>



                </div>

            </Modal >


        </>


    )
}
