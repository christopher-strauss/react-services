import Init from '../src/Init';
import FamilyMemberService from '../src/FamilyMemberService';
import RandomString from 'RandomString'

let familyMemberService = null;
let familyMember = null;

//setup
beforeAll(() => {
  const settings = { baseUrl: 'https://carlinepickupapi.azurewebsites.net/api/v1.0' }
  new Init(settings);
  
  familyMemberService = new FamilyMemberService();

  familyMember = {
    familyMemberTypeId: '0A1DB5FA-FFB2-4B57-AE56-D0A4A40E03DC',
    familyMemberTravelTypeId: '8D8E7F06-E9C8-4BA2-9648-665C34AC5E1D',
    firstName: `jest${RandomString.generate(7)}`,
    lastName: `jest${RandomString.generate(7)}`,
    email: `jest${RandomString.generate(7)}@clp.com`,
    phone: '555-555-5555',
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

it('Gets a family member by id', async() => {
  
    const response = await familyMemberService.get('E23F0B2D-4487-4E86-8DD2-5BCA53A97FA5');
  
    expect(response).not.toBeNull();
});

it('Gets the family member types', async() => {

    const response = await familyMemberService.getFamilyMemberTypes(0, 10, 'description');
  
    expect(response).not.toBeNull();
});

it('Gets the family member travel types', async() => {

    const response = await familyMemberService.getFamilyMemberTravelTypes(0, 10, 'description');
  
    expect(response).not.toBeNull();
});

it('Creates a family member', async() => {

  const familyId = 'e875a66d-72c0-4213-979d-ccaffcbf94e6';

  const response = await familyMemberService.create(familyId, familyMember);

  expect(response).not.toBeNull();
});

it('Updates a family member', async() => {

  const familyMember = {
    firstName: `jest${RandomString.generate(7)}`,
    modifiedBy: 'Jest'    
  }

  const familyMemberId = 'D9E1F7D7-D63C-448F-A83E-5D9F2B5A78D6';

  const response = await familyMemberService.update(familyMemberId, familyMember);

  expect(response).toBe('');
});

it('Deletes a family member', async() => {
  
  const familyId = 'e875a66d-72c0-4213-979d-ccaffcbf94e6';

  const familyMemberResponse = await familyMemberService.create(familyId, familyMember);

  const familyMemberId = familyMemberResponse.id;

  const response = await familyMemberService.delete(familyMemberId);

  expect(response).toBe('');
});

