const redis = require('redis');
const db = redis.createClient(6379, '127.0.0.1');
class EmployeeDao {
    constructor() {
    }

    save(e, cb) {
        db.hset('employee', e.employeeId, JSON.stringify(e), (err) => {
            if (err) {
                console.error('error');
            }
            cb(1);
        });
    }

    query(cb) {
        db.hvals('employee', (err, value) => {
            if (err) {
                console.error('error');
            }
            if (value) {
                cb(value);
            } else {
                cb(null);
            }
        });
    }

    queryById(employeeId, cb) {
        db.hget('employee', employeeId, (err, value) => {
            if (err) {
                console.error('error');
            }
            if (value) {
                cb(value);
            } else {
                cb(null);
            }
        });
    }

    delete(employeeId, cb) {
        db.hdel('employee', employeeId, (err, value) => {
            if (err) {
                console.error('error');
            }
            if (value) {
                cb(value);
            } else {
                cb(null);
            }
        });
    }

}
module.exports = EmployeeDao;