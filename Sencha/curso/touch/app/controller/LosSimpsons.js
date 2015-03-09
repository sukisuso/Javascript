Ext.define('App.controller.LosSimpsons', {
    extend: 'Ext.app.Controller',

    config:{
		control:{
		    'LosSimpsons':{
				'crear':'onCrear',
				'editar':'onEditar',
				'eliminar': 'onEliminar'
			
            }
		}
	},
	
	onEditar:function(registro){

		console.log('editar');
		Ext.Viewport.setActiveItem({
			xtype : 'SimpsonForm',
			record: registro
		});
	},

    onCrear: function() {
		Ext.Viewport.setActiveItem({
			xtype : 'SimpsonForm'
		});
		console.log('crearr');
    },
	
	onEliminar: function(records) {
       console.log('eliminarr');
	    if(records.length){
			     console.log("item selected");
			     Ext.getStore('Simpsons').remove(records);
			     Ext.getStore('Simpsons').sync();
		 }else
			 console.log('eliminarr');
	}
});