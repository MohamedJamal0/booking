import {
  differenceInDays,
  formatDistanceToNow,
  addDays,
  format,
  parseISO,
  isToday,
  isBefore,
} from 'date-fns';

import { enGB } from 'date-fns/locale';

export function getIndividualDates(disabledDates) {
  const individualDates = [];

  disabledDates.forEach((dateRange) => {
    const { startDate, endDate } = dateRange;

    const _startDate = new Date(startDate);
    const _endDate = new Date(endDate);

    const daysDifference = differenceInDays(_endDate, _startDate);

    for (let i = 0; i <= daysDifference; i++) {
      const currentDate = addDays(_startDate, i);
      individualDates.push(currentDate);
    }
  });

  return individualDates;
}

export const formatNumber = (number, locale = 'en-US', options = {}) => {
  return new Intl.NumberFormat(locale, options).format(number);
};

export function getDifferenceInDays(startDate, endDate) {
  return differenceInDays(new Date(endDate), new Date(startDate));
}

export function formatDate(date, option) {
  return format(parseISO(date), option);
}

export function isTodayOrBefore(date) {
  return isToday(parseISO(date)) || isBefore(parseISO(date), new Date());
}

export function timeDistance(date) {
  const parsedDate = parseISO(date);
  const distance = formatDistanceToNow(parsedDate, {
    addSuffix: true,
    locale: enGB,
  });

  if (isToday(parsedDate)) {
    return 'Today';
  } else {
    return distance;
  }
}

export function handleAxiosError(error) {
  let errorMessage = 'An unexpected error occurred';
  let statusCode = null;
  let errorType = null;

  if (error?.response) {
    errorMessage =
      error.response.data.message || 'An unexpected error occurred';
    errorType = error.response.data.type;
    statusCode = error.response.status;
  } else if (error?.request) {
    errorMessage =
      'No response received from the server. Please try again later.';
  } else {
    errorMessage = error?.message;
  }

  return { message: errorMessage, statusCode, type: errorType };
}
