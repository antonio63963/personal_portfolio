import React, { useCallback, useEffect, useRef, useState } from 'react';

import { About, Header } from 'components';
import './App.css';

import AppContext from 'context/AppContext';
import { HomeContainer } from 'containers';
import Underground from 'components/Underground/Underground';
import PortfolioContainer from 'containers/PortfolioContainer/PortfolioContainer';
import { Portfolio } from 'context/AppContext.type';
import { WebPortfolioLayout, MotionPortfolioLayout } from 'components';
import SkilsContainer from 'containers/SkillsContainer/SkillsContainer';
import Footer from 'components/Footer/Footer';
import Novohoodonosor from 'components/Novohoodonosor/Novohoodonosor';

function App() {
  const webSection = useRef<HTMLDivElement>(null);
  const motionSection = useRef<HTMLDivElement>(null);
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
        document.body.style.overflow = "scroll";
      }
      setPortfolio(portfolio);
      console.log(webSection)
      // window.addEventListener('scroll', (e) => {
      //   // console.log('Scroll: ', e);
      //   // setIsUnderground(false);
      //   // clearTimeout(timerScroll);
      //    scrollTest();
      // });
      const timerScroll = setTimeout(() => {
        if (portfolio === Portfolio.web && webSection.current) {
          window.scrollTo({
            top: webSection.current.offsetTop,
            behavior: 'smooth',
          });
          let timerDeleteHome = setTimeout(() => {
            setIsUnderground(false);
            clearTimeout(timerScroll);
            clearTimeout(timerDeleteHome);
          }, 1500);
        } else if (motionSection.current) {
          window.scrollTo({
            top: motionSection.current.offsetTop,
            behavior: 'smooth',
          });
          let timerDeleteHome = setTimeout(() => {
            setIsUnderground(false);
            clearTimeout(timerScroll);
            clearTimeout(timerDeleteHome);
          }, 1000);
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
          behavior: 'smooth',
        });
        let timerDeleteHome = setTimeout(() => {
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
        behavior: 'smooth',
      });
    }
  }, []);
  const scrollToAbout = useCallback(() => {
    if (aboutSection.current) {
      window.scrollTo({
        top: aboutSection.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    document.body.style.overflow = "hidden";
  } , [])

  return (
    <AppContext.Provider
      value={{
        isLocked,
        setIsLocked,
        portfolio,
        setPortfolio,
      }}
    >
      <div className='App'>
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
            <section className='sectionPortfolio'>
              {isUnderground && <Underground />}
              <div ref={webSection}>
                <PortfolioContainer portfolio={Portfolio.web}>
                  <WebPortfolioLayout />
                </PortfolioContainer>
              </div>
              <div ref={motionSection}>
                <PortfolioContainer portfolio={Portfolio.motion}>
                  <MotionPortfolioLayout />
                </PortfolioContainer>
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
