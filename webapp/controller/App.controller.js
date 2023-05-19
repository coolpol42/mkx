sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.mkx.controller.App", {
        onInit: function () {
            let primaryLanguage = "cz";

            var oData = {
                primaryLanguage: primaryLanguage
            }
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "langSettings");

            sap.ui.getCore().getConfiguration().setLanguage(primaryLanguage);
        },
        changeLanguage: function (oEvent) {
            var selectedKey = oEvent.getSource().getSelectedKey();
            sap.ui.getCore().getConfiguration().setLanguage(selectedKey);
        }
    });
})