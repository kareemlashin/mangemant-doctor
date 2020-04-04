$(document).ready(function () {
    $('#example ').DataTable();
    var options8 = {
        series: [{
            name: 'series1',
            data: [41, 50, 38, 61, 42, 70, 100]
        }, {
            name: 'series2',
            data: [21, 42, 55, 32, 34, 92, 41]
        }],
        chart: {
            height: 125,
            type: 'area',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            }
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false,
            curve: 'smooth'
        },
        xaxis: {
            type: 'numeric',
            lines: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            labels: {
                show: false,
            },
            padding: {
                left: 0,
                right: 0
            },
        }],
        tooltip: {
            x: {
                show: false,
                format: 'dd/MM/yy HH:mm'
            },
        },
    };
          var chart8 = new ApexCharts(document.querySelector("#chart8"), options8);
    chart8.render();
    

    
    var options7 = {
        series: [{
            data: [21, 22, 10, 28, 16, 21, 13, 30]
        }],
        chart: {
            height: 125,
            type: 'bar',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            },
            events: {
                click: function(chart, w, e) {
                }
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '20px',
                distributed: true,
                endingShape: 'rounded',
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            type: 'numeric',
            lines: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            labels: {
                show: false,
            },
            padding: {
                left: 0,
                right: 0
            },
        }],
    };
    
   
    var chart6 = new ApexCharts(document.querySelector("#chart6"), options7);
    chart6.render();
});