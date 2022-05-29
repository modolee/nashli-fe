import React, { useEffect, useState } from 'react';
import ScheduleView from './schedule.view';
import { getTodayString, getTomorrowString } from '../../../../helpers/time.helper';
import { getSchedule } from '../../../../helpers/api.helper';

const ScheduleContainer = () => {
  const [date, setDate] = useState('');
  const [schedule, setSchedule] = useState({});
  const [count, setCount] = useState(0);

  const fetchSchedule = async () => {
    let date = getTomorrowString();
    let scheduleResult = await getSchedule(date);

    if (!(scheduleResult?.success && scheduleResult?.data)) {
      date = getTodayString();
      scheduleResult = await getSchedule(date);
    }

    const scheduleData = scheduleResult.data;

    let scheduleArray: any[] = [];

    if (Object.keys(scheduleData?.simpleBroadcasts).length > 0) {
      Object.values(scheduleData.simpleBroadcasts).map((broadcast: any) => {
        scheduleArray = [...scheduleArray, ...broadcast];
      });

      setDate(scheduleData.date);
      setCount(scheduleArray.length);
      setSchedule(Object.entries(scheduleData.simpleBroadcasts).sort(sortSchedule));
    }
  };

  // 시간 별 정렬이 안되서 수동으로 정렬 시킴
  const sortSchedule = ([leftDate]: [string, unknown], [rightDate]: [string, unknown]) => {
    const [leftHours, leftMinutes] = leftDate.split(':');
    const [rightHours, rightMinutes] = rightDate.split(':');
    const leftNumber = Number.parseInt(leftHours, 10) * 100 + Number.parseInt(leftMinutes, 10);
    const rightNumber = Number.parseInt(rightHours, 10) * 100 + Number.parseInt(rightMinutes, 10);
    return leftNumber - rightNumber;
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  return <ScheduleView date={date} count={count} schedule={schedule} />;
};

export default ScheduleContainer;
