

interface IReportMakerScope {

}


export class ReportMakerDirective implements ng.IDirective {

    constructor(

    ){

    }

    static factory() : ng.IDirectiveFactory
    {
        let directive : ng.IDirectiveFactory = () => new ReportMakerDirective();
            directive.$inject = [];
            return directive;
    }

    restrict = 'E';

    scope : IReportMakerScope = {

    }

    link = (scope : IReportMakerScope, elem : ng.IAugmentedJQuery, attrs : ng.IAttributes) => {

    }
}

ngModule.directive('reportTemplateMaker', ReportMakerDirective.factory());
