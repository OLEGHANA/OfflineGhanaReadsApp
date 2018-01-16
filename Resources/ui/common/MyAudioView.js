var dfault={};
var categoryArray = [];
var catRows = [];

function MyAudioView() {
	var self = Ti.UI.createView({
		backgroundImage:'/images/select_audio_resources.jpg'
	});
	self.orientationModes = [Titanium.UI.LANDSCAPE_RIGHT];
	self.title='';
	
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
	
	var buttonStaticView = Ti.UI.createView({
		///backgroundColor:'#ffffff',
	    //borderWidth : 1,
	    //borderColor : "blue",
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
	buttonStaticView.add(btnBack);
	btnBack.addEventListener('click', function() {
		
		///var selectName = new SelectName('KG');
		///self.add(selectName);
	});

	
	
	var categoryTableView = Ti.UI.createTableView({
	    data:catRows,
	    filterAttribute:'filter',
	    ///search:search,
	    ///searchHidden:false
	});
	
	loadNamesToTable();
	////////////////////////
	////////////////////////
	for (var c=0;c<categoryArray.length;c++) {
	    var item = categoryArray[c];
	 
	    var row = Ti.UI.createTableViewRow({
	        height:40,
	        ///backgroundColor:'#ffffff',
	        borderWidth : 2,
	    	borderColor : "blue",
	        filter:item.title,
	        backgroundSelectedColor:'#eeee33',
	        hasChild:false
	    }); 
	 
	    row.catname = item.title;
	    row.catid = item.catid;
	    row.resTitle = item.resTitle;
	 
	    var catName = Ti.UI.createLabel({
	        text: item.title,
	        color: '#ffffff',
	        textAlign:'left',
	        left:4,
	        top:8,
	        height:'auto',
	        font:{fontWeight:'bold',fontSize:25}
	    }); 
	 
	    row.add(catName);
	    catRows[c] = row;
	}
	
	var categoryTableView = Ti.UI.createTableView({
	    data:catRows,
	    filterAttribute:'filter',
	    //search:search,
	    //searchHidden:false
	});
	categoryTableView.addEventListener('click', function(e) {
		/*Ti.App.Properties.setString('memberId',e.row.catid);
		Ti.App.Properties.setString('memberCode',e.row.resTitle);
		Ti.App.Properties.setString('memberName',e.row.catname);
    	//alert(e.row.catid+":"+e.row.catname+':'+e.row.resTitle);
    	var win_punchCode = require('ui/common/wn_punchCode');
	    win_punchCode().open();*/
	});
	///////////////////////
	//////////////////////10 and 8
	
	self.add(myLibrarySclView);
	self.add(buttonStaticView);
	
	myLibrarySclView.add(categoryTableView);
	return self;
}
module.exports = MyAudioView;

function loadNamesToTable(){
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
