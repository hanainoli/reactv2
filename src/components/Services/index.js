import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2,
ServicesP} from './servicesElements';
import Icon1 from '../../images/b1.jpg' ;
import Icon2 from '../../images/b2.jpg' ;
import Icon3 from '../../images/b3.jpg' ;

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
               <ServicesCard>
                  <ServicesIcon src={Icon1}/>
                  <ServicesH2>Anna Dhanam</ServicesH2>
                  <ServicesP>For well being of family , realtives, friends .</ServicesP>
               </ServicesCard>
               <ServicesCard>
               <ServicesIcon src={Icon2}/>
               <ServicesH2>Saswatha Anna Dhanam</ServicesH2>
               <ServicesP>For well being of family , realtives, friends .</ServicesP>
            </ServicesCard>
            <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Pooja</ServicesH2>
            <ServicesP>For well being of family , realtives, friends .</ServicesP>
         </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
