@extends('welcome')





@section('content')


<script type="text/javascript" src="{{ asset("js/jq/scripts/jquery-1.11.1.min.js") }}" ></script>
<script type="text/javascript" src="{{ asset("js/jq/jqueryui/jquery-ui.js") }}" ></script>
<script type="text/javascript" src="{{ asset("js/jq/jqwidgets/jqxcore.js") }}" ></script>
<script type="text/javascript" src="{{ asset("js/jq/jqwidgets/jqxbuttons.js") }}" ></script>

<h1>Liste des Vehicules</h1>


<table class="table table-bordered table-hover">
	<thead>
		<tr>
			<th>Vehicule ID</th>
			<th> SMIdentification</th>
			<th> Customer</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>{{ $vehicule->SMID }}</td>
			<td>{{ $vehicule->SMIdentification }}</td>
			<td>{{ $vehicule->customer->CompanyName }}</td>
		</tr>
	</tbody>
</table>
<center><input type="Button" id="but" value="yasser"></center>

<script type="text/javascript">
$(document).ready(function($) {
		$("#but").jqxButton({ width: 120, height: 40,theme:"dark" });
		$("#but").click(function(event) {
			console.log("Yassiiiir");
		});

});

</script>

@stop