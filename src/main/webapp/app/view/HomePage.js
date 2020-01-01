Ext.define('SL.view.HomePage', {
			extend : 'Ext.panel.Panel',
			xtype : 'homePage',

			bodyPadding : 5,
			width : 300,
			html : '<h1>Welcome<h2>',
			initComponent : function() {
				this.callParent(arguments);
				console.log('Home panel called')
			}
		});