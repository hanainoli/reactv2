import React from 'react'
import { Button } from '../ButtonElements'
import {InfoContainer, InfoWrapper, InfoRow,Column1, Column2, TextWrapper, TopLine,
    Heading,SubTitle,BtnWrap, Img, ImgWrap } from './InfoEelements';
import { If, Then } from 'react-if-elseif-else-render';
import logo1 from '../../images/b1.jpg' ;
import logo2 from '../../images/b2.jpg' ;
import logo3 from '../../images/b3.jpg' ;


const InfoSection = ({lightBg,id,imgStart,topLine,lightText
, headLine,darkText,description,buttonLable,img,alt,primary,dark,variableValue}) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id ={id}>
              <InfoWrapper>
                <InfoRow  imgStart={imgStart}>
                  <Column1>
                    <TextWrapper>
                      <TopLine>{topLine}</TopLine>
                      <Heading  lightText={lightText}>{headLine}</Heading>
                      <SubTitle darkText={darkText}>{description}</SubTitle>
                      <BtnWrap>
                       <Button to='home'
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact="true"
                          offset={-80}
                          primary={primary ? 1:0}
                          dark={dark ? 1:0}
                          dark2={primary ? 1:0}
                          >{buttonLable}</Button>
                      </BtnWrap>
                    </TextWrapper>
                  </Column1>

            <If condition={variableValue === 1}>
              <Then>
              <Column2>
              <ImgWrap>
                <Img src={logo1} alt={alt}/>
             </ImgWrap>
             </Column2>
              </Then>
            </If>
          <If condition={variableValue === 2}>
            <Then>
            <Column2>
            <ImgWrap>
              <Img src={logo2} alt={alt}/>
           </ImgWrap>
           </Column2>
            </Then>
          </If>
        <If condition={variableValue === 3}>
          <Then>
          <Column2>
          <ImgWrap>
            <Img src={logo3} alt={alt}/>
         </ImgWrap>
         </Column2>
          </Then>
        </If>
        
               </InfoRow>
              </InfoWrapper>
           </InfoContainer> 
           
        </>
    )
}

export default InfoSection
