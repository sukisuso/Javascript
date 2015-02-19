Ext.application({
    name: 'App',
	models:['Simpson'],
	stores:['Simpsons'],
	views:['ViewPort','LosSimpsons', 'Form'],
	controllers:['LosSimpsons','Form'],
    launch: function() {
        Ext.create('App.view.ViewPort',{
			renderTo: Ext.getBody()
		});
    }
});
