sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, JSONModel, ODataModel, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.mkx.controller.App", {
        changeLanguage: function (oEvent) {
            var selectedKey = oEvent.getSource().getSelectedKey();
            sap.ui.getCore().getConfiguration().setLanguage(selectedKey);
        },
        saveValues: function (){
            let data = this.getView().getModel("newData").getProperty("record");
            let oModel = this.getView().getModel("Data");

        },
        openHistory: function (){
            var oView = this.getView();

            if (!this.byId("historyDialog")) {
                var oDialog = sap.ui.xmlfragment(oView.getId(), "sap.ui.mkx.view.History", this);
                oView.addDependent(oDialog);
                oDialog.open();
            } else {
                this.byId("historyDialog").open();
            }
        },
        closeHistory: function (){
            this.byId("historyDialog").close()
        }
    });
})