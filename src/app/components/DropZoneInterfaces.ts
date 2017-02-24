
module App.Interfaces {
    export interface IDropZoneCallbacks {
        ondropactivate(event : any) : void;
        ondragenter(event : any) : void;
        ondragleave(event : any) : void;
        ondrop(event : any) : void;
        ondropdeactivate(event : any) : void;
    }

    export interface IDropZone {
        dropZoneName : string;
    }
}