import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const WeekDaysTitles = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;

  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
  }
`

export const DayGrid = styled.div`
  background-color: green;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px 1px;
`
