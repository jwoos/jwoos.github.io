module.exports = function(grunt) {
	grunt.initConfig({
		// wiredep
		wiredep: {
			dev: {
				src: ['.tmp/index.html']
			},
			dist: {
				src: ['dist/index.html']
			}
		},
		// compiles sass to css
		sass: {
			dev: {
				files: {
					'.tmp/styles/main.css': 'app/sass/main.sass'
				}
			},
			dist: {
				files: {
					'dist/styles/main.css': 'app/sass/main.sass'
				}
			}
		},
		// compiles jade to html
		// TODO get add support for multiple jade files
		jade: {
			dev: {
				files: {
					'.tmp/index.html': 'app/index.jade'
				}
			},
			dist: {
				files: {
					'dist/index.html': 'app/index.jade'
				}
			}
		},
		// clean .tmp and dist
		clean: {
			options: {
				force: true
			},
			dev: {
				src: ['.tmp/**/*']
			},
			dist: {
				src: [
					'.tmp/**/*',
					'dist/**/*'
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
			},
			dev: {
				files: [{
					expand: true,
					src: '**/*.js',
					dest: '.tmp/scripts/',
					ext: '.min.js',
					cwd: 'app/js'
				}]
			},
			dist: {
				files: [{
					expand: true,
					src: '**/*.js',
					dest: 'dist/scripts/',
					ext: '.min.js',
					cwd: 'app/js'
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
		browserSync: {
			dev: {
				src: [
					'.tmp/**/*.html',
					'.tmp/styles/**/*.css',
					'.tmp/assets/**/*',
					'.tmp/scripts/**/*.js'
				],
				options: {
					notify: false,
					port: 9000,
					background: true,
					watchTask: true,
					server: {
						baseDir: '.tmp',
						routes: {
							'/bower_components' : './bower_components'
						}
					}
				}
			}
		},
		watch: {
			js: {
				files: ['app/js/**/*.js'],
				tasks: ['eslint', 'uglify:dev']
			},
			sass: {
				files: ['app/sass/**/*.sass'],
				tasks: ['sass:dev']
			},
			jade: {
				files: ['app/*.jade'],
				tasks: ['jade:dev']
			}
		}

		// TODO add grunt-newer
		// TODO use grunt.template 
		// http://stackoverflow.com/questions/20020981/grunt-how-to-replace-paths-in-html-file-using-grunt-task
		// TODO gzip
	});

	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('');
	
	grunt.registerTask('default', ['sass:dist', 'jade:dist', 'clean:dist', 'uglify:dist', 'imagemin:dist', 'copy:dist', 'wiredep:dist'])

	grunt.registerTask('serve', ['clean:dev', 'sass:dev', 'jade:dev', 'uglify:dev', 'copy:dev', 'wiredep:dev', 'browserSync:dev', 'watch'])};
