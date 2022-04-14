import React, { useState } from "react";
// import Script from "next/script";
import {
  Navbar,
  Header,
  Values,
  Showcase,
  Introducing,
  Users,
  Manufacturers,
  Creators,
  CallToAction,
  OurWhy,
  Footer,
} from "../modules/AboutPage";

// eslint-disable-next-line react/prop-types
function About() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const showVideo = () => {
    console.log("showVideo called");
    if (!isVideoPlaying) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div>
      <Navbar />
      <Header videoPlaying={isVideoPlaying} showVideo={showVideo} />
      <Values />
      <Showcase />
      <Introducing />
      <Users />
      <Manufacturers />
      <Creators />
      <CallToAction />
      <OurWhy />
      <Footer />

      {/* Facebook chat configuration */}
      {/* <Script strategy="afterInteractive">
        {` window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v13.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));`}
      </Script>
      <Script strategy="afterInteractive">
        {`var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "103179892364791");
      chatbox.setAttribute("attribution", "biz_inbox");
`}
      </Script> */}
    </div>
  );
}

export default About;
