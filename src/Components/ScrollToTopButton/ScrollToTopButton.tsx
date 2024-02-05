import './ScrollToTopButton.css';
import { useEffect, useState } from 'react'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-follow-button ${isVisible ? 'visible' : 'hidden'}`} 
      onClick={scrollToTop}
    >
      Top
    </button>
  );
};

export default ScrollToTopButton;
