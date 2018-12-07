import { activeDate, DateRange } from "./lib/utils";

function hey(word: string): string {
  return `hey ${word}`;
}

console.log(hey("dude"), activeDate({ startDate: new Date("2018-12-01"), endDate: new Date("2018-12-10")}));
