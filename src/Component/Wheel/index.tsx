import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Button, Flex } from "@chakra-ui/react";

type CustomWheelProps = {
  data: any;
  mustSpin: boolean;
  prizeNumber: number;
  setMustSpin: (value: boolean) => void;
};
const CustomWheel = (props: CustomWheelProps) => {
  const { data, mustSpin, prizeNumber, setMustSpin } = props;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mt={10}
    >
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
      />
    </Flex>
  );
};

export default CustomWheel;
