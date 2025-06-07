import { defaultOptions } from '@/utils/defaults'
import { useEffect, useRef } from 'react'
import { useLatest } from './use-latest'
import { useEvent } from './use-event'

export const useInterval = (
  callback,
  delay,
  options = defaultOptions,
) => {
  const { immediate, controls } = options
  const savedCallback = useLatest(callback)
  const isActive = useRef(false)
  const timer = useRef(null)

  const clean = () => {
    if(timer.current) {
      clearInterval(timer.current)
    }
  }

  const resume = useEvent(() => {
    isActive.current = true
    timer.current = setInterval(() => savedCallback.current(), delay || 0)
  })

  const pause = useEvent(() => {
    isActive.current = false
    clean()
  })

  useEffect(() => {
    if (immediate) {
      savedCallback.current()
    }
    if (controls) {
      return
    }
    if (delay !== null) {
      resume()
      return () => {
        clean()
      }
    }

    return
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, immediate])

  return {
    isActive,
    pause,
    resume,
  }
}
