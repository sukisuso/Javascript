Ext.application(
    {
    	name:'App',
    	models:['Empleado'],
    	stores:['Empleados'],
    	views:['EmpleadosV', 'Form'],
    	controllers:['EmpleadosC', 'Form'],
    	launch: function(){
    		Ext.create( 'App.view.EmpleadosV',{
    			renderTo:Ext.getBody()
    		});
    	}

    }
);