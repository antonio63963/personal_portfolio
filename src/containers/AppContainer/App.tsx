import React, { useCallback, useRef, useState } from "react";

import { About, Header } from "components";
import "./App.css";

import AppContext from "context/AppContext";
import { HomeContainer } from "containers";
import Underground from "components/Underground/Underground";
import PortfolioContainer from "containers/PortfolioContainer/PortfolioContainer";
import { Portfolio } from "context/AppContext.type";
import SkilsContainer from "containers/SkillsContainer/SkillsContainer";
import Footer from "components/Footer/Footer";
import Novohoodonosor from "components/Novohoodonosor/Novohoodonosor";

function App() {
  const portfolioSection = useRef<HTMLDivElement>(null);
  const skilsSection = useRef<HTMLDivElement>(null);
  const aboutSection = useRef<HTMLDivElement>(null);
  const homeSection = useRef<HTMLDivElement>(null);

  const [isLocked, setIsLocked] = useState<boolean>(true);
  const [isUnderground, setIsUnderground] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState<Portfolio>(Portfolio.motion);

  const scrollToPortfolio = useCallback(
    (portfolio: Portfolio) => {
      if (isLocked) {
        setIsUnderground(true);
        setIsLocked(false);
      }
      setPortfolio(portfolio);
      const timerScroll = setTimeout(() => {
        let markerTimerScroll = false;
        if (portfolioSection.current && !markerTimerScroll) {
          markerTimerScroll = true;
          window.scrollTo({
            top: portfolioSection.current.offsetTop,
            behavior: "smooth",
          });
          let timerDeleteHome = setTimeout(() => {
            // setIsShownHome(false);
            setIsUnderground(false);
            clearTimeout(timerScroll);
            clearTimeout(timerDeleteHome);
            // console.log(timerScroll)
          }, 1000);
        } else {
        }
      }, 100);
    },
    [isLocked]
  );

  const scrollToHome = useCallback(() => {
    const timerScroll = setTimeout(() => {
      if (homeSection.current) {
        window.scrollTo({
          top: homeSection.current.offsetTop,
          behavior: "smooth",
        });
        let timerDeleteHome = setTimeout(() => {
          // setIsShownHome(false);
          // setIsUnderground(false);
          clearTimeout(timerDeleteHome);
          clearTimeout(timerScroll);
        }, 1500);
      }
    }, 100);
  }, []);

  const scrollToSkils = useCallback(() => {
    if (skilsSection.current) {
      window.scrollTo({
        top: skilsSection.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);
  const scrollToAbout = useCallback(() => {
    if (aboutSection.current) {
      window.scrollTo({
        top: aboutSection.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLocked,
        setIsLocked,
        portfolio,
        setPortfolio,
      }}
    >
      <div className="App">
        <Header
          scrollToHome={scrollToHome}
          scrollToSkils={scrollToSkils}
          scrollToPortfolio={scrollToPortfolio}
          scrollToAbout={scrollToAbout}
        />
        <div ref={homeSection}>
          <HomeContainer scrollToPortfolio={scrollToPortfolio} />
        </div>
        {!isLocked && (
          <>
            <section className="sectionPortfolio">
              {isUnderground && <Underground />}
              <div ref={portfolioSection}>
                <PortfolioContainer portfolio={portfolio} />
              </div>
            </section>
            <section ref={aboutSection}>
              <About />
            </section>
            <div ref={skilsSection}>
              <SkilsContainer />
            </div>
            <Novohoodonosor />
            <Footer />
          </>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
