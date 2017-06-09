"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var AboutPage = (function (_super) {
    __extends(AboutPage, _super);
    function AboutPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AboutPage.prototype.render = function () {
        return (<div className="jumbotron">
                <h1>About </h1>
                <p> All about something</p>
        //<Link to="/" className="btn btn-primary btn-lg" > Learn more</Link>
        
                //<react_router_dom_1.Link to="/" className="btn btn-primary btn-lg"> Learn more</react_router_dom_1.Link>
            </div>);
    };
    return AboutPage;
}(React.Component));
exports.AboutPage = AboutPage;
