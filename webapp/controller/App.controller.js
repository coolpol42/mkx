sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel){
    "use strict";
    return Controller.extend("sap.ui.mkx.controller.App",{
       showHello: function (){
           // načtení msg z i18n modelu
           var oBundle = this.getView().getModel("i18n").getResourceBundle();

           var sForWho = this.getView().getModel().getProperty("/forWho/name");

          MessageToast.show(oBundle.getText("helloMsg", [sForWho]));
       }
    });
})