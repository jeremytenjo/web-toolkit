import React, { memo } from 'react'

import IllSchedule from '../../Illustration/Ui/React/calendar/style1'
import EmptyPage from '../Component/emptyPage.index'

const EmptyPageSchedule = () => {
  return (
    <EmptyPage
      title='No appointments'
      buttonText='ADD FIRST Appointment'
      image={<IllSchedule />}
    />
  )
}

export default memo(EmptyPageSchedule)
