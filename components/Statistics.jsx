import React, { useState } from 'react';
import style from './Statistics.module.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Statistics = () => {
    const [count, setCount] = useState(true)
    console.log(count);
    /* const numElement = document.querySelectorAll('.stat-num')
    const speed = 200
    const counter = numElement.forEach(element => {
        const updateNum = () => {
            const targetNum = parseInt(element.dataset.number)
            const initialNum = parseInt(element.innerText)
            const increament = Math.trunc(targetNum / speed)
            console.log(increament);
            if (initialNum < targetNum) {
                element.innerText = initialNum + increament
                // setTimeout(updateNum,10)
            }

        }
        updateNum()
    }); */
    return (
        <section>
            <div className={`container  ${style.state_wrapper}  `}>
                <div >
                    <h3 className={`${style.h3}`}>Statistics shows our contribution <br /> to the security community</h3>
                </div>
                <div className={style.num_wrapper}>
                    <div className={`${style.count}`}>
                        <ScrollTrigger onEnter={() => setCount(true)}>
                            {count &&
                                <CountUp
                                    start={2}
                                    end={45}
                                    duration={1}
                                >
                                </CountUp>}
                                <span></span>
                            <sup>+</sup>
                        </ScrollTrigger>
                        <p>Completed <br /> Batches</p>
                    </div>
                    <div className={`${style.count}`}>
                        <ScrollTrigger onEnter={() => setCount(true)}>
                            {count &&
                                <CountUp
                                    start={0}
                                    end={15}
                                    duration={2}
                                >
                                </CountUp>}
                                <span>k</span>
                            <sup>+</sup>
                        </ScrollTrigger>
                        <p>Successful <br /> Students</p>
                    </div>
                    <div className={`${style.count}`}>
                        <ScrollTrigger onEnter={() => setCount(true)}>
                            {count &&
                                <CountUp
                                    start={0}
                                    end={2}
                                    duration={3}
                                >
                                </CountUp>}
                                <span>k</span>
                            <sup>+</sup>
                        </ScrollTrigger>
                        <p>Active <br /> Freelancers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;