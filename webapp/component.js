sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.mkx.Component", {

        metadata: {
            manifest: "json"
        },
        init: function () {
            // zavolání init funkce rodiče
            UIComponent.prototype.init.apply(this, arguments);
            // nastavení data modelů
            var oData = {
                forWho: {
                    name: "Josef Polák"
                }
            }
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

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