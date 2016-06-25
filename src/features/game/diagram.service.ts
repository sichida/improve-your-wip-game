export class DiagramOptions {
    responsive: boolean = true;
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: boolean = true;
    //String - Colour of the grid lines
    scaleGridLineColor: string = "rgba(0,0,0,.05)";
    //Number - Width of the grid lines
    scaleGridLineWidth: number = 1;
    //Boolean - Whether the line is curved between points
    bezierCurve: boolean = true;
    //Number - Tension of the bezier curve between points
    bezierCurveTension: number = 0.4;
    //Boolean - Whether to show a dot for each point
    pointDot: boolean = true;
    //Number - Radius of each point dot in pixels
    pointDotRadius: number = 4;
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: number = 1;
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: number = 20;
    //Boolean - Whether to show a stroke for datasets
    datasetStroke: boolean = true;
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: number = 2;
    //Boolean - Whether to fill the dataset with a colour
    datasetFill: boolean = true;
    //String - A legend template
    legendTemplate: string = '<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>';

    // Function - on animation progress
    onAnimationProgress() {

    }
    // Function - on animation complete
    onAnimationComplete() {

    }
}