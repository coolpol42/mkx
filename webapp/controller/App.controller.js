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
            let data = this.getView().getModel("values").getProperty("/record");

        },
        loadValues: function (){
            this.getView().getModel("values").setProperty("/record", {
                motor_current: 1.7,
                open_pressure: 23.1,
                switch_pressure: 10.2,
                flow: 0.2,
                command_id: "load_values_command_id",
                pump_id: "load_values_pump_id",
            });
            MessageToast.show(getI18nText("loadValuesSccess", this));
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
});

function getI18nText(key, that) {
    return that.getView().getModel("i18n").getResourceBundle().getText(key);
}