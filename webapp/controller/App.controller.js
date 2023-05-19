sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/model/odata/v2/ODataModel",
], function (Controller, MessageToast, JSONModel, ODataModel) {
    "use strict";
    return Controller.extend("sap.ui.mkx.controller.App", {
        changeLanguage: function (oEvent) {
            var selectedKey = oEvent.getSource().getSelectedKey();
            sap.ui.getCore().getConfiguration().setLanguage(selectedKey);
        }
    });
})