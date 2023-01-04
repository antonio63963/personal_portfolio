import React, { useCallback, useRef, useState } from "react";

import { Header } from "components";
import "./App.css";

import AppContext from "context/AppContext";
import { HomeContainer } from "containers";
import Underground from "components/Underground/Underground";
import PortfolioContainer from "containers/PortfolioContainer/PortfolioContainer";
import { Portfolio } from "context/AppContext.type";
import SkilsContainer from "containers/SkilsContainer/SkilsContainer";

function App() {
  const portfolioSection = useRef<HTMLDivElement>(null);
  const skilsSection = useRef<HTMLDivElement>(null);
  const [isShownHome, setIsShownHome] = useState<boolean>(true);
  const [isShownPortfolio, setIsShownPortfolio] = useState<boolean>(false);
  const [isLocked, setIsLocked] = useState<boolean>(true);
  const [portfolio, setPortfolio] = useState<Portfolio>(Portfolio.no);
  const [isShownSkils, setIsShownSkils] = useState<boolean>(false);

  const scrollToPortfolio = useCallback((portfolio: Portfolio) => {
    setPortfolio(portfolio);
    setIsShownPortfolio(true);
    let timerScroll = setTimeout(() => {
      if (portfolioSection.current) {
        window.scrollTo({
          top: portfolioSection.current.offsetTop,
          behavior: "smooth",
        });
        let timerDeleteHome = setTimeout(() => {
          setIsShownHome(false);
          clearTimeout(timerDeleteHome);
          console.log("TimerDell: ", timerDeleteHome);
        }, 1000);
        clearTimeout(timerScroll);
      }
    }, 100);
  }, []);
  const scrollToSkils = useCallback(() => {
    setIsShownSkils(true);
    let timerScroll = setTimeout(() => {
      if (skilsSection.current) {
        window.scrollTo({
          top: skilsSection.current.offsetTop,
          behavior: "smooth",
        });
        // let timerDeleteHome = setTimeout(() => {
        //   setIsShownHome(false);
        //   clearTimeout(timerDeleteHome);
        //   console.log("TimerDell: ", timerDeleteHome);
        // }, 1000);
        // clearTimeout(timerScroll);
      }
    }, 100);
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
        <Header scrollToSkils={scrollToSkils}/>
        {isShownHome && <HomeContainer scrollToPortfolio={scrollToPortfolio} />}
        {isShownPortfolio && (
          <>
            <section className="sectionPortfolio">
              {isShownHome && <Underground />}
              <div ref={portfolioSection}>
                <PortfolioContainer portfolio={portfolio}/>
              </div>
            </section>
            {isShownSkils && (
              <div ref={skilsSection}>
                <SkilsContainer />
              </div>
            )}
          </>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
