"use client"

import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieAnimation = () => {
  return (
      <DotLottiePlayer
        src="/animation_ln8y5hv8.lottie"
        autoplay
        loop
      >
      </DotLottiePlayer>
  );
};

export default LottieAnimation;