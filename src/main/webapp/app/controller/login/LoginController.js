Ext.define('SL.controller.login.LoginController', {
			extend : 'Ext.app.Controller',
			views : ['login.LoginPanel'],
			refs : [{
						ref : 'loginPanel',
						selector : 'loginPanel'
					}, {
						ref : 'loginForm',
						selector : 'loginPanel #loginForm'
					}],
			init : function() {
				console.log('Initialized Login Controller!');
				this.control({
							'viewport > panel' : {
								render : this.onPanelRendered
							},
							'loginPanel #loginButton' : {
								click : this.onLoginClick
							}
						});
			},
			onPanelRendered : function() {
				console.log('Panel Rendered!')
			},

			onLoginClick : function(cmp, e, eOpts) {
				loginForm = this.getLoginForm();
				loginForm.submit({
							url : 'dologin.action',
							success : function() {
								//alert("Success");
							},
							failure : function(form, action) {
								alert('Failed to Login');
							}

						});

			}
		})