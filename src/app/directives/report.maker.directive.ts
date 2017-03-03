

module App.Directives {

    interface IScope {
        name : string;
        reference : string;
        field : string;
        options? : any;
    }

    interface IReportMakerScope extends ng.IScope {
        name : string;
        reference : string;
        field : string;
        options? : any;
    }


    export class ReportMakerDirective implements ng.IDirective {

        constructor(
            private $timeout : ng.ITimeoutService,
            private ReportMakerService : App.Service.ReportMakerService
        ){
            this.ReportMakerService.run();
        }

        static factory() : ng.IDirectiveFactory
        {
            let directive : ng.IDirectiveFactory = ($timeout : ng.ITimeoutService, ReportMakerService : App.Service.ReportMakerService) => new ReportMakerDirective($timeout, ReportMakerService);
                directive.$inject = ['$timeout', 'ReportMakerService'];
                return directive;
        }

        restrict = 'E';

        scope : IScope = {
            name : '@',
            reference : '@',
            field : '@',
            options : '='
        }

        link = (scope : IReportMakerScope, elem : ng.IAugmentedJQuery, attrs : ng.IAttributes) => {
            
        }

        templateUrl = function(){
            return './src/templates/box.container.tpl.html';
        }

    }

    ngModule.directive('reportMaker', ReportMakerDirective.factory());

}

