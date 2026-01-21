export const DateUtils = {
  today(format: "yyyy-mm-dd" | "dd-mm-yyyy" = "yyyy-mm-dd") {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");

    if (format === "dd-mm-yyyy") return `${dd}-${mm}-${yyyy}`;
    return `${yyyy}-${mm}-${dd}`;
  },

  addDays(days: number, format: "yyyy-mm-dd" | "dd-mm-yyyy" = "yyyy-mm-dd") {
    const d = new Date();
    d.setDate(d.getDate() + days);

    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");

    if (format === "dd-mm-yyyy") return `${dd}-${mm}-${yyyy}`;
    return `${yyyy}-${mm}-${dd}`;
  },
};
