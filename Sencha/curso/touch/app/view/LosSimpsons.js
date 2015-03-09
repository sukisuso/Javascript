Ext.define('App.view.LosSimpsons', {
	extend:'Ext.dataview.List',
	alias:'widget.LosSimpsons',
	config:{
		store: 'Simpsons',
		fullscreen: true,
		itemTpl:'<div>{name} <br><i><small> {email}, {phone}</small></i></div>',
		mode:'MULTI',
		onItemDisclosure: true,
		listeners:{
			disclose:function(view, record){
				this.fireEvent('editar', record);
			}
		},
		items:{
			xtype:'toolbar',
			docked:'bottom',
			layout:'hbox',
			items:[{
				xtype:'button',
				flex:50,
				ui: 'decline',
				text:'Eliminar',
				listeners:{
					tap:function(b){
						var itemSelected = b.up('LosSimpsons').getSelection();
						b.up('LosSimpsons').fireEvent('eliminar', itemSelected);
					}
				}
			},{
				xtype:'button',
				flex:50,
				ui: 'confirm',
				text:'Nuevo',
				listeners:{
					tap:function(b){
						b.up('LosSimpsons').fireEvent('crear');
					}
				}
			}]
		}
	}
});