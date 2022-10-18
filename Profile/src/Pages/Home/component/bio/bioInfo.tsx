import React from 'react';
import styles from './bioInfo.module.css'
import {Row,Col,Carousel} from 'react-bootstrap';
import { Typography } from 'antd';
import img1 from '../../../../assets/imgs/carouser1.jpg'
import img2 from '../../../../assets/imgs/carouser2.jpg'
import img3 from '../../../../assets/imgs/carouser3.jpg'
import {useSelector} from "../../../../Tool/hooks";


interface props{

}

export const BioInfo:React.FC<props> =() =>{

    const bioInfo=useSelector(state => state.Home.bio)
    const iconInfo=useSelector(state => state.Home.iconInfo)

    const mapImage=[img1,img2,img3]

    const test='icon-jiegousheji'
    return(
       <div className={styles.wrapper}>
           <Row>
               <Col lg={6} sm={12}>
                   <section className={styles.title}>
                       <Typography.Title level={3} >{bioInfo.title}</Typography.Title>
                   </section>
                   <article className={styles.article}>
                       <Typography.Text  type='secondary' strong={true}>
                           {bioInfo.content}
                       </Typography.Text>
                   </article>
               </Col>
               <Col lg={6} sm={12}>
                   <div className={styles.imgWraper}>
                       <Carousel variant="dark" fade >

                            {
                                mapImage.map((item,index)=>{
                                    return (
                                        <Carousel.Item key={index}>
                                            <img className="d-block w-100"
                                                 src={item}
                                                 alt="slides"
                                            />
                                        </Carousel.Item>
                                    )
                                })
                            }
                       </Carousel>

                   </div>

               </Col>
           </Row>
           <Row className={styles.bottom}>
               {
                   iconInfo.map((item,index)=>{
                       return(
                           <Col lg={3} sm={6} key={index}>
                               <section>
                                   <span className={'iconfont '+item.icon} />
                                   <p>{item.title}</p>
                                   <article>{item.content} </article>
                               </section>
                           </Col>
                       )
                   })
               }

           </Row>
       </div>
    )
}