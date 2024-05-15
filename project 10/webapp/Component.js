/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "restinpeace/project1/model/models"
    "sap/ui/json/JSONModel"
],
function (UIComponent, Device, models,JSONModel) {
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
            var oModel=new JSONModel({
                empid="";
                empname="";
                empdesig="";
                empskill="";
                empemail="";
                empphone ="";

            }); //This creates json file(Rectangular Box)
            this.setModel(oModel);
            // enable routing
            this.getRouter().initialize();

            // set the device model
            this.setModel(models.createDeviceModel(), "device");
        }
    });
}
);