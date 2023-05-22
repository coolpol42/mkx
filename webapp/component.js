sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
], function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("sap.ui.mkx.Component", {

        metadata: {
            manifest: "json"
        },
        init: function () {
            // zavolání init funkce rodiče
            UIComponent.prototype.init.apply(this, arguments);
            // nastavení data modelů

            let primaryLanguage = "cz";
            var oModelLang = new JSONModel({primaryLanguage: primaryLanguage});
            this.setModel(oModelLang, "langSettings");

            sap.ui.getCore().getConfiguration().setLanguage(primaryLanguage);

            var oData = {
                record: {
                    motor_current: 0.000,
                    open_pressure: 0.000,
                    switch_pressure: 0.000,
                    flow: 0.000,
                    command_id: "",
                    pump_id: "",
                }
            }
            var oModel = new JSONModel(oData);
            this.setModel(oModel, "values");
            
            oData = {
                lowLim: {
                    motor_current: "N/A",
                    open_pressure: "22.000",
                    switch_pressure: "10.000",
                    flow: "0.180",
                },
                upLim: {
                    motor_current: "1.760",
                    open_pressure: "27.000",
                    switch_pressure: "14.000",
                    flow: "0.310",
                }
            }
            oModel = new JSONModel(oData);
            this.setModel(oModel, "limits");

            // Nastavení UI textů - již není potřeba v manifest.json
            // var i18Model = new ResourceModel({
            //     bundleName: "sap.ui.mkx.i18n.i18n",
            //     supportedLocales: [""],
            //     fallbackLocale: ""
            // });
            // this.setModel(i18Model, "i18n")
        }
    });
})