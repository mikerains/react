import { IStateRoute } from '../interfaces/interfaces';
import { Routes as appconfigroutes } from '../appconfig/routes';
import { Routes as redditroutes } from '../reddit/routes';

export const Routes: IStateRoute[] = [].concat(appconfigroutes).concat(redditroutes)
