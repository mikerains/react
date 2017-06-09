import { IStateRoute } from '../interfaces/interfaces';
import { Promise } from 'promise';
import { Reddit } from './RedditComponent';

const MainPage: IStateRoute = {
    name: 'reddit',
    url: '/reddit',
    component: Reddit
}

const RedditPage: IStateRoute = {
    name: 'reddit.term',
    url: '/:term',
    component: {},
    resolve: [{
        token: 'term',
        resolveFn: ($transition$) => {
            return new Promise<string>((resolve, reject) => {
                setTimeout(() => {
                    resolve($transition$.params().term);
                }, 1000);
            });
        }
    }]
}

export const Routes: IStateRoute[] = [
    MainPage, RedditPage
]