import ServiceBase from './ServiceBase';
import axios from 'axios';

let statesPath = null;

class AddressService extends ServiceBase {
    constructor() {
        super('/addresses');
        statesPath = `${super.baseUrl}/states`;      
    }

    /**
     * Get all states
     * @param {*} pageIndex
     * @param {*} pageSize
     * @param {*} orderBy
     */
     async getStates (pageIndex, pageSize, orderBy) {
        const url = `${statesPath}?pageSize=${pageSize}&pageIndex=${pageIndex}&orderBy=${orderBy}`;

        return await axios.get(url, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };

    /**
     * Get the counties in a state
     * @param {} stateId 
     * @param {*} pageIndex
     * @param {*} pageSize
     * @param {*} orderBy
     */
    async getCounties(stateId, pageIndex, pageSize, orderBy) {
        const url = `${statesPath}/${stateId}/counties?pageSize=${pageSize}&pageIndex=${pageIndex}&orderBy=${orderBy}`;

        return await axios.get(url, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });

    }

    async create(obj) {
        throw new Error('Addresses can only be created when creating a family.  Use the create method on the family service.')
    }
};

export default AddressService;