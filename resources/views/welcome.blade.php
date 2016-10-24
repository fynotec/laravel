<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        
        <link rel="stylesheet" type="text/css" href="{{ asset("css/bootstrap.min.css")}}">
         <script type="text/javascript" src="{{ asset("js/jq/scripts/jquery-1.11.1.min.js") }}" ></script>

    </head>
    <body>

    <!-- Latest compiled and minified CSS & JS -->
   <nav class="navbar navbar-inverse" role="navigation">
       <div class="container-fluid">
           <!-- Brand and toggle get grouped for better mobile display -->
           <div class="navbar-header">
               <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                   <span class="sr-only">Toggle navigation</span>
                   <span class="icon-bar"></span>
                   <span class="icon-bar"></span>
                   <span class="icon-bar"></span>
               </button>
               <a class="navbar-brand" href="#">Title</a>
           </div>
   
           <!-- Collect the nav links, forms, and other content for toggling -->
           <div class="collapse navbar-collapse navbar-ex1-collapse">
               <ul class="nav navbar-nav">
                   <li class="active"><a href="#">Link</a></li>
                   <li><a href="#">Link</a></li>
               </ul>
               <form class="navbar-form navbar-left" role="search">
                   <div class="form-group">
                       <input type="text" class="form-control" placeholder="Search">
                   </div>
                   <button type="submit" class="btn btn-default">Submit</button>
               </form>
               <ul class="nav navbar-nav navbar-right">
                   <li><a href="#">Link</a></li>
                   <li class="dropdown">
                       <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                       <ul class="dropdown-menu">
                           <li><a href="#">Action</a></li>
                           <li><a href="#">Another action</a></li>
                           <li><a href="#">Something else here</a></li>
                           <li><a href="#">Separated link</a></li>
                       </ul>
                   </li>
               </ul>
           </div><!-- /.navbar-collapse -->
       </div>
   </nav>
   
        <div class="container">
            <div class="content">
                @yield('content')
            </div>
        </div>


         <script src="//code.jquery.com/jquery.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    </body>
</html>
