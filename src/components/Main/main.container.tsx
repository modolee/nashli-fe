import React, { useEffect, useState } from 'react';
import { MainView } from './main.view';
import { getSchedule } from '../../helpers/api.helper';
import { getTodayString } from '../../helpers/time.helper';

export const MainContainer = () => {
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

  return <MainView date={date} count={count} schedule={schedule} />;
};
