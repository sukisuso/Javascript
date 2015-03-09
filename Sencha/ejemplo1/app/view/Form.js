Ext.define('App.view.Form', {
    extend: 'Ext.form.Panel',
	xtype: 'Form',
    store: 'Empleados',
    title: 'Nuevo',
	closable: true,
     items: [{
        xtype: 'textfield',
        fieldLabel: 'Nombre: ',
        name: 'name',
		allowBlank:false
    },
	{
        xtype: 'textfield',
        fieldLabel: 'Apellido: ',
        name: 'surname',
		allowBlank:false
    },
	{
        xtype: 'textfield',
        fieldLabel: 'Puesto: ',
        name: 'posicion',
		allowBlank: false
    },
    {
        xtype: 'textfield',
        fieldLabel: 'Cuenta: ',
        name: 'cuenta',
        allowBlank: false
    }],
	buttons: [{
        text: 'Guardar',
		itemId: "guardar"
       
    },{
        text: 'Cancelar',
		itemId: "cancelar"
        }],
		
		initComponent: function (){
			this.callParent(arguments);
			if(this.registro){
			    this.loadRecord(this.registro);
			}
		}
});