/**
 * @author Leonard
 */
function NamesWindow(){
	var namesView = require('ui/common/NamesView');
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		orientationModes : [Titanium.UI.LANDSCAPE_LEFT],
		exitOnClose:false
	});

	self.title='';
	//construct UI
/*	self.addEventListener('android:back',function(e) {
	    var a = Ti.UI.createAlertDialog();
		a.message = 'Do you want to go back? Use the back button';
		a.buttonNames = ['Okay'];
		a.cancel = 0;
	    a.show(); // show the leaving dialog
	    return false;
	}); */
	var nw_namesView = new namesView();
	self.add(nw_namesView);

	return self;
}
module.exports = NamesWindow;