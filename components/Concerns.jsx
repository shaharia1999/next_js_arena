
import style  from'./Concerns.module.css'
import Marquee  from "react-fast-marquee";
const ict = "/image/ict.svg";
const bpplastic = "/image/bpplastic.svg";
const buet = "/image/buet.svg";
const henan = "/image/henan.svg";
const airForce = "/image/airForce.svg";
const cyber71 = "/image/cyber71.svg";
const porzotok = "/image/porzotok.svg";
const sena_kalyan = "/image/sena_kalyan.svg";
const defense = "/image/defense.svg";
const polli_Academy = "/image/polli_Academy.svg";
const CyberHero = "/image/CyberHero.png";
const square = "/image/square-groupr.png";

const Concerns = () => {
    return (
        <section className={`${style.concernParent}`}>
            <div className='container '>
                <h5 className={`${style.concern_title}`}>OUR CONCERNS</h5>
                <div className={`${style.concerns_line}`}></div>
                <p  className={`${style.concerns_para}`}>Our concerns <br/> localy & internationally</p>
                <Marquee speed={100} gradientWidth={0} className=''>
                    <div className="text-center p-5">
                        <img className={style.marqueImg} src={sena_kalyan} alt="defense" />
                    </div>
                    <div className="text-center p-5">
                        <img className={style.marqueImg} src={ict} alt="defense" />
                    </div>
                    <div className="text-center p-5">
                        <img className={style.marqueImg} src={bpplastic} alt="defense" />
                    </div>
                    <div className="text-center p-5">
                        <img className={style.marqueImg} src={buet} alt="defense" />
                    </div>
                    <div className="text-center p-5">
                        <img className={style.marqueImg} src={henan} alt="defense" />
                    </div>
                    <div className="text-center p-5">
                        <img className={style.marqueImg} src={airForce} alt="defense" />
                    </div>
                    <div className="text-center p-5">
                        <img className={style.marqueImg} src={cyber71} alt="defense" />
                    </div>
                    <div className="text-center p-5">
                        <img className={style.marqueImg} src={porzotok} alt="defense" />
                    </div>
                    <div className="text-center p-5">
                        <img className={style.marqueImg} src={polli_Academy} alt="defense" />
                    </div>
                    <div className="text-center p-5">
                        <img className={style.marqueImg} src={CyberHero} alt="defense" />
                    </div>
                    <div className="text-center p-5">
                        <img className={style.marqueImg} src={square} alt="defense" />
                    </div>

                    
                </Marquee>
            </div>
        </section>
    );
};

export default Concerns;
{/* <div className="text-center p-5">
                        <img className="img-fluid w-50" src={sena_kalyan} alt="sena_kalyan" />
                    </div>

                    <div className="text-center p-5">
                        <img className="img-fluid w-50" src={polli_Academy} alt="polli_Academy" />
                    </div>

                    <div className="text-center p-5">
                        <img className="img-fluid w-50" src={ict} alt="ict" />
                    </div>

                    <div className="text-center p-5">
                        <img className="img-fluid w-50" src={buet} alt="buet" />
                    </div>

                    <div className="text-center p-5">
                        <img className="img-fluid w-50" src={airForce} alt="airForce" />
                    </div>

                    <div className="text-center p-5">
                        <img className="img-fluid w-50" src={cyber71} alt="cyber71" />
                    </div>

                    <div className="text-center p-5">
                        <img className="img-fluid w-50" src={bpplastic} alt="bpplastic" />
                    </div>

                    <div className="text-center p-5">
                        <img className="img-fluid w-50" src={henan} alt="henan" />
                    </div>

                    <div className="text-center p-5">
                        <img className="" src={square} alt="square-group" />
                    </div>

                    <div className="text-center p-5">
                        <img className="img-fluid w-50" src={porzotok} alt="porzotok" />
                    </div>

                    <div className="text-center p-5">
                        <img className="img-fluid w-50" src={CyberHero} alt="CyberHero" />
                    </div> */}