Ext.define('App.view.SimpsonForm', {
	extend:'Ext.form.Panel',
	alias:'widget.SimpsonForm',
	config:{
	    items:[{
		    xtype:'textfield',
		    name:'name',
		    label:'Nombre'
	    },{
		    xtype:'textfield',
		    name:'email',
		    label:'E-mail'
	    },{
		    xtype:'textfield',
		    name:'phone',
		    label:'Teléfono'
	    },{
			xtype:'toolbar',
			docked:'bottom',
			layout:'hbox',
			items:[{
				xtype:'button',
				flex:50,
				text:'Guardar',
				listeners:{
					tap:function(b){
						b.up('SimpsonForm').fireEvent('guardar');
					}
				}
			},{
				xtype:'button',
				flex:50,
				ui: 'decline',
				text:'Cancelar',
				listeners:{
					tap:function(b){
						b.up('SimpsonForm').fireEvent('cancelar');
					}
				}
			}]
		}]
	},
	
	isValid : function(){
		var x = this.getFields('name').getValue();
		var y = this.getFields('email').getValue();
		var z = this.getFields('phone').getValue();
		
		if(!x || !y || !z){
			Ext.Msg.alert('Campos Vacios');
			return false;
		}else 
			return true;
			
	},
	
	updateRecord: function (record){
		var data = this.getValues();
		data.id = record.getId();
		record.setData(data);
	}
});