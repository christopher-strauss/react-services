import { getRequestConfig } from './Common';
import Init, { SettingsConsumer } from '../src/Init';
import axios from 'axios';

class ServiceBase {

    _urlSegment = null;
    _baseUrl = null
    _config = null;


    constructor(path) {
        _urlSegment = path;
        _baseUrl = SettingsConsumer._currentValue.baseUrl;
        _config = getRequestConfig();
    }

    get baseUrl() {
        return _baseUrl;
    }

    get config() {
        return _config;
    }

    get urlSegment() {
        return _urlSegment;
    }

    /**
     * Get all
     * @param {*} pageIndex
     * @param {*} pageSize
     * @param {*} orderBy
     */
     async getAll(pageIndex, pageSize, orderBy) {
        const url = `${_baseUrl}${_urlSegment}?pageSize=${pageSize}&pageIndex=${pageIndex}&orderBy=${orderBy}`;

        return await axios.get(url, _config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };

    /**
     * Get by Id
     * @param {*} id 
     */
     async get(id) {
        const url = `${_baseUrl}${_urlSegment}/${id}`;

        return await axios.get(url, _config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };

    /**
     * Create
     * @param {} obj 
     */
     async create(obj) {
        const url = `${_baseUrl}${_urlSegment}`;

        return await axios.post(url, obj, _config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    }; 

    /**
     * Update
     * @param {*} id 
     * @returns 
     */
     async update(id, obj = null) {

        const url = `${_baseUrl}${_urlSegment}/${id}`;

        return await axios.put(url, obj, _config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };

    /**
     * Delete
     * @param {*} id 
     */
    async delete(id) {
        const url = `${_baseUrl}${_urlSegment}/${id}`;

        return await axios.delete(url, _config)
                    .then(res => res.data)
                    .catch((error) => {
                        throw error;
                    });
    };
  }

  export default ServiceBase;