
import style from './About.module.css'
const team ='/image/New_Assets/team.png'
const bullet = '/image/New_Assets/circle.png'
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';


const About = () => {
    return (
        <section>

            <div className={`container   ${style.about_container}`}>
            <Fade left duration={2000}>
            <article> 
               
               <h5  className={`${style.about_title}`}>ABOUT US</h5>
                   <div className={`${style.about_line}`}></div>
                   <p className={`${style.about_top_txt}`}>We provide the best <br /> security solution to your business</p>
                   <p>Arena Web Security is a sister concern of Arena Web Technology. Arena Web Security is a renowned IT security company in Bangladesh since its establishment in 2012. During these years, Arena Web Security has provided Cyber Security Services and Trainings to many around the world.</p>
                   <ul className={`${style.about_list}`}>
                       <li><img src={bullet} alt=""/> Application Security Optimization</li>
                       <li><img src={bullet} alt=""/> Web & Application building</li>
                       <li><img src={bullet} alt=""/> Bug fixing and speed optimising</li>
                       <li><img src={bullet} alt=""/> General & corporate courses</li>
                   </ul>
               </article>
            </Fade>
            <Flash >
            <div className={style.about_img}>
                <img data-aos-duration="1500" src={team} alt=""  />
                </div>
        </Flash>
              
         
            </div>
        </section>
    );
};

export default About;