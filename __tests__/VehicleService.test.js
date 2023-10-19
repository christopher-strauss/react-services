import Init from '../src/Init';
import VehicleService from '../src/VehicleService';
import RandomString from 'RandomString'

let vehicleService = null;
let vehicle = null;

//setup
beforeAll(() => {
  const settings = { baseUrl: 'https://carlinepickupapi.azurewebsites.net/api/v1.0' }
  new Init(settings);
  
  vehicleService = new VehicleService();

  vehicle = {
    makeId: '6A3FE049-BD6A-4EA2-9EC8-4A23C9CAC3BC',
    modelId: '114F9CC2-729F-492E-8DE3-F45484EC0FD9',
    year: '2015',
    color: 'White',
    licensePlate: `${RandomString.generate(3)}-${RandomString.generate(3)}`,
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

it('Gets all of the available vehicle colors', async() => {
  
  const response = await vehicleService.getColors();

  expect(response).not.toBeNull();
});

it('Gets all of the available vehicle years', async() => {
  
    const response = await vehicleService.getYears();
  
    expect(response).not.toBeNull();
});

it('Gets all of the vehicle makes', async() => {

    const response = await vehicleService.getMakes(0, 10, 'name');
  
    expect(response).not.toBeNull();
});

it('Gets all of the vehicle models by make id', async() => {

    const makeId = 'bc9274b7-2345-4be2-b20b-a47004f5f24f';

    const response = await vehicleService.getModelsByMake(makeId, 0, 10, 'name');
  
    expect(response).not.toBeNull();
});

it('Gets all of the vehicle models by make id and year', async() => {

  const makeId = '4db39f5b-d7ae-456f-8607-99631f0bc015';
  const year = '2021'

  const response = await vehicleService.getModelsByMakeAndYear(makeId, year, 0, 10, 'name');

  expect(response).not.toBeNull();
});

it('Gets a vehicle by id', async() => {
  
  const vehicleId = 'b5f163c5-9dd9-489a-b76d-0b299da4de27';

  const response = await vehicleService.get(vehicleId);

  expect(response).not.toBeNull();
});

it('Creates a vehicle on a family', async() => {
  const familyId = '16B8147F-B7EC-4836-9488-9BDC4351CAFC';

  const response = await vehicleService.create(familyId, vehicle);

  expect(response).not.toBeNull();
});

it('Updates a vehicle', async() => {

  const vehicle = {
    licensePlate: `${RandomString.generate(3)}-${RandomString.generate(3)}`,
    modifiedBy: 'Jest'    
  }

  const vehicleId = '78deb545-8b4d-4b0e-adc3-0e4d74f30038';

  const response = await vehicleService.update(vehicleId, vehicle);

  expect(response).toBe('');
});

it('Deletes a vehicle', async() => {
  
  const familyId = '16B8147F-B7EC-4836-9488-9BDC4351CAFC';

  const vehicleResponse = await vehicleService.create(familyId, vehicle);

  const vehicleId = vehicleResponse.id;

  const response = await vehicleService.delete(vehicleId);

  expect(response).toBe('');
});

