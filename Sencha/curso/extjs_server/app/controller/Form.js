Ext.define('App.controller.Form', {
     extend: 'Ext.app.Controller',
     stores:['Simpsons'],
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
        console.log('Ventana -> GUARDAR')
		
		var form = this.getFormulario();
		if (form.isValid()) {
			var record = form.getRecord();
			if(!record){ 
				record = Ext.create('App.model.Simpson');
				this.getSimpsonsStore().add(record);
			}
			form.getForm().updateRecord(record);
			this.getSimpsonsStore().sync();
			this.getVentana().close(); 

		}
     },
	 onclickEliminar: function(b) {
        console.log('Ventana -> CANCELAR');
	    this.getVentana().close(); 
     }
 });