var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var Config;
    (function (Config) {
        Config.Ng = {
            module: {
                name: 'anl.ngReportMaker',
                dependencies: []
            }
        };
    })(Config = App.Config || (App.Config = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Config;
    (function (Config) {
        Config.Variables = {
            appName: 'anl.ngReportMaker',
            appAlias: 'Report Template Maker'
        };
    })(Config = App.Config || (App.Config = {}));
})(App || (App = {}));
var ngModule = angular.module(App.Config.Ng.module.name, App.Config.Ng.module.dependencies);
var App;
(function (App) {
    var Main;
    (function (Main) {
        var AppConfig = App.Config;
        var AppConstants = (function () {
            var cons;
            cons = AppConfig.Variables;
            return cons;
        })();
        ngModule.constant('AppConstants', AppConstants);
    })(Main = App.Main || (App.Main = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Components;
    (function (Components) {
        var ToolsDraggable = (function () {
            function ToolsDraggable(draggableClass) {
                var _this = this;
                if (draggableClass === void 0) { draggableClass = '.draggable'; }
                this.config = {
                    intertia: true,
                    restrict: {
                        endOnly: true,
                        elementRect: {
                            top: 0,
                            left: 0,
                            bottom: 1,
                            right: 1
                        }
                    },
                    autoScroll: true
                };
                this.buildConfig = function () {
                    var listeners = {
                        onmove: _this.onmoveListener,
                        onend: _this.onendListener
                    };
                    return _.extend(_this.config, listeners);
                };
                this.onmoveListener = function (event) {
                    var target = event.target, x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx, y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
                    target.style.webkitTransform =
                        target.style.transform =
                            "translate( " + x + "px, " + y + "px )";
                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                };
                this.onendListener = function (event) {
                    var textEl = event.target.querySelector('p');
                    textEl && (textEl.textContent =
                        'moved a distance of '
                            + (Math.sqrt(event.dx * event.dx +
                                event.dy * event.dy) | 0) + 'px');
                };
                interact(draggableClass).draggable(this.buildConfig());
            }
            return ToolsDraggable;
        }());
        Components.ToolsDraggable = ToolsDraggable;
    })(Components = App.Components || (App.Components = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Components;
    (function (Components) {
        var DropZone = (function () {
            function DropZone(dropZoneName) {
                var _this = this;
                this.config = {
                    accept: '#yes-drop',
                    overlap: 0.75
                };
                this.build = function (config) {
                    interact(_this.dropZoneName)
                        .dropzone(_.extend(_this.config, config));
                };
                this.dropZoneName = dropZoneName;
            }
            DropZone.prototype.ondropactivate = function (event) {
                event.target.classList.add('drop-active');
            };
            DropZone.prototype.ondragenter = function (event) {
                var draggableElement = event.relatedTarget, dropzoneElement = event.target;
                dropzoneElement.classList.add('drop-target');
                draggableElement.classList.add('can-drop');
                draggableElement.textContent = 'Dragged in';
            };
            DropZone.prototype.ondragleave = function (event) {
                event.target.classList.remove('drop-target');
                event.relatedTarget.classList.remove('can-drop');
                event.relatedTarget.textContent = 'Dragged out';
            };
            DropZone.prototype.ondrop = function (event) {
                event.relatedTarget.textContent = 'Dropped';
            };
            DropZone.prototype.ondropdeactivate = function (event) {
                event.target.classList.remove('drop-active');
                event.target.classList.remove('drop-target');
            };
            return DropZone;
        }());
        Components.DropZone = DropZone;
    })(Components = App.Components || (App.Components = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Components;
    (function (Components) {
        var PaperDropZone = (function (_super) {
            __extends(PaperDropZone, _super);
            function PaperDropZone() {
                _super.call(this, '.paper');
                this.build({
                    ondropactivate: this.ondropactivate,
                    ondragenter: this.ondragenter,
                    ondragleave: this.ondragleave,
                    ondrop: this.ondrop,
                    ondropdeactivate: this.ondropdeactivate
                });
            }
            PaperDropZone.prototype.ondropactivate = function (even) {
                _super.prototype.ondropactivate.call(this, event);
            };
            PaperDropZone.prototype.ondragenter = function (event) {
                _super.prototype.ondragenter.call(this, event);
            };
            PaperDropZone.prototype.ondragleave = function (event) {
                _super.prototype.ondragleave.call(this, event);
            };
            PaperDropZone.prototype.ondrop = function (event) {
                _super.prototype.ondrop.call(this, event);
            };
            PaperDropZone.prototype.ondropdeactivate = function (event) {
                _super.prototype.ondropdeactivate.call(this, event);
            };
            return PaperDropZone;
        }(Components.DropZone));
        Components.PaperDropZone = PaperDropZone;
    })(Components = App.Components || (App.Components = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Components;
    (function (Components) {
        var ToolboxDropZone = (function (_super) {
            __extends(ToolboxDropZone, _super);
            function ToolboxDropZone() {
                _super.call(this, '.dropzone');
                this.build({
                    ondropactivate: this.ondropactivate,
                    ondragenter: this.ondragenter,
                    ondragleave: this.ondragleave,
                    ondrop: this.ondrop,
                    ondropdeactivate: this.ondropdeactivate
                });
            }
            ToolboxDropZone.prototype.ondropactivate = function (even) {
                _super.prototype.ondropactivate.call(this, event);
            };
            ToolboxDropZone.prototype.ondragenter = function (event) {
                _super.prototype.ondragenter.call(this, event);
            };
            ToolboxDropZone.prototype.ondragleave = function (event) {
                _super.prototype.ondragleave.call(this, event);
            };
            ToolboxDropZone.prototype.ondrop = function (event) {
                _super.prototype.ondrop.call(this, event);
            };
            ToolboxDropZone.prototype.ondropdeactivate = function (event) {
                _super.prototype.ondropdeactivate.call(this, event);
            };
            return ToolboxDropZone;
        }(Components.DropZone));
        Components.ToolboxDropZone = ToolboxDropZone;
    })(Components = App.Components || (App.Components = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Service;
    (function (Service) {
        var ToolsDraggable = App.Components.ToolsDraggable;
        var ToolboxDropZone = App.Components.ToolboxDropZone;
        var ReportMakerService = (function () {
            function ReportMakerService() {
                this.init = function () {
                    (new ToolsDraggable());
                    (new ToolboxDropZone());
                };
                this.init();
            }
            ReportMakerService.$inject = [];
            return ReportMakerService;
        }());
        Service.ReportMakerService = ReportMakerService;
        ngModule.service('ReportMakerService', ReportMakerService);
    })(Service = App.Service || (App.Service = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Directive;
    (function (Directive) {
        var ReportMakerDirective = (function () {
            function ReportMakerDirective($timeout, ReportMakerService) {
                this.$timeout = $timeout;
                this.ReportMakerService = ReportMakerService;
                this.restrict = 'E';
                this.scope = {
                    name: '@',
                    reference: '@',
                    field: '@',
                    options: '='
                };
                this.link = function (scope, elem, attrs) {
                };
                this.templateUrl = function () {
                    return './src/templates/box.container.tpl.html';
                };
            }
            ReportMakerDirective.factory = function () {
                var directive = function ($timeout, ReportMakerService) { return new ReportMakerDirective($timeout, ReportMakerService); };
                directive.$inject = ['$timeout', 'ReportMakerService'];
                return directive;
            };
            return ReportMakerDirective;
        }());
        Directive.ReportMakerDirective = ReportMakerDirective;
        ngModule.directive('reportMaker', ReportMakerDirective.factory());
    })(Directive = App.Directive || (App.Directive = {}));
})(App || (App = {}));
//# sourceMappingURL=bundle.js.map