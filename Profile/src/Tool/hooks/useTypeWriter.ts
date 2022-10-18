import {useState,useEffect} from 'react';



interface props{
    words:string[],
    time:number
}

export const useTypeWriter =(props:props) => {


    const wordlist = props.words
    const time=props.time
    const [type, setType] = useState<string>("")
    const [index, setIndex] = useState<number>(0)
    const [outNum, setOutNum] = useState<number>(0)




        useEffect(() => {


            let timer=setInterval(() =>{
                const outLen=wordlist.length

                if (outNum < outLen){
                    const innerlist:string[]=wordlist[outNum].split('')
                    const innerLen=innerlist.length

                    if (index<innerLen){
                        const newType=type+innerlist[index]

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
                    clearInterval(timer)

                }


            },time)

            return () => {

               clearTimeout(timer)
            }
        }, [type])



    return type
}