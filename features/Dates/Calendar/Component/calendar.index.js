import React, { memo, useEffect, useState } from 'react'
import getDaysInMonth from 'date-fns/get_days_in_month'

import Day from '../Day/day.index'

import { defaultProps, propTypes } from './calendar.propTypes'
import { Wrapper, WeekDaysTitles, DayGrid } from './calendar.styles'

const Calendar = () => {
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
  var currentYear = new Date().getFullYear()
  var currentMonth = new Date().getMonth()
  const currentDate = new Date(`${monthList[currentMonth]}, ${currentYear}`)
  const daystoSkip = currentDate.getDay()

  const [selectedMonth, setselectedMonth] = useState(currentDate)
  const [currentMonthDaysArray, setcurrentMonthDaysArray] = useState([])

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

  return (
    <Wrapper>
      <WeekDaysTitles>
        {daysTitles.map((title) => (
          <span key={title}>{title}</span>
        ))}
      </WeekDaysTitles>
      <DayGrid>
        {currentMonthDaysArray.map((day) =>
          day ? <Day key={day} accepted number={day} /> : <div />,
        )}
      </DayGrid>
    </Wrapper>
  )
}

Calendar.defaultProps = defaultProps
Calendar.propTypes = propTypes

export default memo(Calendar)
