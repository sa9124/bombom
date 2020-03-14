new Scene({
  ".d-back": i => ({
    transform: {
      scaleX: [0, 1],
    },
    options: {
      duration: 1,
      delay: i * 0.2,
    },
  }),
  ".character span": i => ({
    transform :{
      translate:["-150%", "0%"]
    },
    options:{
      duration:1,
      delay:0.2 + i*0.2
    }
  }),
}, {
  iterationCount: 1,
  easing: "ease-in-out",
  selector: true,
}).playCSS();