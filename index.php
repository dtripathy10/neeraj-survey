<!DOCTYPE html>
<html>

    <head>
        <title>Survey</title>
        <!-- External CSS Dependecy -->
        <link rel="stylesheet" type="text/css" href="assets/lib/css/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/lib/js/angular-chart.js/angular-chart.css">

        <!-- customized CSS -->
        <link rel="stylesheet" type="text/css" href="assets/css/style.css">

        <!-- External JS Dependecy -->
        <script src="assets/lib/js/Chart.min.js"></script>
        <script src="assets/lib/js/angular.min.js"></script>
        <script src="assets/lib/js/angular-resource.min.js"></script>
        <script src="assets/lib/js/angular-route.min.js"></script>
        <script src="assets/lib/js/angular-chart.js/angular-chart.min.js"></script>
        <!-- customized JS -->
        <script src="assets/src/index.js"></script>
    </head>

    <body>
        <div class="site-wrapper">
            <div class="site-wrapper-inner">

                <div class="survey-container container" ng-app="myApp">
                    <div class="navbar survey-menu" ng-controller="MenuCntrl">
                        <ul class="nav nav-tabs">
                            <li role="presentation" ng-class="{active: $route.current.activetab === 'task_1'}"><a href="/#/task_1">Task 1</a></li>                    
                            <li role="presentation" ng-class="{active: $route.current.activetab === 'task_2'}"><a href="/#//task_2/intro">Task 2</a></li>                    
                            <li role="presentation" ng-class="{active: $route.current.activetab === 'task_3'}"><a href="/#/task_3">Task 3</a></li>                    
                            <li role="presentation" class="pull-right" ng-class="{active: $route.current.activetab === 'about'}"><a href="/#/about">About</a></li>
                            <div class="clearfix"></div>
                        </ul>
                    </div>
                    <div class="survey-body" ng-view >

                    </div>
                </div>

            </div>
        </div>
        <!-- Bootstrap core JavaScript
           ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="assets/lib/js/jquery.min.js"></script>
        <script src="assets/lib/css/bootstrap/js/bootstrap.min.js"></script>
    </body>

</html>
