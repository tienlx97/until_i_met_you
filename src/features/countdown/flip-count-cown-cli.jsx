'use client'

import { FlipCountDown } from './v1/flip-count-down'

export const FlipCountDownCli = () => {
  return (
    <FlipCountDown
      title="Until I met you"
      startTime={new Date()}
      endTime={new Date('2026-09-02T00:00:00')}
    />
  )
}
