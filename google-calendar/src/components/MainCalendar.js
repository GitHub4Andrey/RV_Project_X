import React, {useState, useContext, useEffect} from 'react'
import { getMonth } from '../util';
import CalendarHeader from './CalendarHeader';
import Sidebar from './Sidebar';
import Month from './Month';
import GlobalContext from '../context/GlobalContext';
import EventModal from './EventModal';

const MainCalendar = () => {
  const [currMonth, setCurrMonth] = useState(getMonth())
  const { monthIndex, showEventModal } = useContext(GlobalContext)

  useEffect(() => {
    setCurrMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currMonth}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainCalendar;