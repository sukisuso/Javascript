Ext.define('App.store.Simpsons', {
    extend: 'Ext.data.Store',
	 config:{
        model: 'App.model.Simpson',
   		autoLoad:true,
		storeId:'Simpsons'
	}
});