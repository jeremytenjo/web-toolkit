import React, { memo, useEffect, useState } from 'react'
import getDaysInMonth from 'date-fns/get_days_in_month'

import daysList from '../Utils/daysList'
import monthList from '../Utils/monthList'
import Day from '../Day/day.index'
import DatePicker from '../DatePicker/datePicker.index'

import { defaultProps, propTypes } from './calendar.propTypes'
import {
  Wrapper,
  WeekDaysTitles,
  DayGrid,
  DatePickersCon,
} from './calendar.styles'

const Calendar = ({ onDateSelect, yearRange }) => {
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

  const handleDaySelect = (day) => {
    setSelectedDay(day)
    onDateSelect({ day, month: selectedMonth, year: selectedYear })
  }

  const handleMonthSelect = (month) => {
    setSelectedMonth(month)
    onDateSelect({ day: selectedDay, month, year: selectedYear })
  }

  const handleYearSelect = (year) => {
    setSelecteYear(year)
    onDateSelect({ day: selectedDay, month: selectedMonth, year })
  }

  const setMonthDays = () => {
    const currentDate = new Date(`${selectedMonth}, ${selectedYear}`)
    const daystoSkip = currentDate.getDay()
    calcCurrentMonthDays(currentDate, daystoSkip)
  }

  const defineIsCurrentDate = (day) => {
    const isCurrentYear = currentYear.toString() === selectedYear.toString()
    const isCurrentMonth = currentMonthString === selectedMonth
    const isCurrentDay = day === currentDay
    return isCurrentYear && isCurrentMonth && isCurrentDay
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
        {daysList.map((title) => (
          <span key={title}>{title}</span>
        ))}
      </WeekDaysTitles>
      <DayGrid>
        {currentMonthDaysArray.map((day) => {
          const isCurrentDay = defineIsCurrentDate(day)
          const active = day === selectedDay
          return day ? (
            <Day
              key={day}
              number={day}
              onClick={handleDaySelect}
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
