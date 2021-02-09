import React, { useEffect, useState } from 'react';
import ScheduleView from './schedule.view';
import { getTodayString } from '../../../helpers/time.helper';
import { getSchedule } from '../../../helpers/api.helper';

export default () => {
  const [date, setDate] = useState('');
  const [schedule, setSchedule] = useState({});
  const [count, setCount] = useState(0);

  const fetchSchedule = async () => {
    const today = getTodayString();
    const scheduleResult = await getSchedule(today);

    if (scheduleResult?.success) {
      const scheduleData = scheduleResult.data;

      let scheduleArray: any[] = [];

      Object.values(scheduleData.simpleBroadcasts).map((broadcast: any) => {
        scheduleArray = [...scheduleArray, ...broadcast];
      });

      setDate(scheduleData.date);
      setCount(scheduleArray.length);
      setSchedule(Object.entries(scheduleData.simpleBroadcasts));
    }
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  return <ScheduleView date={date} count={count} schedule={schedule} />;
};
