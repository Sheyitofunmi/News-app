import { DateTime } from "luxon";

export function formatPublishedDate(dateString) {
  try {
    const isoDate = DateTime.fromISO(dateString);

    if (isoDate.isValid) {
      return isoDate.toLocaleString(DateTime.DATETIME_SHORT);
    } else {
      // Handle other date formats if needed
      const formattedDate = DateTime.fromFormat(
        dateString,
        "yyyy-MM-dd HH:mm:ss"
      );
      if (formattedDate.isValid) {
        return formattedDate.toLocaleString(DateTime.DATETIME_SHORT);
      } else {
        return dateString;
      }
    }
  } catch (error) {
    console.error("Error parsing date:", error);
    return "Invalid Date";
  }
}
