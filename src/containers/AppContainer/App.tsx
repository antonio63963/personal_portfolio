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
import useElementOnScreen from "hooks/useElementOnScreen";

function App() {
  const portfolioSection = useRef<HTMLDivElement>(null);
  const skilsSection = useRef<HTMLDivElement>(null);
  const aboutSection = useRef<HTMLDivElement>(null);

  const [isShownHome, setIsShownHome] = useState<boolean>(true);
  const [isLocked, setIsLocked] = useState<boolean>(true);
  const [portfolio, setPortfolio] = useState<Portfolio>(Portfolio.motion);

  const scrollToPortfolio = useCallback((portfolio: Portfolio) => {
    setPortfolio(portfolio);
    let markerTimerScroll = false;
    const timerScroll = setInterval(() => {
      if (portfolioSection.current && !markerTimerScroll) {
        markerTimerScroll = true;
        window.scrollTo({
          top: portfolioSection.current.offsetTop,
          behavior: "smooth",
        });
        let timerDeleteHome = setTimeout(() => {
          setIsShownHome(false);
          clearTimeout(timerDeleteHome);
        }, 1000);
      } else {
        clearInterval(timerScroll);
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
      if (skilsSection.current) {
        window.scrollTo({
          top: skilsSection.current.offsetTop,
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
          scrollToSkils={scrollToSkils}
          scrollToPortfolio={scrollToPortfolio}
          scrollToAbout={scrollToAbout}
        />
        {isShownHome && <HomeContainer scrollToPortfolio={scrollToPortfolio} />}
        {!isLocked && (
          <>
            <section className="sectionPortfolio">
              {isShownHome && <Underground />}
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
            <Footer />
          </>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
