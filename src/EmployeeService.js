import ServiceBase from './ServiceBase';
import axios from 'axios';

let schoolPath = null;
let employeeTypesPath = null;

class EmployeeService extends ServiceBase {
    constructor() {
        super('/employees');
        schoolPath = `${super.baseUrl}/schools`;
        employeeTypesPath = `${super.baseUrl}/employeetypes`;       
    }

    /**
     * Get all employee types
     * @param {*} pageIndex
     * @param {*} pageSize
     * @param {*} orderBy
     */
     async getEmployeeTypes(pageIndex, pageSize, orderBy) {
        const url = `${employeeTypesPath}?pageSize=${pageSize}&pageIndex=${pageIndex}&orderBy=${orderBy}`;

        return await axios.get(url, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    }

    /**
     * Get employees by school
     * @param {*} schoolId
     * @param {*} pageIndex
     * @param {*} pageSize
     * @param {*} orderBy
     */
     async getEmployeesBySchool(schoolId, pageIndex, pageSize, orderBy) {
        const url = `${schoolPath}/${schoolId}/employees?pageSize=${pageSize}&pageIndex=${pageIndex}&orderBy=${orderBy}`;

        return await axios.get(url, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };

    /**
     * Add employee to school and grade
     * @param {*} schoolId 
     * @param {*} gradeId 
     * @param {*} employee 
     */
     async create(schoolId = 0, gradeIds = [], employee) {
        const url = `${schoolPath}/${schoolId}/employees`;

        var grades = gradeIds.map(id => {
            return { gradeId: id };
        });

        employee.grades = grades;
        
        delete employee.grade;

        return await axios.post(url, employee, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };

    /**
     * Update an employee
     * @param {*} id 
     */
     async update(id = 0, employee) {
        const url = `${super.baseUrl}${super.urlSegment}/${id}`;
        const grades = employee.grade || [];

        if(grades.length > 0) {
            employee.grades = grades.map(id => { 
                return { gradeId: id }
            });
        }
        
        delete employee.grade;

        return await axios.put(url, employee, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };
    
};

export default EmployeeService;