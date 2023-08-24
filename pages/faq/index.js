import RootLayout from '@/components/Layout';
import React from 'react';
import style from './faq.module.css'
import { useEffect } from 'react';
import axios from 'axios';
import ApiUrl from '../api/api';
import { useState } from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    const [data,setData]=useState([]);


    useEffect(()=>{
        axios.get(ApiUrl.Faq).then((response)=>{
            setData(response.data);

       }).catch(()=>{
         console.log('data missing');
       })
    },[])

    return (
        <div className={style.Faq}>
             <h1 className={`${style.header} text-center mb-5 container`}>Faq</h1>
            <div className='container'>
             {
                data.map((faq)=>
                <div className='faq_button'>
                
                    <Accordion defaultActiveKey='0'>
                               <Accordion.Item  eventKey={(Number(faq.faq_id) - 1).toString()}>
                                   <Accordion.Header className={style.question}>{faq.faq_question}</Accordion.Header>
                                   <Accordion.Body>
                               {faq.faq_answer}
                                   </Accordion.Body>
                               </Accordion.Item>
                      </Accordion>
                </div>
             
                
             
                )
                  
             }
       
           
    </div>
        </div>
    );
};

export default Faq;

Faq.getLayout=(page)=>{
    return  (<RootLayout>{page}</RootLayout>)
}
