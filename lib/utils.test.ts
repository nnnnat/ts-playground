import { activeDate, DateRange } from "./utils";

const today = new Date();
// mock date ranges

// an active 30 day date rage that starts today
const activeDateRange: DateRange = {
  startDate: today,
  endDate: new Date(today.setDate(today.getDate() + 30))
};

// a inactive 30 day date range that ended yesterday
const inactiveDateRange: DateRange = {
  startDate: new Date(today.setDate(today.getDate() - 30)),
  endDate: new Date(today.setDate(today.getDate() - 1))
};

test("active date range", () => {
  expect(activeDate(activeDateRange)).toBe(true);
});

test("inactive date range", () => {
  expect(activeDate(inactiveDateRange)).toBe(false);
});
