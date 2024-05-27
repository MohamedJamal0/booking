import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { differenceInCalendarDays, isSameDay } from 'date-fns';
import { getIndividualDates } from '../utils/helper';
import useIsMobile from '../hooks/useIsMobile';
import toast from 'react-hot-toast';

export default function DateRangePicker({
  value,
  onChange,
  minDays = null,
  disabledDates = [],
  ...props
}) {
  const { startDate, endDate } = value;

  const { isMobile } = useIsMobile();

  const handleDateChange = (item) => {
    let { startDate, endDate } = item.selection;

    if (
      minDays &&
      !isSameDay(startDate, endDate) &&
      differenceInCalendarDays(endDate, startDate) < minDays
    )
      return toast.error(`Please select at least ${minDays} nights`);

    onChange({
      startDate: format(startDate, 'yyyy-MM-dd'),
      endDate: endDate && format(endDate, 'yyyy-MM-dd'),
    });
  };

  const state = [
    {
      startDate: startDate ? new Date(startDate) : new Date(),
      endDate: endDate ? new Date(endDate) : new Date(),
      key: 'selection',
    },
  ];

  const dates = getIndividualDates(disabledDates);

  return (
    <DateRange
      className="w-full text-[16px]"
      minDate={new Date()}
      editableDateInputs={true}
      showDateDisplay={false}
      onChange={handleDateChange}
      moveRangeOnFirstSelection={false}
      ranges={state}
      rangeColors={['black']}
      months={isMobile ? 1 : 2}
      direction="horizontal"
      disabledDates={dates}
      endDatePlaceholder="End Date"
      {...props}
    />
  );
}
