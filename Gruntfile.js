module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		md2html: {
			one_file: {
				options: {},
				files: [{
				src: ['outline.md'],
				dest: 'outline.html'
				}]
			}
		},
		
		 connect: {
			server: {
			  options: {
				port: 8080,
				protocol: 'http',
				base: '.',
				hostname: 'localhost'
				}		
			  }
			},
		
		watch: {
		  scripts: {
		    files: ['**/*.css', '*.html'],
		    options: {
		      spawn: false,
		      livereload: true,
		    }
		  }
		}
		 

	})
	
	
	grunt.loadNpmTasks('grunt-md2html');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.registerTask('default', (['connect','watch']));
	
};