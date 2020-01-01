Ext.application({
			requires : ['Ext.container.Viewport'],
			name : 'SL',
			appFolder : '../app',
			controllers : ['login.LoginController'],
			launch : function() {
				Ext.create('Ext.container.Viewport', {
							layout : {
								type : 'vbox',
								align : 'center',
								pack : 'center'
							},
							items : [{
										xtype : 'loginPanel',
										width : 400
									}]
						});
			}
		});