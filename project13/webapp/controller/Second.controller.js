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
      onPatternMatched:function(){
        this.getView().bindElement("myModel>/aEmployees/2");
      },
      onGoThird: function () {
        this.getOwnerComponent().getRouter().navTo("Third");
      },
      onGoFirst:function(){
        this.getOwnerComponent().getRouter().navTo("RouteFirst");
      }
    });
  }
);
