sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/Fragment",
    "sap/ui/model/Sorter",
  ],
  function (Controller, MessageToast, JSONModel,Filter,FilterOperator,Fragment,Sorter) {
    "use strict";

    return Controller.extend("restinpeace.project1.controller.First", {
      onInit: function () {
        // Initialization code here
      },
      onSubmit: function () {
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
      onF4HelpPress: function(oEvent) {
        var oView = this.getView();

        // Check if the dialog is not created
        if (!this._pDialog) {
            // Load the fragment asynchronously
            this._pDialog = Fragment.load({
                id: oView.getId(),
                name: "restinpeace.project1.fragment.EmpF4Help",
                controller: this
            }).then(function(oDialog) {
                // Add Dialog to the view
                oView.addDependent(oDialog);
                return oDialog;
            });
        }

        // Open the dialog once it's loaded
        this._pDialog.then(function(oDialog) {
            oDialog.open();
        });
    },

    onCloseDialog: function() {
        if (this._pDialog) {
            this._pDialog.then(function(oDialog) {
                oDialog.close();
            });
        }
    }
    });
  }
);
