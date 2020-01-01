Ext.define('SL.view.login.LoginPanel', {
			extend : 'Ext.panel.Panel',
			xtype : 'loginPanel',
			title : 'Login',
			items : [{
						xtype : 'form',
						reference : 'form',
						itemId : 'loginForm',
						padding : 5,
						items : [{
									xtype : 'textfield',
									name : 'username',
									fieldLabel : 'Username',
									allowBlank : false
								}, {
									xtype : 'textfield',
									name : 'password',
									inputType : 'password',
									fieldLabel : 'Password',
									allowBlank : false
								}, {
									xtype : 'displayfield',
									hidden : true,
									value : 'Enter any non-blank password'
								}],
						buttons : [{
									text : 'Login',
									formBind : true,
									itemId : 'loginButton'
								}, {
									text : 'Cancel',
									formBind : true,
									listeners : {
										click : 'onCancel'
									}
								}]
					}],
			initComponent : function() {
				this.callParent(arguments);
				console.log('login panel called')
			}
		});