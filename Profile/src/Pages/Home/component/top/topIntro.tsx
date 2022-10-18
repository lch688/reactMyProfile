import React from 'react';
import styles from './topIntro.module.css'
import {useSelector, useTypeWriter} from '../../../../Tool/hooks'



interface props{

}

export const Topintro:React.FC<props> =() =>{

    const typeWriter=useSelector(state => state.Home.typeWriter)
    const intro=useSelector(state => state.Home.topIntro)

    const parameters={
        words:typeWriter,
        time:200
    }
    const type=useTypeWriter(parameters)


    return(
            <div className={styles.homeWraper}>
                <div className={styles.container}>
                    <div className={styles.homeItem}>
                        <h1 className={styles.homeTitle}>I AM,{type}|</h1>
                        <p className={styles.homeContent}>{intro}</p>
                        <ul className={styles.homeUl}>
                            <li >
                                <span className="iconfont icon-twitter"  />
                            </li>
                            <li >
                                <span className="iconfont icon-facebookfacebook51" />
                            </li>
                            <li >
                                <span className="iconfont icon-googleplus" />
                            </li>
                            <li >
                                <span className="iconfont icon-instagram" />
                            </li>
                            <li >
                                <span className="iconfont icon-Youtube" />
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
    )
    /*
    *
   const wordlist=['chenhaoliu','web designer','react developer']
    const [type,setType]=useState<string>("")
    const [index,setIndex]=useState<number>(0)
    const [outNum,setOutNum]=useState<number>(0)




    function sleep(ms:number,judge:boolean) {
        let timer:any
        return new Promise(reslove=>{
                if (judge){
                    timer=setTimeout(reslove,ms)
                    console.log(timer)

                }else {
                    clearTimeout(timer)
                }

            }


        )







    }

    useEffect(()=>{
        async function typeWriter(){
            const outLen=wordlist.length

            if (outNum < outLen){
                const innerlist:string[]=wordlist[outNum].split('')
                const innerLen=innerlist.length

                if (index<innerLen){
                    const newType=type+innerlist[index]
                    await sleep(200,true)
                    setIndex(index+1)
                    setType(newType)

                }else {


                    setOutNum(outNum+1)
                    setIndex(0)
                    setType('')

                }
            }else {
                setOutNum(0)
                setType(' ')


            }


        }

        typeWriter()

        return ()=>{
            sleep(200,false)
        }
    },[type])
    *
    **/
}

/*
*
* */