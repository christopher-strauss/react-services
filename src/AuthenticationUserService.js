import ServiceBase from './ServiceBase';
import axios from 'axios';

class AuthenticationUserService extends ServiceBase {
    constructor() {
        super('/authenticationusers');
    }

    /**
     * Gets an authentication user by provider type and provider id
     * @param {*} providerId
     * @param {*} providerType
     */
     async get(providerId, providerType) {
        const url = `${super.baseUrl}${super.urlSegment}/authenticationuser/externalproviders/${providerId}/externalprovidertypes/${providerType}`;

        return await axios.get(url, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        if (error.response) {
                            //If its a 404 then the user wasnt found so return null
                            if(error.response.status === 404) {
                                return null;
                            }
                        }  
                        
                        throw error;
                    });
    };

    /**
     * Get all the authentication user types
     * @param {*} pageIndex
     * @param {*} pageSize
     * @param {*} orderBy
     */
     async getAuthenticationUserTypes(pageIndex, pageSize, orderBy) {
        const url = `${super.baseUrl}${super.urlSegment}/authenticationuser/types?pageSize=${pageSize}&pageIndex=${pageIndex}&orderBy=${orderBy}`;

        return await axios.get(url, super.config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };
}

export default AuthenticationUserService;