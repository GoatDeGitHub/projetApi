import React, { useState, useEffect } from 'react';

export function Nav() {
  const [current, setCurrent] = useState("Accueil");
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleCurrent(nomItem) {
    setCurrent(nomItem);
  }

  const estCurrent = (itemName) => {
    return itemName === current ? { backgroundColor: 'rgba(255, 255, 255, 0.1)' } : {};
  }

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const maxScroll = 870;
  const transparency = Math.min(scrollPosition / maxScroll, 1); // Calculate transparency based on scroll position
  const linearTransparency = Math.min(scrollPosition / maxScroll, 1); // Use linear transparency for gradual fade-in
  const navbarColor = scrollPosition > maxScroll ? `rgba(0, 0, 0, ${linearTransparency})` : 'rgba(0, 0, 0, 0)'; // Change bg-dark to transparent black

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top`} style={{ backgroundColor: navbarColor, transition: 'background-color 0.5s ease' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><strong>Navbar</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Navigation mobile">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" id='custom-nav-item' style={estCurrent('Accueil')}>
                <a className="nav-link" id='custom-link' href="#" onClick={() => handleCurrent("Accueil")}>Accueil</a>
              </li>
              <li className="nav-item" id='custom-nav-item' style={estCurrent('Lien')}>
                <a className="nav-link" id='custom-link' href="#" onClick={() => handleCurrent("Lien")}>Lien</a>
              </li>
              <li className="nav-item" id='custom-nav-item' style={estCurrent('Profil')}>
                <a className="nav-link" id='custom-link' href="#" onClick={() => handleCurrent("Profil")}>Profil</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
