//Application Window Component Constructor
var dfault ={};
function ApplicationWindow() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');

	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden : true,
		orientationModes : [Titanium.UI.LANDSCAPE_LEFT]
	});
	self.orientationModes = [Titanium.UI.LANDSCAPE_LEFT];
	
	self.addEventListener('android:back',function(e) {
	    var a = Ti.UI.createAlertDialog();
		a.message = 'Do you want to exit Ghana Reads ? /n Use the exit button';
		a.buttonNames = ['Yes','No'];
		a.cancel = 1;
		a.addEventListener('click', function(e){
		    if (e.index == 0) {
		    	/// Exit JOT
		    	///Ti.App.Properties.setString('passedAutent',true);
		        //self.close();
		        a.hide();
		    }
		 
		});
	    a.show(); // show the leaving dialog
	    return false;
	});
	
	loadDefault();
	//construct UI
	var firstView = new FirstView();
	self.add(firstView);

	return self;
}

//make constructor function the public component interface
// ///mnt/sdcard/gh
module.exports = ApplicationWindow;

function loadDefault(){
		if (!(Ti.App.Properties.hasProperty('db2'))) {
			if (Ti.Platform.name === 'android' && Ti.Filesystem.isExternalStoragePresent()) {
			try{
	  			dfault.db2 = Ti.Database.open('/mnt/sdcard/gh/reads/schoolBell.db');
	  		}catch(err){
	  			alert(err.message);
	  		}
		}
		Ti.App.Properties.setString('db2',dfault.db2);
	}else{
		dfault.db2 = Ti.App.Properties.getString('db2');
	};
	/*var userData ={
		userName: 'Leonard',
		email:'kk@gmail.com',
		studentId:'456789',
		pswd:'password',
		facilityId:'23432434234234543654',
		facilityName:'Legon'
	};*/
	//Ti.App.Properties.setString('userData',JSON.stringify(userData));
	
}