//Write your code here
const attendeeId = "T001"
const name = "Alice Smith"
const event = "JavaScript Conference"
const ticketType = "VIP"
const ticketPrice = 150.00

const attendee = []

function logAttendeeName(attendee) {
  console.log(attendee.name)
}

function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice)
}

function logTicketType(attendee) {
  console.log(attendee.ticketType)
}

function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType
}

function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice
}

function removeEventProperty(attendee) {
  console.log(attendee.splice(event))
}

function addCheckedInProperty(attendee) {
  
//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })

};





