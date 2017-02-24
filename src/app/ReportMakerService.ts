
module App.Service {


    class ToolsDrappable {

        private config : any = {
            intertia : true,
            restrict : {
                // restriction : "parent",
                endOnly : true,
                elementRect : {
                    top : 0,
                    left : 0,
                    bottom : 1,
                    right : 1
                }
            },
            autoScroll : true
        };

        constructor(draggableClass : string = '.draggable'){
            interact(draggableClass).draggable(this.buildConfig());
        }

        private buildConfig = () => {
            let listeners = {
                onmove : this.onmoveListener,
                onend : this.onendListener
            };

            return _.extend(this.config, listeners);
        }

        onmoveListener = (event : any) => {
            let target = event.target,

                x = ( parseFloat( target.getAttribute( 'data-x' ) ) || 0 ) + event.dx,
                y = ( parseFloat( target.getAttribute( 'data-y' ) )  || 0 ) + event.dy;
            
            target.style.webkitTransform = 
            target.style.transform = 
                `translate( ${x}px, ${y}px )`;
            
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        }

        onendListener = (event : any) => {
            var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(event.dx * event.dx +
                     event.dy * event.dy)|0) + 'px');
        }

    }

    interface IDropZoneCallbacks {
        ondropactivate(event : any) : void;
        ondragenter(event : any) : void;
        ondragleave(event : any) : void;
        ondrop(event : any) : void;
        ondropdeactivate(event : any) : void;
    }

    interface IDropZone {
        dropZoneName : string;
    }
    

    class DropZone  implements IDropZone, IDropZoneCallbacks{

        dropZoneName : string;

        config : any = {
            accept : '#yes-drop',
            overlap : 0.75
        }

        constructor(dropZoneName : string){
            this.dropZoneName = dropZoneName;
        }
 
        build = (config : IDropZoneCallbacks) => {
            interact(this.dropZoneName)
                .dropzone(
                    _.extend(this.config, config)
                );
        };

        ondropactivate(event : any){
            event.target.classList.add('drop-active');
        }
        ondragenter(event : any){
            var draggableElement = event.relatedTarget,
            dropzoneElement = event.target;

            // feedback the possibility of a drop
            dropzoneElement.classList.add('drop-target');
            draggableElement.classList.add('can-drop');
            draggableElement.textContent = 'Dragged in';
        }
        ondragleave(event : any){
            event.target.classList.remove('drop-target');
            event.relatedTarget.classList.remove('can-drop');
            event.relatedTarget.textContent = 'Dragged out';
        }
        ondrop(event : any){
            event.relatedTarget.textContent = 'Dropped';
        }
        ondropdeactivate(event : any){
            event.target.classList.remove('drop-active');
            event.target.classList.remove('drop-target');
        }
    }

    class ToolboxDropZone extends DropZone{

        constructor(){
        //    super('.toolbox');
           super('.dropzone');
           this.build({
               ondropactivate : this.ondropactivate,
               ondragenter : this.ondragenter,
               ondragleave : this.ondragleave,
               ondrop : this.ondrop,
               ondropdeactivate : this.ondropdeactivate
           });
        }

        ondropactivate(even : any){
            super.ondropactivate(event);
        }
        ondragenter(event : any){
            super.ondragenter(event);
        }
        ondragleave(event : any){
            super.ondragleave(event);
        }
        ondrop(event : any){
            super.ondrop(event);
        }
        ondropdeactivate(event : any){
            super.ondropdeactivate(event);
        }
    }   

    class PaperDropzone extends DropZone {
        
        constructor(){
            super('.paper');
            this.build({
               ondropactivate : this.ondropactivate,
               ondragenter : this.ondragenter,
               ondragleave : this.ondragleave,
               ondrop : this.ondrop,
               ondropdeactivate : this.ondropdeactivate
           });
        }

        ondropactivate(even : any){
            super.ondropactivate(event);
        }
        ondragenter(event : any){
            super.ondragenter(event);
        }
        ondragleave(event : any){
            super.ondragleave(event);
        }
        ondrop(event : any){
            super.ondrop(event);
        }
        ondropdeactivate(event : any){
            super.ondropdeactivate(event);
        }

    }


    export class ReportMakerService {

        static $inject : string[] = [];


        constructor(){
            this.init();
        }

        init = () => {
            (new ToolsDrappable());
            (new ToolboxDropZone());
            // (new PaperDropzone());
        }
    }

    ngModule.service('ReportMakerService', ReportMakerService);

}