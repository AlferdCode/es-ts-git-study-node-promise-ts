"use strict";
var Component;
(function (Component) {
    var Header = /** @class */ (function () {
        function Header() {
            console.log('header');
        }
        Header.prototype.init = function () {
            console.log('init run header');
        };
        return Header;
    }());
    Component.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            console.log('contnet');
        }
        return Content;
    }());
    Component.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            console.log('Footer');
        }
        Footer.prototype.init = function () {
            console.log('foot init run');
        };
        return Footer;
    }());
    Component.Footer = Footer;
})(Component || (Component = {}));
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            var header = new Component.Header();
            header.init();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
var home = new Home.Page();
