// enables active on each nav item
$("li a").on("click", function() {
    $("a").removeClass("active");
    $(this).addClass("active");
  });


//change clicked items into blue
$("h5 button").on("click", function() {
    $("button").removeClass("btn-outline-dark");
    $(this).addClass("btn-info");
  });

function showContent1() {
  document.getElementById("homeNav").style.display = 'block';
  document.getElementById("teachersNav").style.display = 'none';
  document.getElementById("addRemoveNav").style.display = 'none';

}
function showContent2() {
  document.getElementById("homeNav").style.display = 'none';
  document.getElementById("teachersNav").style.display = 'block';
  document.getElementById("addRemoveNav").style.display = 'none';
}
function showContent3() {
  document.getElementById("homeNav").style.display = 'none';
  document.getElementById("teachersNav").style.display = 'none';
  document.getElementById("addRemoveNav").style.display = 'block';
}

//
// Load Charts and the corechart and barchart packages.
      google.charts.load('current', {'packages':['corechart']});

      // Draw the pie chart and bar chart when Charts is loaded.
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() { 

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['ASU', 3],
          ['TAMU', 1],
          ['OLIVE HS', 1],
          ['MONTGOMERY HS', 1],
          ['ACU', 2]
        ]);

        var piechart_options = {title:'Schools currently enrolled ',
                       width:400,
                       height:300};
        var piechart = new google.visualization.PieChart(document.getElementById('analyticsPie'));
        piechart.draw(data, piechart_options);

        var barchart_options = {title:'Bar chart comperison ',
                       width:400,
                       height:300,
                       legend: 'none'};
        var barchart = new google.visualization.BarChart(document.getElementById('analyticsBar'));
        barchart.draw(data, barchart_options);
      }