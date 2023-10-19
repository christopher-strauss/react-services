import Init from '../src/Init';
import AddressService from '../src/AddressService';
import RandomString from 'RandomString'

let addressService = null;

//setup
beforeAll(() => {
  const settings = { baseUrl: 'https://carlinepickupapi.azurewebsites.net/api/v1.0' }
  new Init(settings);
  
  addressService = new AddressService();
});

beforeEach(() => {
});

//teardown
afterEach(() => {
});

afterAll(() => {
});

it('Gets an address by id', async() => {

  const addressId = '80e7b798-29c5-4c8e-bda0-7ccc95083153';

  const response = await addressService.get(addressId);

  expect(response).not.toBeNull();
});

it('Gets all of the addresses', async() => {

  const response = await addressService.getAll(0, 10, 'zip desc');

  expect(response).not.toBeNull();
});

it('Updates an address', async() => {

  const address = {
    addressOne: `Po Box ${RandomString.generate(7)}`,
    modifiedBy: 'Jest'    
  }

  const addressId = '80e7b798-29c5-4c8e-bda0-7ccc95083153';

  const response = await addressService.update(addressId, address);

  expect(response).toBe('');
});

it('Gets a list of counties by state id', async() => {

    const response = await addressService.getCounties('CAE30A5B-E5A7-4B8B-8C34-099A9C7F929A', 0, 10, 'name');
  
    expect(response).not.toBeNull();
});

