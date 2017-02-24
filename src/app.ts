
let ngModule : ng.IModule = angular.module(App.Config.Ng.module.name, App.Config.Ng.module.dependencies);

module App.Main {

    import AppConfig = App.Config;
    import Interfaces = App.Interfaces;
    import IConstants = Interfaces.Constants;

    const AppConstants = (() : IConstants.AppConstants => {

        let cons : IConstants.AppConstants;
            cons = AppConfig.Variables;
            return cons;

    })();

    ngModule.constant('AppConstants', AppConstants);

}