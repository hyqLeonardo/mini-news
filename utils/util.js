const dateToTime = date => {
  let timeZone = date.split('T', 2)[1]
  return timeZone.substring(0, timeZone.lastIndexOf(":"))
}

module.exports = {
  dateToTime: dateToTime
}
