import moment from 'moment'

/**
 * formats timestamps to date strings, with different amount of detail depending on how close to current date
 * @param timestamp
 */
export const formatTimestamp = (timestamp: number) => {
  if (!timestamp) return ''
  const date = moment(timestamp)
  const nowDate = moment()

  switch (true) {
    case nowDate.isSame(date, 'day'):
      return `today ${date.format('HH:mm')}`
    case nowDate.isSame(date, 'week'):
      return date.format('ddd, HH:mm')
    case nowDate.isSame(date, 'year'):
      return date.format('MMMM D, HH:mm')
    default:
      return date.format('YYYY-MM-DD, HH:mm')
  }
}
