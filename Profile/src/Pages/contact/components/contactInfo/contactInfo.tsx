import React from 'react';
import styles from './contactInfo.module.css'
import location from '../../../../assets/svg/location.svg'
import phone from '../../../../assets/svg/phone.svg'
import email from '../../../../assets/svg/email.svg'
import {Row, Col, Form,Button} from "react-bootstrap";
import {Typography,} from "antd";
import {InfoForm} from './form'
import {useSelector} from "../../../../Tool/hooks";

interface props{

}

export const ContactInfo:React.FC<props> =() =>{

    const address=useSelector((state) =>state.Contact.address )
    const phoneInfo=useSelector((state) =>state.Contact.phone )
    const emailInfo=useSelector((state) =>state.Contact.email )

    const mapList=[{
       img:location,
       content: address
    },{
        img:phone,
        content: phoneInfo
    },{
        img:email,
        content: emailInfo
    }]
    return(
        <div className={styles.container}>
            <section className={styles.content}>
                <Row>
                    <Col lg={6} xm={12} style={{padding:'0'}}>
                        <article className={styles.eachPart}>
                            <Typography.Title level={2} >
                                <span className={styles.title}><a href={'mailto:'+ emailInfo} target='_blank'>GET IN TOUCH</a></span>
                            </Typography.Title>

                            {
                                mapList.map((item,index)=>{
                                    return(
                                        <div className={styles.info} key={index}>
                                            <Typography.Text  type={"secondary"} strong={true}>

                                                <section >

                                                    <span className={styles.img}><img width='60px' height='60px' src={item.img} alt='img'/></span>

                                                    <span className={styles.words}>{item.content}</span>



                                                </section>
                                            </Typography.Text>
                                        </div>
                                    )
                                })
                            }
                        </article>

                    </Col>
                    <Col lg={6} xm={12} style={{padding:'0'}}>
                        <section className={styles.eachPart} style={{paddingLeft:'5px'}}>
                            <InfoForm />
                        </section>
                    </Col>
                </Row>
            </section>
        </div>
    )
    /*
    }}*/
}