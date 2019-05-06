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

  const [currentMonthDaysArray, setcurrentMonthDaysArray] = useState([])
  const [selectedDay, setSelectedDay] = useState(currentDay)
  const [selectedMonth, setSelectedMonth] = useState(currentMonthString)
  const [selectedYear, setSelecteYear] = useState(currentYear)

  useEffect(() => {
    setMonthDays()
  }, [])

  useEffect(() => {
    currentMonthDaysArray.length > 0 && setMonthDays()
  }, [selectedMonth, selectedYear])

  const calcCurrentMonthDays = (date, daystoSkip) => {
    const monthDaysAmount = getDaysInMonth(date)
    const newMonths = []

    for (let i = 0; i < daystoSkip; i++) {
      newMonths.push(null)
    }

    for (let i = 0; i < monthDaysAmount; i++) {
      newMonths.push(i + 1)
    }
    setcurrentMonthDaysArray(newMonths)
  }

  const handleEventClick = (value) => {
    setSelectedDay(value)
    onEventClick(value)
  }

  const handleMonthSelect = (value) => setSelectedMonth(value)

  const handleYearSelect = (value) => setSelecteYear(value)

  const setMonthDays = () => {
    const currentDate = new Date(`${selectedMonth}, ${selectedYear}`)
    const daystoSkip = currentDate.getDay()
    calcCurrentMonthDays(currentDate, daystoSkip)
  }

  return (
    <Wrapper>
      <DatePickersCon>
        <DatePicker type='month' onSelect={handleMonthSelect} />
        <DatePicker
          type='year'
          onSelect={handleYearSelect}
          yearRange={yearRange}
        />
      </DatePickersCon>
      <WeekDaysTitles>
        {daysTitles.map((title) => (
          <span key={title}>{title}</span>
        ))}
      </WeekDaysTitles>
      <DayGrid>
        {currentMonthDaysArray.map((day) => {
          const isCurrentYear =
            currentYear.toString() === selectedYear.toString()
          const isCurrentMonth = currentMonthString === selectedMonth
          const isCurrentDay =
            isCurrentMonth && isCurrentYear && day === currentDay
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
