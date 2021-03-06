(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['leaflet'], factory);
    } else if (typeof module !== 'undefined') {
        // Node/CommonJS
        module.exports = factory(require('leaflet'));
    } else {
        // Browser globals
        if (typeof window.L === 'undefined') {
            throw new Error('Leaflet must be loaded first');
        }
        factory(window.L);
    }
}(function (L) {
    L.Control.CollapseButton = L.Control.extend({
        options: {
            currentStatus: 1,
            position: 'topleft',
            title: '',
            titleCancel: '',
            elementId: '',
            targetElementId: '',
            showClasses: [],
            hideClasses: [],
            targetShowClasses: [],
            targetHideClasses: []
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div', 'leaflet-control-collapse leaflet-bar leaflet-control');

            this.link = L.DomUtil.create('a', 'leaflet-control-collapse-button leaflet-bar-part ' + (this.options.position.endsWith('left') ? 'lcc-left' : 'lcc-right') + ' ' + (this.options.currentStatus ? 'lcc-collapse' : 'lcc-collapsed'), container);
            this.link.href = '#';

            this._map = map;

            L.DomEvent.on(this.link, 'click', this._click, this);

            return container;
        },
        _click: function (e) {
            L.DomEvent.stopPropagation(e);
            L.DomEvent.preventDefault(e);

            var el = document.getElementById(this.options.elementId);
            var tEl = document.getElementById(this.options.targetElementId);

            var showClasses = this.options.showClasses.split(" ");
            var hideClasses = this.options.hideClasses.split(" ");
            var showTargetClasses = this.options.targetShowClasses.split(" ");
            var hideTargetClasses = this.options.targetHideClasses.split(" ");

            if (this.options.currentStatus) {
                //Hide
                this.link.classList.add("lcc-collapsed");
                this.link.classList.remove("lcc-collapse");

                for (var c of hideClasses) {
                    el.classList.add(c);
                }

                for (var c of hideTargetClasses) {
                    tEl.classList.add(c);
                }

                for (var c of showClasses) {
                    el.classList.remove(c);
                }

                for (var c of showTargetClasses) {
                    tEl.classList.remove(c);
                }

                this.options.currentStatus = 0;

                this.link.title = this.options.titleCancel;
            } else {
                //Show
                this.link.classList.add("lcc-collapse");
                this.link.classList.remove("lcc-collapsed");

                for (var c of showTargetClasses) {
                    tEl.classList.add(c);
                }

                for (var c of showClasses) {
                    el.classList.add(c);

                }
                for (var c of hideTargetClasses) {
                    tEl.classList.remove(c);
                }

                for (var c of hideClasses) {
                    el.classList.remove(c);
                }

                this.options.currentStatus = 1;

                this.link.title = this.options.title;
            }

            this._map.invalidateSize();
        }
    });

    L.Map.include({
        isCollapsed: function () {
            return this.options.currentStatus;
        }
    });

    L.control.collapseButton = function (options) {
        return new L.Control.CollapseButton(options);
    };
}));
