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


var newdata = {
    labels: ["1","2","3","4","5"],
    datasets:[
        {
            label: "test",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65,70,90,53,62]
        }
    ]
    
};


useful
<!--content section -->
		<!--	
               <script src="document.js"> </script>
            <div id="content">
            <ul>
		  		<li><a href="blog.html#USbaby" onclick = "window.location.hash = 'USbaby';window.location.reload();">US Baby Name</a></li>
		  		<li><a href="abc">link2</a></li>
		  	    <li><a href="#">link3</a></li>
		  	    <li><a href="#">link4</a></li>
		  	</ul>
            </div> <!-- div id="content"  line80-->
           <!-- <script>
                var blogName = window.location.hash;
                if (blogName != null && blogName.length != 0) {
                    linkage(blogName.substr(1) + ".html");
                } 
            </script>
            -->