Ext.define('SL.view.HomePage', {
			extend : 'Ext.panel.Panel',
			xtype : 'homePage',
            border:true,
			bodyPadding : 5,
			width : 600,
            layout : {
                    type : 'vbox',
                    align : 'center',
                    pack : 'center'
                },
			items:[{
			    html : '<center><h1>Welcome to Employee Details</h1></center>',
			    margin: '0 0 20 0',
			    border:false
			},{
                xtype:'button',
                text : 'Load Data',
                itemId : 'loadDataButton',
                margin: '0 0 0 0'
			},{
			    xtype:'employeeGrid',
			    margin: '0 0 20 0',
			    border:2,
			    style: {
                    borderColor: 'black',
                    borderStyle: 'solid'
                }
			}],
			initComponent : function() {
				this.callParent();
				console.log('Home panel called');
			}
		});