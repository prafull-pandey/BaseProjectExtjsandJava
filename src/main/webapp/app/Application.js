/**
 * The main application class. An instance of this class is created by app.js
 * when it calls Ext.application(). This is the ideal place to handle
 * application launch and initialization details.
 */
Ext.define('PP.Application', {
			extend : 'Ext.app.Application',

			name : 'PP',
			views : ['HomePage'],
			stores : [
			// TODO: add global / shared stores here
			],

			launch : function() {
				Ext.create('Ext.container.Viewport', {
							// layout: 'fit',
							items : [{
										xtype : 'homePage',
										itemId : 'homePage',
										width : 320
									}]
						});
			}

		});
