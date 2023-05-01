import React, { useState } from "react";
import Button from "@/Component/Button";
import { Box, Text, Select, SimpleGrid, Center } from "@chakra-ui/react";
import CustomWheel from "@/Component/Wheel";
import CallToActionWithVideo from "@/Component/CTA";
import { data, mapData, RushArray, WeaponArray } from "../data/const";
type Props = {};

const Home = () => {
  const [mustSpin, setMustSpin] = useState(false);

  const handleSpinClick = () => {
    if (!mustSpin) {
      setMustSpin(true);
    }
  };

  return (
    <Box>
      <CallToActionWithVideo />
      <Text
        fontSize="6xl"
        sx={{
          fontWeight: "bold",
        }}
      >
        Veuillez choisir votre Map
      </Text>
      <Box
        sx={{
          maxWidth: "300px",
        }}
      >
        <Select placeholder="Select option">
          {mapData.map((map) => (
            <option key={map.id} value={map.name}>
              {map.name}
            </option>
          ))}
        </Select>
      </Box>
      <SimpleGrid columns={3} spacing={10}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text fontSize="2xl">Rush</Text>
          <CustomWheel
            data={RushArray()}
            mustSpin={mustSpin}
            prizeNumber={Math.floor(Math.random() * RushArray().length)}
            setMustSpin={setMustSpin}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text fontSize="2xl">Arme</Text>
          <CustomWheel
            data={WeaponArray()}
            mustSpin={mustSpin}
            prizeNumber={Math.floor(Math.random() * WeaponArray().length)}
            setMustSpin={setMustSpin}
          />
        </Box>

        <CustomWheel
          data={data}
          mustSpin={mustSpin}
          prizeNumber={Math.floor(Math.random() * data.length)}
          setMustSpin={setMustSpin}
        />
      </SimpleGrid>
      <Center
        sx={{
          my: 10,
        }}
      >
        <Button OnClick={() => handleSpinClick()}>
          <Text fontSize="2xl">Lancer la strat</Text>
        </Button>
      </Center>
    </Box>
  );
};

export default Home;
