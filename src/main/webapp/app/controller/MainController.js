Ext.define('SL.controller.MainController', {
			extend : 'Ext.app.Controller',
			views : ['HomePage'],
			refs : [{
						ref : 'homePage',
						xtype : 'homePage'
					}],
			init : function() {
				console.log('HomePage Rendered!');
			}

		})