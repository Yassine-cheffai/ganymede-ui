export const formatSpecialities = (specialites: string[]) => {
  let result = specialites.slice(0, 3).join(", ");
  if (specialites.length > 3) {
    result += " ...";
  }
  return result;
};
