import clsx from 'clsx';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import scss from './DateFromNow.module.scss';

import type { ConfigType } from 'dayjs';

type DateFromNowProps = {
  className?: string;
  date: ConfigType;
};

interface Units {
  unit: 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';
  cutoff: number;
  label?: string;
}
const units: Units[] = [
  { unit: 'second', cutoff: 30 },
  { unit: 'minute', cutoff: 59.5, label: 'min' },
  { unit: 'hour', cutoff: 23.5 },
  { unit: 'day', cutoff: 6.5 },
  { unit: 'week', cutoff: 3.5 },
  { unit: 'month', cutoff: 11.5 },
  { unit: 'year', cutoff: 1.5 },
];
dayjs.extend(relativeTime);

// TIME SLICE
// WILL FORMAT ACCORDING TO THE units Array,STARS WITH SECONDS
// AND COMPARES TO cutoff VALUE ONCE ITS MORE THAN IT (RIGHT NOW 30 SECONDS) WILL MOVE TO NEXT UNIT AND SO ON
const timeSlice = (date: ConfigType): string => {
  const now = dayjs();
  const diffInSeconds = now.diff(date, 'second');
  if (diffInSeconds < 30) return 'few seconds ago';

  const unit = units.find(({ unit: searchedUnit, cutoff }) => {
    const diffInUnit = now.diff(date, searchedUnit, true);
    return diffInUnit < cutoff;
  });

  if (unit) {
    const diffInUnit = now.diff(date, unit.unit, true);
    if (diffInUnit < 1.5) return `1 ${unit.label || unit.unit} ago`;
    return `${Math.round(diffInUnit)} ${unit.label || unit.unit}s ago`;
  }

  const diffInYears = now.diff(date, 'year', true);
  return `${Math.round(diffInYears)} years ago`;
};

export const DateFromNow = ({ date, className }: DateFromNowProps) => (
  <span className={clsx(scss.date, className)}>{timeSlice(date)}</span>
);
