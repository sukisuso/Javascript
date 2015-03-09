Ext.application({
        name: 'App',
	    views:['LosSimpsons', 'SimpsonForm'],
	    models:['Simpson'],
	    stores:['Simpsons'],
		controllers:['LosSimpsons', 'SimpsonForm'],
	    launch:function(){
		    Ext.Viewport.add({ xtype: 'LosSimpsons'});
	    }
});
