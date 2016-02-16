Ext.define('App.framework.Menu', {
    extend: 'Ext.toolbar.Toolbar',
    requires: [
        'App.framework.MenuController'
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
            iconCls: 'bookmarks',
            menu: [{
				text: 'Mantenimiento MBOX',
				handler:'clickElement',
				iconCls:'add',
				menuItemId:'mbox'
			}]
        },{
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
