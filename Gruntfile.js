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
		}
	})
	
	grunt.loadNpmTasks('grunt-md2html');

};