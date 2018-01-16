var dfault={};
var categoryArray = [];
var catRows = [];


function SyncPunchCodeView() {
	var self = Ti.UI.createView({
		backgroundImage:'/images/mainbg.jpg'
	});
	self.orientationModes = [Titanium.UI.LANDSCAPE_RIGHT];
	self.title='';
	
	var txtTextPassword = Ti.UI.createTextField({
		color:'#000000',
		///text:String.format(L('welcome'),'Titanium'),239-534
		text:'',
		textAlign:'centre',
		font:{fontWeight:'bold',fontSize:30},
		top:'20%',
		height:'5%',
		width:'20%'
	});
	
	
	
	var btnEnter = Ti.UI.createButton({
		width:'20%',
		height:'30%',
		backgroundImage:'/images/enter_code.png',
		top:'50%',
	});
	btnEnter.addEventListener('click', function() {
		/* memCode = Ti.App.Properties.getString('memberCode');
		 Ti.API.info(memCode + ' ');
		if(labelTextShow.text == memCode){
		    var win_selectActivity = require('ui/common/wn_selectActivity');
	    	win_selectActivity().open();
		}else{
			 displayAlert("Hello "+Ti.App.Properties.getString('memberName')+", The code entered is incorrect \n Please check and try again");
		}*/
	});
	
	
	self.add(txtTextPassword);
	self.add(btnEnter);
	return self;
}
module.exports = SyncPunchCodeView;

function loadNamesToTable(){
	groupId = Ti.App.Properties.getString('groupId');
	Ti.API.info(groupId + ' ');
	db2 = Ti.Database.open('/mnt/sdcard/gh/reads/schoolBell.db');
	///
  	var selectedMembers = db2.execute("SELECT * FROM members where groupId = '"+groupId+"'  ORDER BY memberName ");
  	while (selectedMembers.isValidRow()) {
	    categoryArray.push({
	      catid:selectedMembers.fieldByName('id'),
	      title:selectedMembers.fieldByName('memberName'),
	      stuCode: selectedMembers.fieldByName('pass')
	    }); 
    	selectedMembers.next();
   }
   selectedMembers.close();
   db2.close();	
}

function displayAlert(stringToView){
	var da = Ti.UI.createAlertDialog();
		da.message = ''+stringToView;
		da.buttonNames = ['Okay'];
		da.cancel = 0;
	    da.show(); // show the leaving dialog
}
