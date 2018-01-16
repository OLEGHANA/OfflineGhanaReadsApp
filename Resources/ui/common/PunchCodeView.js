var dfault={};
var categoryArray = [];
var catRows = [];


function PunchCodeView() {
	var self = Ti.UI.createView({
		backgroundImage:'/images/punchCode.jpg'
	});
	self.orientationModes = [Titanium.UI.LANDSCAPE_RIGHT];
	self.title='';
	
	var CodePuncherBoxView = Ti.UI.createView({
		orientationModes : [Titanium.UI.LANDSCAPE_RIGHT],
		navBarHidden:true,
		width:'77%',
		height: '90%',
		top: 85
	});
	
	
	var labelTextShow = Ti.UI.createLabel({
		color:'#000000',
		///text:String.format(L('welcome'),'Titanium'),239-534
		text:'',
		textAlign:'centre',
		font:{fontWeight:'bold',fontSize:30},
		top:120,
		left:330,
		height:40,
		width:300
	});
	
	
	var buttonStaticHolderView = Ti.UI.createView({
		width:'100%',
		height: 95,
		top:500,
	});
	
	var btnBack = Ti.UI.createButton({
		width:150,
		height:95,
		backgroundImage:'/images/back.png',
		left:50
	});
	btnBack.addEventListener('click', function() {
		///var selectName = new SelectName('KG');
		///self.add(selectName);
	});
	
	var btnEnter = Ti.UI.createButton({
		width:190,
		height:95,
		backgroundImage:'/images/enter_code.png',
		top:'50%',
		left:'67%'
	});
	btnEnter.addEventListener('click', function() {
		 memCode = Ti.App.Properties.getString('memberCode');
		 Ti.API.info(memCode + ' ');
		if(labelTextShow.text == memCode){
		    var win_selectActivity = require('ui/common/wn_selectActivity');
	    	win_selectActivity().open();
		}else{
			 displayAlert("Hello "+Ti.App.Properties.getString('memberName')+", The code entered is incorrect \n Please check and try again");
		}
	});
	
	var btn1 = Ti.UI.createButton({
		backgroundImage: 'none',
		width:70,
		height:70,
		//backgroundColor:'#FFFFFF',	///backgroundImage:'/images/enter_code.png',
		top:130,
		left:200,
	});
	btn1.addEventListener('click', function() {
		labelTextShow.text = labelTextShow.text + '1';
	});
	
	var btn2 = Ti.UI.createButton({
		backgroundImage: 'none',
		width:70,
		height:70,
		//backgroundColor:'#FFFFFF',	///backgroundImage:'/images/enter_code.png',
		top:130,
		left:300,
	});
	btn2.addEventListener('click', function() {
		labelTextShow.text = labelTextShow.text + '2';
	});
	
	
	var btn3 = Ti.UI.createButton({
		backgroundImage: 'none',
		width:70,
		height:70,
		//backgroundColor:'#FFFFFF',	///backgroundImage:'/images/enter_code.png',
		top:130,
		left:395,
	});
	btn3.addEventListener('click', function() {
		labelTextShow.text = labelTextShow.text + '3';
	});
	
	CodePuncherBoxView.add(btn1);
	CodePuncherBoxView.add(btn2);
	CodePuncherBoxView.add(btn3);
	
	
	var btn4 = Ti.UI.createButton({
		backgroundImage: 'none',
		width:70,
		height:70,
		//backgroundColor:'#FFFFFF',	///backgroundImage:'/images/enter_code.png',
		top:220,
		left:200,
	});
	btn4.addEventListener('click', function() {
		labelTextShow.text = labelTextShow.text + '4';
	});
	
	var btn5 = Ti.UI.createButton({
		backgroundImage: 'none',
		width:70,
		height:70,
		//backgroundColor:'#FFFFFF',	///backgroundImage:'/images/enter_code.png',
		top:220,
		left:300,
	});
	btn5.addEventListener('click', function() {
		labelTextShow.text = labelTextShow.text + '5';
	});
	
	
	var btn6 = Ti.UI.createButton({
		backgroundImage: 'none',
		width:70,
		height:70,
		//backgroundColor:'#FFFFFF',	///backgroundImage:'/images/enter_code.png',
		top:220,
		left:395,
	});
	btn6.addEventListener('click', function() {
		labelTextShow.text = labelTextShow.text + '6';
	});
	
	CodePuncherBoxView.add(btn4);
	CodePuncherBoxView.add(btn5);
	CodePuncherBoxView.add(btn6);
	
	var btn7 = Ti.UI.createButton({
		backgroundImage: 'none',
		width:70,
		height:70,
		//backgroundColor:'#FFFFFF',	///backgroundImage:'/images/enter_code.png',
		top:310,
		left:200,
	});
	btn7.addEventListener('click', function() {
		labelTextShow.text = labelTextShow.text + '7';
	});
	
	var btn8 = Ti.UI.createButton({
		backgroundImage: 'none',
		width:70,
		height:70,
		//backgroundColor:'#FFFFFF',	///backgroundImage:'/images/enter_code.png',
		top:310,
		left:300,
	});
	btn8.addEventListener('click', function() {
		labelTextShow.text = labelTextShow.text + '8';
	});
	
	
	var btn9 = Ti.UI.createButton({
		backgroundImage: 'none',
		width:70,
		height:70,
		//backgroundColor:'#FFFFFF',	///backgroundImage:'/images/enter_code.png',
		top:310,
		left:395,
	});
	btn9.addEventListener('click', function() {
		labelTextShow.text = labelTextShow.text + '9';
	});
	
	CodePuncherBoxView.add(btn7);
	CodePuncherBoxView.add(btn8);
	CodePuncherBoxView.add(btn9);
	
	var btn0 = Ti.UI.createButton({
		backgroundImage: 'none',
		width:70,
		top:390,
		left:200,
		height:70,
	});
	btn0.addEventListener('click', function() {
		labelTextShow.text = labelTextShow.text + '0';
	});
	
	
	var btnDell = Ti.UI.createButton({
		backgroundImage: 'none',
		width:160,
		height:70,
		top:390,
		left:300,
	});
	btnDell.addEventListener('click', function() {
		var txtFromData = labelTextShow.text;
		labelTextShow.text = txtFromData.substring(0,(txtFromData.length-1));
	});
	
	
	CodePuncherBoxView.add(btn0);
	CodePuncherBoxView.add(btnDell);
	
	
	self.add(labelTextShow);
	buttonStaticHolderView.add(btnBack);
	
	
	self.add(buttonStaticHolderView);
	self.add(CodePuncherBoxView);
	self.add(btnEnter);
	return self;
}
module.exports = PunchCodeView;

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
