import React, { useCallback, useRef, useState } from "react";

import { Header } from "components";
import "./App.css";
import { HomeContainer } from "containers";
import Underground from "components/Underground/Underground";
import PortfolioContainer from "containers/Portfolio/PortfolioContainer";

function App() {
  const portfolioSection = useRef<HTMLDivElement>(null);
  const [isShownHome, setIsShownHome] = useState<boolean>(true);
  const [isShownPortfolio, setIsShownPortfolio] = useState<boolean>(false);

  const goToPortfolio = useCallback((portfolio: string) => {
    setIsShownPortfolio(true);
   let timerScroll = setTimeout(() => {
    if(portfolioSection.current) {
      console.log('scrollTo')
      window.scrollTo({
        top: portfolioSection.current.offsetTop,
        behavior: "smooth",
      });
      let timerDeleteHome = setTimeout(() => {
        setIsShownHome(false);
        clearTimeout(timerDeleteHome);
        console.log('TimerDell: ', timerDeleteHome);
      }, 1000);
      clearTimeout(timerScroll);
    }
   }, 100);
  }, []);

  return (
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
  );
}

export default App;
