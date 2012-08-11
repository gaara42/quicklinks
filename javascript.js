function QuickLinks(){
	var innerHTMLC = "";
	//Disable the below line if you want a custom sort
	categories.sort();
	//Loop through each category and make the appropriate links and div elements
	for(categories_num = 0;categories_num<categories.length;categories_num++){
		//alert('<div class="menu" id="header'+categories_num+'"><div class="menutitle">');
		innerHTMLC = innerHTMLC.concat('<div class="menu" id="header'+categories_num+'"><div class="menutitle">');
		innerHTMLC = innerHTMLC.concat(categories[categories_num]);
		innerHTMLC = innerHTMLC.concat('</div><div class="ispacer"></div><div class="menucontent">');	
		key_list=keys(links[categories[categories_num]]).sort();
		var i = 0;
		for(x in links[categories[categories_num]]){
			innerHTMLC = innerHTMLC.concat('<a class="speed" href=');
			innerHTMLC = innerHTMLC.concat(links[categories[categories_num]][key_list[i]]);
			innerHTMLC = innerHTMLC.concat('>');
			innerHTMLC = innerHTMLC.concat(key_list[i]);
			innerHTMLC = innerHTMLC.concat('</a>');	
			innerHTMLC = innerHTMLC.concat();
			i++;
		}	
		innerHTMLC = innerHTMLC.concat('</div></div>');
		//Make each category have it's own style sheet, makes browsers render faster (less DOM crawling)
		innerHTMLC = innerHTMLC.concat('<style>#header'+categories_num+':hover .menucontent{display:block;}</style>');
		//Add the new menu to the DOM tree
		document.getElementById("container").innerHTML = document.getElementById("container").innerHTML.concat(innerHTMLC);			
		innerHTMLC="";
	}
}
function search_DOM(){
	var innerHTMLC = "";
	//Disable the below line if you want a custom sort
	//search_categories.sort();
	//Loop through each category and make the appropriate links and div elements
	for(categories_num = 0;categories_num<search_categories.length;categories_num++){
		key_list=keys(search[search_categories[categories_num]]);
		//Enable the below to sort searches
		//key_list=keys(search[search_categories[categories_num]]).sort();
		var i = 0;
		for(x in search[search_categories[categories_num]]){
			innerHTMLC = innerHTMLC.concat('<form method="get" action="');
			innerHTMLC = innerHTMLC.concat(search[search_categories[categories_num]][key_list[i]]);
			if(i==0){
				innerHTMLC = innerHTMLC.concat('" > <input type="search" autofocus name="q" placeholder="');
			}else{
			innerHTMLC = innerHTMLC.concat('" > <input type="search"  name="q" placeholder="');
			}
			innerHTMLC = innerHTMLC.concat(key_list[i]);
			innerHTMLC = innerHTMLC.concat('" />				</form>');	
			i++;
			//Add the new searches to the DOM tree
			document.getElementById("search").innerHTML = innerHTMLC;			
		}	
	}
}
function addValues(){
	var alist = document.getElementsByTagName("a");
	for (i = 0; i <= alist.length-1; i++){
		alist[i].target="_blank";
	} 	
	var alist = document.getElementsByTagName("form");
	for (i = 0; i <= alist.length-1; i++){
		alist[i].target="_blank";
	} 
}
function keys(obj){
    var keys = [];
    for(var key in obj){
        if(obj.hasOwnProperty(key)) {    
            keys.push(key);
        }
    }
    return keys;
}