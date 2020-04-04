$(document).ready(function () {
    var options1 = {
        series: [
          {
            name: "Yearly Profit",
            data: [
              {
                x: "2011-01-03T00:00:00",
                y: 5423
              },
              {
                x: "2011-01-04T00:00:00",
                y: 6653
              },
              {
                x: "2011-01-05T00:00:00",
                y: 8133
              },
              {
                x: "2011-01-06T00:00:00",
                y: 7132
              },
              {
                x: "2011-01-07T00:00:00",
                y: 7332
              },
              {
                x: "2011-01-08T00:00:00",
                y: 6553
              },
              {
                x: "2011-01-09T00:00:00",
                y: 6551
              },
              {
                x: "2011-01-10T00:00:00",
                y: 7553
              },
              {
                x: "2011-01-11T00:00:00",
                y: 6553
              },
              {
                x: "2011-01-12T00:00:00",
                y: 6998
              },
              {
                x: "2011-01-13T00:00:00",
                y: 6553
              },
              {
                x: "2011-01-14T00:00:00",
                y: 6199
              },
              {
                x: "2011-01-15T00:00:00",
                y: 7000
              },
              {
                x: "2011-01-16T00:00:00",
                y: 6553
              }
            ]
          }
        ],
        chart: {
          height: 350,
          type: "bar"
        },
        colors: [
          function (opts) {
            const sI = opts.seriesIndex;
            const dI = opts.dataPointIndex;
      
            const date = new Date(opts.w.globals.seriesX[sI][dI]);
            if (date.getDay() === 6 || date.getDay() === 0) {
              return "#089BAB";
            }
            return "#E77471";
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "30%"
          }
        },
        stroke: {
          show: true,
          width: 2
        },
        dataLabels: {
          enabled: false
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return val / 1000 + "K $";
            }
          }
        },
        fill: {
          opacity: 1
        },
        xaxis: {
          type: "datetime"
        }
      };
      
      var chart = new ApexCharts(document.querySelector("#chart"), options1);
      chart.render();


      var options2 = {
        chart: {
          height: 350,
          type: "radialBar"
        },
        plotOptions: {
          circle: {
            dataLabels: {
              showOn: "hover"
            }
          }
        },
        series: [44, 55, 67, 83],
        labels: ["medicine", "doctor", "bed", "all"]
      };
      
      var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
      
      chart2.render();
      
      var chartAreaBounds = chart.w.globals.dom.baseEl.querySelector('.apexcharts-inner').getBoundingClientRect();
      
      chart.addText({
        x: 20,
        y: 30,
        text: "",
        fontSize: 16,
        textAnchor: "middle"
      });
      
      chart.addText({
        x: 30,
        y:30,
        text: "",
        fontSize: 16,
        textAnchor: "start"
      });
      
      chart.addText({
        x: 30,
        y:30,
        text: "",
        fontSize: 16,
        textAnchor: "middle"
      });
      
      chart.addText({
        x: 30,
        y:30,
        text: "",
        fontSize: 16,
        textAnchor: "end"
      });
      $('#example ').DataTable();
 
      var options3 = {
        series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
        chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      };

      var chart10 = new ApexCharts(document.querySelector("#chart-3"), options3);
      chart10.render();
    
var options8 = {
	series: [{
		name: 'series1',
		data: [41, 50, 38, 61, 42, 70, 100]
	}, {
		name: 'series2',
		data: [21, 42, 55, 32, 34, 92, 41]
	}],
	chart: {
		height: 110,
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
		height: 110,
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