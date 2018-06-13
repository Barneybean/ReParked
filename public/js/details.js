// $('#day1').val(reservation.bookedDate)
var resultFromDB = [
  {
    id: 1,
    bookedDates: "20180612",
    bookedHours: [2, 4, 5]
  },
  {
    id:2,
    bookedDates: "20180613",
    bookedHours: [2, 3, 5, 6]
  },
  {
    id:3,
    bookedDates: "20180614",
    bookedHours: [2, 3, 5, 7]
  },
  {
    id:4,
    bookedDates: "20180615",
    bookedHours: [2, 3, 5, 7]
  }
]
result = resultFromDB.slice(0,3);
//to create column name
for(var i = 0; i <result.length; i++){
  if(i<3) {
    var columnName = $("<th>");
    var index = i+1
    columnName.attr("scope","col");
    columnName.attr("class", "day"+index)
    columnName.text(result[i].bookedDates)
    $("#columnName").append(columnName);
  }
  else {
    console.log("display 3 reservations only")
  }
   
}

// create 24 hours tr
for (var i=0; i<24; i++) {
  if(i<24) {
    var index = i+1
    var timeSlot = i+":00-"+(i+1)+":00"
    if(result.length === 3){      
      var tableRow = $("<tr>");
      var tableData1 = $("<td>");
      var tableData2 = $("<td>");
      var tableData3 = $("<td>");
      tableData1.text(timeSlot);
      tableData1.attr("id", i+"-"+result[0].bookedDates);
      tableData2.text(timeSlot);
      tableData2.attr("id", i+"-"+result[1].bookedDates);
      tableData3.text(timeSlot);
      tableData3.attr("id", i+"-"+result[2].bookedDates);
      tableRow.append(tableData1);
      tableRow.append(tableData2);
      tableRow.append(tableData3);
      $("#tableBody").append(tableRow);
    } else if(result.length === 2){
      var tableRow = $("<tr>");
      var tableData1 = $("<td>");
      var tableData2 = $("<td>");
      tableData1.text(timeSlot);
      tableData1.attr("id", i+"-"+result[0].bookedDates);
      tableData2.text(timeSlot);
      tableData2.attr("id", i+"-"+result[1].bookedDates);
      tableRow.append(tableData1);
      tableRow.append(tableData2);
      $("#tableBody").append(tableRow);
    } else if(result.length === 1){
      var tableRow = $("<tr>");
      var tableData1 = $("<td>");
      tableData1.text(timeSlot);
      tableData1.attr("id", i+"-"+result[0].bookedDates);
      tableRow.append(tableData1);
      $("#tableBody").append(tableRow);
    }
  }
  else {
    console.log("display 3 reservations only")
  }
}
