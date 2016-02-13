Ext.define('App.view.menu.Menu', {
    extend: 'Ext.toolbar.Toolbar',
    requires: [
        'App.view.menu.MenuController'
       /* 'Ptd.view.main.MainModel'*/
    ],
    xtype: 'MenuDevBar',
    layout: {
        type: 'hbox',
    },
	controller:'MenuDevBar',
	
	items: [{
            xtype:'splitbutton',
            text: 'Mantenimiento',
            iconCls: 'add16',
            menu: [{
				text: 'Mantenimiento MBOX',
				handler:'clickElement',
				menuItemId:'mbox'
			}]
        }{
            xtype:'splitbutton',
            text: 'Cut',
            iconCls: 'add16',
            menu: [{text: 'Cut Menu Item'}]
        },{
            text: 'Copy',
            iconCls: 'add16'
        },{
            text: 'Paste',
            iconCls: 'add16',
            menu: [{text: 'Paste Menu Item'}]
        },{
            text: 'Format',
            iconCls: 'add16'
        }]
	
	
	
});
