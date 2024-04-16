sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    "use strict";

    return Controller.extend("restinpeace.project1.controller.First", {
        onInit: function() {
            // Initialization code here
        },
        onPress: function() {
            MessageToast.show("Hemlo");
        },
        onGoSecond: function() {
            this.getOwnerComponent().getRouter().navTo("Second");
        }
    });
});
