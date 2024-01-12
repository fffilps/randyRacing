
type Props = {
    timeNumber: number
    timeInfo: string

}

const TimeBox = ({timeNumber, timeInfo}: Props) => {
  return (
    <div className="py-3 px-4 h-max bg-green-700 border-red-500 border-3">{timeNumber} {timeInfo}</div>
  )
}

export default TimeBox