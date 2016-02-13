Ext.define('App.view.box.MBox', {
    extend: 'Ext.panel.Panel',
    requires: [
        'App.view.box.MBoxController'
       /* 'Ptd.view.main.MainModel'*/
    ],
    xtype: 'mbox',
	reference:'ref_boxMain',
    layout: {
        type: 'table',
        columns: 6,
		align:'center',
		pack: 'center'
    },
	
	defaults: {
        // applied to each contained panel
        bodyStyle: 'padding:20px',
    },
	
	padding:'30 30 30 30',
    controller: 'mbox',

    items: []
	
	
});
