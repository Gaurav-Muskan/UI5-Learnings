sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("restinpeace.project1.controller.First", {
        onInit: function() {
            // Initialization code here
        },
        onGoSecond: function() {
            this.getOwnerComponent().getRouter().navTo("Second");
        }, 
        onSubmit: function() {
            var empId = this.getView().byId("idIpEmpId").getValue();
            var empName = this.getView().byId("idIpEmpName").getValue();
            var empDesig = this.getView().byId("idIpEmpDesig").getValue();
            var empSkill = this.getView().byId("idIpEmpSkill").getValue();
            var empEmail = this.getView().byId("idIpEmpEmail").getValue();
            var empPhone = this.getView().byId("idIpEmpPhone").getValue();
            
            var oModel = this.getOwnerComponent().getModel();
            oModel.setProperty("/empid", empId);
            oModel.setProperty("/empname", empName);
            oModel.setProperty("/empdesig", empDesig);
            oModel.setProperty("/empskill", empSkill);
            oModel.setProperty("/empemail", empEmail);
            oModel.setProperty("/empphone", empPhone);
            
            this.getOwnerComponent().getRouter().navTo("Second");
            // Further processing of the collected data
        }
        
        
        // onSubmit: function() {
        //     var empId = this.getView().byId("idIpEmpId").getValue();
        //     var empIdRegEx = /^[0-9]+$/;

        //     if (empId === "") {
        //         this.getView().byId("idIpEmpId").setValueState("Error");
        //         this.getView().byId("idIpEmpId").setValueStateText("Employee ID is mandatory. Please fill it.");
        //     } else if (!empIdRegEx.test(empId) || empId.length !== 8) { 
        //         this.getView().byId("idIpEmpId").setValueState("Error");
        //         this.getView().byId("idIpEmpId").setValueStateText("Employee ID is not valid. It should be an 8-digit number.");
        //     } else {
        //         this.getView().byId("idIpEmpId").setValueState("None");
        //         // Add logic here if the employee ID is valid
        //         MessageToast.show("Employee ID is valid. Proceed with submission.");
        //     }
        // },
       
    });
});
