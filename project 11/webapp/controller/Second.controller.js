sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("restinpeace.project1.controller.Second", {
      onInit: function () {
        this.getOwnerComponent()
          .getRouter()
          .getRoute("Second")
          .attachPatternMatched(this.onPatternMatched, this);
      },
      onGoThird: function () {
        this.getOwnerComponent().getRouter().navTo("Third");
      },
      onPatternMatched: function () {
        var oModel = this.getOwnerComponent().getModel();
        var empId = oModel.getProperty("/empid");
        var empName = oModel.getProperty("/empname");
        var empDesig = oModel.getProperty("/empdesig");
        var empSkill = oModel.getProperty("/empskill");
        var empEmail = oModel.getProperty("/empemail");
        var empPhone = oModel.getProperty("/empphone");

        this.getView().byId("idIpEmpId").setText(empId);
        this.getView().byId("idIpEmpName").setText(empName);
        this.getView().byId("idIpEmpDesignation").setText(empDesig);
        this.getView().byId("idIpEmpSkill").setText(empSkill);
        this.getView().byId("idIpEmpEmail").setText(empEmail);
        this.getView().byId("idIpEmpPhone").setText(empPhone);
        // You can now use these variables as needed
      },
    });
  }
);
