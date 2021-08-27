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
      setSchedule(Object.entries(scheduleData.simpleBroadcasts));
    }
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  return <ScheduleView date={date} count={count} schedule={schedule} />;
};

export default ScheduleContainer;
