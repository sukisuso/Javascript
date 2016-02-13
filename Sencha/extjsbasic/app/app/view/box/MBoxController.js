

Ext.define('App.view.box.MBoxController', {
    extend: 'Ext.app.ViewController',
	alias: 'controller.mbox',
    requires: [
        'Ext.window.MessageBox'
    ],

	config : {
        control :  {
            'mbox'      : {
                afterRender : 'loadData',
            }
        }
    },
	
	loadData: function() {
		
		for(i = 0; i < 15 ; i++){
			var tablePanel = Ext.create('App.view.box.Card', {name:i});
			this.view.items.add(tablePanel);
		}
		
    }
});
