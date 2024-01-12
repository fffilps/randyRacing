import { useEffect, useState } from "react"
import TimeBox from "./TimeBox"

const Hero = () => {
  //we are going to create a countdown for one week.

  // Next is doing a clean up. by getting rid of all of the function calls and making it all sets only in one function.
  // also fix the days. 17-17 = 0 - 1 = -1. contain that condition.



  const todayDate = new Date()
  const endDate = new Date(2024, 0, 17, 15, 30)

  const [daysLeft, setDaysLeft] = useState(Number)
  const [hoursLeft, setHoursLeft] = useState(Number)
  const [minutesLeft, setMinutesLeft] = useState(Number)
  const [secondsLeft, setSecondsLeft] = useState(Number)


  const dayCalc = () => {

    const handleHours = () => {
      //there are 24 hours in a day. if its ever < 0 min < 0 hours, then reloop day and hours to 23.

      const hoursCalc = endDate.getHours() - todayDate.getHours()

      if(hoursCalc<0) {
        return setHoursLeft(24 + hoursCalc)
      } else {
        return setHoursLeft(hoursCalc)
      }
    }

    const handleMinutes = () => {

      const minutesCalc = endDate.getMinutes() - todayDate.getMinutes()

      if(minutesCalc<0) {
        return setMinutesLeft(60 + minutesCalc)
      } else {
        return setMinutesLeft(minutesCalc)
      }
    }

    const handleSeconds = () => {
      const secondsCalc = endDate.getSeconds() - todayDate.getSeconds()
      return setSecondsLeft(60 + secondsCalc)
    }

    const handleDays = () => {
      const dayCalc = endDate.getDate() - todayDate.getDate()
      setDaysLeft(dayCalc - 1)
    }

    handleHours()
    handleMinutes()
    handleSeconds()
    handleDays()

}

useEffect(() => {
  dayCalc()
}, [])


setTimeout(dayCalc, 1000);

console.log(typeof(hoursLeft))

  return (
    <div className='h-full flex gap-4 border p-4 w-full justify-center items-center bg-blue-900 border-black'>
      <TimeBox timeNumber={daysLeft} timeInfo="Days"/>
      <TimeBox timeNumber={hoursLeft} timeInfo="Hours"/>
      <TimeBox timeNumber={minutesLeft} timeInfo="Minutes"/>
      <TimeBox timeNumber={secondsLeft} timeInfo="Seconds"/>
    </div>
  )
}

export default Hero