Ext.define('App.view.LosSimpsons', {
    extend: 'Ext.grid.Panel',
	xtype: 'LosSimpsons',
    store: 'Simpsons',
	id:'view.Simpsons',
    title: 'Los Simpsons',
	selType: 'checkboxmodel',
	tbar:[{
		xtype :'button',
		text : 'Nuevo',
		listeners:{
			click:function(b){
				b.up('LosSimpsons').fireEvent('crear');
			}
		}
	},{
		xtype :'button',
		text : 'Eliminar',
		listeners:{
			click:function(b){
			    var itemSelected = b.up('LosSimpsons').getSelectionModel().getSelection();
			    b.up('LosSimpsons').fireEvent('eliminar', itemSelected);
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
                text     : 'Email',
                dataIndex: 'email',
				flex:1
            },
			{
                text     : 'Phone',
                dataIndex: 'phone'
            }
	],
	height:200,
	width:400,
	listeners:{
		itemdblclick: function( view, record ){
			view.up('LosSimpsons').fireEvent('editar', record);
		}
	}
});






