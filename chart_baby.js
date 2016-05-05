var ctx = document.getElementById("myChart").getContext("2d");
var mendata = [];
var womendata = [];
var datalabels = [];

for (var item in jsondata)
{
    if (item.gender === "M") {
        datalabels.push(item.year.toString())
        mendata.push(item.total);
    } else {
        womendata.push(item.total);
    }
}

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: mendata
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: womendata
        }
    ]
};


var myLineChart = new Chart(ctx).Line(data,{
    pointDot : true,// there will be no pointdot if false
    //Number - Width of the grid lines
    scaleGridLineWidth : 2,
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,
    
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: false,

    //Boolean - Whether the line is curved between points
    bezierCurve : true,

    //Number - Tension of the bezier curve between points
    bezierCurveTension : 0.4,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 5,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point ????/
    pointHitDetectionRadius : 10,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke// line width
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    }) ;

/**** prototype method   /**** question one ,questions 3, (why if it is shows here, it does not display the followings)
canvas.onclick = function(evt){
    var activePoints = myLineChart.getPointsAtEvent(evt);
    // => activePoints is an array of points on the canvas that are at the same position as the click event.
};
***/
       // canvas.onclick = function(evt){
    // var activePoints = myLineChart.getPointsAtEvent(evt); 

/***chart two_ bar chart */

var ctx = document.getElementById("myChart2").getContext("2d");
var myBarChart = new Chart(ctx).Bar(data);   /****bar(data,options) -- means options insert here*/

 /***chart three_ radar chart */
var ctx = document.getElementById("myChart3").getContext("2d");
var myRadarChart = new Chart(ctx).Radar(data,
    {  //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,
       //Boolean - Whether to fill the dataset with a colour
    datasetFill : false,
    }); // questions 4, what isi this mean
    
    
    
    
    
// **************************************************************************************
// start trial 1 : ref: 
// keep the file as JSON, you cannot reference it from a script element and have it work while being valid JSON. You would need to use ajax request to fetch the file and parse the JSON.
/**** var jsonData;

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "how many b&g.txt", true);
oReq.send();

function reqListener(e) {
    jsonData = JSON.parse(this.responseText);
}

var jsonData = JSON.parse(fileContent); // questions, wht is filecontent, does copy the json content all here? 
*/


// start trail 2: ref: http://stackoverflow.com/questions/11561000/loading-object-from-json-file-into-javascript
    

var mendata = [];
var womendata = [];
var datalabels = [];

for (var item in jsondata)
{
    if (item.gender === "M") {
        datalabels.push(item.year.toString())
        mendata.push(item.total);
    } else {
        womendata.push(item.total);
    }
}

var ctx = document.getElementById("myChart").getContext("2d");
var data = {
    labels: datalabels,
    datasets: [
        {
            label: "Male",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: mendata
        },
        {
            label: "Female",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: womendata
        }
    ]
};
var myLineChart = new Chart(ctx).Line(data);

