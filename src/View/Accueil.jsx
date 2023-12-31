import React, { useEffect, useRef } from 'react';
import { Main } from '../Compoments/Main';
import { Header } from '../Compoments/Header';

export function Accueil() {
  const scrollDirectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const headerSection = document.getElementById('headerSection');
      const mainSection = document.getElementById('mainSection');

      const headerHeight = headerSection.offsetHeight;

      const triggerPoint = headerHeight;

      if (scrollPosition > triggerPoint && scrollDirectionRef.current === 'up') {
        // Descendre
        scrollDirectionRef.current = 'down';
        window.scrollTo({
          top: headerHeight,
          behavior: 'smooth',
        });
      } else if (scrollPosition < triggerPoint && scrollDirectionRef.current === 'down') {
        // Remonter
        scrollDirectionRef.current = 'up';
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
        <Header />
        <Main />
    </>
  );
}
