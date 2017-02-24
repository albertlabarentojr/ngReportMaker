
module App.Service {


    import ToolsDraggable = App.Components.ToolsDraggable;
    import IDropZoneCallbacks = App.Interfaces.IDropZoneCallbacks;
    import IDropZone = App.Interfaces.IDropZone;
    import DropZone = App.Components.DropZone;
    import ToolboxDropZone = App.Components.ToolboxDropZone;
    import PaperDropZone = App.Components.PaperDropZone;

    export class ReportMakerService {

        static $inject : string[] = [];


        constructor(){
            this.init();
        }

        init = () => {
            (new ToolsDraggable());
            (new ToolboxDropZone());
            // (new PaperDropZone());
        }
    }

    ngModule.service('ReportMakerService', ReportMakerService);

}