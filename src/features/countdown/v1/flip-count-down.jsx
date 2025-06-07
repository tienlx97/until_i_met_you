'use client'

import { getDHMS, useCountDown } from '@/hooks/use-count-down'
import { TimeBox } from './time-box'
import { css } from '../../../../styled-system/css'
import Image from 'next/image'

export const countdownContainer = css({
  textAlign: 'center',
  paddingX: '20px',
  paddingY: '40px',
  height: '100%',
  width: '100%',
})

export const contentWrapper = css({
  position: 'relative',
  zIndex: 1,
  color: 'white',
})

export const countdownTitle = css({
  fontFamily: 'Mona Sans',
  fontSize: '30px',
  marginBottom: '30px',
  fontWeight: '800',

  mobile: {
    fontSize: '48px',
  },
})

export const countdownTimer = css({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '20px',
})

export const bgImageStyle = css({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  zIndex: 0,
  objectFit: 'cover',
})

export const FlipCountDown = ({ startTime, endTime, title }) => {
  const onFinish = () => {
    alert('Time is up!')
  }

  const [days, hours, minutes, seconds] = useCountDown(
    Math.max(0, Math.floor((endTime - startTime) / 1000)),
    getDHMS,
    onFinish
  )

  return (
    <div className={countdownContainer}>
      <Image
        className={bgImageStyle}
        src="/count-down-bg.jpg"
        alt=""
        aria-hidden="true"
        fill
      />

      <div className={contentWrapper}>
        <h2 className={countdownTitle}>{title}</h2>
        <div className={countdownTimer}>
          <TimeBox value={days} label="Days" />
          <TimeBox value={hours} label="Hours" />
          <TimeBox value={minutes} label="Minutes" />
          <TimeBox value={seconds} label="Seconds" />
        </div>
      </div>
    </div>
  )
}
