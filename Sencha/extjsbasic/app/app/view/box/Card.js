Ext.define('App.view.box.Card', {
    extend: 'Ext.panel.Panel',
    requires: [
        'App.view.box.CardController'
       /* 'Ptd.view.main.MainModel'*/
    ],
    xtype: 'card',
    layout: {
        type: 'vbox',
		align:'center',
		pack: 'center'
    },
	
	defaults: {
		margin: '0 5 5 0',
    },
	border: true,
	width:200,
	height:200,
	margin:'5 5 5 5',
	controller:'card',
    items: [ {
		xtype:'image',
		src:'/resources/img/empty.png',
		width:100,
		height:100
	},{
        xtype: 'label',
        text: 'My Awesome Field',
    }, {
        xtype: 'label',
        text: 'My Awesome Field vol 2',
    }],
	
	listeners: {
		 click: {
            element: 'el', //bind to the underlying el property on the panel
            fn: function(){ alert("PANEL CHECK") }
        }
    },
	
	
	
	
});
