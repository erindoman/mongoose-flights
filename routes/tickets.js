const express = require('express')
const router = express.Router()
const ticketsCtrl = require('../controllers/tickets')

router.post('/flight/:id/tickets', ticketsCtrl.create)
router.delete('/:ticketId/:flightId', ticketsCtrl.deleteTicket)

module.exports = router