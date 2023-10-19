import ServiceBase from './ServiceBase';
import axios from 'axios';

let familyPath = null;

class VehicleService extends ServiceBase {
    constructor() {
        super('/vehicles');  
        familyPath = '/families';     
    }

    /**
     * Get all the vehicle colors 
     */
     async getColors() {
        return new Promise((resolve) => {
            const data = [ 
                { id: 'Black', name: 'Black'}, 
                { id: 'White', name: 'White' } ]

            resolve({ data });
        });
    };

    /**
     * Get all vehicle years
     */
     async getYears() {
        const minYear = 2000;
        const maxYear = new Date().getFullYear();

        let years = [];
        for(let y = minYear; y <= maxYear; y++) {
            years.push(y);
        }

        return new Promise((resolve) => {
            resolve( { data: years } );
        });
    };

    /**
     * Get all vehicle makes
     * @param {*} pageIndex
     * @param {*} pageSize
     * @param {*} orderBy
     */
     async getMakes(pageIndex, pageSize, orderBy) {
        const url = `${super.baseUrl}${super.urlSegment}/makes?pageSize=${pageSize}&pageIndex=${pageIndex}&orderBy=${orderBy}`;

        return await axios.get(url, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };

    /**
     * Get all vehicle models by make
     * @param {*} makeId
     * @param {*} pageIndex
     * @param {*} pageSize
     * @param {*} orderBy
     */
    async getModelsByMake(makeId, pageIndex, pageSize, orderBy) {
        const url = `${super.baseUrl}${super.urlSegment}/makes/${makeId}/models?pageSize=${pageSize}&pageIndex=${pageIndex}&orderBy=${orderBy}`;

        return await axios.get(url, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };

    /**
     * Get all models by maake and year
     * @param {*} makeId
     * @param {*} year
     * @param {*} pageIndex
     * @param {*} pageSize
     * @param {*} orderBy
     */
    async getModelsByMakeAndYear(makeId, year, pageIndex, pageSize, orderBy) {
        const url = `${super.baseUrl}${super.urlSegment}/makes/${makeId}/years/${year}/models?pageSize=${pageSize}&pageIndex=${pageIndex}&orderBy=${orderBy}`;

        return await axios.get(url, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };

    /**
     * Create a vehicle
     * @param {*} familyId
     * @param {*} vehicle
     */
    async create(familyId, vehicle) {
        const url = `${super.baseUrl}${familyPath}/${familyId}/vehicles`;

        return await axios.post(url, vehicle, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };
};

export default VehicleService;