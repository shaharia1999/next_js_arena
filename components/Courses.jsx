
import style from './Course.module.css'
const testImage=  '/image/New_Assets/course.jpg'

const Courses = () => {
    return (
        <section className={`${style.coursesId} container  `}>
            <h5 className={style.courses}>Courses</h5>
            <div className={style.course_line}></div>
            <p  className={style.course_pera}>Market best General & Corporate <br/> courses from the skilled influencers</p>
            <div className={style.course_container}>
                <div  className={style.course_wrapper}>
                    <div className={style.course_image}><img src={testImage} alt="" /></div>
                    <div className={style.course_content}>
                        <h5>Cyber Security & Ethical Hacking</h5>
                        <p>Whether you’re interested in landing your first IT security job, becoming a full-time white hat hacker, or preparing to test the security of your own <a>...See More</a></p>
                    </div>
                </div>
                <div  className={style.course_wrapper}>
                    <div className={style.course_image}><img src={testImage} alt="" /></div>
                    <div className={style.course_content}>
                        <h5>Python With Freelancing</h5>
                        <p>Python is a high-level, interpreted, interactive and object-oriented scripting language. Python is designed to be highly readable. <a>...See More</a></p>
                    </div>
                </div>
                <div  className={style.course_wrapper}>
                    <div className={style.course_image}><img src={testImage} alt="" /></div>
                    <div className={style.course_content}>
                        <h5>Cyber Security and Python (Duo)</h5>
                        <p>Cybersecurity needs a programming language and today Python is very popular because of its flexibility and lightweight features. <a>...See More</a></p>
                    </div>
                </div>
                <div  className={style.course_wrapper}>
                    <div className={style.course_image}><img src={testImage} alt="" /></div>
                    <div className={style.course_content}>
                        <h5>CEHF Masterclass</h5>
                        <p>Advanced Cyber Security & Ethical Hacking is a pioneer in endpoint security, with proactive security solutions that stop advanced persistent threats <a>...See More</a> </p>
                    </div>
                </div>
                <div className={style.course_wrapper}>
                    <div className={style.course_image}><img src={testImage} alt="" /></div>
                    <div className={style.course_content}>
                        <h5>C|OSINT</h5>
                        <p>Open Source Intelligence Training™ - Syllabus and Featured Topics This course will provide an education and information you will not be able to <a>...See More</a></p>
                    </div>
                </div>
                <div  className={style.course_wrapper}>
                    <div className={style.course_image}><img src={testImage} alt="" /></div>
                    <div className={style.course_content}>
                        <h5>Linux</h5>
                        <p>The industry-leading Penetration Testing with Kali Linux (KLIN-ACS) course just just got even better. This online ethical hacking course is self-paced.<a>...See More</a></p>
                    </div>
                </div>
                    <div  className={style.course_wrapper}>
                        <div className={style.course_image}><img src={testImage} alt="" /></div>
                        <div className={style.course_content}>
                            <h5>Networking Security</h5>
                            <p>In this course, you will be able to discover security vulnerabilities across an entire network, by using network hacking techniques and <a>...See More</a></p>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Courses;