export const getCoachs = async () => {
  return [
    {
      id: 1,
      fullName: "Yuri boyka",
      rating: 4.5,
      specialities: ["boxing", "wrestling", "karate", "bjj"],
    },
    {
      id: 2,
      fullName: "Tony Jaa",
      rating: 4.5,
      specialities: ["box thai"],
    },
    {
      id: 3,
      fullName: "Jason statham",
      rating: 4.5,
      specialities: ["boxing", "kicking"],
    },
  ];
};

export const getCoach = async (id: number) => {
  return {
    id: 1,
    fullName: "Yuri boyka " + id,
    rating: 4.5,
    specialities: ["boxing", "wrestling", "karate", "bjj"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur sapien est, malesuada et sapien vitae, pellentesque dictum diam. Fusce egestas id justo ut auctor. Aenean felis nunc, laoreet sed sagittis vitae",
    email: "boyka@yandex.ru",
    instagram: "instagram/boyka",
  };
};
