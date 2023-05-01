type Maps = {
  id: number;
  name: string;
};

type MapsOption = {
  id: number;
  name: string;
};

enum RushEnum {
  A = "A",
  B = "B",
  Mid = "Mid",
}
enum WeaponEnum {
  Glock = "Glock",
  P250 = "P250",
  Deagle = "Deagle",
  Tec9 = "Tec9",
  Mac10 = "Mac10",
  Mp9 = "Mp9",
  Ump45 = "Ump45",
  P90 = "P90",
  Galil = "Galil",
  Ssg08 = "Ssg08",
}

enum ChallengeEnum {
  "Sans son" = "Sans son",
  "Sans flash" = "Sans flash",
  "Sans smoke" = "Sans smoke",
  "Only HS" = "Only HS",
  "Accroupi" = "Accroupi",
}

export const mapData: Maps[] = [
  {
    id: 1,
    name: "Mirage",
  },
  {
    id: 2,
    name: "Overpass",
  },
  {
    id: 3,
    name: "Dust2",
  },
  {
    id: 4,
    name: "Inferno",
  },
  {
    id: 5,
    name: "Train",
  },
  {
    id: 6,
    name: "Nuke",
  },
  {
    id: 7,
    name: "Vertigo",
  },
];

export const data = [
  { option: "0", style: { backgroundColor: "#5d79ae" } },
  { option: "1", style: { backgroundColor: "#de9b35" } },
  { option: "2" },
];

export const RushArray = () => {
  const rushArray = Object.keys(RushEnum).map((key) => {
    return {
      option: RushEnum[key as keyof typeof RushEnum],
      style: {
        backgroundColor:
          Object.keys(RushEnum).indexOf(
            RushEnum[key as keyof typeof RushEnum]
          ) %
            2 ===
          0
            ? "#5d79ae"
            : "#de9b35",
      },
    };
  });
  return rushArray;
};

export const WeaponArray = () => {
  const weaponArray = Object.keys(WeaponEnum).map((key) => {
    return {
      option: WeaponEnum[key as keyof typeof WeaponEnum],
      style: {
        backgroundColor:
          Object.keys(WeaponEnum).indexOf(
            WeaponEnum[key as keyof typeof WeaponEnum]
          ) %
            2 ===
          0
            ? "#5d79ae"
            : "#de9b35",
      },
    };
  });
  return weaponArray;
};

export const ChallengeArray = () => {
  const challengeArray = Object.keys(ChallengeEnum).map((key) => {
    return {
      option: ChallengeEnum[key as keyof typeof ChallengeEnum],
      style: {
        backgroundColor:
          Object.keys(ChallengeEnum).indexOf(
            ChallengeEnum[key as keyof typeof ChallengeEnum]
          ) %
            2 ===
          0
            ? "#5d79ae"
            : "#de9b35",
      },
    };
  });
  return challengeArray;
};
