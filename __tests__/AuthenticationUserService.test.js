import Init from '../src/Init';
import AuthenticationUserService from '../src/AuthenticationUserService';
import RandomString from 'RandomString';

let authenticationuserService = null;
let authenticationuser = null;
//setup
beforeAll(() => {
  const settings = { baseUrl: 'https://carlinepickupapi.azurewebsites.net/api/v1.0' } 
  new Init(settings);
  
  authenticationuserService = new AuthenticationUserService();
  authenticationuser = {
    providerType: 'auth0',
    externalProviderId: RandomString.generate(16),
    authenticationUserTypeId: '892CA76F-081F-43DE-8F35-47B257CC4DF4',
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

it('Gets an authentication user by provider type and provider id', async() => {
  
    const providerId = '112941073136535871990';
    const providerType = 'google-oauth2'

    const response = await authenticationuserService.get(providerId, providerType);
  
    expect(response).not.toBeNull();
});

it('Gets the authentication user types', async() => {
 
  const response = await authenticationuserService.getAuthenticationUserTypes(0, 10, 'type');

  expect(response).not.toBeNull();
});

it('Creates an authentication user record', async() => {

    const response = await authenticationuserService.create(authenticationuser);
  
    expect(response).not.toBeNull();
    
});

