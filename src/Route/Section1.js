
import './Section1.css'
import mapImg from './../Assets/map.svg'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Section1 = () => {
    useEffect(() =>{
        AOS.init();
      },[])
    return (

        <>
        <div className="container ">
            <div className="row">
                <div data-aos="zoom-in" data-aos-delay="500" className="col-md-6">
                    <h4>
                        COVID-19 Maps
                    </h4>
                    <p>This interactive dashboard/map <br/> provides the latest global numbers and <br/>
                     numbers by country of COVID-19 cases  <br/>on a daily basis.</p>
                     <h3>Coronavirus disease <br/> outbreak situation</h3>
                     <p className="de">456,956 </p>
                     <p className="dee">343,676  </p>

                     <div className="aaa">
                     <b>Charitable Events</b>
                     <p>Updated 12/23/2020</p>
                     
                     </div>


                     <div className="aa"> 
                        <b>Confirmed Death</b>
                        <p>Updated 12/23/2020</p>
                     </div>
                    
                     <hr  className="solid as"/>
                     <div>
                        <h6 className="aw">
                        Countries, areas or territories <br/> with cases
                        </h6>
                        <p className="aww">235</p>
                     </div>
                     <button className="a">REQUEST DONATIONs</button>

                      </div>
                      <div  data-aos="zoom-out" data-aos-delay="1000"className="col-md-6">
                        <img  src={mapImg}  alt="map icon" />
                      </div>

            </div>

        </div>





        </>



    )
}
export default Section1;