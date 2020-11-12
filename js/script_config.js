const prefix = document.getElementById('path_files') ? path_files.value : ''

// ARRAY OF GLOBAL SCRIPTS
var scripts = [
	prefix+"https://code.jquery.com/jquery-3.3.1.min.js",
	prefix+"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
    prefix+"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
    prefix+"https://kit.fontawesome.com/e10158bc74.js",
    prefix+"https://hammerjs.github.io/dist/hammer.js",
    prefix+"js/global.js"
]

// CREATE SCRIPTS BASED ON THE 'SCRIPTS' ARRAY
function helper_script (scripts, control){
	// ADD UNIQUE JS OF PAGE 
	if(control == 0){
		var page_script = document.getElementsByTagName('script')[0].dataset.script;
		if(page_script){
			page_script.replace(/(\r\n|\n|\r)/gm," ").trim().split(',').map(function(elm) {
				scripts.push(elm);
			});
		}
	}
	var script_tag = document.createElement('script');
	script_tag.src = scripts[control];
	script_tag.onload = function () {
		control++;
		scripts.length != control ? helper_script (scripts,control) : console.log('all scripts are loaded!');
   	}
	document.body.appendChild(script_tag);
}

// ON DOCUMENT LOADED
document.addEventListener('DOMContentLoaded', function () {
	// CREATE SCRIPTS
	helper_script (scripts,0);
});