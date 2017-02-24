module App.Config {

    export module Angular {
        export interface Module {
            name : string;
            dependencies : Array<string>;
        }
    }
    export interface IAngular {
        module : App.Config.Angular.Module;
    }
}

