function isJavaScriptFile(extensionName){
	var ext = extensionName.substr(extensionName.lastIndexOf('.') + 1);
	if (ext === 'js') {
		return true;
	} else if (ext !== 'js')
		return false;
	
	}
 
 const result =isJavaScriptFile("app.js")
 console.log(result);