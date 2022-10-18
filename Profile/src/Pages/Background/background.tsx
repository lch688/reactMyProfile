import React, {useEffect} from 'react';
import styles from './background.module.css'
import {MianLayout} from '../../Layout'
import {Intro,Certification} from  './components'
import {BackButton} from "../../Tool/backButton";
import {useDispatch, useSelector} from "../../Tool/hooks";
import {getBackgroundInfo} from "./RTK/slice";
import {Spin} from "antd";

interface props{

}

const Background:React.FC<props> =() =>{


    const loading=useSelector(state => state.Background.loading)
    const error=useSelector(state => state.Background.error)
    const headline=useSelector(state => state.Background.headline)
    const sub=useSelector(state => state.Background.subtitle)


    const dispatch=useDispatch()
    useEffect(() =>{
        dispatch(getBackgroundInfo())

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
                <Intro title={headline} content={sub}/>
            </section>
            <section>
                <Certification />
            </section>
            <BackButton />
        </MianLayout>
    )
}
export default Background