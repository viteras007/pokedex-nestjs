export const isEmptyString = (value) => {
  if (typeof value !== "string") return false;
  if (value.trim() === "") return true;
  return false;
}

export function exists(value) {
  if (value === undefined || value === null) return false;
  return true;
}

export function notExists(value) {
  if (value === undefined || value === null) return true;
  return false;
}

export function firstLetterUppercase(value) {
  if ( typeof value == "string") {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}