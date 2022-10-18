import React,{useState,useEffect} from 'react';
import styles from './home.module.css'
import {MianLayout} from '../../Layout'
import {Topintro,BioInfo,Resume} from  './component'
import { Divider,Typography,Spin } from 'antd';
import {BackButton, useSelector} from '../../Tool'
import {useDispatch} from "../../Tool";
import {getHomepageInfo} from './RTK/slice'


interface props{
    
}

const Home:React.FC<props> =() =>{

    const loading=useSelector(state => state.Home.loading)
    const error=useSelector(state => state.Home.error)
    const dispatch=useDispatch()
    useEffect(() =>{
        dispatch(getHomepageInfo())

        },[])
    if (loading) {
        return (
            <Spin
                size="large"
                style={{
                    marginTop: 200,
                    marginBottom: 200,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                }}
            />
        );
    }
    if (error) {
        return <div>website error：{error}</div>;
    }

    return(
        <MianLayout>
            <section style={{marginBottom:0}}>
                <Topintro />

            </section>
            <section className={styles.bioWraper}>
                <div className={styles.dividWraper}>
                    <Divider orientation='left'>
                        <Typography.Title level={3}  >
                            <span className= {styles.divider}>Personal Information</span>
                        </Typography.Title>
                    </Divider>
                </div>
                <BioInfo />
            </section>

            <section className={styles.resumeWraper}>

                <Resume />

            </section>

            <BackButton/>


        </MianLayout>
    )
}

export default Home