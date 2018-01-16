var dfault={};
var categoryArray = [];
var catRows = [];
var holder ={};

function MyWordFormationView() {
	holder.self = Ti.UI.createView({
		backgroundImage:'/images/bg_wordformation.jpg'
	});
	holder.self.orientationModes = [Titanium.UI.LANDSCAPE_RIGHT];
	holder.self.title='';
	
	//dfault.dbSettings = JSON.parse(Ti.App.Properties.getString('dbSettings'));
	var myLibrarySclView = Ti.UI.createView({
		///backgroundColor:'#e7b400',
		orientationModes : [Titanium.UI.LANDSCAPE_RIGHT],
	    //borderWidth : 1,
	    //borderColor : "blue",
		navBarHidden:true,
		width:'77%',
		height: '70%',
		//layout : "vertical"Scroll
	});
	
	var questionHolderView = Ti.UI.createView({
		width:'50%',
		height: 85,
		///color:'#FFFFFF',
		///backgroundColor:'#e7b400',
		///borderWidth : 1,
		left:330,
	    //borderColor : "blue",
		top:90,
	});
	
	
	var labelQuestionText = Ti.UI.createLabel({
		color:'#FFFFFF',
		///text:String.format(L('welcome'),'Titanium'),239-534
		text:'leonard',
		textAlign:'centre',
		font:{fontWeight:'bold',fontSize:40},
		///top:120,
		///left:330,
		///height:40,
		///width:300
	});
	labelQuestionText.text = labelQuestionText.text.toUpperCase();
	questionHolderView.add(labelQuestionText);
	
	var answerHolderView = Ti.UI.createView({
		width:'40%',
		height: 65,
		///color:'#FFFFFF',
		//backgroundColor:'#e7b400',
		borderWidth : 1,
		left:380,
	    //borderColor : "blue",
		top:243,
	});
	
	holder.self.add(questionHolderView);
	holder.self.add(answerHolderView);
	return holder.self;
}
module.exports = MyWordFormationView;

function loadQuestionTable(){
	sudentID = Ti.App.Properties.getString('memberId');
	///Ti.API.info(groupId + ' ');
	db2 = Ti.Database.open('/mnt/sdcard/gh/reads/schoolBell.db');
	///
  	var selectedMembers = db2.execute("SELECT * FROM resources where category='audio lesson' and memberId = '"+sudentID+"' ");
  	while (selectedMembers.isValidRow()) {
	    categoryArray.push({
	      catid:selectedMembers.fieldByName('id'),
	      title:selectedMembers.fieldByName('title'),
	      resTitle: selectedMembers.fieldByName('type')
	    }); 
    	selectedMembers.next();
   }
   selectedMembers.close();
   db2.close();
	
}

function keyboardButtons(){
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
	
}
