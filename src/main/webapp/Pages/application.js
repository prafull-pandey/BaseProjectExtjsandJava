Ext.application({
			requires : ['Ext.container.Viewport'],
			name : 'SL',
			appFolder : '../app',
			controllers : ['MainController'],
			launch : function() {
				Ext.create('Ext.container.Viewport', {
							layout : {
                                        type : 'vbox',
                                        align : 'center',
                                        pack : 'center'
                                    },
							items : [{
										xtype : 'homePage',
										width : 600
									}]
						});
			}
		});