/**
 * @author Leonard Maximus Mensah
 */
///List all names Constructore
function SelectName(txtClass){
	var Names ={};
	var self = Ti.UI.createView({
		backgroundImage:'/images/mainbg.jpg'
	});
	
	 Names.data = [];
	 Names.tabLoc = Ti.UI.createTableView({});
	 self.add(Names.tabLoc);
	 Names.row = Titanium.UI.createTableViewRow({
	 	height:60,
	 	top:70,
		backgroundColor:'#FFF',
	 	className:'tableRow'
	 });
	 
	if(Ti.Platform.osname=='android'){
		var file = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory,'students/'+txtClass+'.xml'); 
	}else{
		
	}
	
	var tableData = ['1','2','3','4','5','6'];

		for(var i=0; i<tableData.length; i++){
			///////
			Names.labTitle = Ti.UI.createLabel({
			 	color:'black',
			 	font:{
			 		fontSize:'12dp',
			 		fontWeight:'bold'
			 	},
			 	height:Ti.UI.SIZE,
			 	///text:results.item(i).textContent,
			 	text:tableData[i],
			 	textAlign:'center'
			 });
	 
			 Names.row.add(Names.labTitle);
			 Names.data.push(Names.labTitle);
			//////
	    	///arr[i] = results.item(i).text;
		}
		///Ti.API.info('Output as a Value: '+ arr[0]);
	//}
	Names.tabLoc.setData(Names.data);
		//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	self.add(label);

	//Add behavior for UI
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});
	
	
	return self;
	
}
module.exports = SelectName;