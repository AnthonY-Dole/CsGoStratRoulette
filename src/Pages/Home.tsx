import React, { useState } from "react";
import Button from "@/Component/Button";
import { Box, Text, Select, SimpleGrid, Center } from "@chakra-ui/react";
import CustomWheel from "@/Component/Wheel";
import CallToActionWithVideo from "@/Component/CTA";
import {
  data,
  mapData,
  RushArray,
  WeaponArray,
  ChallengeArray,
} from "../data/const";
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
      <SimpleGrid spacing={10} columns={{ sm: 1, md: 2, lg: 3 }}>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text fontSize="2xl">Challenge</Text>
          <CustomWheel
            data={ChallengeArray()}
            mustSpin={mustSpin}
            prizeNumber={Math.floor(Math.random() * ChallengeArray().length)}
            setMustSpin={setMustSpin}
          />
        </Box>
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
