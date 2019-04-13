import { useEffect, useState } from 'react';
import useInterval from './useInterval';

const timeLeft = {
  years: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

interface CountdownObject {
  readonly years: number | string;
  readonly days: number | string;
  readonly hours: number | string;
  readonly minutes: number | string;
  readonly seconds: number | string;
}

const pad = value => {
  if (value < 10) {
    return '0' + value;
  }
  return value.toString();
};

function calculateCountdown(endDate): CountdownObject {
  const results = {
    years: '00',
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  };

  let diff = (Number(new Date(endDate)) - Number(new Date())) / 1000;

  // clear countdown when date is reached
  if (diff <= 0) {
    return pad(results);
  }

  // calculate time difference between now and expected date
  if (diff >= 365.25 * 86400) {
    // 365.25 * 24 * 60 * 60
    results.years = pad(Math.floor(diff / (365.25 * 86400)));
    diff -= +results.years * 365.25 * 86400;
  }
  if (diff >= 86400) {
    // 24 * 60 * 60
    results.days = pad(Math.floor(diff / 86400));

    diff -= +results.days * 86400;
  }
  if (diff >= 3600) {
    // 60 * 60
    results.hours = pad(Math.floor(diff / 3600));
    diff -= +results.hours * 3600;
  }
  if (diff >= 60) {
    results.minutes = pad(Math.floor(diff / 60));
    diff -= +results.minutes * 60;
  }
  results.seconds = pad(Math.floor(diff));

  return results;
}

const useCountdownClock = (date: any) => {
  const [state, setState] = useState(calculateCountdown(date));

  useInterval(() => {
    const result = calculateCountdown(date);
    setState(v => {
      return {
        ...v,
        ...result,
      };
    });
  }, 1000);

  return state;
};

export default useCountdownClock;
