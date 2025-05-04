export const transition = {
  type: "spring",
  damping: 20,
  stiffness: 100,
  mass: 0.5,
  duration: 0.9,
};

export const headContainerAnimation = {
  initial: {
    x: -80,
    opacity: 0,
    filter: "blur(6px)",
    transition: { ...transition, delay: 0.3 },
  },
  animate: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { ...transition },
  },
  exit: {
    x: -80,
    opacity: 0,
    filter: "blur(6px)",
    transition: { ...transition },
  },
};

export const headTextAnimation = {
  initial: { x: 60, opacity: 0, filter: "blur(4px)" },
  animate: { x: 0, opacity: 1, filter: "blur(0px)" },
  transition: {
    type: "spring",
    damping: 14,
    stiffness: 80,
    duration: 0.6,
  },
};

export const headContentAnimation = {
  initial: { y: 80, opacity: 0, filter: "blur(6px)" },
  animate: { y: 0, opacity: 1, filter: "blur(0px)" },
  transition: {
    type: "spring",
    damping: 16,
    stiffness: 90,
    duration: 0.8,
    delay: 0.2,
    delayChildren: 0.2,
  },
};
