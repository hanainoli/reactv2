import React from 'react'
import {FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {FooterContainer,FooterWrap, FooterLinksContainer,
FooterLinkItems,FooterLinksWrapper,FooterLinkTitle,FooterLink,
SocialMedia, SocialMediaWrap, SocialLogo,WebsiteRight,SocialIcons,
SocialIconLink} from './footerElements';
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
  const toggleHome = () =>{
    scroll.scrollToTop();
  }
    return (
        <FooterContainer>
            <FooterWrap>
              <FooterLinksContainer>
                <FooterLinksWrapper>
                  <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                      <FooterLink to="/signin">How it works</FooterLink>
                      <FooterLink to="/signin">Testimonials</FooterLink>
                      <FooterLink to="/signin">Careers</FooterLink>
                      <FooterLink to="/signin">Investors</FooterLink>
                      <FooterLink to="/signin"> Terms of Service</FooterLink>
                 </FooterLinkItems>
                 <FooterLinkItems>
                 <FooterLinkTitle>Contact Us</FooterLinkTitle>
                 
                   <FooterLink to="/signin">Thimmapur</FooterLink>
                   <FooterLink to="/signin">Birkur Mandal </FooterLink>
                   <FooterLink to="/signin">Kamareddy District</FooterLink>
                   <FooterLink to="/signin"> Telengana</FooterLink>
                   <FooterLink to="/signin">500055</FooterLink>
                   
                
                </FooterLinkItems>
                </FooterLinksWrapper>
           {  /*   <FooterLinksWrapper>
                <FooterLinkItems>
                  <FooterLinkTitle>Services</FooterLinkTitle>
                    <FooterLink to="/signin">How it works</FooterLink>
                    <FooterLink to="/signin">Testimonials</FooterLink>
                    <FooterLink to="/signin">Careers</FooterLink>
                    <FooterLink to="/signin">Investors</FooterLink>
                    <FooterLink to="/signin"> Terms of Service</FooterLink>
               </FooterLinkItems>
               <FooterLinkItems>
               <FooterLinkTitle>Business</FooterLinkTitle>
                 <FooterLink to="/signin">How it works</FooterLink>
                 <FooterLink to="/signin">Testimonials</FooterLink>
                 <FooterLink to="/signin">Careers</FooterLink>
                 <FooterLink to="/signin">Investors</FooterLink>
                 <FooterLink to="/signin"> Terms of Service</FooterLink>
              </FooterLinkItems>
           </FooterLinksWrapper> */}
              </FooterLinksContainer>
              <SocialMedia>
              <SocialMediaWrap>
                 <SocialLogo to="/" onClick={toggleHome}>Balaji Home </SocialLogo>
                 <WebsiteRight>Balaji Home ©  {new Date().getFullYear() }All rights reserved</WebsiteRight>
                  <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-lable="FaceBook"><FaFacebook/></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-lable="Instagram"><FaInstagram/></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-lable="Youtube"><FaYoutube/></SocialIconLink>
                {/*    <SocialIconLink href="//www.twitter.com/braindesignz" target="_blank" aria-lable="Twitter"><FaTwitter/></SocialIconLink> */}
                     <SocialIconLink href="/" target="_blank" aria-lable="Twitter"><FaTwitter/></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-lable="Linkedin"><FaLinkedin/></SocialIconLink>
                 </SocialIcons>
              </SocialMediaWrap>
             </SocialMedia> 
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
