/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('App.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'App.view.main.MainController',
        'App.view.main.MainModel'
    ],

    xtype: 'app-main',
    plugins: 'viewport',
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border',
		align:'center',
		pack: 'center'
    },

    items: [{
        xtype: 'panel',
        region: 'north',
        html: '<h2>DEV FRAMEWORK</h2>',
		bbar:[{
			xtype:'MenuDevBar',
		}]
    },{
		region: 'center',
        xtype:'tabpanel',
		itemId:'tabpanel-Aplication-dev',
		items:[
			{
				title:'Indice'
			}
		]
    }]
});
