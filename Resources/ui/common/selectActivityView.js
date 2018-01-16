var dfault={};
var categoryArray = [];
var catRows = [];


function selectActivityView() {
	var self = Ti.UI.createView({
		backgroundImage:'/images/bg_selectaction.jpg'
	});
	self.orientationModes = [Titanium.UI.LANDSCAPE_RIGHT];
	self.title='';
	
	var optionsBoxView = Ti.UI.createScrollView({
		orientationModes : [Titanium.UI.LANDSCAPE_RIGHT],
		 //layout : "vertical",
		///navBarHidden:true,
	    ///borderWidth : 1,
	    ///borderColor : "blue",
		width:'84%',
		left:'13%',
		height: '79%',
		top: 20
	});
	var buttonStaticHolderView = Ti.UI.createView({
		///backgroundColor:'#13386c',
		width:'8%',
		height: '28%',
		left:'2%',
		top: '38%',
	});
	buttonStaticHolderView.addEventListener('click', function() {
	});
	
	var btn_phonics = Ti.UI.createButton({
		width:180,
		height:200,
		backgroundImage:'/images/btn_phonics.png',
		left:20,
		top:20,
	});
	btn_phonics.addEventListener('click', function() {
	});
	
	var btnAudioBooks = Ti.UI.createButton({
		width:180,
		height:200,
		backgroundImage:'/images/btn_audiobooks.png',
		left:230,
		top:20,
	});
	btnAudioBooks.addEventListener('click', function() {
		var win_myAudio = require('ui/common/wn_myAudio');
	    win_myAudio().open();
	});
	
	var btn_videobook = Ti.UI.createButton({
		width:180,
		height:200,
		backgroundImage:'/images/btn_videobook.png',
		left:440,
		top:20,
	});
	btn_videobook.addEventListener('click', function() {
		var win_myVideo = require('ui/common/wn_myVideo');
	    win_myVideo().open();
	});
	
	var btnMyLibrary = Ti.UI.createButton({
		width:180,
		height:200,
		backgroundImage:'/images/btn_mylibrary.png',
		left:650,
		top:20,
	});
	btnMyLibrary.addEventListener('click', function() {
			var win_myLibrary = require('ui/common/wn_myLibrary');
	    	win_myLibrary().open();
	});
	
	
	var btn_find = Ti.UI.createButton({
		width:180,
		height:200,
		backgroundImage:'/images/btn_listern_find.png',
		left:20,
		top:240,
	});
	btn_find.addEventListener('click', function() {
	});
	
	var btn_wordpower = Ti.UI.createButton({
		width:180,
		height:200,
		backgroundImage:'/images/btn_wordpower.png',
		left:230,
		top:240,
	});
	btn_wordpower.addEventListener('click', function() {
	});
	
	var btn_wordformation = Ti.UI.createButton({
		width:180,
		height:200,
		backgroundImage:'/images/btn_wordformation.png',
		left:440,
		top:240,
	});
	btn_wordformation.addEventListener('click', function() {
		var win_wordFormation = require('ui/common/wn_wordFormation');
	    win_wordFormation().open();
	});
	
	var btn_filltheblanks = Ti.UI.createButton({
		width:180,
		height:200,
		backgroundImage:'/images/btn_filltheblanks.png',
		left:650,
		top:240,
	});
	btn_filltheblanks.addEventListener('click', function() {
	});
	
	var btn_learnenglishkids = Ti.UI.createButton({
		width:180,
		height:200,
		backgroundImage:'/images/btn_learnenglishkids.png',
		left:20,
		top:460,
	});
	btn_learnenglishkids.addEventListener('click', function() {
		openAppWithURL('file:///mnt/sdcard/tab_resources/LearnEnglish_Kids/index.html');
	});
	
	var btn_kusasa = Ti.UI.createButton({
		width:180,
		height:200,
		backgroundImage:'/images/btn_kusasa.png',
		left:230,
		top:460,
	});
	btn_kusasa.addEventListener('click', function() {
		openAppWithURL('file://mnt/sdcard/tab_resources/kusasa/index.html');
	});
	
	var btn_intelschool = Ti.UI.createButton({
		width:180,
		height:200,
		backgroundImage:'/images/btn_intelschool.png',
		left:440,
		top:460,
	});
	btn_intelschool.addEventListener('click', function() {
		openAppWithURL('file:///mnt/sdcard/tab_resources/Intel_skoool/default.htm');
	});
	
	var btn_othermaterials = Ti.UI.createButton({
		width:180,
		height:200,
		backgroundImage:'/images/btn_othermaterials.png',
		left:650,
		top:460,
	});
	btn_othermaterials.addEventListener('click', function() {
	});
	
	optionsBoxView.add(btn_othermaterials);
	optionsBoxView.add(btn_intelschool);
	optionsBoxView.add(btn_kusasa);
	optionsBoxView.add(btn_learnenglishkids);
	
	optionsBoxView.add(btn_filltheblanks);
	optionsBoxView.add(btn_wordformation);
	optionsBoxView.add(btn_wordpower);
	optionsBoxView.add(btn_find);
	
	optionsBoxView.add(btnMyLibrary);
	optionsBoxView.add(btn_videobook);
	optionsBoxView.add(btnAudioBooks);
	optionsBoxView.add(btn_phonics);
	
	self.add(buttonStaticHolderView);
	self.add(optionsBoxView);
	return self;
}
module.exports = selectActivityView;


function openAppWithURL(urlFileLocation){
	try{
	var intent = Ti.Android.createIntent({
            action : Ti.Android.ACTION_VIEW,            
            data : urlFileLocation,
            className : 'org.mozilla.firefox.App',
            packageName : 'org.mozilla.firefox'
        });
 
        intent.addCategory(Ti.Android.CATEGORY_LAUNCHER);
        Ti.Android.currentActivity.startActivity(intent);
	
}catch(err){
	Ti.API.error(err);  
}
	
	
	
	/*
// Enclose in Try / Catch in case of Android 
try {      // canOpenURL only works in iOS     
	 if (Ti.Platform.canOpenURL(e.rowData.tweetUrl)){           
	 	// Open the native twitter client url: twitter://status?id=statusidnumber          
	 	 Ti.Platform.openURL(e.rowData.tweetUrl);      
	 	 } else { 
	 	 	  // If it can't open the twitter client open the twitter site: http://twitter.com/user/statuses/statusidnumber           
	 	 	  Ti.Platform.openURL(e.rowData.fallbackUrl);      
	 	 } 
	} catch (err) {     
		 // Android will catch an error because it can't call canOpenURL      
		 Ti.API.error(err);      
		 Ti.Platform.openURL(e.rowData.fallbackUrl); 
}
*/

}








function loadNamesToTable(){
	/*groupId = Ti.App.Properties.getString('groupId');
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
   db2.close();	*///0207761711
}

function displayAlert(stringToView){
	var da = Ti.UI.createAlertDialog();
		da.message = ''+stringToView;
		da.buttonNames = ['Okay'];
		da.cancel = 0;
	    da.show(); // show the leaving dialog
}
