Ext.define('App.model.Simpson', {
    extend: 'Ext.data.Model',
	config:{
        fields: ['id',
             {name: 'name',  type: 'string'},
             {name: 'email',   type: 'string'},
             {name: 'phone', type: 'string'}
        ],
	    proxy:{
		    type:'localstorage',
		    id:'Simpsons'
	    }
	}
});