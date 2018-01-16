/**
 * @author Leonard
 */
function selectActivityWindow(){
	var selectActivityView = require('ui/common/selectActivityView');
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
	var nw_selectActivityView = new selectActivityView();
	self.add(nw_selectActivityView);

	return self;
}
module.exports = selectActivityWindow;