import React, { memo, useEffect, useState } from 'react'
import getDaysInMonth from 'date-fns/get_days_in_month'

import Day from '../Day/day.index'
import DatePicker from '../DatePicker/datePicker.index'

import { defaultProps, propTypes } from './calendar.propTypes'
import {
  Wrapper,
  WeekDaysTitles,
  DayGrid,
  DatePickersCon,
} from './calendar.styles'

const Calendar = ({ onEventClick, yearRange }) => {
  const monthList = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]
  const daysTitles = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const currentDay = new Date().getDate()
  const currentMonthString = monthList[currentMonth]
  const currentDate = new Date(`${currentMonthString}, ${currentYear}`)
  const daystoSkip = currentDate.getDay()
  const yearList = []

  console.log(currentDay)

  const [selectedMonth, setselectedMonth] = useState(currentDate)
  const [currentMonthDaysArray, setcurrentMonthDaysArray] = useState([])
  const [selectedDay, setSelectedDay] = useState(currentDay)

  useEffect(() => {
    setCurrentMonthDays(selectedMonth)
  }, [])

  const setCurrentMonthDays = (monthDays) => {
    const monthDaysAmount = getDaysInMonth(monthDays)
    const current = currentMonthDaysArray.slice()

    for (let i = 0; i < daystoSkip; i++) {
      current.push(null)
    }

    for (let i = 0; i < monthDaysAmount; i++) {
      current.push(i + 1)
    }
    setcurrentMonthDaysArray(current)
  }

  const handleEventClick = (value) => {
    setSelectedDay(value)
    onEventClick(value)
  }

  return (
    <Wrapper>
      <DatePickersCon>
        <DatePicker data={monthList} defaultValue={currentMonthString} />
        <DatePicker data={monthList} defaultValue={currentYear} />
      </DatePickersCon>
      <WeekDaysTitles>
        {daysTitles.map((title) => (
          <span key={title}>{title}</span>
        ))}
      </WeekDaysTitles>
      <DayGrid>
        {currentMonthDaysArray.map((day) => {
          const isCurrentDay = day === currentDay
          const active = day === selectedDay
          return day ? (
            <Day
              key={day}
              number={day}
              onClick={handleEventClick}
              isCurrentDay={isCurrentDay}
              isActive={active}
            />
          ) : (
            <div key={Math.random()} />
          )
        })}
      </DayGrid>
    </Wrapper>
  )
}

Calendar.defaultProps = defaultProps
Calendar.propTypes = propTypes

export default memo(Calendar)
