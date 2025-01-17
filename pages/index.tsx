import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
import BlogsPage from "../components/Home/Blogs/Blogs";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";
import Maintenance from "../components/Home/Maintenance/Maintenance";

export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);
  const [ShowMe, setShowMe] = useState(false);
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const [userData, setUserData] = useState(null);
  const [isBlackListed, setIsBlackListed] = useState(false);
  const [IsBlackListEmpty, setIsBlackListEmpty] = useState(
    process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES === "" ? true : false
  );

  useEffect(() => {
    if (!IsBlackListEmpty) {
      const fetchData = async () => {
        try {
          const IP_Address = async () => {
            return fetch("https://api.ipify.org/?format=json")
              .then((res) => res.json())
              .then((data) => data.ip);
          };

          const response = await fetch(
            "/api/userInfoByIP/" + (await IP_Address())
          );
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error("Error fetching data location and IP address:", error);
        }
      };

      fetchData();
    }
  }, [IsBlackListEmpty]);

  useEffect(() => {
    if (!IsBlackListEmpty && userData) {
      if (process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES && userData.country) {
        if (
          process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES.includes(userData.country)
        ) {
          setIsBlackListed(true);
        }
      }
    }
  }, [IsBlackListEmpty, userData]);

  useEffect(() => {
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      window.removeEventListener(
        "resize",
        context.sharedState.userdata.windowSizeTracker.current
      );
      window.removeEventListener(
        "mousemove",
        context.sharedState.userdata.mousePositionTracker.current,
        false
      );
      window.removeEventListener(
        "resize",
        context.sharedState.typing.eventInputLostFocus
      );
      document.removeEventListener(
        "keydown",
        context.sharedState.typing.keyboardEvent
      );
    }
    setTimeout(() => {
      setShowElement(true);
    }, 4500);

    // setTimeout(() => {
    //   setShowThisCantBeReached(false);
    // }, 5400);

    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 10400);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  console.log("website is rendering...");
  const meta = {
    title: "B Gourav - Full Stack Developer | Cybersecurity Expert | Portfolio",
    description:
      "Explore B Gourav's personal portfolio. A Full Stack Developer and Cybersecurity Expert from Odisha, India, showcasing software engineering projects, skills, and professional achievements.",
    keywords:
      "B Gourav, Gourav Portfolio, Full Stack Developer, Cybersecurity Expert, Software Engineer, Odisha, India, Web Developer, React Developer, Next.js, Python, PostgreSQL, Software Solutions, Full Stack Portfolio, Professional Portfolio, SDE Gourav, B Gourav Full Stack",
    author: "B Gourav",
    image: "/mg.png",
    type: "website",
    url: "https://gourav-seven.vercel.app/",
  };

  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta content={meta.keywords} name="keywords" />
        <meta content={meta.author} name="author" />
        <meta property="og:url" content={meta.url} />
        <link rel="canonical" href={meta.url} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="B Gourav Portfolio" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@njrgourav" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        <link rel="icon" href="/favicon.ico" />

      </Head>

      {!isBlackListed ? (
        <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
          {context.sharedState.finishedLoading ? (
            <></>
          ) : ShowThisCantBeReached ? (
            <ThisCantBeReached />
          ) : (
            <></>
          )}
          {context.sharedState.finishedLoading ? (
            <></>
          ) : ShowElement ? (
            <Startup />
          ) : (
            <></>
          )}
          <Header
            finishedLoading={context.sharedState.finishedLoading}
            sectionsRef={homeRef}
          />
          <MyName finishedLoading={context.sharedState.finishedLoading} />
          <SocialMediaArround
            finishedLoading={context.sharedState.finishedLoading}
          />
          {context.sharedState.finishedLoading ? (
            <AboutMe ref={aboutRef} />
          ) : (
            <></>
          )}
          {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
          {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}
          {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
          {context.sharedState.finishedLoading ? <BlogsPage /> : <></>}
          {context.sharedState.finishedLoading ? (
            <Footer
              githubUrl={"https://github.com/njrgourav11/New-Portfolio"}
              hideSocialsInDesktop={true}
            />
          ) : (
            <></>
          )}
          {!isProd && <ScreenSizeDetector />}
        </div>
      ) : (
        <Maintenance />
      )}
    </>
  );
}
