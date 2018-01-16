var dfault={};
var categoryArray = [];
var catRows = [];

function NamesView() {
	var self = Ti.UI.createView({
		backgroundImage:'/images/bg_selectname.jpg'
	});
	self.orientationModes = [Titanium.UI.LANDSCAPE_RIGHT];
	self.title='';
	
	//dfault.dbSettings = JSON.parse(Ti.App.Properties.getString('dbSettings'));
	var namesSclView = Ti.UI.createView({
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
	
	/*var btnBack = Ti.UI.createButton({
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

	*/
	
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
	        borderWidth : '1%',
	    	borderColor : "blue",
	        filter:item.title,
	        backgroundSelectedColor:'#eeee33',
	        hasChild:false
	    }); 
	 
	    row.catname = item.title;
	    row.catid = item.catid;
	    row.stuCode = item.stuCode;
	    if((c+1)>=10){
	    	var stuName = (c+1) +'.   '+ item.title;
	    	
	    }else{
	    	var stuName = (c+1) +'.     '+ item.title;
	    }
	    var catName = Ti.UI.createLabel({
	        text: stuName,
	        color: '#ffffff',
	        textAlign:'left',
	        left:'0%',
	        top:'8%',
	        height:'auto',
	        font:{fontWeight:'bold',fontSize:'35%'}
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
		Ti.App.Properties.setString('memberId',e.row.catid);
		Ti.App.Properties.setString('memberCode',e.row.stuCode);
		Ti.App.Properties.setString('memberName',e.row.catname);
    	//alert(e.row.catid+":"+e.row.catname+':'+e.row.stuCode);
    	var win_punchCode = require('ui/common/wn_punchCode');
	    win_punchCode().open();
	});
	///////////////////////
	//////////////////////10 and 8
	
	self.add(namesSclView);
	//self.add(buttonStaticView);
	
	namesSclView.add(categoryTableView);
	return self;
}
module.exports = NamesView;

function loadNamesToTable(){
	groupId = Ti.App.Properties.getString('groupId');
	//Ti.API.info(groupId + ' ');
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
