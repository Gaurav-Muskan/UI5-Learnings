sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "restinpeace/project1/model/models",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, Device, models, JSONModel) {
    "use strict";

    return UIComponent.extend("restinpeace.project1.Component", {
        metadata: {
            manifest: "json"
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            var oModel=new JSONModel("model/data.json");

            this.setModel(oModel, "myModel");//Here we set local model global.
            // enable routing
            this.getRouter().initialize();

            // set the device model
            this.setModel(models.createDeviceModel(), "device");
         }
    });
});