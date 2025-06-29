//your JS code here. If required

let obj = {
	name: "Dhruw"
}

let arr = [];
function getKeys(obj){
	for(keys in obj){
		arr.push(keys);
	}
	return arr;
}

getKeys(obj);