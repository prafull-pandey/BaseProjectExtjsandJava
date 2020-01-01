Ext.application({
			requires : ['Ext.container.Viewport'],
			name : 'SL',
			appFolder : '../app',
			controllers : ['MainController'],
			launch : function() {
				Ext.create('Ext.container.Viewport', {
							layout : 'fit',
							items : [{
										xtype : 'homePage',
										width : 400
									}]
						});
			}
		});