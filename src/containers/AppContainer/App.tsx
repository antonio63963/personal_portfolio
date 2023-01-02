import React, { useCallback, useRef, useState } from "react";

import { Header } from "components";
import "./App.css";

import AppContext from "context/AppContext";
import { HomeContainer } from "containers";
import Underground from "components/Underground/Underground";
import PortfolioContainer from "containers/PortfolioContainer/PortfolioContainer";
import { Portfolio } from "context/AppContext.type";

function App() {
  const portfolioSection = useRef<HTMLDivElement>(null);
  const [isShownHome, setIsShownHome] = useState<boolean>(true);
  const [isShownPortfolio, setIsShownPortfolio] = useState<boolean>(false);
  const [isAccessible, setIsAccessible] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState<Portfolio>(Portfolio.no);

  const goToPortfolio = useCallback((portfolio: string) => {
    setIsShownPortfolio(true);
    let timerScroll = setTimeout(() => {
      if (portfolioSection.current) {
        console.log("scrollTo");
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

  return (
    <AppContext.Provider
      value={{
        isAccessible,
        setIsAccessible,
        portfolio,
        setPortfolio,
      }}
    >
      <div className="App">
        <Header />
        {isShownHome && <HomeContainer goToPortfolio={goToPortfolio} />}
        {isShownPortfolio && (
          <section className="sectionPortfolio">
            {isShownHome && <Underground />}
            <div ref={portfolioSection}>
              <PortfolioContainer />
            </div>
          </section>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
