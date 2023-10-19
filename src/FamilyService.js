import ServiceBase from './ServiceBase';
import axios from 'axios';

class FamilyService extends ServiceBase {
    constructor() {
        super('/families');      
    }

    /**
     * Registers a new family
     * @param {*} family
     */
     async register(family) {
        const url = `${super.baseUrl}${super.urlSegment}/family/register`;
        
        return await axios.post(url, family, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };
};

export default FamilyService;