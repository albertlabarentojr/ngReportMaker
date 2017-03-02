
module App.Directives{
    
	export class HeaderComponent implements ng.IComponentOptions{
     
      public bindings: any;
      public controller: any;
      public templateUrl: string;

      constructor(){
          this.bindings = {
            textBinding: '@',
            dataBinding: '<',
            functionBinding: '&'
          };
          this.templateUrl = './src/templates/tools/header.tpl.html';
       }
       headerTemplate(){
          return this.templateUrl;
       }
	}
  ngModule.component('headerComponent',new HeaderComponent().headerTemplate());
}