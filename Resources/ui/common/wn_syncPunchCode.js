/**
 * @author Leonard
 */
function SyncPunchCodeWindow(){
	var syncPunchCodeView = require('ui/common/SyncPunchCodeView');
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		orientationModes : [Titanium.UI.LANDSCAPE_LEFT],
		exitOnClose:false
	});

	self.title='';
	//construct UI
	/* self.addEventListener('android:back',function(e) {
	    var a = Ti.UI.createAlertDialog();
		a.message = 'Do you want to go back? Use the back button';
		a.buttonNames = ['Okay'];
		a.cancel = 0;
	    a.show(); // show the leaving dialog
	    return false;
	}); */
	var nw_syncPunchCodeView = new syncPunchCodeView();
	self.add(nw_syncPunchCodeView);

	return self;
}
module.exports = SyncPunchCodeWindow;