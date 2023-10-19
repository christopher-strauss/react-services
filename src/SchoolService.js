import ServiceBase from './ServiceBase';
import axios from 'axios';

class SchoolService extends ServiceBase {
    constructor() {
        super('/schools');   
    }
};

export default SchoolService;