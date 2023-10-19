import Init from '../src/Init';
import FamilyService from '../src/FamilyService';
import RandomString from 'RandomString'


let familyService = null;
let family = null;
let familyRegistration = null;

//setup
beforeAll(() => {
  const settings = { baseUrl: 'https://carlinepickupapi.azurewebsites.net/api/v1.0'}
  new Init(settings);  
  
  familyService = new FamilyService();

  family = {
    name: `Family ${RandomString.generate(7)}`,
    createdBy: 'jest',
    address: {
        addressOne: `PO BOX ${RandomString.generate(7)}`,
        addressTwo: `${RandomString.generate(7)}`,
        city: RandomString.generate(7),
        stateId: "CAE30A5B-E5A7-4B8B-8C34-099A9C7F929A",
        countyId: "7C06F926-5EED-4C12-A3A0-0BF4729BF431",
        zip: RandomString.generate({
          length: 5,
          charset: 'numeric'
        }),
        createdBy: 'jest'
    }
  }

  familyRegistration = {
    name: `Family Registration ${RandomString.generate(7)}`,
    createdBy: 'jest',
    familyMembers: [
      {
          authenticationUser: {
            providerType: 'auth0',
            externalProviderId: RandomString.generate(16),
            authenticationUserTypeId: '892CA76F-081F-43DE-8F35-47B257CC4DF4',
            createdBy: 'Jest' 
          },
          familyMemberTypeId: '0A1DB5FA-FFB2-4B57-AE56-D0A4A40E03DC',
          familyMemberTravelTypeId: '8D8E7F06-E9C8-4BA2-9648-665C34AC5E1D',
          firstName: `jest${RandomString.generate(7)}`,
          lastName: `jest${RandomString.generate(7)}`,
          email: `jest${RandomString.generate(7)}@clp.com`,
          phone: '555-555-5555',
          createdBy: 'Jest'   
      }
    ],
    vehicles: [
        {
          makeId: '6A3FE049-BD6A-4EA2-9EC8-4A23C9CAC3BC',
          modelId: '114F9CC2-729F-492E-8DE3-F45484EC0FD9',
          year: '2015',
          color: 'White',
          licensePlate: `${RandomString.generate(3)}-${RandomString.generate(3)}`,
          createdBy: 'Jest'
        }
    ],    
    address: {
        addressOne: `PO BOX ${RandomString.generate(7)}`,
        addressTwo: `${RandomString.generate(7)}`,
        city: RandomString.generate(7),
        stateId: "CAE30A5B-E5A7-4B8B-8C34-099A9C7F929A",
        countyId: "7C06F926-5EED-4C12-A3A0-0BF4729BF431",
        zip: RandomString.generate({
          length: 5,
          charset: 'numeric'
        }),
        createdBy: 'jest'
    }
  }
});

beforeEach(() => {
});

//teardown
afterEach(() => {
});

afterAll(() => {
});

it('Gets a family by id', async() => {

    const familyId = '16B8147F-B7EC-4836-9488-9BDC4351CAFC';
  
    const response = await familyService.get(familyId);
  
    expect(response).not.toBeNull();
});

it('Gets all of the families', async() => {

    const response = await familyService.getAll(0, 10, 'name');
  
    expect(response).not.toBeNull();
});

it('Creates a family', async() => {

  const response = await familyService.create(family);

  expect(response).not.toBeNull();
});

it('Registers a family', async() => {

  const response = await familyService.register(familyRegistration);

  expect(response).not.toBeNull();
});

it('Updates a family', async() => {

  const family = {
    address: {
        modifiedBy: 'jest'
    },
    name: `Family ${RandomString.generate(7)}`,
    modifiedBy: 'jest'
  }

  const familyId = 'e875a66d-72c0-4213-979d-ccaffcbf94e6';

  const response = await familyService.update(familyId, family);

  expect(response).toBe('');
});

it('Deletes a family', async() => {
  
  const familyResponse = await familyService.create(family);

  const familyId = familyResponse.id;

  const response = await familyService.delete(familyId);

  expect(response).toBe('');
});

