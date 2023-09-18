import AgeCalculator from "@/js/AgeCalculator";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function AgeCard() {
  const [edad, setEdad] = useState(0);

  const props = useSpring({
    number: AgeCalculator("1999-10-10"),
    from: { number: 0 },
    config: { duration: 500 }, // Duración de la animación en milisegundos
    delay: 0, // Retardo antes de que comience la animación en milisegundos
    onFrame: ({ number }) => {
      setEdad(Math.floor(number));
    },
  });

  return (
    <>
      <Typography variant="h6" className="text-white">
        Age
      </Typography>
      <Typography variant="h2" className="text-white">
        <animated.span>
          {props.number.to((val) => Math.floor(val))}
        </animated.span>
      </Typography>
      <Typography variant="h6" className="text-white">
        Years Old
      </Typography>
    </>
  );
}
