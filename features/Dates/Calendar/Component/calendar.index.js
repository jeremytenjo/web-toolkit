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

  const [yearList, setyearList] = useState([])
  const [currentMonthDaysArray, setcurrentMonthDaysArray] = useState([])
  const [selectedDay, setSelectedDay] = useState(currentDay)
  const [selectedMonth, setSelectedMonth] = useState(currentDate)
  const [selectedYear, setSelecteYear] = useState(currentYear)

  useEffect(() => {
    handleDateChange()
    calcYearRange()
  }, [])

  useEffect(() => {
    currentMonthDaysArray.length > 0 && handleDateChange()
  }, [selectedMonth, selectedYear])

  const calcYearRange = () => {
    const years = []
    for (let i = 0; i < yearRange; i++) {
      years.push(Math.abs(i + 1 - currentYear))
    }

    years.reverse()
    years.push(currentYear)

    for (let i = 0; i < yearRange; i++) {
      years.push(Math.abs(i + 1 + currentYear))
    }
    setyearList(years)
  }

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

  const handleDateChange = () => {
    const currentDate = new Date(`${selectedMonth}, ${selectedYear}`)
    const daystoSkip = currentDate.getDay()
    calcCurrentMonthDays(currentDate, daystoSkip)
  }

  return (
    <Wrapper>
      <DatePickersCon>
        <DatePicker
          data={monthList}
          defaultValue={currentMonthString}
          onSelect={handleMonthSelect}
        />
        <DatePicker
          data={yearList}
          defaultValue={currentYear}
          onSelect={handleYearSelect}
        />
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
