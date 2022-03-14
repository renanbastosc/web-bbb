import moment from 'moment'

export const dateFormat = async (date) => {
  return date.split('t')[0]
  let newDate = new Date(date)
  let time = newDate.getTime()
  console.log('newsda>>', newDate, time)
  return newDate
  date = String(date).split(' ')
  var days = String(date[0]).split('-')
  var hours = String(date[1]).split(':')
  return [
    parseInt(days[0]),
    parseInt(days[1]) - 1,
    parseInt(days[2]),
    parseInt(hours[0]),
    parseInt(hours[1]),
    parseInt(hours[2])
  ]
}
