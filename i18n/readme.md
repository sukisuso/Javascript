### i18n Lib v1
# Jes�s Juan Aguilar

Save your internationalization String. 

i18n.load({
	en:{
		'new':'Add new row',
		'edit':'Edit row',
		'delete':'Delete row'
	},
	es:{
		'new':'Añadir registro',
		'edit':'Editar registro',
		'delete':'Eliminar registro'
	}
});

Then just load it.
i18n.$('new') --> 'Add new row'

And change the languaje.
i18n.loadLang('es');
i18n.$('new') --> 'Añadir registro'
