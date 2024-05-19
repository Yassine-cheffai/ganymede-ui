import PocketBase from "pocketbase";

import { CoachType, CoachDetailsType } from "./utils/types";

const pb = new PocketBase("http://127.0.0.1:8090");

export const getCoachs = async () => {
  const records = await pb.collection("coachs").getFullList({
    sort: "-created",
    fields: "id,fullName,rating,specialities",
  });

  let result: CoachType[] = [];
  records.forEach((record) => {
    result.push({
      id: record.id,
      fullName: record.fullName,
      rating: record.rating,
      specialities: record.specialities,
    });
  });
  return result;
};

export const getCoach = async (id: string) => {
  const record = await pb.collection("coachs").getOne(id, {
    fields: "id,fullName,rating,specialities,description,email,instagram",
  });
  let result: CoachDetailsType = {
    id: record.id,
    fullName: record.fullName,
    rating: record.rating,
    specialities: record.specialities,
    description: record.description,
    email: record.email,
    instagram: record.instagram,
  };
  return result;
};
