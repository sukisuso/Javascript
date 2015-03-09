Ext.define('App.model.Empleado',{
	extend:'Ext.data.Model',
	fields:[
		{name:'name', type:"string"},
		{name:'surname', type:"string"},
		{name:'posicion', type:"string"},
		{name:'cuenta', type:"string"}
	],
	proxy:{
		type:'localstorage',
		id:'Empleados'
	}
});