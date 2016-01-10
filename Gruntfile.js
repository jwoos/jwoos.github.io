module.exports = function(grunt) {
	grunt.initConfig({
		// compiles sass to css
		sass: {
			dev: {
				files: {
					'/.tmp/main.css': '/app/sass/main.sass'
				}
			},
			dist: {
				files: {
					'/dist/styles/main.css': '/app/sass/main.sass'
				}
			}
		},
		// compiles jade to html
		// TODO get add support for multiple jade files
		jade: {
			dev: {
				files: {
					'/.tmp/index.html': '/app/index.jade'
				}
			},
			dist: {
				files: {
					'/dist/index.html': '/app/index.jade'
				}
			}
		},
		// clean .tmp and dist
		clean: {
			dev: {
				files: ['.tmp']
			},
			dist: {
				files: [
					'.tmp',
					'/dist'
				]
			}
		},
		// lints js
		eslint: {
			target: [
				'app/js/**.*.js'
			]
		},
		// minify js
		uglify: {
			options: {
				mangle: true,
				compress: true,
				sourceMap: true
			}
			dev: {
				files: [{
					expand: true,
					src: 'js/**/*.js',
					dest: '../dist/scripts/',
					ext: '.min.js',
					cwd: 'app'
				}]
			}
		},
		// minify images for dist
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'app',
					src: 'assets/images/**/*.{png, gif, jpg, svg}',
					dest: '../dist/'
				}]
			}
		},
		// copy other files
		copy: {
			dev: {
				files: [{
					expand: true,
					dot: true,
					cwd: 'app',
					dest: '../.tmp',
					src: [
						'*.{ico,txt}',
						'assets/fonts/**/*'
					]
				}]
			},
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: 'app',
					dest: '../dist',
					src: [
						'*.{ico,txt}',
						'assets/fonts/**/*'
					]
				}]
			}
		},
		// live reload
		browsersync: {
			options: {
				notify: flase,
				background: true
			},
			dev: {
				files: [
					'.tmp/**/*.html',
					'.tmp/styles/**/*.css',
					'.tmp/assets/**/*',
					'.tmp/scripts/**/*.js'
				],
				port: 9000,
				server: {
					baseDir: ['.tmp'],
					routes: {
						'/bower_components' : './bower_components'
					}
				}
			}
		},
		watch: {
			js: {
				files: ['app/js/**/*.js'],
				tasks: ['eslint', 'uglify']
			},
			sass: {
				files: ['app/sass/**/*.sass'],
				tasks: ['sass']
			},
			jade: {
				files: ['app/*.jade'],
				tasks: ['jade']
			}
		}

		// TODO add grunt-newer
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('');
	grunt.loadNpmTasks('');
	//grunt.loadNpmTasks('');
	
	grunt.registerTask('default', ['sass:dist', 'jade:dist', 'clean:dist', 'uglify:dist', 'imagemin:dist', 'copy:dist'])

	grunt.registerTask('serve', ['sass:dev', 'jade:dev', 'clean:dev', 'uglify:dev', 'copy:dev', 'browsersync:dev', 'watch'])};
