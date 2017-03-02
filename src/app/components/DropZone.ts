

module App.Components {

    import Interfaces = App.Interfaces;
    
    export class DropZone implements Interfaces.IDropZone, Interfaces.IDropZoneCallbacks{

        dropZoneName : string;

        config : any = {
            accept : '#yes-drop',
            overlap : 0.75
        }

        constructor(dropZoneName : string){
            this.dropZoneName = dropZoneName;
        }
 
        build = (config : Interfaces.IDropZoneCallbacks) => {
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

        deleteDropzone(event: any, el : any){
          console.log("Deleted");
        }
    }

}