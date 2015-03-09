Ext.define('App.store.Empleados',{
	extend: 'Ext.data.Store',
	model: 'App.model.Empleado',
	id: 'store.Empleado',
	xtype: 'store.Empleados',
	autoload:true
});