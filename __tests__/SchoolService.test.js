import Init from '../src/Init';
import SchoolService from '../src/SchoolService';

let schoolService = null;

//setup
beforeAll(() => {
  const settings = { baseUrl: 'https://carlinepickupapi.azurewebsites.net/api/v1.0' }
  new Init(settings);
  
  schoolService = new SchoolService();
});

beforeEach(() => {
});

//teardown
afterEach(() => {
});

afterAll(() => {
});

it('Gets a school by id', async() => {

    const response = await schoolService.get('e4ed7031-2a66-4425-a1d9-59b8014e5a4c');
  
    expect(response).not.toBeNull();
});

