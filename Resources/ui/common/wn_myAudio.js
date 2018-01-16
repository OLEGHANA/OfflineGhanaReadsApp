/**
 * @author Leonard
 */
function MyAudioWindow(){
	var MyAudioView = require('ui/common/MyAudioView');
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
	var nw_MyAudioView = new MyAudioView();
	self.add(nw_MyAudioView);

	return self;
}
module.exports = MyAudioWindow;