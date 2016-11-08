SystemJS.config({
	map: {
		'plugin-traceur': 'node_modules/systemjs-plugin-traceur/plugin-traceur.js',
		'traceur': 'node_modules/systemjs-plugin-traceur/node_modules/traceur/bin/traceur.js',
		'traceur-runtime': 'node_modules/systemjs-plugin-traceur/node_modules/traceur/bin/traceur-runtime.js'
	},
	meta: {
		'traceur': {
			format: 'global',
			exports: 'traceur',
			scriptLoad: false
		},
		'traceur-runtime': {
			format: 'global',
			exports: '$traceurRuntime'
		}
	},
	transpiler: 'plugin-traceur',
	transpilerRuntime: false,
	traceurOptions: {
		asyncFunctions: true
	}
});
