Ext.define('App.controller.SimpsonForm', {
    extend: 'Ext.app.Controller',
	config:{
		control:{
		    'SimpsonForm':{
				'guardar':'onClickGuardar',
				'cancelar':'onClickCancelar'
			
            }
		},
		refs: {
            'formulario': 'SimpsonForm'
        }
	},
	onClickGuardar: function(b){
		console.log('GUARDAR NUEVO');
		var form = this.getFormulario();
		if(form.isValid()){
			var record = form.getRecord();
			if(!record){
				record = Ext.create('App.model.Simpson');
				Ext.getStore('Simpsons').add(record);
			}
			form.updateRecord(record);
			record.save();
			Ext.getStore('Simpsons').sync();
			Ext.Viewport.remove(form);
		}
    },
	
	onClickCancelar: function(b){
		console.log('Cancelar');
		Ext.Viewport.remove(this.getFormulario());
    }
});