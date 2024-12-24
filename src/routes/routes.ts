import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    //Component: () => JSX.Element;
    //Component: React.LazyExoticComponent<() => JSX.Element>;
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

//const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
//const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */  '../01-lazyload/pages/LazyPage2'));
//const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',  //incluyendo subpages  o sub rutas
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'nolazy',
        Component: NoLazy,
        name: 'No-Lazy'
    },
]