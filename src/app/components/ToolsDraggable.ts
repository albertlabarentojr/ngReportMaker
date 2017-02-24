
module App.Components {
    export class ToolsDraggable {

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
}