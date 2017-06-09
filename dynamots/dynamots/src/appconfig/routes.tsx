import { IStateRoute } from '../interfaces/interfaces';
import { AppconfigService } from './configservice';
import { Appconfig } from './AppconfigComponent';

const MainPage: IStateRoute = {
    name: 'config',
    url: '/config',
    component: Appconfig
}

const SearchPage: IStateRoute = {
    name: 'config.term',
    url: '/config/:term',
    component: {},
    resolve: [{
        token: 'term',
        resolveFn: ($transition$) => {
            return AppconfigService.GetSetting($transition$.params().term as string);
        }
    }]
}

export const Routes: IStateRoute[] = [
    MainPage, SearchPage
]