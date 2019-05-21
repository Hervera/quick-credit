// User model
const insertUser = `INSERT INTO users(firstName, lastName, email, password, address, status, isAdmin, createdOn, updatedOn)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *`;
const selectUser = 'SELECT * FROM users WHERE email = $1;';
const retrieveSpecificUser = 'SELECT * FROM users WHERE email = $1';

// Loan model
const insertLoan = `INSERT INTO loans(userEmail, createdOn, status, repaid, tenor, amount, paymentInstallment, balance, interest, updatedOn)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *`;
const getLoan = 'SELECT * FROM loans WHERE id = $1';
const retrieveAllLoans = 'SELECT * FROM loans';
const repaidLoans = 'SELECT * FROM loans where status = $1 AND repaid = $2';

export default {
  insertUser, selectUser, retrieveSpecificUser, insertLoan, getLoan, retrieveAllLoans, repaidLoans,
};
