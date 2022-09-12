function imgchange(){
//	var flag;
	var second = parseInt(document.getElementById("sInput").value);
	// if(typeof timeinterval != 'undefined'){
		// clearInterval(timeinterval)
	// }
	// if(flag == true){
		// clearInterval(timeinterval);
	// }
	
	// var second = parseInt(document.getElementById("sInput").value);
		const url = "https://picsum.photos/200/300?random=";
		let i = 0;
		var timeinterval = setInterval(()=>{
		document.getElementById('img').src = url + i;	
		console.log(second)
		i++;
		},second*1000);
}

