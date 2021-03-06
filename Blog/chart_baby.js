var ctx = document.getElementById("myChart").getContext("2d");
var mendata = [];
var womendata = [];

var birthyear = [];

for (var item of jsondata)
{
    if(item.gender === "M") {
        birthyear.push(item.year.toString());  
        mendata.push(item.total);
    } else {
        womendata.push(item.total);
    }  
};




var data = {
    labels: birthyear,
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



var jsonSetting = {
    pointDot : false,// there will be no pointdot if false
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

    };

var myLineChart = new Chart(ctx).Line(data, jsonSetting) ;

/***chart two_ bar chart */

var ctxdiv = document.getElementById("myChart2").getContext("2d");

var mendivdata = [];
var womendivdata = [];

var birthdivyear = [];

for (var item of jsondivdata)
{
    if(item.gender === "M") {
        birthdivyear.push(item.year.toString());  
        mendivdata.push(item.count_distinct);
    } else {
        womendivdata.push(item.count_distinct);
    }  
}

var datadiv = {
    labels: birthdivyear,
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: mendivdata
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: womendivdata
        }
    ]
};


var jsondivSetting = {
    pointDot : false,// there will be no pointdot if false
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

    };



var myLinedivChart = new Chart(ctxdiv).Line(datadiv,jsondivSetting);   

/***chart three_ Pie chart */
var ctxover = document.getElementById("myChart3").getContext("2d");

var counter = 0;
var lastName = "";
var nameDuration = [];
var nameList = [];
var colorList = [];
 
for (var item of jsongoverdata)
{
    if (item.name === lastName) {
        counter++;
    } else {
        nameList.push(lastName);
        nameDuration.push(counter);
        colorList.push("#FF6384");
        lastName = item.name;
        counter = 1;
    }
};

var dataover = [];

for (var item of jsongoverdata) {
    if (item.name === lastName) {
        counter++;
    } else {
        dataover.push({
            "label": lastName,
            "value": counter,
            "highlight": "#FF6384",
            "color": "green"});
        lastName = item.name;
        counter = 1;
    }    
}


var myPieChart = new Chart(ctxover).Pie(dataover);
