var App;
(function (App) {
    var Config;
    (function (Config) {
        Config.Ng = {
            module: {
                name: 'anl.ngReportTplMaker',
                dependencies: []
            }
        };
    })(Config = App.Config || (App.Config = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Config;
    (function (Config) {
        Config.Variables = {
            appName: 'anl.ngReportTplMaker',
            appAlias: 'Report Template Maker'
        };
    })(Config = App.Config || (App.Config = {}));
})(App || (App = {}));
var ngModule = angular.module(App.Config.Ng.module.name, App.Config.Ng.module.dependencies);
var App;
(function (App) {
    var Main;
    (function (Main) {
        var AppConfig = App.Config;
        var AppConstants = (function () {
            var cons;
            cons = AppConfig.Variables;
            return cons;
        })();
        ngModule.constant('AppConstants', AppConstants);
    })(Main = App.Main || (App.Main = {}));
})(App || (App = {}));
System.register("app/report.maker.directive", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ReportMakerDirective;
    return {
        setters:[],
        execute: function() {
            ReportMakerDirective = (function () {
                function ReportMakerDirective() {
                    this.restrict = 'E';
                    this.scope = {};
                    this.link = function (scope, elem, attrs) {
                    };
                }
                ReportMakerDirective.factory = function () {
                    var directive = function () { return new ReportMakerDirective(); };
                    directive.$inject = [];
                    return directive;
                };
                return ReportMakerDirective;
            }());
            exports_1("ReportMakerDirective", ReportMakerDirective);
            ngModule.directive('reportTemplateMaker', ReportMakerDirective.factory());
        }
    }
});
//# sourceMappingURL=bundle.js.map