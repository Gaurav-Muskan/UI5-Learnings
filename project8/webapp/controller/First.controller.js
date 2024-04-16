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
        onSubmit: function() {
            var empId = this.getView().byId("idIpEmpId").getValue();
            var empName = this.getView().byId("idIpEmpName").getValue();
            var empDesig = this.getView().byId("idIpEmpDesig").getValue();
            var empSkill = this.getView().byId("idIpEmpSkill").getValue();
            var empEmail = this.getView().byId("idIpEmpEmail").getValue();
            var empPhone = this.getView().byId("idIpEmpPhone").getValue();
            
            // Employee Id validation
            var empIdRegEx = /^[0-9]+$/;
            if (empId === "") {
                this.getView().byId("idIpEmpId").setValueState("Error");
                this.getView().byId("idIpEmpId").setValueStateText("Employee ID is mandatory. Please fill it.");
            } else if (!empIdRegEx.test(empId) || empId.length !== 8) { 
                this.getView().byId("idIpEmpId").setValueState("Error");
                this.getView().byId("idIpEmpId").setValueStateText("Employee ID is not valid.");
            } else {
                this.getView().byId("idIpEmpId").setValueState("None");
                MessageToast.show("Employee ID is valid. Proceed with submission.");
            }
            
            // Employee Name validation
            var empNameRegEx = /^[a-zA-Z]+$/;
            if (empName === "") {
                this.getView().byId("idIpEmpName").setValueState("Error");
                this.getView().byId("idIpEmpName").setValueStateText("Employee Name is mandatory. Please fill it.");
            } else if (!empNameRegEx.test(empName)) { 
                this.getView().byId("idIpEmpName").setValueState("Error");
                this.getView().byId("idIpEmpName").setValueStateText("Employee Name is not valid.");
            } else {
                this.getView().byId("idIpEmpName").setValueState("None");
                MessageToast.show("Employee Name is valid. Proceed with submission.");
            }
            
            // Employee Designation validation
            var empDesigRegEx = /^[a-zA-Z]+$/;
            if (empDesig === "") {
                this.getView().byId("idIpEmpDesig").setValueState("Error");
                this.getView().byId("idIpEmpDesig").setValueStateText("Employee Designation is mandatory. Please fill it.");
            } else if (!empDesigRegEx.test(empDesig)) { 
                this.getView().byId("idIpEmpDesig").setValueState("Error");
                this.getView().byId("idIpEmpDesig").setValueStateText("Employee Designation is not valid.");
            } else {
                this.getView().byId("idIpEmpDesig").setValueState("None");
                MessageToast.show("Employee Designation is valid. Proceed with submission.");
            }
            
            // Employee Skill validation
            var empSkillRegEx = /^[a-zA-Z]+$/;
            if (empSkill === "") {
                this.getView().byId("idIpEmpSkill").setValueState("Error");
                this.getView().byId("idIpEmpSkill").setValueStateText("Employee Skill is mandatory. Please fill it.");
            } else if (!empSkillRegEx.test(empSkill)) { 
                this.getView().byId("idIpEmpSkill").setValueState("Error");
                this.getView().byId("idIpEmpSkill").setValueStateText("Employee Skill is not valid.");
            } else {
                this.getView().byId("idIpEmpSkill").setValueState("None");
                MessageToast.show("Employee Skill is valid. Proceed with submission.");
            }
            
            // Employee Email validation
            var empEmailRegEx = /^[a-zA-Z]+$/;
            if (empEmail === "") {
                this.getView().byId("idIpEmpEmail").setValueState("Error");
                this.getView().byId("idIpEmpEmail").setValueStateText("Employee Email is mandatory. Please fill it.");
            } else if (!empEmailRegEx.test(empEmail)) { 
                this.getView().byId("idIpEmpEmail").setValueState("Error");
                this.getView().byId("idIpEmpEmail").setValueStateText("Employee Email is not valid.");
            } else {
                this.getView().byId("idIpEmpEmail").setValueState("None");
                MessageToast.show("Employee Email is valid. Proceed with submission.");
            }
            
            // Employee Phone validation
            var empPhoneRegEx = /^[0-9]+$/;
            if (empPhone === "") {
                this.getView().byId("idIpEmpPhone").setValueState("Error");
                this.getView().byId("idIpEmpPhone").setValueStateText("Employee Phone is mandatory. Please fill it.");
            } else if (!empPhoneRegEx.test(empPhone)) { 
                this.getView().byId("idIpEmpPhone").setValueState("Error");
                this.getView().byId("idIpEmpPhone").setValueStateText("Employee Phone is not valid.");
            } else {
                this.getView().byId("idIpEmpPhone").setValueState("None");
                MessageToast.show("Employee Phone is valid. Proceed with submission.");
            }
        },
        
        onGoSecond: function() {
            this.getOwnerComponent().getRouter().navTo("Second");
        }
    });
});
