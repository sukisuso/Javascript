

Ext.define('App.view.box.CardController', {
    extend: 'Ext.app.ViewController',
	alias: 'controller.card',
    requires: [
        'Ext.window.MessageBox'
    ],

	config : {
        control :  {
            'card'      : {
                afterRender : 'loadData',
            }
        }
    },
	
	loadData: function() {
		var name = this.view.initialConfig.name;
		this.view.items.getAt(1).setText("Serie " + name);
		this.view.items.getAt(1).setStyle("cursor", "pointer");
		this.view.items.getAt(2).setStyle("cursor", "pointer");
		this.view.body.setStyle("cursor", "pointer");
	}
});
