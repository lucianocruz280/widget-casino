import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

const useTimer = (ends_at?: number, onEnd?: () => void) => {
  const [time, setTime] = useState('')

  useEffect(() => {
    if (ends_at) {
      const interval = setInterval(() => {
        const minutes = dayjs(ends_at).diff(new Date(), 'minutes')
        const seconds = dayjs(ends_at).diff(new Date(), 'seconds')

        const restSeconds = seconds - minutes * 60

        if (restSeconds < 0) {
          clearInterval(interval)
        }

        if (seconds == 0) {
          onEnd && onEnd()
        }

        setTime(`${minutes}:${restSeconds}`)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [ends_at])

  return time
}

export default useTimer
