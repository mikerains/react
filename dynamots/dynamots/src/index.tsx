// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { UIRouter, UIView, pushStateLocationPlugin, UIRouterReact, servicesPlugin, UISref, UISrefActive} from 'ui-router-react';
import { IStateRoute } from './interfaces/interfaces';
import { Routes } from './routes'

const router = new UIRouterReact();

router.plugin(pushStateLocationPlugin);
router.plugin(servicesPlugin);

const mainroute: IStateRoute = {
    name: 'home',
    url: '/',
    component: () => (<div>HOME PAGE</div>)
}
router.stateRegistry.register(mainroute);

Routes.forEach((route: any, index: number) => {
    router.stateRegistry.register(route);
});

router.start();

const repeaterTemplate = (route: any, index: number) => {

    let term = route.resovles;
    var params = { term: term };
    return (<UISrefActive class="active" key={index}>
        <UISref to={route.name} params={params}>
            <li role="presentation" key={index} >
                <a href="javascript.void(0);">
                    <span className="code-span">{route.name}</span>
                </a>
            </li>
        </UISref>
    </UISrefActive>);
}
router.stateService.go('/');

const init = () => {
    let divId = "root";
    ReactDOM.render(
        <div>
            <UIRouter router={router}>
                <div className="row">
                    <div className="app-header-nav">
                        <div className="container-app portalapp">
                            <ul className="nav nav-tabs">
                            {Routes.map((route:any, index:number) =>
                                repeaterTemplate(route, index)
                            )}
                                </ul>
                        </div>
                    </div>
                    <UIView />
                </div>
            </UIRouter>
        </div>,
        document.getElementById('root')
    );
}
init();