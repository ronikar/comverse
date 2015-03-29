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
		watch: {
		  scripts: {
			files: ['outline.md'],
			tasks: ['md2html'],
			options: {
			  spawn: false,
			}
		  }
		}
	})
	
	
	grunt.loadNpmTasks('grunt-md2html');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};