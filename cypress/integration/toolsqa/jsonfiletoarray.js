// //import $ from '/code.jquery.com/jquery-1.11.3.min.js'

// $.getJSON('C:\Users\svirajaj\OneDrive - Capgemini\Documents\CypressIO\cypress\fixtures\example.json',function(data){
//     var items = []
//     $.each( data, function( key, val ) {     
//         items.push([key,val] );        
//       });
// })

// console.log(items)

if (typeof window !== "undefined") {
  // browser code

  var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
oXHR.open("GET", "C:\Users\svirajaj\OneDrive - Capgemini\Documents\CypressIO\cypress\fixtures\example.json", true); 
var arrItems = []
arrItems = JSON.parse(json); 
console.log(arrItems)
}

