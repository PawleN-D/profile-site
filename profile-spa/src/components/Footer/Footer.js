import React from "react";
import {
  FooterContainer,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and posts!
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at anytime!</FooterSubText>
      </FooterSubscription>
    </FooterContainer>
  );
};

export default Footer;
