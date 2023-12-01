const express = require('express');
const controller = require('./controller')
const router = express.Router();

router.post('/create', controller.createBooks);
router.get('/get', controller.getBooks);
router.get('/getInd/:id', controller.getIndBooks);
router.post('/update/:id', controller.updateBooks);
router.delete('/delete/:id', controller.deleteBooks);

module.exports = router;