
module App.Components {
    export class ToolboxDropZone extends DropZone{

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
}