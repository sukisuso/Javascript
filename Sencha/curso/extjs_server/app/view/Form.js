Ext.define('App.view.Form', {
    extend: 'Ext.form.Panel',
	xtype: 'Form',
    store: 'Simpsons',
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
        fieldLabel: 'Email: ',
        name: 'email',
		allowBlank:false
    },
	{
        xtype: 'textfield',
        fieldLabel: 'Phone: ',
        name: 'phone',
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