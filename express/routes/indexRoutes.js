import { Router } from "express";
import customersController from "../controller/customersController";
import usersController from "../controller/usersController";
// import login from "../controller/loginController";
import loginController from "../controller/loginController";


const router = new Router()
router.post('/login',loginController.login)

router.get('/customers/sql',loginController.checkToken,customersController.findAllCustomers)
router.get('/customers', customersController.findAllRows)
router.get('/customers/:id', customersController.findById)
router.post('/insertcus', customersController.CreateCustomers)
router.put('/updatecus/:id', customersController.UpdateCustmers)
router.delete('/deletecus/:id', customersController.DeleteCustomers)
router.get('/ordercus', customersController.OrderCustomers)
router.post('/createuser', usersController.CreateUsers)


export default router