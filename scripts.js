document.write('working')

arr1 = [102,7,7,12,302,98,106]
function secondGreatLow(arr){
	function ordered(a,b){
		return a-b
	}
	var orderArr = arr.sort(ordered)
	if(orderArr.length > 3){
		console.log(orderArr[1] +" " +orderArr[orderArr.length-2])
	} else if(orderArr.length === 3){
		conosole.log(orderArr[2])
	} else if(orderArr.length === 2){
		console.log(orderArr[0] + " " + orderArr[1])
	} else {
		console.log('error, array too short')
	}
}
console.log(secondGreatLow(arr1))


function timeConvert(num){
	var hours = Math.floor(num/60)
	var minutes = num%60
	return hours + ":" + minutes
}
console.log(timeConvert(54))
console.log(timeConvert(102))

function bracketMatcher(str){
	var open = 0
	var close = 0
	for(var i = 0; i < str.length; i++){
		if(str[i] === "("){
			open ++
		}
		if(str[i] === ")"){
			close ++
		}
	}
	if(open === close){
		return true
	} else {
		return false
	}
}

console.log(bracketMatcher('((hello (world)))'))
console.log(bracketMatcher('(((((((no))'))
console.log(bracketMatcher('yes'))