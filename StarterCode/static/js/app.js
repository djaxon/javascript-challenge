// from data.js
var tableData = data;

// // YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the alien data from data.js
console.log(data);

alienTable= data.forEach((alienSighting) => {
    
  var row = tbody.append("tr");
  Object.entries(alienSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


// //==============================================//
// // Select the button
// var button = d3.select("#filter-btn");

// // Select the form
// var form = d3.select("#form");

// // Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

// // Complete the event handler function for the form
// function runEnter() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(tableData);

//   var filteredData = tableData.filter(alienSighting => alienSighting.datetime === inputValue);

//   console.log(filteredData);
//==============================================//




// function myFunction() {
//   var input, filter, table, tr, td, i;
//   input = document.getElementById("datetime");
//   filter = input.value.date();
//   table = document.getElementById("ufo-table");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       if (td.innerHTML.date().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }

