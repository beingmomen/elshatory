import { useDateFormat } from "@vueuse/core";
export const useFormatDate = (dateOptions) => {
  const {
    date,
    format = "YYYY-MM-DD",
    options = { locales: "ar-EG" },
  } = dateOptions || {};

  const formatted = useDateFormat(date, format, options);

  return formatted;
};
