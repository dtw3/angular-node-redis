var express = require('express');
var router = express.Router();
const EmployeeService = require('../service/employeeService');
const employeeService = new EmployeeService();

// add
router.post('/add', function (req, res) {
  let employee = req.body.employee;
  employeeService.save(employee, (val) => {
    if (val) {
      res.send({resultType: 1});
    } else {
      res.send({resultType: 0});
    }
  });
});

// select
router.get('/list', function (req, res) {
  employeeService.query((val) => {
    if (val) {
      res.send({resultType: 1, list: val});
    } else {
      res.send({resultType: 0});
    }
  });
});

// queryById
router.post('/queryById', function (req, res) {
  let employeeId = req.body.employeeId;
  employeeService.queryById(employeeId, (val) => {
    if (val) {
      res.send({resultType: 1, employee: val});
    } else {
      res.send({resultType: 0});
    }
  });
});

// delete
router.post('/delete', function (req, res) {
  let employeeId = req.body.employeeId;
  employeeService.delete(employeeId, (val) => {
    if (val) {
      res.send({resultType: 1});
    } else {
      res.send({resultType: 0});
    }
  });
});

module.exports = router;
