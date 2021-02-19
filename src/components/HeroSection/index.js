import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,
HeroP, HeroBtnWarpper, ArrowForward, ArrowRight} from './HeroElements';
const HeroSection = () => {

    const [hover,setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
           <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='/video/mp4'/>
           </HeroBg>
           <HeroContent>
             <HeroH1> Birkur-Thimmapur Venkateshwara Swami</HeroH1>
             <HeroP>
               Pay visit to get glimpse of this temple. Will make a one devotional 
               memory to your list
             </HeroP>
             <HeroBtnWarpper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                  primary ="true"
                  dark ="true"
                >
                 Get started {hover ? <ArrowForward/>: <ArrowRight/>}
                </Button>
             </HeroBtnWarpper>
           </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
