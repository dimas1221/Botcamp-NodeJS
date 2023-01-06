import { Router } from "express";
import customersController from "../controller/customersController";

const router = new Router()
router.get('/customers/sql', customersController.findAllCustomers)
router.get('/customers', customersController.findAllRows)
router.get('/customers/:id', customersController.findById)
router.post('/insert', customersController.CreateCustomers)
router.put('/updatecus/:id', customersController.UpdateCustmers)
router.delete('/deletecus/:id', customersController.DeleteCustomers)
router.get('/ordercus', customersController.OrderCustomers)


export default router