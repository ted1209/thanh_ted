import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import * as Styles from './ScrollButton.style';

function ScrollTopButton({ scrollStepInPx, delayTime }: any) {
  const colors = useSelector((state: any) => state.colors);
  const timeOutRef = useRef<any>(null);

  const scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeOutRef.current);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  const scrollToTop = () => {
    timeOutRef.current = setInterval(() => scrollStep(), delayTime);
  };

  return (
    <Styles.ScrollTopButton colors={colors} onClick={() => scrollToTop()}>
      <i className="fas fa-arrow-up fa-md" />
    </Styles.ScrollTopButton>
  );
}

export default ScrollTopButton;
