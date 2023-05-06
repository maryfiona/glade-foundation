
import './Section2.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Section2 = () => {
    useEffect(() =>{
        AOS.init();
      },[])
    return (
        <>
            <div  className="container">

                <h2>HOW WE SUPPORT PEOPLE</h2>
            </div>
            <div className="container pi">
                <div className="row">
                    <div className="col-md-4">
                        <button data-aos="fade-left"  data-aos-delay="300"  className="ji">
                            <h4 className="jiii">MAKE <br />DONATIONS</h4>
                            <button className="jii">contact us</button>
                        </button>

                    </div>
                    <div className="col-md-4">
                        <button data-aos="fade-out" data-aos-delay="400"  className="ji">
                            <h4 className="jiii">FUND <br />RAISING</h4>
                            <button className="jii">contact us</button>
                        </button>

                    </div>
                    <div className="col-md-4">
                        <button data-aos="fade-left" data-aos-delay="500"    className="ji">
                            <h4 className="jiii">FOOD
                                <br />SUPPORT
                                <br />PROGRAMME</h4>
                            <button className="jii">contact us</button>

                        </button>
                        
                    </div>

                </div>

            </div>

        </>




    )
}
export default Section2;