export const DURATION = 200;
export const DURATION_MEDIUM = 400;
export const DURATION_SLOW = 600;

export const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const STAGGER = 100;
export const REVEAL_Y = 64;

export const fadeUp = {
  hidden: { opacity: 0, y: REVEAL_Y },
  visible: { opacity: 1, y: 0 },
};

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};
