Ext.define('App.controller.Form', {
     extend: 'Ext.app.Controller',
     stores:['Empleados'],
	 refs:[{
		 ref:'formulario', 
		 selector:'Form'
	 },{
		 ref:'ventana',
		 selector:'window[tipo=miventana]'
	 }],
     init: function() {
         this.control({
             'Form #guardar': {
                 click: this.onclickNuevo
             },
			 'Form #cancelar': {
                 click: this.onclickEliminar
             }
         });
     },

     onclickNuevo: function(b) {		
		var form = this.getFormulario();
		if (form.isValid()) {
			var record = form.getRecord();
			if(!record){ 
				record = Ext.create('App.model.Empleado');
				this.getEmpleadosStore().add(record);
			}
			form.getForm().updateRecord(record);
			this.getEmpleadosStore().sync();
			this.getVentana().close(); 

		}
     },
	 onclickEliminar: function(b) {
	     this.getVentana().close(); 
     }
 });