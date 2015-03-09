Ext.define('App.view.EmpleadosV', {
    extend: 'Ext.grid.Panel',
	xtype: 'EmpleadosV',
    store: 'Empleados',
	id:'view.EmpleadosV',
    title: 'Tabla Empleados',
	selType: 'checkboxmodel',
	tbar:[{
		xtype :'button',
		text : 'Nuevo',
		listeners:{
			click:function(b){
				b.up('EmpleadosV').fireEvent('crear');
			}
		}
	},{
		xtype :'button',
		text : 'Eliminar',
		listeners:{
			click:function(b){
			    var itemSelected = b.up('EmpleadosV').getSelectionModel().getSelection();
			    b.up('EmpleadosV').fireEvent('eliminar', itemSelected);
			}
		}
	}
	],
    columns: [
            {
                text     : 'Name',
                dataIndex: 'name'
            },
            {
                text     : 'Apellido',
                dataIndex: 'surname',
				flex:1
            },
			{
                text     : 'Trabajo',
                dataIndex: 'posicion'
            },
			{
                text     : 'Numero de cuenta',
                dataIndex: 'cuenta'
            }
	],
	listeners:{
		itemdblclick: function( view, record ){
			view.up('EmpleadosV').fireEvent('editar', record);
		}
	}
});