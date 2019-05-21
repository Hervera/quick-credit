import express from 'express';
import auth from '../Middleware/VerifyAuthToken';
import userController from '../Controllers/UserController';
import loanController from '../Controllers/LoanController';
import repaymentController from '../Controllers/RepaymentController';

const router = express.Router();

router.get('/users', auth.verifyToken, userController.getAllUsers);
router.get('/users/:id', auth.verifyToken, userController.getSpecificUser);
router.patch('/users/:email/verify', auth.verifyToken, userController.verifyUser);
router.get('/loans', auth.verifyToken, loanController.retrieveLoans);
router.get('/loans/:id', auth.verifyToken, loanController.getSpecificLoan);
router.patch('/loans/:id', auth.verifyToken, loanController.approveOrRejectLoan);
router.get('/loans/:id/repayments', auth.verifyToken, repaymentController.loanRepaymentHistory);
router.post('/loans/:id/repayment', auth.verifyToken, repaymentController.createLoanRepayment);

export default router;
