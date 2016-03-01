
/*
*	Quebec FW Javascript	
*	Jesús Juan Aguilar	
*	2016
*/


/*
* Quebec Login
*/
Ext.define("Quevec.fw.Login",{
	extend: 'Ext.window.Window',
	xtype: 'login',
	requires: [
		'Ext.form.Panel'
	],
	controller: 'login',
	bodyPadding: 10,
	title: 'Login Window',
	closable: false,
	autoShow: true,
	items: {
		xtype: 'form',
		reference: 'form',
		items: [{
			xtype: 'textfield',
			name: 'username',
			fieldLabel: 'Username',
			allowBlank: false,
			listeners: {
				 specialkey:'onLoginClick'
			}
		}, {
			xtype: 'textfield',
			name: 'password',
			inputType: 'password',
			fieldLabel: 'Password',
			allowBlank: false,
			listeners: {
				 specialkey:'onLoginClick' 
			}
		}, {
			xtype: 'displayfield',
			hideEmptyLabel: false,
			reference:'msg_label_login',
			value: 'Enter any non-blank password'
		}],
		buttons: [{
			text: 'Login',
			formBind: true,
			listeners: {
				click: 'onLoginClick'
			}
		}],
		
	},
	listeners: {
		 specialkey: function(f,e){  
                if(e.getKey()==e.ENTER){  
                    console.log("I hit enter!"); 
                }  
            }  
	}
});


/*
* Quebec Login Controller
*/

Ext.define('Quevec.fw.LoginController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',
	onLoginClick: function(){
		this.getView().destroy();
		Ext.widget('app-main-dev');
	}
});


/*
* Quebec Main
*/

Ext.define('Quevec.fw.Main', {
    extend: 'Ext.container.Container',
    /*requires: [
        //'App.framework.MainController',
        //'App.framework.MainModel'
    ],*/

    xtype: 'app-main-dev',
    plugins: 'viewport',
    controller: 'main-dev',
    viewModel: {
        type: 'main-dev'
    },

    layout: {
        type: 'border',
		align:'center',
		pack: 'center'
    },

    items: [{
        xtype: 'panel',
        region: 'north',
        html: '<h2>Quevec Fw.</h2>',
		bbar:[{
			xtype:'MenuDevBar',
		}]
    },{
		region: 'center',
        xtype:'tabpanel',
		itemId:'tabpanel-Aplication-dev',
		items:[
			{
				title:'Indice'
			}
		]
    }]
});


/*
* Quebec Main Controller
*/

Ext.define('Quevec.fw.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

	config : {
        control :  {
      		'app-main-dev'      : {
                render : 'loadUserInfo',
            }    
        }
    },
    alias: 'controller.main-dev',

    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
	
	loadUserInfo:function(){
		
	}
});


/*
* Quebec Main Model
*/

Ext.define('App.framework.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main-dev',

    data: {
        name: 'App'
    }

    //TODO - add data, formulas and/or methods to support your view
});


/*
* Quebec Menu
*/

Ext.define('Quevec.fw.Menu', {
    extend: 'Ext.toolbar.Toolbar',
  /*  requires: [
        //'App.framework.MenuController'
       /* 'Ptd.view.main.MainModel'*/
    //],
    xtype: 'MenuDevBar',
    layout: {
        type: 'hbox',
    },
	controller:'MenuDevBar',
	
	items: [{
            xtype:'splitbutton',
            text: 'Menu',
            iconCls: 'personalCls',
			handler:'clickSplit',
            menu: [{
				text: 'Menu Item',
				handler:'clickElement',
				iconCls:'infCls',
				menuItemId:'xtype'
			}]
        }]
});


/*
* Quebec Menu Controller
*/

Ext.define('Quevec.fw.MenuController', {
    extend: 'Ext.app.ViewController',
	alias: 'controller.MenuDevBar',
    requires: [
        'Ext.window.MessageBox'
    ],

	config : {
        control :  {
            
        }
    },
	
	clickElement: function(el) {
		if(el.menuItemId){
			
			var tabpanel = Ext.ComponentQuery.query('#tabpanel-Aplication-dev')[0];
			var tab = {	
						title:el.text,
					   	xtype:el.menuItemId,
						iconCls:el.iconCls, 
						closable:true,
						style : 'background-color:#D8D8D8;'
					};
			tabpanel.add(tab);
			tabpanel.setActiveItem(tabpanel.items.items.length-1);
		}
	},
	
	clickSplit:function(el,a,b,c,d){
		el.showMenu();
	}
});


