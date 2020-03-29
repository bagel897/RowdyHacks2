//the chart

// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Homework', 8],
  ['Tests', 2],
  ['classword', 10]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'John Doe ', 'width':700, 'height':500};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('divInsight'));
  chart.draw(data, options);
}


//show contents of div when nav button clicked
  
function showContent1() {
  document.getElementById("divStudents").style.display = 'none';
  document.getElementById("divHome").style.display = 'block';
  document.getElementById("divClasses").style.display = 'none';
  document.getElementById("divInsight").style.display = 'none';

}

function showContent2() {
  document.getElementById("divStudents").style.display = 'block';
  document.getElementById("divHome").style.display = 'none';
  document.getElementById("divClasses").style.display = 'none';
  document.getElementById("divInsight").style.display = 'none';

}

function showContent3() {
  document.getElementById("divStudents").style.display = 'none';
  document.getElementById("divHome").style.display = 'none';
  document.getElementById("divClasses").style.display = 'block';
  document.getElementById("divInsight").style.display = 'none';

}

function showContent4() {
  document.getElementById("divStudents").style.display = 'none';
  document.getElementById("divHome").style.display = 'none';
  document.getElementById("divClasses").style.display = 'none';
  document.getElementById("divInsight").style.display = 'block';

}