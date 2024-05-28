sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter",
  ],
  function (Controller, MessageToast, JSONModel,Filter,FilterOperator,Sorter) {
    "use strict";

    return Controller.extend("restinpeace.project1.controller.First", {
      onInit: function () {
        // Initialization code here
      },
      onSubmit: function () {
        // var empId = this.getView().byId("idIpEmpId").getValue();
        // var empName = this.getView().byId("idIpEmpName").getValue();
        // var empDesig = this.getView().byId("idIpEmpDesig").getValue();
        // var empSkill = this.getView().byId("idIpEmpSkill").getValue();
        // var empEmail = this.getView().byId("idIpEmpEmail").getValue();
        // var empPhone = this.getView().byId("idIpEmpPhone").getValue();
        // var oModel = this.getOwnerComponent().getModel();
        // oModel.setProperty("/empid", empId);
        // oModel.setProperty("/empname", empName);
        // oModel.setProperty("/empdesig", empDesig);
        // oModel.setProperty("/empskill", empSkill);
        // oModel.setProperty("/empemail", empEmail);
        // oModel.setProperty("/empphone", empPhone);
        // Further processing of the collected data
      },
      onSelEmp: function (oEvent) {
        var sPath = oEvent
          .getParameter("listItem")
          .getBindingContext("myModel")
          .getPath("");
        const inputString = sPath;
        // Split the string by '/' and get the last element
        const index = inputString.split("/")[2];
        // console.log(index);
        var myModel=this.getOwnerComponent().getModel("myModel");
        myModel.setProperty("/index", index)
        this.getOwnerComponent().getRouter().navTo("Second",{
            Index:index
        });
        // alert(sPath);
      },
      onSearchEmp: function(oEvent) {
        var value = oEvent.getParameter("newValue");
        var aFilters = [];
        if (value !== "") {
          // Use the correct path without curly braces
          var oFilter = new sap.ui.model.Filter("empname", sap.ui.model.FilterOperator.Contains, value);
          aFilters.push(oFilter);
        }
        // Apply the filter to the binding
        this.getView().byId("idListEmp").getBinding("items").filter(aFilters);
      },      
      onSortAscending:function(){
        var oSorter=new Sorter("empname",false);
        this.getView().byId("idListEmp").getBinding("items").sort(oSorter);
      },
      onSortDescending:function(){
        var oSorter=new Sorter("empname",true);
        this.getView().byId("idListEmp").getBinding("items").sort(oSorter);
      },
      // fnShowDetails()
      //     var selRel=oEvent.getParameter("selectedItem").getText();
      //     console.log(selRel);
      // },
      // onSelRelCB: function(oEvent){
      //     var selRelcb=oEvent.getParameter("selectedItem").getText();
      //     console.log(selRelcb);
      // },
      // onSelLangs: function(oEvent){
      //     var aLanItems=oEvent.getParameter("selectedItems");
      //     for(var i=0;i<aLanItems.length;i++){
      //         console.log(aLanItems[i].getText());
      //     }
      // },
      // onSelectGender: function(oEvent){
      //     var index=oEvent.getParameter("selectedIndex");
      //     if(index===0){
      //         console.log("You are Male");
      //     }
      //     else {
      //         console.log("You are Female");
      //     }
      // },
      // onSelChb:function(oEvent){
      //     var bIsChecked=oEvent.getParameter("selected");
      //     if(bIsChecked){
      //         console.log("You are married.");
      //     }
      //     else{
      //         console.log("You are still bachelor.");
      //     }
      // },
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
  }
);
