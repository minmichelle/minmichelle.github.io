
function loadCsvData(filePath, action) {
    var request = new XMLHttpRequest();
    request.open("GET", filePath, true);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var text = request.responseText;
            text = Papa.parse(text, {header:true,skipEmptyLines:true, dynamicTyping:true});
            action(text.data);
        }
    };
    request.send(null);
}

function generateChartData(data, labelCol, dataCols, colors) {
    var labels = [];
    var datasets = [];
    var id = 0;
    for (var col of dataCols) {
        datasets.push({label:col, borderWidth:1, backgroundColor: colors[id++], borderColor: [], data:[]});
    }
    for (var row of data) {
        labels.push(row[labelCol]);
        id = 0;
        for (var col of dataCols) {
            datasets[id++].data.push(row[col]);
        }
    }
    return {"labels": labels, "datasets": datasets};
}


function drawChart(canvasId, dataSrc, chartType, labelCol, dataCols, colors = ["rgba(75,192,192,0.4)"], option = {}) {
    var ctx = document.getElementById(canvasId);
    var chartData = loadCsvData(dataSrc, function(chartData) {
        var myChart = new Chart(ctx, {
            type: chartType,
            data: generateChartData(chartData, labelCol, dataCols, colors),
            options: option
        });
    });
}

drawChart("chart-popularairport", "data/flight-delay/Airport/Final/PopularAirport_total.csv", "bar", "Airport",  ["NumberOfDeparture", "NumberOfArrival", "TotalFlightNumber"], ['rgba(255, 99, 132, 0.45)', 'rgba(54, 162, 235, 0.45)', 'rgba(255, 206, 86, 0.45)']);
drawChart("chart-popularairport-deparri-delayratio", "data/flight-delay/Airport/Final/PopularAirport_DepaArrivalDelayRatio.csv", "horizontalBar", "PopularAirport",  ["DepartureDelayRatio", "ArrivalDelayRatio"], ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)']);
drawChart("chart-popularairport-delaybreakdown", "data/flight-delay/Airport/Final/PopularAirport_DepartureBreakDown.csv", "horizontalBar", "Origin",  ["CarrierDelayCount", "NasDelayCount","WeatherDelayCount", "LateCraftDelayCount","SecurityDelayCount"], ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(0, 204, 102, 0.7 )', 'rgba(153, 102, 255, 0.7)']);



drawChart("chart-popularairline", "data/flight-delay/Airline/Final/PopularAirline.csv", "bar", "Airline",  ["TotalCarrier"]);
drawChart("chart-popularairline-deparri-delayratio", "data/flight-delay/Airline/Final/PopularAirlineDepaArrivalDelayRatio.csv", "horizontalBar", "Carrier",  ["DepartureDelayRatio", "ArrivalDelayRatio"], ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)']);
drawChart("chart-popularairline-delaybreakdown", "data/flight-delay/Airline/Final/PopularAirlineDelayBreakDown.csv", "horizontalBar", "Airline",  ["CarrierDelayCount", "NasDelayCount","WeatherDelayCount", "LateCraftDelayCount","SecurityDelayCount"], ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(0, 204, 102, 0.7 )', 'rgba(153, 102, 255, 0.7)']);




drawChart("chart-popularroute", "data/flight-delay/Route/PopularRoute.csv", "bar", "Route",  ["NumberOfFlight"], ['rgba(255, 99, 132, 0.2)']);
drawChart("chart-popularroute-deparri-delayratio", "data/flight-delay/Route/PopularRouteDepaArrivalDelayRatio.csv", "horizontalBar", "Route",  ["DepartureDelayRatio", "ArrivalDelayRatio"], ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)']);
drawChart("chart-popularRoute-delaybreakdown", "data/flight-delay/Route/PopularRouteDelayBreakdown.csv", "horizontalBar", "Route",  ["CarrierDelayCount", "NasDelayCount","WeatherDelayCount", "LateCraftDelayCount","SecurityDelayCount"], ['rgba(255, 99, 132, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(255, 206, 86, 0.4)', 'rgba(75, 192, 192, 0.4 )', 'rgba(153, 102, 255, 0.4)']);

