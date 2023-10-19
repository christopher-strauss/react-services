import ServiceBase from './ServiceBase';
import axios from 'axios';

let familyPath = null;
let familyMemberPath = null;
let familyMemberTypesPath = null;
let familyMemberTravelTypesPath = null;

class FamilyMemberService extends ServiceBase {
    constructor() {
        super('/familymembers');
        familyPath = `${super.baseUrl}/families`;
        familyMemberTypesPath = `${super.baseUrl}/familymembertypes`;
        familyMemberTravelTypesPath = `${super.baseUrl}/familymembertraveltypes`;        
    }

    /**
     * Get all the family member types
     * @param {*} pageIndex
     * @param {*} pageSize
     * @param {*} orderBy
     */
    async getFamilyMemberTypes(pageIndex, pageSize, orderBy) {
        const url = `${familyMemberTypesPath}?pageSize=${pageSize}&pageIndex=${pageIndex}&orderBy=${orderBy}`;

        return await axios.get(url, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    }

   /**
     * Get all family member travel types
     * @param {*} pageIndex
     * @param {*} pageSize
     * @param {*} orderBy
     */
    async getFamilyMemberTravelTypes(pageIndex, pageSize, orderBy) {
        const url = `${familyMemberTravelTypesPath}?pageSize=${pageSize}&pageIndex=${pageIndex}&orderBy=${orderBy}`;

        return await axios.get(url, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };

    /**
     * Add Family Member to family
     * @param {*} id 
     * @param {*} familyMember 
     */
    async create(id, familyMember) {
        const url = `${familyPath}/${id}/familymembers`;
        
        return await axios.post(url, familyMember, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };
};

export default FamilyMemberService;