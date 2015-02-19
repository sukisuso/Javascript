Ext.define('App.view.ViewPort', {
	extend: 'Ext.container.Viewport',
	layout: 'border',
	items: [{
        region: 'north',
        html: '<h1 class="x-panel-header">View Port</h1>',
        border: false,
        margins: '0 0 5 0'
    }, 
	{
        region: 'west',
        collapsible: true,
        title: 'Navigation',
        width: 150,
		items: {
            title: 'Menu',
            html: ''
        }
    },
	{
        region: 'center',
        xtype: 'LosSimpsons'
    }]
});