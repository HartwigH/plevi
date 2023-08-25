import { format, parseISO } from "date-fns";
import { et } from "date-fns/esm/locale";

export const getDate = (date: string) => {
  return format(parseISO(date), "EEEEE dd.MMMM", { locale: et });
};
