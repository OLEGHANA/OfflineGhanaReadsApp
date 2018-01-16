//FirstView Component Constructor
var dfault={};
function FirstView() {
	var SelectName = require('ui/common/NamesView');
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundImage:'/images/mainbg.jpg'
	});
	///dfault.dbSettings = Ti.App.Properties.getString('dbSettings');
	self.orientationModes = [Titanium.UI.LANDSCAPE_RIGHT];
	//var holder;
	var holder = Ti.Filesystem.applicationDataDirectory + Ti.Filesystem.separator + 'ghanaReads_1.db';
	
	////////BUTTONS///////////
	var btnKG = Ti.UI.createButton({
		width:200,
		height:330,
		backgroundImage:'/images/kg.jpg',
		top:150,
		left:50
	});
	self.add(btnKG);

	btnKG.addEventListener('click', function() {
		var win_Names = require('ui/common/wn_names');
		getClassIdData('P1');
	    win_Names().open();
		//var selectName = new SelectName('KG');
		//self.add(selectName);
		//getClassIdData ('P1');
	});

	////////BUTTONS///////////
	var btnExit = Ti.UI.createButton({
		width:150,
		height:70,
		backgroundImage:'/images/exit.png',
		top:500,
		left:75
	});
	self.add(btnExit);

	btnExit.addEventListener('click', function() {
		
		///var selectName = new SelectName('KG');
		///self.add(selectName);
	});


//
	var btnP1 = Ti.UI.createButton({
		width:200,
		height:100,
		backgroundImage:'/images/p1.jpg',
		top:160,
		left:310
	});
	self.add(btnP1);

	btnP1.addEventListener('click', function() {
		var selectName = new SelectName('P1');
		self.add(selectName);
	});


//
	var btnP3 = Ti.UI.createButton({
		width:200,
		height:100,
		backgroundImage:'/images/p3.jpg',
		top:280,
		left:310
	});
	self.add(btnP3);

	btnP3.addEventListener('click', function() {
		var selectName = new SelectName('P2');
		self.add(selectName);
	});

//
	var btnP5 = Ti.UI.createButton({
		width:200,
		height:100,
		backgroundImage:'/images/p5.jpg',
		top:400,
		left:310
	});
	self.add(btnP5);

	btnP5.addEventListener('click', function() {
		var selectName = new SelectName('P3');
		self.add(selectName);
	});




//
	var btnP2 = Ti.UI.createButton({
		width:200,
		height:100,
		backgroundImage:'/images/p2.jpg',
		top:160,
		left:550
	});
	self.add(btnP2);

	btnP2.addEventListener('click', function() {
		var selectName = new SelectName('P2');
		self.add(selectName);
	});



//
	var btnP4 = Ti.UI.createButton({
		width:200,
		height:100,
		backgroundImage:'/images/p4.jpg',
		top:280,
		left:550
	});
	self.add(btnP4);

	btnP4.addEventListener('click', function() {
		var selectName = new SelectName('P4');
		self.add(selectName);
	});
	


//
	var btnP6 = Ti.UI.createButton({
		width:200,
		height:100,
		backgroundImage:'/images/p6.jpg',
		top:400,
		left:550
	});
	self.add(btnP6);

	btnP6.addEventListener('click', function() {
		var selectName = new SelectName('P6');
		self.add(selectName);
	});


//
	var btnSync = Ti.UI.createButton({
		width:200,
		height:330,
		backgroundImage:'/images/sync.jpg',
		top:150,
		left:810
	});
	self.add(btnSync);

	btnSync.addEventListener('click', function() {
		var win_Sync = require('ui/common/wn_syncPunchCode');
	    win_Sync().open();
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		//self.open(Ti.UI.createWindow({
			///title: L('newWindow'),
			//backgroundColor: 'white'0244184149
		//}));0264468552
		
	});
	
	//var f = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory,'emptyfile.txt');
	//f.write('The file is no longer empty!');
	//var contents = f.read();
	//Ti.API.info('Output as a blob: '+contents);

	return self;
}

module.exports = FirstView;

function getClassIdData (classText) {
	
	db2 = Ti.Database.open('/mnt/sdcard/gh/reads/schoolBell.db');
  	var selectedGroups = db2.execute("SELECT groupId FROM groups  where groupName = '"+classText+"'");
	while (selectedGroups.isValidRow()){
		var varGpData = selectedGroups.fieldByName('groupId');
		///dfault.difSettings.classId = varGpData;
		///var groupID = selectedGroups.fieldByName('groupId');
	  	
	 	selectedGroups.next();
	}
	Ti.App.Properties.setString('groupId',varGpData);
	////Ti.App.Properties.setString('difSettings',JSON.stringify(dfault.difSettings));
	selectedGroups.close();
	db2.close();
	return varGpData;
}
