import React, {ReactElement} from 'react';
import {AppProps} from 'next/app';
import Head from "next/head";
import ScripLoader from "next/dist/client/experimental-script";

function HenritecPageApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Henritec</title>
        <link href="http://fonts.googleapis.com/css?family=Roboto:400,300,100,500" rel="preload stylesheet"
              type="text/css" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="preload stylesheet"
              type="text/css" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="css/animate.css"/>
        <link rel="stylesheet" href="css/icomoon.css"/>
        <link rel="stylesheet" href="css/owl.carousel.min.css"/>
        <link rel="stylesheet" href="css/owl.theme.default.min.css"/>
        <link rel="stylesheet" href="css/magnific-popup.css"/>
        <link rel="stylesheet" href="css/style.css"/>
      </Head>
      <Component {...pageProps} />
      <ScripLoader type="text/javascript" src="js/jquery.min.js" preload strategy="defer" />
      <ScripLoader type="text/javascript" src="js/modernizr-2.6.2.min.js" preload strategy="defer" />
      <ScripLoader type="text/javascript" src="js/jquery.easing.1.3.js" strategy="defer" />
      <ScripLoader type="text/javascript" src="js/bootstrap.min.js" strategy="defer" />
      <ScripLoader type="text/javascript" src="js/owl.carousel.min.js" strategy="defer" />
      <ScripLoader type="text/javascript" src="js/jquery.waypoints.min.js" strategy="defer" />
      <ScripLoader type="text/javascript" src="js/jquery.magnific-popup.min.js" strategy="defer" />
      <ScripLoader type="text/javascript" src="js/main.js" strategy="defer" />
    </>
  );
}

export default HenritecPageApp;
