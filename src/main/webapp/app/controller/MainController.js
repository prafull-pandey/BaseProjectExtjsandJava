Ext.define('SL.controller.MainController', {
			extend : 'Ext.app.Controller',
			views : ['HomePage','EmployeeGrid'],
			models :['EmployeeGridModel'],
			stores:['EmployeeGridStore'],
			refs : [{
						ref : 'homePage',
						selector : 'homePage'
					},{
					    ref:'employeeGrid',
					    selector : 'homePage #employeeGrid'
					}],
			init : function() {
				console.log('HomePage Rendered!');
				this.control({
                            'homePage #loadDataButton' : {
                                click : this.loadDataInGrid
                            }
                        });
			},
			loadDataInGrid : function(cmp, e, eOpts) {
                            this.getEmployeeGrid().getStore().load();
            			}
});