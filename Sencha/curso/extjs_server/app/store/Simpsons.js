Ext.define('App.store.Simpsons', {
    extend: 'Ext.data.Store',
    model: 'App.model.Simpson',
	id:'store.Simpson',
	xtype:'store.Simpsons',
	autoLoad:true
});