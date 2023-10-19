import Init from '../src/Init';
import EmployeeService from '../src/EmployeeService';
import RandomString from 'RandomString'

let employeeService = null;
let employee = null;
let gradeIds = null;

//setup
beforeAll(() => {
  const settings = { baseUrl: 'https://carlinepickupapi.azurewebsites.net/api/v1.0' }
  new Init(settings);
  
  employeeService = new EmployeeService();

  gradeIds =  ['7E2E4752-DBDC-4728-9151-88DBF6FC0960', '0995B75D-40B6-412F-88BD-E9A75E0B1782'];

  employee = {
    firstName: `jest${RandomString.generate(7)}`,
    lastName: `jest${RandomString.generate(7)}`,
    email: `jest${RandomString.generate(7)}@clp.com`,
    employeeTypeId: 'CD650CF3-76C6-4E53-83B1-E7F8DD621F47',
    createdBy: 'Jest'   
  }
});

beforeEach(() => {
});

//teardown
afterEach(() => {
});

afterAll(() => {
});

it('Gets the employee types', async() => {

  const response = await employeeService.getEmployeeTypes(0, 10, 'description');

  expect(response).not.toBeNull();
});

it('Gets an employee by id', async() => {

    const employeeId = 'A8EB7898-37C6-4E60-8BA6-02F1457DB5AD';
  
    const response = await employeeService.get(employeeId);
  
    expect(response).not.toBeNull();
});

it('Gets all of the employees', async() => {

    const response = await employeeService.getAll(0, 10, 'lastname');
  
    expect(response).not.toBeNull();
});

it('Gets all of the employees by school id', async() => {

  const schoolId = '454F3AAC-7347-4151-9356-99A449B72BA5'

  const response = await employeeService.getEmployeesBySchool(schoolId, 0, 10, 'lastname');

  expect(response).not.toBeNull();
});

it('Creates an employee', async() => {

  const schoolId = 'E4ED7031-2A66-4425-A1D9-59B8014E5A4C';

  const response = await employeeService.create(schoolId, gradeIds, employee);

  expect(response).not.toBeNull();
});

it('Updates an employee', async() => {

  const employee = {
    firstName: `jest${RandomString.generate(7)}`,
    modifiedBy: 'Jest'    
  }

  const employeeId = '5519b41f-edd3-4467-88cc-f0880ae0351c';

  const response = await employeeService.update(employeeId, employee);

  expect(response).toBe('');
});

it('Deletes an employee', async() => {
  
  const schoolId = 'E4ED7031-2A66-4425-A1D9-59B8014E5A4C';

  const employeeResponse = await employeeService.create(schoolId, gradeIds, employee);

  const employeeId = employeeResponse.id;

  const response = await employeeService.delete(employeeId);

  expect(response).toBe('');
});

