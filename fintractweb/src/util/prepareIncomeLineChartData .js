// src/util/prepareIncomeLineChartData.js
import moment from "moment";

export const prepareIncomeLineChartData = (transactions = []) => {
  // group income by day
  const grouped = transactions.reduce((acc, t) => {
    const day = moment(t.date).format("DD MMM"); // e.g. 01 Jan, 15 Feb
    acc[day] = (acc[day] || 0) + Number(t.amount);
    return acc;
  }, {});

  // sort days properly
  const sortedDays = Object.keys(grouped).sort(
    (a, b) => moment(a, "DD MMM").toDate() - moment(b, "DD MMM").toDate()
  );

  // convert to array
  return sortedDays.map((day) => ({
    day,
    income: grouped[day],
  }));
};
