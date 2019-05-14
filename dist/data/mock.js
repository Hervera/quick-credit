"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var users = [{
  id: 1,
  email: 'hervera@gmail.com',
  firstName: 'Herve',
  lastName: 'Nkuri',
  password: _bcryptjs["default"].hashSync('secret', 10),
  status: 'verified',
  address: 'Kigali, Gasabo',
  isAdmin: 'true',
  createdOn: 'March 3th 2019, 10:00:00 am'
}, {
  id: 2,
  email: 'brad@gmail.com',
  firstName: 'Brad',
  lastName: 'John',
  password: _bcryptjs["default"].hashSync('secret', 10),
  status: 'unverified',
  address: 'Kigali, Nyarugenge',
  isAdmin: 'false',
  createdOn: 'March 4th 2019, 03:00:00 pm'
}, {
  id: 3,
  email: 'johnLee@gmail.com',
  firstName: 'John',
  lastName: 'Lee',
  password: _bcryptjs["default"].hashSync('secret', 10),
  status: 'unverified',
  address: 'Kigali, Kicukiro',
  repaid: 'false',
  createdOn: 'March 5th 2019, 07:00:00 am'
}];
var loans = [{
  id: 1,
  user: 'hervera@gmail.com',
  createdOn: 'March 3th 2019, 11:00:00 am',
  status: 'pending',
  tenor: 4,
  repaid: 'false',
  amount: 550000,
  paymentInstallment: 137500.025,
  balance: 100000,
  interest: 0.10
}, {
  id: 2,
  user: 'brad@gmail.com',
  createdOn: 'March 4th 2019, 06:00:00 pm',
  status: 'approved',
  tenor: 6,
  repaid: 'true',
  amount: 100000,
  paymentInstallment: 16666.7,
  balance: 102000,
  interest: 0.20
}, {
  id: 3,
  user: 'johnLee@gmail.com',
  createdOn: 'March 5th 2019, 09:00:00 am',
  status: 'pending',
  tenor: 8,
  repaid: 'false',
  amount: 200000,
  paymentInstallment: 25000.03125,
  balance: 50000,
  interest: 0.25
}, {
  id: 4,
  user: 'danny5@gmail.com',
  createdOn: 'March 10th 2019, 08:00:00 am',
  status: 'rejected',
  tenor: 4,
  repaid: 'false',
  amount: 400000,
  paymentInstallment: 100000.0375,
  balance: 100000,
  interest: 0.15
}, {
  id: 5,
  user: 'eric@gmail.com',
  createdOn: 'March 21th 2019, 07:00:00 pm',
  status: 'approved',
  tenor: 6,
  repaid: 'false',
  amount: 100000,
  paymentInstallment: 16666.7,
  balance: 60000,
  interest: 0.20
}, {
  id: 6,
  user: 'peter@gmail.com',
  createdOn: 'March 24th 2019, 02:00:00 pm',
  status: 'approved',
  tenor: 6,
  repaid: 'true',
  amount: 200000,
  paymentInstallment: 25000.03125,
  balance: 250000,
  interest: 0.25
}];
var repayments = [{
  id: 1,
  loanId: 2,
  createdOn: 'March 5th 2019, 08:00:00 pm',
  amount: 100000,
  monthlyInstallment: 16666.7,
  paidAmount: 50000,
  repaid: 'false',
  balance: 50000,
  interest: 0.20,
  remain: 52000
}, {
  id: 2,
  loanId: 2,
  createdOn: 'March 6th 2019, 08:00:00 pm',
  amount: 100000,
  monthlyInstallment: 16666.7,
  paidAmount: 25000,
  repaid: 'false',
  balance: 750000,
  interest: 0.20,
  remain: 27000
}, {
  id: 3,
  loanId: 2,
  createdOn: 'March 7th 2019, 08:00:00 pm',
  amount: 100000,
  monthlyInstallment: 16666.7,
  repaid: 'true',
  paidAmount: 27000,
  balance: 102000,
  interest: 0.20,
  remain: 0
}, {
  id: 4,
  loanId: 5,
  createdOn: 'March 21th 2019, 07:00:00 pm',
  amount: 100000,
  monthlyInstallment: 16666.7,
  repaid: 'false',
  paidAmount: 30000,
  balance: 30000,
  interest: 0.20,
  remain: 72000
}, {
  id: 5,
  loanId: 5,
  createdOn: 'March 21th 2019, 07:00:00 pm',
  amount: 100000,
  monthlyInstallment: 16666.7,
  paidAmount: 30000,
  repaid: 'false',
  balance: 60000,
  interest: 0.20,
  remain: 42000
}, {
  id: 6,
  loanId: 6,
  createdOn: 'March 24th 2019, 02:00:00 pm',
  amount: 400000,
  monthlyInstallment: 25000.03125,
  paidAmount: 50000,
  repaid: 'false',
  balance: 50000,
  interest: 0.25,
  remain: 200000
}, {
  id: 7,
  loanId: 6,
  createdOn: 'March 24th 2019, 02:00:00 pm',
  amount: 400000,
  monthlyInstallment: 25000.03125,
  paidAmount: 120000,
  repaid: 'false',
  balance: 170000,
  interest: 0.25,
  remain: 80000
}, {
  id: 8,
  loanId: 6,
  createdOn: 'March 24th 2019, 02:00:00 pm',
  amount: 400000,
  monthlyInstallment: 25000.03125,
  paidAmount: 80000,
  repaid: 'true',
  balance: 250000,
  interest: 0.25,
  remain: 0
}];
var _default = {
  users: users,
  loans: loans,
  repayments: repayments
};
exports["default"] = _default;