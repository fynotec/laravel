(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'dist',
        '@angular': 'https://npmcdn.com/@angular',
        'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api',
        'rxjs': 'https://npmcdn.com/rxjs',
        'ts': 'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
        'typescript': 'https://npmcdn.com/typescript@1.8.10/lib/typescript.js'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    };
    var ngPackageNames = [
      'common',
      'compiler',
      'core',
      'forms',
      'http',
      'platform-browser',
      'platform-browser-dynamic',
      'router',
      'router-deprecated',
      'upgrade',
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }
    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    var config = {
        // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
        transpiler: 'ts',
        defaultJSExtensions: true,
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        map: map,
        packages: packages
    }
    System.config(config);
})(this);