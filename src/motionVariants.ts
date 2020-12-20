const mv = {
  scrimVariants: {
    full: { scaleX: 1, transformOrigin: '100% 50%' },
    pullRight: {
      transformOrigin: '100% 50%',
      scaleX: 0.65,
      scaleY: 1,
      x: 0,
      borderRadius: '0',
    },
    pullLeft: {
      transformOrigin: ['100% 50%', '0% 50%'],
      scaleX: [0.65, 0.85],
      scaleY: 1,
      x: 0,
      borderRadius: '0',
    },
    square: {
      transformOrigin: '0% 50%',
      scaleX: 0.4,
      scaleY: 0.4,
      x: 50,
      borderRadius: '12px',
    },
  },
  heroVariants: {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  fadeVariants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },
};
export default mv;
