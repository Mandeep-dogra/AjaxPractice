function addDriver(){
    
    var name = document.getElementById("driverName").value;
    var address1 = document.getElementById("driverAddress").value;
    var drivernum = document.getElementById("driverNumber").value;

    var obj = new Object(); 
    obj.name = name;
    obj.address = address1;
    obj.phone = drivernum;
    senToApi(obj);
}

function senToApi(driverObj)
{
    var newString = JSON.stringify(driverObj);
    var request = new XMLHttpRequest();

    request.onreadystatechange  = function(){   
		//console.log(this.readyState)
		//console.log("i am in ready state change");
		if(this.readyState==4){
			//addToHTMLTable(this.responseText);
console.log(this.responseText);
var obj = JSON.parse(this.responseText);
if(obj.status==true){
    // alert("driver have been saved");
    document.getElementById("pop-div").style.display="none";
    getDriverData();
}        

}
        


	}
    request.open("post", "https://restaurantappp.herokuapp.com/api/driver", true );
    request.setRequestHeader("Content-type", "application/json");
    request.send(newString);
}