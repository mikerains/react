import * as React from 'react';
import * as ReactDOM from "react-dom";

import { UIRouter, UIView, pushStateLocationPlugin, hashLocationPlugin, UIRouterReact, servicesPlugin, UISref, UISrefActive } from 'ui-router-react';
import { IStateRoute } from '../interfaces/interfaces';
import { Routes } from './routes'


export class Main extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        if (!!this.props) {
            //do something with props
        }
    }

    render() {
        const router = new UIRouterReact();

        //https://github.com/ui-router/react/blob/master/docs/API.md
        router.plugin(pushStateLocationPlugin);
        //router.plugin(hashLocationPlugin);
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

        router.stateService.go('/');


        return (
        <div>
            <UIRouter router={router}>
                <div className="row">
                    <div className="app-header-nav">
                        <div className="container-app portalapp">
                            <ul className="nav nav-tabs">
                                <li>
                                    <UISrefActive class="active">
                                        <UISref to="config">
                                            <a href="javascript.void(0);">
                                                <span className="code-span">Config</span>
                                            </a>
                                        </UISref>
                                    </UISrefActive>
                                </li>
                                <li >
                                    <UISrefActive class="active" key="1">
                                        <UISref to="config.term" params={{ term: 'Project1' }}>
                                            <a href="javascript.void(0);">
                                                <span className="code-span">Config:Project1</span>
                                            </a>
                                        </UISref>
                                    </UISrefActive>
                                </li>
                                <li >
                                    <UISrefActive class="active">
                                        <UISref to="reddit">
                                            <a href="javascript.void(0);">
                                                <span className="code-span">Reddit</span>
                                            </a>
                                        </UISref>
                                    </UISrefActive>
                                </li>
                                <li>
                                    <UISrefActive class="active">
                                        <UISref to="reddit.term" params={{ term: 'spock' }}>
                                            <a href="javascript.void(0);">
                                                <span className="code-span">Reddit:spock</span>
                                            </a>
                                        </UISref>
                                    </UISrefActive>
                                </li>
                                {/*{Routes.map((route:any, index:number) =>
                                repeaterTemplate(route, index)
                            )}*/}
                            </ul>
                        </div>
                    </div>
                    <UIView />
                </div>
            </UIRouter>
        </div>
        )
    }
}