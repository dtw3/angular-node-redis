
const EmployeeDao = require('../dao/employeeDao');
const employeeDao = new EmployeeDao();
class EmployeeService {
    constructor() {
    }

    save(employee, callback) {
        employeeDao.save(employee, callback);
    }
    
    query(callback) {
        employeeDao.query(callback);
    }

    queryById(employeeId, callback) {
        employeeDao.queryById(employeeId, callback);
    }
    
    delete(employeeId, callback) {
        employeeDao.delete(employeeId, callback);
    }
}
module.exports = EmployeeService;