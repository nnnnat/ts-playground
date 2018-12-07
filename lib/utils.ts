export interface DateRange {
  startDate: Date;
  endDate: Date;
}

const TODAY: Date = new Date();

export const activeDate = ({ endDate, startDate }: DateRange): boolean =>
  (TODAY > startDate && TODAY < endDate);
