sap.ui.jsview("fetchdata.page1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf fetchdata.page1
	*/ 
	getControllerName : function() {
		return "fetchdata.page1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf fetchdata.page1
	*/ 
	createContent : function(oController) {
		
		//Here i am declaring the table which consisting the columns and the title for the columns
		

		var oTable = new sap.m.Table("Category",{
		//declaration of columns 
			columns:[
			         new sap.m.Column("clm1",{
			        	 header: new sap.m.Label("lb1",{
			        		 text:"CategoryId"
			        	 })
			         }),
			         new sap.m.Column("clm2",{
			        	 header: new sap.m.Label("lb2",{
			        		 text:"Category Name"
			        	 })
			         }),
			       ]
		});
		//binding the data from server to the table
		oTable.bindItems("data>/results",new sap.m.ColumnListItem({
			cells:[
			       new sap.m.Text({text:"{data>CategoryID}"}),
			       new sap.m.Text({text:"{data>CategoryName}"}),
			      
			       ]
		}));
 		return new sap.m.Page({
			title: "Fetching data from the SERVER",
			content: [
			          
			          	oTable
			          
			]
		});
	}

});