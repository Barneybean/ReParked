// $('#day1').val(reservation.bookedDate)

var result = [
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
    var tableRow = $("<tr>");
    var index = i+1
    tableRow.attr("id", index+"-"+1);
    tableRow.text(i+"-"+(i+1));
    $("#tableRow").append(tableRow);
  }
  else {
    console.log("display 3 reservations only")
  }
}



// for(var i = 0; i < reservations.bookedHour; i++){
//   var hour = reservation.bookedHour[i];
//     $('#1-'+hour).attr('class', highlight)
// }




