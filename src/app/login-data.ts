import { ExpressToken } from './express-token';

export interface LoginData {
    first_name?: string;
    last_name?: string;
    facebook?: boolean;
    users?: Array<any>;
    expresstoken?: ExpressToken;
    currentUser?: any;
}
