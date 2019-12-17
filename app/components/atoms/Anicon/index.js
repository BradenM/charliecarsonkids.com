/**
 *
 * Anicon
 *
 * Atom
 */

import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { AniconURL } from 'utils/getStatic';

const HoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Anicon = ({ name, loop, rotate, hoverable, moveTo, ...props }) => {
  const [direction, setDirection] = useState(-1);

  const animRef = useRef(null);

  const handleMouseEvent = () => {
    const {
      current: { animationItem },
    } = animRef;
    animationItem.play();
    setDirection(direction > 0 ? -1 : 1);
  };

  const handleCatchFrame = () => {
    const {
      current: { animationItem },
    } = animRef;
    const { currentFrame } = animationItem;
    const delim = moveTo - 0.5;
    if (currentFrame >= delim) {
      animationItem.pause();
    }
  };

  const renderConfig = {
    autoplay: false,
    path: AniconURL(name),
    loop: false,
  };

  return (
    <HoverContainer
      className="anicon-container"
      onMouseEnter={hoverable ? handleMouseEvent : () => {}}
      onMouseLeave={hoverable ? handleMouseEvent : () => {}}
    >
      <Lottie
        direction={direction}
        ref={animRef}
        lottieEventListeners={[
          { name: 'enterFrame', callback: handleCatchFrame },
          {
            name: 'data_ready',
            callback: () => animRef.current.animationItem.stop(),
          },
        ]}
        style={{
          transform: `rotate(${rotate}deg)`,
          cursor: 'pointer',
        }}
        config={renderConfig}
        {...props}
      />
    </HoverContainer>
  );
};

Anicon.defaultProps = {
  rotate: '0',
  loop: false,
  hoverable: true,
};

Anicon.propTypes = {
  name: PropTypes.string.isRequired,
  rotate: PropTypes.string,
  loop: PropTypes.bool,
  hoverable: PropTypes.bool,
  ...Lottie.propTypes,
};

export default Anicon;
