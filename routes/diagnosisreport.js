const express = require('express');
const diagnosisreportcontroller = require('../controllers/diagnosisreport.controller');


const checkAuthMiddleWare = require('../middleware/check-auth');
const router = express.Router();

// router.post('/', patientController.save);
 
router.post('/',checkAuthMiddleWare.checkAuth,diagnosisreportcontroller.createDiagnosisReport);
router.get('/:patientId',checkAuthMiddleWare.checkAuth ,diagnosisreportcontroller.getDiagnosisReportsByPatientId) ;
// router.get('/:patientId',checkAuthMiddleWare.checkAuth ,appointmentcontroller.getAppointmentsByPatientId);
// // Update the route parameter name to match the function parameter
// router.get('/appointment/:id', checkAuthMiddleWare.checkAuth, appointmentcontroller.getAppointmentById);
// router.patch('/appointment/:id', checkAuthMiddleWare.checkAuth, appointmentcontroller.updateAppointmentDateTime);
// router.delete('/appointment/:id', checkAuthMiddleWare.checkAuth, appointmentcontroller.deleteAppointment);
router.delete('/:id',checkAuthMiddleWare.checkAuth,diagnosisreportcontroller.deleteDiagnosisReport);





module.exports = router;