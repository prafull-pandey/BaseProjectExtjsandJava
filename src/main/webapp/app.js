Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',
    
controllers: ['MainController'
    ],
    views:[
    'HomePage'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
           // layout: 'fit',
            items: [
                {
                    xtype: 'homePage',
                    itemId:'homePage',
                    width:320
                }
            ]
        });
    }
});