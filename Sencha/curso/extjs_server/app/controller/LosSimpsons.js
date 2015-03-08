Ext.define('App.controller.LosSimpsons', {
     extend: 'Ext.app.Controller',
	 stores:['Simpsons'],
     init: function() {
         this.control({
			 'LosSimpsons':{
				'editar':this.onclickEditar,
				'crear':this.onclickCrear,
				'eliminar':this.onclickEliminar
			 }
         });
     },
	
	abrirVentana: function(title, reg){
		Ext.create('Ext.window.Window', {
              title: 'A&#241;adir nuevo',
			  tipo: 'miventana',
              height: 200,
              width: 400,
              layout: 'fit',
			  modal:true,
               items: {  
                   xtype: 'Form',
				   registro: reg
		}}).show();
		
	},
	
     onclickCrear: function() {
         this.abrirVentana('A&#241;adir nuevo');
     },
	 onclickEliminar: function(item) {
		 if(item.length){
			     console.log("item selected");
			     this.getSimpsonsStore().remove(item);
			     this.getSimpsonsStore().sync();
		 }else
			 alert("ERROR!");
	 },
	 onclickEditar: function(reg) {
         this.abrirVentana('Modificar Ventana',reg);
     }
 });