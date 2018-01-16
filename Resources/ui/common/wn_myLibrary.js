/**
 * @author Leonard
 */
function MyLibraryWindow(){
	var MyLibraryView = require('ui/common/MyLibraryView');
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		orientationModes : [Titanium.UI.LANDSCAPE_LEFT],
		exitOnClose:false
	});

	self.title='';
	//construct UI
	/*self.addEventListener('android:back',function(e) {
	    var a = Ti.UI.createAlertDialog();
		a.message = 'Do you want to go back? Use the back button';
		a.buttonNames = ['Okay'];
		a.cancel = 0;
	    a.show(); // show the leaving dialog
	    return false;
	});*/
	var nw_MyLibraryView = new MyLibraryView();
	self.add(nw_MyLibraryView);

	return self;
}
module.exports = MyLibraryWindow;