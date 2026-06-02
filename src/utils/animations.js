export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const hoverScale = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.03, 
    transition: { duration: 0.2, ease: "easeInOut" } 
  }
};

export const buttonHover = {
  rest: { scale: 1, opacity: 1 },
  hover: { 
    scale: 1.05, 
    opacity: 0.9,
    boxShadow: "0px 10px 20px rgba(249, 115, 22, 0.2)",
    transition: { duration: 0.2 } 
  },
  tap: { scale: 0.95 }
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};
