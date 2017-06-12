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
    url: '/:term',
    component: {},
    resolve: [{
        token: 'term',
        deps: ['$transition$'],
        resolveFn: ($transition$) => {
            return AppconfigService.GetSetting($transition$.params().term as string);
        }
    }]
}

export const Routes: IStateRoute[] = [
    MainPage, SearchPage
]