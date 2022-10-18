import React, {useEffect} from 'react';
import styles from './contact.module.css'
import {MianLayout} from '../../Layout'
import {Intro} from '../Background/components/intro'
import {ContactInfo} from './components'
import {useDispatch, useSelector} from "../../Tool/hooks";
import {getContactInfo} from "./RTK/slice";
import {Spin} from "antd";


interface props{

}

const Contact:React.FC<props> =() =>{


    const loading =useSelector(state => state.Contact.loading)
    const error =useSelector(state => state.Contact.error)
    const head =useSelector(state => state.Contact.headline)
    const sub =useSelector(state => state.Contact.subtitle)
    const dispatch=useDispatch()

    useEffect(() =>{
        dispatch(getContactInfo())
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
            <section >
                <Intro title={head} content={sub}/>
            </section>
            <section>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.731724280323!2d-79.42284894976859!3d43.778427452240926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d73a4d684d9%3A0xa342df89498c8dd0!2s57%20Finch%20Ave%20W%2C%20North%20York%2C%20ON%20M2N%200K9!5e0!3m2!1sen!2sca!4v1665086714894!5m2!1sen!2sca"
                    width="100%" height="650" style={{border:0}}  allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
            </section>

            <section>
                <ContactInfo />
            </section>


        </MianLayout>
    )
}
export default Contact