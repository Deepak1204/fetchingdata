sap.ui.controller("fetchdata.page1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf fetchdata.page1
*/
	onInit: function() {
		
		
		   var oModel =  new sap.ui.model.odata.v2.ODataModel("proxy/http/services.odata.org/Northwind/Northwind.svc/Categories"); 
		   //new sap.ui.getCore().setModel(oModel,"data12");
      	 	OData.request({
                requestUri : "proxy/http/services.odata.org/Northwind/Northwind.svc/Categories",
                method : "GET",
                headers : {
                                        "X-Requested-With" : "XMLHttpRequest",
                                        "Content-Type" : "application/atom+xml",
                                        "DataServiceVersion" : "2.0",
                                        "X-CSRF-Token" : "Fetch"
                                        }
                            },
                            function(data, response) {
                            	
                                        header_xcsrf_token = response.headers['x-csrf-token'];
                                        var model = new sap.ui.model.json.JSONModel();
                                        model.setData(data);
                                        new sap.ui.getCore().setModel(model,"data");
                                        var oHeaders = {
                                                    "x-csrf-token" : header_xcsrf_token,
                                                    'Accept' : 'application/json',
                            };

                            },   function(err) {
                                        var request = err.request;
                                        var response = err.response;
                                        alert("Error in Get -- Request " + request + " Response " + response);
                            });                                             

            	},
	                                               
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf fetchdata.page1
*/
//	onBeforeRendering: function() {
//
//	},

/**
 *  OData.request({
                        requestUri : "http://<host name>:<port no>/sap/opu/odata/sap/ZMM_EMP_SRV/EmployeeSet",
                        method : "GET",
                        headers : {
                                                "X-Requested-With" : "XMLHttpRequest",
                                                "Content-Type" : "application/atom+xml",
                                                "DataServiceVersion" : "2.0",
                                                "X-CSRF-Token" : "Fetch"
                                                }
                                    },
                                    function(data, response) {
                                                header_xcsrf_token = response.headers['x-csrf-token'];
                                                var oHeaders = {
                                                            "x-csrf-token" : header_xcsrf_token,
                                                            'Accept' : 'application/json',
                                    };
 
                        OData.request({
                                                requestUri : "http://<host name>:<port no>/sap/opu/odata/sap/ZMM_EMP_SRV/EmployeeSet",
 
                                                method : "POST",
                                                headers : oHeaders,
                                                data:oEntry
                                    },
                                                function(data,request) {
                                                alert("Employee Created Successfully");        
                                                location.reload(true);
                                    },          function(err) {
                                                alert("Employee Creation Failed");
                                    });
                        }, function(err) {
                                                var request = err.request;
                                                var response = err.response;
                                                alert("Error in Get -- Request " + request + " Response " + response);
                                    });                                              
                                                  
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf fetchdata.page1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf fetchdata.page1
*/
//	onExit: function() {
//
//	}

});