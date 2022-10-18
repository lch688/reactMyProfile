import React from 'react';
import styles from './resume.module.css'
import {Row,Col} from 'react-bootstrap';
import { Typography } from 'antd';
import img1 from '../../../../assets/imgs/resume1.jpg'
import img2 from '../../../../assets/imgs/resume2.jpg'
import img3 from '../../../../assets/imgs/resume3.jpg'
import img4 from '../../../../assets/imgs/resume4.jpg'
import {useSelector} from "../../../../Tool/hooks";


interface props{

}

export const Resume:React.FC<props> =() =>{

    const resumeInfo=useSelector(state => state.Home.resume)


    const imgList=[img1,img2,img3,img4]
    return(
        <div>


            <section className={styles.imgContainer} >

                <Row  >
                    {
                        imgList.map((item,index) =>{
                            return (
                                <Col key={index} lg={3} className={styles.colPadding}>
                                    <img
                                        src={item}
                                        alt='index'
                                    />

                                </Col>)
                        })
                    }
                </Row>

            </section>

            <section className={styles.contentContainer} >
                <div className={styles.title}>
                    <Typography.Title level={3}>{resumeInfo.title}</Typography.Title>
                </div>
                <div className={styles.info} >
                    <Typography.Text strong={true}>
                        <p>
                            {resumeInfo.address}
                        </p>
                        <p>
                            {resumeInfo.contactInfo}
                        </p>
                    </Typography.Text>

                </div>

                <article>
                    <section>
                        <Typography.Title level={5} > {resumeInfo.object.name}</Typography.Title>
                        <Typography.Text strong={true} type={"secondary"}>
                            {resumeInfo.object.article}

                        </Typography.Text>
                    </section>

                    <section>
                        <Typography.Title level={5} >{resumeInfo.quality.name}</Typography.Title>
                        <Typography.Text strong={true} type={"secondary"}>
                            <ul>
                                {
                                    resumeInfo.quality.article.map((item:string,index:number)=>{

                                        return <li key={index} >{item}</li>
                                    }) as []
                                }
                            </ul>

                        </Typography.Text>
                    </section>

                    <section>
                        <Typography.Title level={5} >{resumeInfo.skills.name}</Typography.Title>
                        <Typography.Text strong={true} type={"secondary"}>
                            <ul>

                                {
                                    resumeInfo.skills.article.map((item:string,index:number)=>{
                                        return <li key={index} >{item}</li>
                                    }) as []
                                }

                            </ul>

                        </Typography.Text>
                    </section>

                    <section className={styles.education} >
                        <Typography.Title level={5} >{resumeInfo.education.name}</Typography.Title>
                        <Typography.Text strong={true} type={"secondary"}>
                            <div style={{width:'100%'}}>
                                {
                                    resumeInfo.education.article.school.map((item:any,index:number)=>{
                                        return (
                                            <div key={index}>
                                                <p className={styles.educationLeft}>
                                                    {item.major}
                                                </p>
                                                <p className={styles.educationright}>
                                                    {item.time}
                                                </p>
                                                <p >{item.name}</p>
                                            </div>
                                        )
                                    }) as []
                                }


                            </div>

                            <ul>

                                {
                                    resumeInfo.education.article.content.map((item:string,index:number)=>{
                                        return <li key={index}> {item} </li>


                                    }) as []
                                }

                            </ul>


                        </Typography.Text>
                    </section>


                    <section className={styles.profession} >
                        <Typography.Title level={5} >Professional Experience:</Typography.Title>
                        <Typography.Text strong={true} type={"secondary"}>
                            <div style={{width:'100%'}}>
                                {
                                    resumeInfo.experience.article.company.map((item:any,index:number)=>{
                                        return (
                                            <div key={index}>
                                                <p className={styles.educationLeft}>
                                                    {item.name}
                                                </p>
                                                <p className={styles.educationright}>
                                                    {item.time}
                                                </p>
                                                <p style={{textTransform:'none',wordBreak:'break-all'}} >
                                                    {item.detail}
                                                </p>
                                            </div>
                                        )
                                    }) as []
                                }

                            </div>
                            <ul>
                                {
                                    resumeInfo.experience.article.content.map((item:string,index:number)=>{
                                        return <li key={index}> {item} </li>


                                    }) as []
                                }

                            </ul>


                        </Typography.Text>
                    </section>

                    <section className={styles.profession} >
                        <Typography.Title level={5} >{resumeInfo.volunteer.name}</Typography.Title>
                        <Typography.Text strong={true} type={"secondary"}>
                            <div style={{width:'100%'}}>
                                {
                                    resumeInfo.volunteer.article.company.map((item:any,index:number)=>{
                                        return (
                                            <div key={index}>
                                                <p className={styles.educationLeft}>
                                                    {item.name}
                                                </p>
                                                <p className={styles.educationright}>
                                                    {item.time}
                                                </p>
                                                <p style={{textTransform:'none',wordBreak:'break-all'}}>
                                                    {item.detail}
                                                </p>
                                            </div>
                                        )
                                    }) as []
                                }

                            </div>


                        </Typography.Text>
                    </section>


                </article>

            </section>


        </div>
    )
}