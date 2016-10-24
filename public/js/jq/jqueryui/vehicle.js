$(document).ready(function()
{






	//$("#det").hide();
	//$("#details").hide();
		var currentVehicle  ="";
		var staffData = function ()
		{
				var mysource = new Array();				
				mysource[0] = {
					html: "<table border='0'>" +
													"<tr>" +
														"<td style='width: 1px;'><img height='60' src='img/nobody.png'/></td>" +
														"<td>Aucun</td>" +
													"</tr>" +
									"</table>",
					title: '',
					value: '0',
					label: 'Aucun'
				};
				
				for (i = 0; i < staffdata.length ; i++) {
					var myhtml =	"<table border='0'>" +
													"<tr>" +
														"<td style='width: 1px;'><img height='60' src='img/anonym.png'/></td>" +
														"<td>" + staffdata[i]['PersonFirstName'] + ' ' + staffdata[i]['PersonName'] + " </td>" +
													"</tr>" +
												"</table>";
									
					var title = staffdata[i]['PersonFirstName'] + ' ' + staffdata[i]['PersonName'];
			
					mysource[i+1] = {
			
							html: myhtml,
							title: title,
							value: staffdata[i]['PersonID'].toString(),
							label: staffdata[i]['PersonFirstName'] + ' ' + staffdata[i]['PersonName']
					};
				}
			
				return mysource;	
		};

		var getVehicles = function ( viewin, myfilter,id )
		{
			switch(viewin)
			{
				case 'edit':
				{
					$("#vehicledialog").jqxWindow({ position: 'center' });
					var mydata = "action=getVehicles&filter=" + myfilter;
					$.ajax(
					{
						type: "GET",
						dataType: "json",
						url: "vehicle.php",
						data: mydata,
						success: function(myResponse){
							ResetForm('#vehicleform');
							
							
							$("#SupportMediumID").val(myResponse[0]['SupportMediumID']);
	
							$("#SmCorpStructLabel").val(myResponse[0]['SmCorpStructLabel']);
							$("#SmCorpStruct").val(myResponse[0]['SmCorpStruct']);
							
							$("#SmClassLabel").val(myResponse[0]['SmClassLabel']);
							$("#SmClass").val(myResponse[0]['SmClass']);
	
							$("#SmMark").val(myResponse[0]['SmMark']);
							$("#SmModel").val(myResponse[0]['SmModel']);
	
							$("#SupportMediumIdentification").val(myResponse[0]['SupportMediumIdentification']);
							$("#ICode").val(myResponse[0]['ICode']);
							$("#CounterType").val(myResponse[0]['CounterType']);
							$("#FuelType").val(myResponse[0]['FuelType']);
							$("#RefuelQuantiyAlert").val(myResponse[0]['RefuelQuantiyAlert']);
							$("#DriverID").val(myResponse[0]['DriverID'] != null ? myResponse[0]['DriverID'] : 0);
							/*$("#TrailerID").val(myResponse[0]['TrailerID'] != null ? myResponse[0]['TrailerID'] : 0);*/
	
							$("#AxlesCount").val(myResponse[0]['AxlesCount'] != null ? myResponse[0]['AxlesCount'] : null);
							$("#TirePerAxle").val(myResponse[0]['TirePerAxle']);
							/*
							$("#ParkingAreaLabel").val(myResponse[0]['SupportMediumID']);
							$("#WorkingAreaLabel").val(myResponse[0]['SupportMediumID']);
							*/
	
							$("#dropDownButton").jqxDropDownButton('setContent', getTextElementByColor(new $.jqx.color({ hex: myResponse[0]['LineColor'] })));
							$("#LineColor").val(myResponse[0]['LineColor']);
							$("#VehicleIcon").val(myResponse[0]['VehicleIcon']);
	/*
							$("#Insurance").val(myResponse[0]['Insurance'] != null ? new Date(myResponse[0]['Insurance']) : null);
							$("#MInsurance").val(myResponse[0]['MInsurance'] != null ? new Date(myResponse[0]['MInsurance']) : null);
							$("#TechnicalVisit").val(myResponse[0]['TechnicalVisit'] != null ? new Date(myResponse[0]['TechnicalVisit']) : null);
							$("#TaquigraphControl").val(myResponse[0]['TaquigraphControl'] != null ? new Date(myResponse[0]['TaquigraphControl']) : null);
							$("#DriveAuthorization").val(myResponse[0]['DriveAuthorization'] != null ? new Date(myResponse[0]['DriveAuthorization']) : null);
							$("#extinguisher").val(myResponse[0]['extinguisher'] != null ? new Date(myResponse[0]['extinguisher']) : null);
							*/
							$("#WarrantyEnd").val(myResponse[0]['WarrantyEnd'] != null ? new Date(myResponse[0]['WarrantyEnd']) : null);

							$("#VehicleComment").val(myResponse[0]['VehicleComment']);
	
	
							$("#vehicledialog").jqxWindow('open');
							
							/*
							$.each(myResponse[0], function(k, v) {
								alert(k + ' is ' + v);
								$("#" + k).val(v);
							});
							*/
	
						}

					});



					var mydata = "action=getMDate&sm=" + id+"&type=0";
					$.ajax(
						{
							type: "GET",
							dataType: "json",
							url: "vehicle.php",
							data: mydata,
							success: function(myResponse){
								 $("#Insurance").val(myResponse['DateValue'] );
							}

						});
					var mydata = "action=getMDate&sm=" + id+"&type=1";
					$.ajax(
						{
							type: "GET",
							dataType: "json",
							url: "vehicle.php",
							data: mydata,
							success: function(myResponse){
								 $("#TechnicalVisit").val(myResponse['DateValue'] );
							}

						});
					var mydata = "action=getMDate&sm=" + id+"&type=2";
					$.ajax(
						{
							type: "GET",
							dataType: "json",
							url: "vehicle.php",
							data: mydata,
							success: function(myResponse){
								 $("#DriveAuthorization").val(myResponse['DateValue']);
							}

						});
					var mydata = "action=getMDate&sm=" + id+"&type=3";
					$.ajax(
						{
							type: "GET",
							dataType: "json",
							url: "vehicle.php",
							data: mydata,
							success: function(myResponse){
								 $("#extinguisher").val(myResponse['DateValue']);
							}
						});
					var mydata = "action=getMDate&sm=" + id+"&type=4";
					$.ajax(
						{
							type: "GET",
							dataType: "json",
							url: "vehicle.php",
							data: mydata,
							success: function(myResponse){
								 $("#MInsurance").val(myResponse['DateValue']);
							}

						});
					var mydata = "action=getMDate&sm=" + id+"&type=5";
					$.ajax(
						{
							type: "GET",
							dataType: "json",
							url: "vehicle.php",
							data: mydata,
							success: function(myResponse){
								 $("#TaquigraphControl").val(myResponse['DateValue'] );
							}

						});
				}
				break;
				case 'grid':
				{
	
		     	var myurl = 'vehicle.php?action=getVehicles&filter=' + myfilter;
					var vehiclesource =
					{
		          datatype: "json",
		          type: "GET",
		          datafields: [
		              { name: 'SupportMediumID', type: 'int'},
		              { name: 'ICode', type: 'string'},
		              { name: 'CounterType', type: 'string'},
		              { name: 'FuelType', type: 'int'},
		              { name: 'RefuelQuantiyAlert', type: 'int'},
		              { name: 'SupportMediumIdentification', type: 'string'},
									{ name: 'SMMarkLabel', type: 'string'},
									{ name: 'SMModelLabel', type: 'string'},
									{ name: 'SmMark', type: 'int'},
									{ name: 'SmModel', type: 'int'},
									{ name: 'SmClass', type: 'int'},
									{ name: 'SmClassLabel', type: 'string'},
									{ name: 'SmCorpStruct', type: 'int'},
									{ name: 'SmCorpStructLabel', type: 'string'},
									{ name: 'ServiceStartDate', type: 'string'},
		
									{ name: 'GpsOnBoard', type: 'string'},
		
									{ name: 'SmReformed', type: 'string'},
									
									{ name: 'LineColor', type: 'string'},
									{ name: 'VehicleIcon', type: 'string'},
									{ name: 'DriverID', type: 'int'},
									{ name: 'DefaultDriver', type: 'string'},
									
									{ name: 'Insurance', type: 'date'},
									{ name: 'MInsurance', type: 'date'},
									{ name: 'TechnicalVisit', type: 'date'},
									{ name: 'DriveAuthorization', type: 'date'},
									{ name: 'TaquigraphControl', type: 'date'},
									{ name: 'Extinguisher', type: 'date'},
									{ name: 'WarrantyEnd', type: 'date'},
									
		              { name: 'AxlesCount', type: 'int'},
									{ name: 'TirePerAxle', type: 'string'},
									
									/*{ name: 'CurrentTrailer', type: 'string'},*/
									/*{ name: 'TrailerID', type: 'int'},*/
									{ name: 'ParkingAreaLabel', type: 'int'},
									{ name: 'WorkingAreaLabel', type: 'int'},
																
									{ name: 'VehicleComment', type: 'string'}
		  
		         ],
		          id: 'SupportMediumID',
		          updateRow: function (rowID, rowData, commit) {
		            commit(true);
		    			},
		          url: myurl
					};
					var vehicledataAdapter = new $.jqx.dataAdapter(vehiclesource);				
	
					$("#vehicleTable").jqxDataTable({
							/*width: '95%',*/
		          sortable: true,
		          theme: "arctic",
		          source: vehicledataAdapter,
		          pageable: true,
		          pageSize: 5,
		          pagerMode: "advanced",
		          pagerButtonsCount: 10,
		        	columnsResize: true,
							filterable: true,
							altRows: true,
		          rendered: function ()
		          {
								$(".viewBtn").on('mousedown', function (e)
								{
										var parentTr = $($(e.target).parents('tr').first());
										var iofId = parseInt(parentTr.attr('data-key'));
										var url = 'vehicle.php?action=viewVehicle&filter=SupportMediumID;EG;' + iofId;
										window.open(url, 'xxxx','width=800,height=800,scrollbars=yes,resizable=yes,status=yes');
										return false;
								});
								
								$(".editBtn").on('mousedown', function (e)
								{
										var parentTr = $($(e.target).parents('tr').first());
										var vehicleIndex = parseInt(e.target.getAttribute('row'));
										var vehicleId = parseInt(parentTr.attr('data-key'));
									//alert(vehicleIndex);
										if(isNaN(vehicleIndex))
										{ return; }

										//$("#vehicledialog").jqxWindow('open');
										//$("#vehicleTable").jqxDataTable({ disabled: true });
										$("#vehicledialog").attr('data-row', vehicleIndex);

										getVehicles( 'edit', 'SupportMediumID;EG;' + vehicleId, vehicleId);
										return false;
								});
								
								$('.delBtn').on('mousedown', function()
								{
										/*
										if( confirm("Confirmer la Suppression ?"))
										{
											$("#vehicleTable").jqxDataTable('deleteRow', parseInt($(this).attr('row')));
											$("#vehicleTable").jqxDataTable('refresh');
											$("#vehicleTable").jqxDataTable('clearSelection');
										}
										*/
										return false;
								});
							},
		          
		          filterable: true,
		          columns: [
		            { text: 'CODE', datafield: 'ICode', width: 70 },
		            { text: 'IMM', datafield: 'SupportMediumIdentification', width: 110 },
		            { text: 'ENTITÈ', datafield: 'SmCorpStructLabel', width: 220 },
		            { text: 'DÉSIGNATION', datafield: 'SmClassLabel', width: 230 },
		            { text: 'MARQUE', datafield: 'SMMarkLabel', width: 100 },
		            { text: 'MODÈLE', datafield: 'SMModelLabel', width: 120 },
		            { text: 'MISE EN CIRCULATION', datafield: 'ServiceStartDate', width: 120 },
		            { text: 'GPS', datafield: 'GpsOnBoard', width: 55 },
		            { text: 'RÉFORMÉ', datafield: 'SmReformed', width: 100 },
	
								{
									text: 'Edit', width: 150, cellsAlign: 'center', align: "center", columnType: 'none', editable: false, sortable: false, dataField: null, 
									cellsRenderer: function (row, column, value)
									{
										var htm = '<button row="' + row + '" class="tabliconBtn editBtn"></button>'
										//'<button row="' + row + '" class="tabliconBtn viewBtn"></button>'
														+ '<button row="' + row + '" class="tabliconBtn delBtn" ></button>';
										return htm;
									}
								}
								
		          ]
					});	
			
					
				}
				break;
			}
    };	

		var setGlobalView = function()
		{
		  // Main Tabs
				//$('#vehicleTabs').jqxTabs({ theme: "shinyblack",width: '100%', height: '100%', position: 'top'});
				$('#detailsTabs').jqxTabs({ theme: "fresh",width: '100%', height: '100%', position: 'top'});
		
			// Horizontal Splitter
		    $('#contentSplitter').jqxSplitter(
		    	{ theme: "fresh", width: '100%', height: '100%',  orientation: 'horizontal', 
		    		panels: [{ size: '60%', min: 100, collapsible: false }, { min: 100, collapsible: true}] 
		    	});
		    	
				$("#vehicleNewBtn").jqxButton({ width:'auto', theme:'orange'});
		    	
		
			// Detail Buttons
				//$("#DtBtn").jqxButton({ width:'auto', height:'32', theme:'orange'});
				
				$("#SpBtn").jqxButton({ width:'auto', height:'32', theme:'orange'});
				$('#SpBtn').on('click', function () {
					if(currentVehicle==""){
						alert("Sélectionnez un véhicule ou engin")
					}else{
					getESpecification(currentVehicle);

					}
				});
				$('#DyBtn').on('click', function () {
					if(currentVehicle==""){
						alert("Sélectionnez un véhicule ou engin")
					}else{

					getEtat(currentVehicle);
					}
				});

				$('#CoBtn').on('click', function () {
					if(currentVehicle==""){
						alert("Sélectionnez un véhicule ou engin")
					}else{

					getRefuelLines(currentVehicle);
					}
				});


				$('#DoBtn').on('click', function () {
					if(currentVehicle==""){
						alert("Sélectionnez un véhicule ou engin")
					}else{
					getDocs(currentVehicle);

					}
				});
				$('#ItBtn').on('click', function () {
					if(currentVehicle==""){
						alert("Sélectionnez un véhicule ou engin")
					}else{
					getTask(currentVehicle);

					}
				});
				$('#MpBtn').on('click', function () {
					if(currentVehicle==""){
						alert("Sélectionnez un véhicule ou engin")
					}else{
						getPlan(currentVehicle);

					}
				});

				$('#OcBtn').on('click', function () {
					if(currentVehicle==""){
						alert("Sélectionnez un véhicule ou engin")
					}else{
						getUtil(currentVehicle);

					}
				});
				$('#AlBtn').on('click', function () {
					if(currentVehicle==""){
						alert("Sélectionnez un véhicule ou engin")
					}else{
						getDate(currentVehicle);
						getTask1(currentVehicle);
						//getGeo(currentVehicle);
						$("#alertid").show();
					}
				});






				$("#DyBtn").jqxButton({ width:'auto', height:'32', theme:'orange'});
				$("#CoBtn").jqxButton({ width:'auto', height:'32', theme:'orange'});
				$("#ItBtn").jqxButton({ width:'auto', height:'32', theme:'orange'});
				$("#AlBtn").jqxButton({ width:'auto', height:'32', theme:'orange'});
				$("#OcBtn").jqxButton({ width:'auto', height:'32', theme:'orange'});
				$("#DoBtn").jqxButton({ width:'auto', height:'32', theme:'orange'});
				$("#MpBtn").jqxButton({ width:'auto', height:'32', theme:'orange'});
				
				// Set Color Picker
				$("#colorPicker").jqxColorPicker({ color: "ffaabb", colorMode: 'hue', width: 220, height: 280});

		};

		var setVehicleForm = function () {
				// Appartenance
				$("#SmCorpStructLabel").jqxInput({width: '100%', height: 22});
				$("#SmCorpStruct").jqxInput();

				$("#dialogCorpStructTree").jqxWindow({
					width: 380, height: 436, resizable: false,  isModal: true, autoOpen: false, modalOpacity: 0.4,
					title: "Veuillez choisir un departement"
				});

				$('#SmCorpStructLabel').dblclick('rowselect', function (e) {
					$("#dialogCorpStructTree").jqxWindow({ position:'center' });
					$("#dialogCorpStructTree").jqxWindow('open');
				}); 

				var url = 'items.php?action=getCorpStruct';
				var corpstructsource =
        	{
                    datatype: "json",
                    datafields: [
                        { name: 'id' },
                        { name: 'label' },
                        { name: 'parentid' }
                    ],
                    id: 'id',
                    url: url,
                    async: true
					};				
				var corpstructdataAdapter = new $.jqx.dataAdapter(corpstructsource, {
					loadComplete: function () {
						var records = corpstructdataAdapter.getRecordsHierarchy('id', 'parentid');
						$('#CorpStructTree').jqxTree({ source: records, width: '364px', height: '350'});
        	}
					
				});
				corpstructdataAdapter.dataBind();
				
				$("#corpStructOkBtn").jqxButton({ width:'auto', height:'32', theme:'orange'});
				$('#corpStructOkBtn').on('click', function () { 
					var item = $('#CorpStructTree').jqxTree('getSelectedItem');
					$("#SmCorpStructLabel").val(item.label);
					$("#SmCorpStruct").val(item.id);
					$("#dialogCorpStructTree").jqxWindow('close');				
				}); 

				// Designation
				$("#SmClassLabel").jqxInput({width: '100%', height: 22});
				$("#SmClass").jqxInput();
				$("#dialogClassTree").jqxWindow({
					width: 380, height: 436, resizable: false,  isModal: true, autoOpen: false,	modalOpacity: 0.4,
					title: "Veuillez choisir une désignation" 
				});

				$('#SmClassLabel').dblclick('rowselect', function (e) {
				$("#dialogClassTree").jqxWindow( {position:'center'} );
					$("#dialogClassTree").jqxWindow('open');
				}); 

				var url = 'items.php?action=getScClasses';
				var classsource =
        	{
                    datatype: "json",
                    datafields: [
                        { name: 'id' },
                        { name: 'label' },
                        { name: 'parentid' }
                    ],
                    id: 'id',
                    url: url,
                    async: true
					};				
				var classdataAdapter = new $.jqx.dataAdapter(classsource, {
					loadComplete: function () {
						var records = classdataAdapter.getRecordsHierarchy('id', 'parentid');
						$('#classTree').jqxTree({ source: records, width: '364px', height: '350'});
        	}
					
				});

				classdataAdapter.dataBind();

				$("#classOkBtn").jqxButton({ width:'auto', height:'32', theme:'orange'});
				$('#classOkBtn').on('click', function () { 
					var item = $('#classTree').jqxTree('getSelectedItem');
					$("#SmClassLabel").val(item.label);
					$("#SmClass").val(item.id);
					$("#dialogClassTree").jqxWindow('close');				
				});
				
				//Marque
				var url = 'vehicle.php?action=getMarks';
				var marksource =
        	{
                    datatype: "json",
                    datafields: [
                        { name: 'SMMarkID' },
                        { name: 'SMMarkLabel' }
                    ],
                    url: url,
                    async: true
					};				
				var markAdapter = new $.jqx.dataAdapter(marksource);
				$("#SmMark").jqxComboBox({ source: markAdapter, promptText: "Selectionnez une marque...", displayMember: "SMMarkLabel", valueMember: "SMMarkID", width: '100%', height: '22px'});
				
				$("#CounterType").jqxComboBox({ source: new Array({id: 'Km', value: 'Km'},{id: 'H', value: 'H'}), width: '30%', height: '22px'});
				$("#FuelType").jqxComboBox({ source: new Array({label: 'Gasoil', value: 0},{label: 'Essence', value: '1'}), width: '30%', height: '22px'});
				$("#RefuelQuantiyAlert").jqxNumberInput({ width: '90px', height: '22px', inputMode: 'simple', digits: 3, decimalDigits: 0, spinButtons: false });
				
				//Model
				var url = 'vehicle.php?action=getModels';
				var modelsource =
      	{
          datatype: "json",
          datafields:
            [
                { name: 'SMModelID' },
                { name: 'SMModelLabel' },
                { name: 'SMMark' }
            ],
          url: url,
          async: true
				};
				var modelAdapter = new $.jqx.dataAdapter(modelsource);
				$("#SmModel").jqxComboBox
				({
					source: modelAdapter, disabled: true, promptText: "Selectionnez un model...",
					displayMember: "SMModelLabel", valueMember: "SMModelID", width: '100%', height: '22px'
				});
				
				$("#SmMark").on('select', function(e)
				{ 
					if (e.args)
					{
						$("#SmModel").jqxComboBox({ disabled: false, selectedIndex: -1});		
						var value = e.args.item.value;
						modelsource.data = {SMMark: value};
						modelAdapter = new $.jqx.dataAdapter
						(modelsource,
						{
						    beforeLoadComplete: function (records)
						    {
						        var filteredRecords = new Array();
						        for (var i = 0; i < records.length; i++)
						        {
											filteredRecords.push(records[i]);
						        }
						        return filteredRecords;
						    }
						});
						$("#SmModel").jqxComboBox({ source: modelAdapter, autoDropDownHeight: modelAdapter.records.length > 10 ? false : true});
					}
				}); 


				$("#SupportMediumIdentification").jqxInput({width: '100%', height: 22 });								
				$("#ICode").jqxInput({width: '48%', height: 22 });




				// +++ set default Driver ComboBox +++
					//var myurl = 'staff.php?action=getStaff&filter=' + myfilter;
					var staffurl = 'staff.php?action=getStaff'		
					var staffsource =	{
		          datatype: "json",
		          type: "GET",
		          datafields:
		          [
		              { name: 'PersonID', type: 'int'},
		              { name: 'PersonName', type: 'string'},
		              { name: 'PersonFirstName', type: 'string'},
									//	{ name: 'PersonIdentification', type: 'string'},
									{ name: 'PhoneNumber', type: 'string'},
									{ name: 'Email', type: 'string'},
									{ name: 'Cin', type: 'string'},
									{ name: 'StaffComment', type: 'string'},
									{ name: 'JobFunctionDesc', type: 'string'},
									{ name: 'PersonalImage', type: 'string'},
									{ name: 'HomePhoneNumber', type: 'string'},
									{ name: 'GsmNumber', type: 'string'}
		         ],
		          id: 'PersonID',
		          updateRow: function (rowID, rowData, commit) {
		            commit(true);
		    			},
		          url: staffurl
					};
					
					staffdata = new Array();
		
		      //MN
		      //alert('zuerst');
		      var staffdataAdapter = new $.jqx.dataAdapter(staffsource, {
						async: false,
		        loadComplete: function ()
		        {
		        	var row={};
							var records = staffdataAdapter.records;
							var length = records.length;
							for (var i = 0; i < length; i++) {        	
								var record = records[i];
								staffdata[i] = record;
							}
		        }
		      });
		      staffdataAdapter.dataBind();

					//var mystaffsource = staff.getstaff('', 'option');
					var mystaffsource = staffData();		

				$("#DriverID").jqxComboBox({ source: mystaffsource, promptText: "Conducteur par défaut...", selectedIndex: -1, width: '100%', height: '25px'});
				$("#DriverID").find('input').attr('readonly', 'readonly');
				$("#DriverID").on('change', function (e) {
					if($("#DriverID").val()==0) {
						$("#DriverID").jqxComboBox('selectIndex', -1 );
					}
				});
				
				// +++ set Trailer ComboBox +++
				//var mytrailersource = trailer.gettrailers('', 'option');
				
				/*
				var mytrailersource = getTrailers('option', '');
				
				$("#TrailerID").jqxComboBox({ source: mytrailersource, promptText: "Remorque par défaut...", selectedIndex: -1, width: '180px', height: '25px'});
				$("#TrailerID").find('input').attr('readonly', 'readonly');
				$("#TrailerID").on('change', function (e) {
					if($("#TrailerID").val()==0) {
						$("#TrailerID").jqxComboBox('selectIndex', -1 );
					}
				});
				*/
				/*
				$("#addTrailer").jqxButton({ theme: "fresh"});
				$("#addTrailer").mousedown(function () {
            $("#trailerdialog").jqxWindow('open');
        });

				// +++ init Trailer Dialog Form +++
				$("#trailerdialog").jqxWindow({width: 650, height: 150, resizable: false,  isModal: true, autoOpen: false, modalOpacity: 0.4});        
				trailer.settrailerform();
				*/
				
				
				// +++ set Essieux Combobox +++
				var axlescount = new Array();    
				for (i = 0; i < 3; i++) {
					switch (i) {
						case 0:
							myicone = '0axe.png';
							count = '0';
							break;
						case 1:
							myicone = '2axe.png';
							count = '2';
							break;
						case 2:
							myicone = '3axe.png';
							count = '3';
							break;
					}


              
					var myhtml =	"<div style='padding: 0px; margin: 0px; height: 80px;'>" +
													"<img width='120' style='margin-top: 2px; margin-right: 15px;' src='./img/icons/" + myicone + "'/>" +
													"<div style='margin-top: 10px; font-size: 13px;'>" +
                						"<b>" + count + " Essieux</b>" +
                					"</div>" +
												"</div>";
					axlescount[i] = { html: myhtml, title: count };                
				}
				$("#AxlesCount").jqxComboBox({ source: axlescount, promptText: "Nombre des essieux...", selectedIndex: -1, width: '100%', height: '25px'});                                       
				$("#AxlesCount").find('input').attr('readonly', 'readonly');

				$("#AxlesCount").on('change', function (e) {
					$('#TirePerAxle').jqxInput('val', '');	
					if($("#AxlesCount").val()==0) {
						$("#AxlesCount").jqxComboBox('selectIndex', -1 );
					}
				});


				$("#TirePerAxle").jqxInput({width: '100%', height: 22 });

				$("#TirePerAxle").on('dblclick', function (e) {
					if ($("#AxlesCount").val()==2) {
						$("#popupWindowPneus2").jqxWindow('open');
					}else if($("#AxlesCount").val()==3){
						$("#popupWindowPneus3").jqxWindow('open');
					}
				});

				$("#popupWindowPneus2").jqxWindow({width: 400, height: 240, resizable: false,  isModal: true, autoOpen: false, modalOpacity: 0.4});        
				$("#axe21").jqxFormattedInput({ width: 35, height: 25, radix: "decimal", value: "2", min: "2", max: "2", spinButtons: true, spinButtonsStep: 2});
				$("#axe21").find('input').attr('readonly', 'readonly');
				$("#axe22").jqxFormattedInput({ width: 35, height: 25, radix: "decimal", value: "2", min: "2", max: "4", spinButtons: true, spinButtonsStep: 2});
				$("#axe22").find('input').attr('readonly', 'readonly');
				
				$("#Baxe2").jqxButton({ theme: 'fresh' });
				$('#Baxe2').click('select', function (e) {
					$("#TirePerAxle").val($("#axe21").val() + "|" + $("#axe22").val());
					$("#popupWindowPneus2").jqxWindow('hide');
				});	

				$("#popupWindowPneus3").jqxWindow({width: 350, height: 240, resizable: false,  isModal: true, autoOpen: false, modalOpacity: 0.4});   
				$("#axe31").jqxFormattedInput({ width: 35, height: 25, radix: "decimal", value: "2", min: "2", max: "2", spinButtons: true, spinButtonsStep: 2 });            
				$("#axe31").find('input').attr('readonly', 'readonly');
				$("#axe32").jqxFormattedInput({ width: 35, height: 25, radix: "decimal", value: "2", min: "2", max: "4", spinButtons: true, spinButtonsStep: 2 });            
				$("#axe32").find('input').attr('readonly', 'readonly');
				$("#axe33").jqxFormattedInput({ width: 35, height: 25, radix: "decimal", value: "2", min: "2", max: "4", spinButtons: true, spinButtonsStep: 2 });            
				$("#axe33").find('input').attr('readonly', 'readonly');


				$("#Baxe3").jqxButton({ theme: 'fresh' });
				$('#Baxe3').click('select', function (e) {
					$("#TirePerAxle").val($("#axe31").val() + "|" + $("#axe23").val() + "|" + $("#axe33").val());
					$("#popupWindowPneus3").jqxWindow('hide');
				});
	 

				//$("#ParkingAreaLabel").jqxInput({width: '100%', height: 22 });



			var sourceAreaPark =
			{
				datatype: "json",
				datafields: [
					{ name: 'DeliveryAreaID' },
					{ name: 'DeliveryAreaName' }
				],
				url: "vehicle.php?action=getArea"
			};
			var dataAdapterAreaPark = new $.jqx.dataAdapter(sourceAreaPark);
			$("#ParkingAreaLabel").jqxComboBox(
				{
					source: dataAdapterAreaPark,
					theme: 'classic',
					width: 260,
					height: 25,
					selectedIndex: -1,
					displayMember: 'DeliveryAreaName',
					valueMember: 'DeliveryAreaID'
				});


			$("#WorkingAreaLabel").jqxComboBox(
				{
					source: dataAdapterAreaPark,
					theme: 'classic',
					width: 260,
					height: 25,
					selectedIndex: -1,
					displayMember: 'DeliveryAreaName',
					valueMember: 'DeliveryAreaID'
				});

				$("#WorkingAreaLabel").jqxInput({width: '100%', height: 22 });

				$("#LineColor").jqxInput({value: "ffaabb"});
				$("#colorPicker").on('colorchange', function (e) {
					//alert('ha1');
					//alert(e.args.color);
					$("#dropDownButton").jqxDropDownButton('setContent', getTextElementByColor(e.args.color));
					$("#LineColor").val(e.args.color);
				});
				$("#dropDownButton").jqxDropDownButton({ width: 150, height: 35});
				$("#dropDownButton").jqxDropDownButton('setContent', getTextElementByColor(new $.jqx.color({ hex: "ffaabb" })));

				$("#Insurance").jqxDateTimeInput({culture: 'fr-FR', formatString: "dd/MM/yyyy", showCalendarButton: true, width: '120px', height: '25px' });
				$("#MInsurance").jqxDateTimeInput({culture: 'fr-FR', formatString: "dd/MM/yyyy", showCalendarButton: true, width: '120px', height: '25px' });
				$("#TechnicalVisit").jqxDateTimeInput({culture: 'fr-FR', formatString: "dd/MM/yyyy", showCalendarButton: true, width: '120px', height: '25px' });
				$("#TaquigraphControl").jqxDateTimeInput({culture: 'fr-FR', formatString: "dd/MM/yyyy", showCalendarButton: true, width: '120px', height: '25px' });
				$("#DriveAuthorization").jqxDateTimeInput({culture: 'fr-FR', formatString: "dd/MM/yyyy", showCalendarButton: true, width: '120px', height: '25px' });
				$("#WarrantyEnd").jqxDateTimeInput({culture: 'fr-FR', formatString: "dd/MM/yyyy", showCalendarButton: true, width: '120px', height: '25px' });
				$("#extinguisher").jqxDateTimeInput({culture: 'fr-FR', formatString: "dd/MM/yyyy", showCalendarButton: true, width: '120px', height: '25px'});				
				
				//$('#VehicleComment').jqxTextArea({ placeHolder: 'Entrer un commentaire', height: 90, width: 300, minLength: 1});
				

				var tempicons = [	'camion-auscultation','camion-ridelle','camion_benne','camion_citerne','camion_depannage','camion_entretien',
													'camion_etrave','camion_point_a_temps','camion_porte_engin','camionnette','car','chargeuse_sur_chenille',
													'chargeuse_sur_pneus','compacteur','compacteur_manuel','fraise','nivleuse','nivleuse_etrave','pelle_hydraulique','tractopelle'];
				var onmapicons = new Array();    
				for (i = 0; i < tempicons.length ; i++) {
					var myicone = tempicons[i] + '_y' +'.gif';
					//var title = 'car'+ i.toString();
					var value =tempicons[i];
					var html = "<div style='padding: 0px; margin: 0px; height: 40px; float: left;'>" +
												"<img width='46' height='36' style='float: left; margin-top: 4px; margin-right: 15px;' src='./img/vehicle_icons/" + myicone + "'/>" + value +
											"</div>";
					onmapicons[i] = { html: html, value: value, title: html};                
				}
				$("#VehicleIcon").jqxDropDownList({ source: onmapicons, selectedIndex: 0, width: '210', height: '40px'});                                       
				$("#VehicleIcon").find('input').attr('readonly', 'readonly');


				//$("#savevehicle").jqxButton({ theme: "fresh", height: 30, width: 80 });
					$("#savevehicle").jqxButton({ width:'auto', theme:'orange'});
				/*
				$("#cancelvehicle").jqxButton({ theme: "fresh", height: 30, width: 80 });
				*/
        

        
        /*
        $("#cancelvehicle").mousedown(function () {
            $("#vehicledialog").jqxWindow('close');
        });
        */
        
        $("#savevehicle").mousedown(function () {
            
            
					//alert($("#vehicleform").serialize());
					//alert("Enregistrer est temporairement bloqué");

					var mydata = "action=saveVehicle&" + $("#vehicleform").serialize();
					
					//alert(mydata);
					
					$.ajax({
						type: "GET",
						dataType: "json",
						url: "vehicle.php",
						data: mydata,
						success: function(myResponse){
		
	
						}
					});



            
            
					// close jqxWindow.
					//$("#vehicledialog").jqxWindow('close');
           
					// update edited row.
					var editRow = parseInt($("#vehicledialog").attr('data-row'));

					// Database Update
						


					// Grid Update
            /*
            var rowData = {
                SupportMediumID: $("#SupportMediumID").val(),
                ICode: $("#ICode").val(),
                SupportMediumIdentification: $("#SupportMediumIdentification").val(),
                GroupName: $("#GroupName").val(),
                AxlesCount: $("#AxlesCount").val(),
                TirePerAxle: $("#TirePerAxle").val(),
                TrailerImm: $("#TrailerImm").val(),
                Mileage: $("#Mileage").val()
            };
            $("#vehicleTable").jqxDataTable('updateRow', editRow, rowData);
            */
        });


				var wdwheight = 760;
				$("#vehicledialog").jqxWindow({
						title: 'Fiche véhicule / Engin',
            theme: "fresh",
            resizable: false,
            height:wdwheight, 
            width: 750,
            maxHeight: 900,
            autoOpen: false,
						isModal: true,
						autoOpen: false,
						modalOpacity: 0.4
        });
				BHgh = 50;
				THgh = 100 - (100/wdwheight) * BHgh;
				$("#vehicledialog .TopDv"  ).css( "height", THgh + "%" );
				$("#vehicledialog .BttmDv" ).css( "height", BHgh + "px" );
       // $("#vehicledialog").css('visibility', 'visible');
       

        $("#vehicledialog").on('close', function () {
            // enable jqxDataTable.
            //$("#vehicleTable").jqxDataTable({ disabled: false });
        });

		};
		
    var addEventListeners = function ()
    {
				$('#vehicleTable').on('rowSelect', 
				function (e)
				{
						$('#SpBtn').css("display", "block");
						$('#specification').css("display", "none");
					$('#DyBtn').css("display", "block");
					$('#etat').css("display", "none");
					$('#CoBtn').css("display", "block");
					$('#table').css("display", "none");
					$('#DoBtn').css("display", "block");
					$('#docsTable').css("display", "none");
					$('#ItBtn').css("display", "block");
					$('#taskTable').css("display", "none");
					$('#MpBtn').css("display", "block");
					$('#planTable').css("display", "none");
					$('#OcBtn').css("display", "block");
					$('#utilTable').css("display", "none");
					//$("#datefield").hide();
					//$("#taskfield").hide();
					$("#alertid").hide();
					$('#AlBtn').css("display", "block");
						currentVehicle = args.key;
				});

        /*
        $("#vehicleTable").on('rowDoubleClick', function (e) {
					var args = e.args;
					alert(args.index);
					alert(args.key);
					alert(args.dataField);
				});
				*/

				$("#vehicleNewBtn").on('mousedown', function (e)
				{
							ResetForm('#vehicleform');
							$("#vehicledialog").attr('data-row', '0');

							/*
							$("#SupportMediumID").val('');
	
							$("#SmCorpStructLabel").val('');
							$("#SmCorpStruct").val('');
							
							$("#SmClassLabel").val('');
							$("#SmClass").val('');
	
							$("#SmMark").val('');
							$("#SmModel").val('');
	
							$("#SupportMediumIdentification").val('');
							$("#ICode").val('');
							$("#CounterType").val('');
							
							$("#DriverID").val(0);
							$("#TrailerID").val(0);
	
							$("#AxlesCount").val(null);
							$("#TirePerAxle").val('');
							*/
	
							/*
							$("#ParkingAreaLabel").val(myResponse[0]['SupportMediumID']);
							$("#WorkingAreaLabel").val(myResponse[0]['SupportMediumID']);
							*/
	
							$("#dropDownButton").jqxDropDownButton('setContent', getTextElementByColor(new $.jqx.color({ hex:"ffaabb" })));
							
							/*
							$("#LineColor").val('');
							$("#VehicleIcon").val('');
	
							$("#Insurance").val(null);
							$("#MInsurance").val(null);
							$("#TechnicalVisit").val(null);
							$("#TaquigraphControl").val(null);
							$("#DriveAuthorization").val(null);
							$("#WarrantyEnd").val(null);
							$("#extinguisher").val(null);						
	
							$("#VehicleComment").val('');
							*/
							$("#vehicledialog").jqxWindow({ position:'center' });
							$("#vehicledialog").jqxWindow('open');

						return false;
				});

    };

    function getTextElementByColor(color) {
        if (color == 'transparent' || color.hex == "") {
            return $("<div style='text-shadow: none; position: relative; padding-bottom: 15px; margin-top: 2px;'>transparent</div>");
        }
        //var element = $("<div style='text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;'>#" + color.hex + "</div>");
        var element = $("<div style='text-shadow: none; position: relative; padding-bottom: 15px; margin-top: 2px;'>&nbsp;</div>");
        var nThreshold = 105;
        var bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
        var foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
        element.css('color', foreColor);
        element.css('background', "#" + color.hex);
        element.addClass('jqx-rc-all');
        return element;
    };

		var getESpecification = function (v) {
			var mydata = "action=getESpecification&sm=" + v;
				$.ajax({
					type: "GET",
					dataType: "text",
					url: "vehicle.php",
					data: mydata,
					success: function(myResponse){
						$('#SpBtn').css("display", "none");
						$('#specification').css("display", "block");
						$('#specification').html(myResponse);
					}
				});
		};
	//Docs Table
		var getDocs = function (v) {
			var mydata = "action=getDocs&sm=" + v;


			$('#DoBtn').css("display", "none");
			$('#docsTable').css("display", "block");
			var myurl = "vehicle.php?action=getDocs&sm=" + v;
			var suppliersource =
			{
				datatype: "json",
				type: "GET",
				datafields:
					[
						{ name: 'DocSMID', type: 'int'},
						{ name: 'DocID', type: 'int'},
						{ name: 'SMID', type: 'int'},
						{ name: 'DocFilename', type: 'string'},
						{ name: 'InsertDate', type: 'string'},
						{ name: 'InsertBy', type: 'string'},
						{ name: 'SupportMediumIdentification', type: 'string'},
						//{ name: 'SMMarkLabel', type: 'string'},
						//{ name: 'SMModelLabel', type: 'string'}

					],
				id: 'DocSMID',
				updateRow: function (rowID, rowData, commit) {
					commit(true);
				},
				url: myurl
			};

			var supplierdataAdapter = new $.jqx.dataAdapter(suppliersource);

			$("#docsTable").jqxDataTable
			({

				sortable: true,
				theme: "arctic",
				source: supplierdataAdapter,
				pageable: true,
				pageSize: 25,
				pagerMode: "advanced",
				pagerButtonsCount: 10,
				columnsResize: true,
				filterable: true,
				altRows: true,
				filterable: true,
				columns: [
					//{ text: 'DocSMID', datafield: 'DocSMID', width: 66 },
					//{ text: 'DocID', datafield: 'DocID', width: 66 },
					//{ text: 'SMID.', datafield: 'SMID', width: 128 },
					//{ text: 'Nom de Fichier', datafield: 'DocFilename', width: 150 },
					{ text: 'IMM', datafield: 'SupportMediumIdentification',width: 128 },
					// { text: 'mark', datafield: 'SMMarkLabel', width: 100 },
					//{ text: 'model', datafield: 'SMModelLabel', width: 100 },
					{ text: 'Date Insertion', datafield: 'InsertDate', width: 170 },
					{ text: 'Inseré Par', datafield: 'InsertBy', width: 134 },
					{
						text: 'Telecharger', width: 133, cellsAlign: 'center', align: "center", columnType: 'none', editable: false, sortable: false, dataField: "DocFilename",
						cellsRenderer: function (row, column, value)
						{
							var htm = "<a href='http://www.drfyno.com/docs/"+value+"'>"+value+"</a>";
							return htm;
						}
					}
				]
			});

			$("#excelExport").on('click', function(){$("#docsTable").jqxDataTable('exportData', 'xls');});
			$("#pdfExport"  ).on('click', function(){$("#docsTable").jqxDataTable('exportData', 'pdf');});
			$("#iofprint"   ).click(function()
			{
				$("#docsTable").jqxDataTable({exportSettings: {fileName: null}});
				var gridContent = $("#docsTable").jqxDataTable('exportData', 'html');
				var newWindow = window.open('', '', 'width=800, height=500'),
					document = newWindow.document.open(),
					pageContent = '<!DOCTYPE html>' + '<html>' + '<head>' + '<meta charset="utf-8" />' + '<title>jQWidgets DataTable</title>' + '</head>'
						+ '<body>' + gridContent + '</body></html>';
				document.write(pageContent);
				document.close();
				newWindow.print();
				$("#docsTable").jqxDataTable({exportSettings: {fileName: "DataTable"} });
			});






		};
		var getEtat = function (v) {
			var mydata = "action=getEtat&sm=" + v;
				$.ajax({
					type: "GET",
					dataType: "text",
					url: "vehicle.php",
					data: mydata,
					success: function(myResponse){
						$('#DyBtn').css("display", "none");
						$('#etat').css("display", "block");
						$('#etat').html(myResponse);
					}
				});
		};

	var getRefuelLines = function (v) {
		var mydata = "action=getRefuelLines&sm=" + v;
		$('#CoBtn').css("display", "none");
		var myurl = "vehicle.php?action=getRefuelLines&sm=" + v;
		var RefuelLineSource =
		{
			datatype: "json",
			type: "GET",
			updateRow: function(rowID, rowData, commit){ commit(true); },
			url: myurl,
			datafields:
				[
					{ name: 'FuelSMRefuelID', type: 'int'},
					{ name: 'SM', type: 'int'},
					{ name: 'Quantity', type: 'int'},
					{ name: 'Counter', type: 'int'},
					{ name: 'UnitPrice', type: 'string'},
					{ name: 'RefuelDate', type: 'string'},
					{ name: 'RefuelTime', type: 'string'},
					{ name: 'FuelStationType', type: 'int'},
					{ name: 'FuelTank', type: 'int'},
					{ name: 'ExternalFuelStationName', type: 'string'},
					{ name: 'InsertBy', type: 'int'},
					{ name: 'InsertDate', type: 'string'},
					{ name: 'PaymentMethod', type: 'int'},
					{ name: 'Driver', type: 'int'},
					{ name: 'RefuelDateLabel', type: 'string'},
					{ name: 'InsertDateLabel', type: 'string'},
					{ name: 'TotalTTC', type: 'string'},
					{ name: 'FuelType', type: 'int'},
					{ name: 'RefuelTankLabel', type: 'string'},
					{ name: 'FuelStationTypeLabel', type: 'string'},
					{ name: 'PaymentMethodLabel', type: 'string'},
				],
			id: 'FuelSMRefuelID'
		};
		var RefuelLineAdptr = new $.jqx.dataAdapter(RefuelLineSource);

		$('#table').css("display", "block");
		$("#table").jqxDataTable
		({
			/*width: '96%',*/
			sortable: true,
			theme: "arctic",
			source: RefuelLineAdptr,
			pageable: true,
			pageSize: 5,
			pagerMode: "advanced",
			pagerButtonsCount: 10,
			columnsResize: true,
			filterable: true,
			altRows: true,

			rendered: function() {
				$('.viewBtn').on('mousedown', function(e)
				{
					var parentTr = $($(e.target).parents('tr').first());
					var RefuelLineId = parseInt(parentTr.attr('data-key'));
					var url = 'interventionrequest.php?action=viewRefuelLine&filter=MaintenanceID;EG;' + RefuelLineId;
					window.open(url, 'xxxx','width=800,height=800,scrollbars=yes,resizable=yes,status=yes');
					return false;
				});
				$('.editBtn').on('mousedown', function(e)
				{
					window.scrollTo(0,0);
					var parentTr = $($(e.target).parents('tr').first());
					var RefuelLineIndex = parseInt(e.target.getAttribute('data-row'));
					var RefuelLineId = parseInt(parentTr.attr('data-key'));
					if (isNaN(RefuelLineId)) { return; }
					//$("#vehicledialog").attr('data-row', iofIndex);
					getRefuelLines('editForm' , 'FuelSMRefuelID;EG;' + RefuelLineId );
					return false;
				});
				$('.delBtn').on('mousedown', function()
				{alert('deleted');
					/*
					 if( confirm("Confirmer la Suppression ?"))
					 {
					 $("#diTable").jqxDataTable('deleteRow', parseInt($(this).attr('row')));
					 $("#diTable").jqxDataTable('refresh');
					 $("#diTable").jqxDataTable('clearSelection');
					 }
					 */
					return false;
				});
			},
			columns:
				[

					{ text: 'IMM',								datafield: 'SM',											width: 90},
					{ text: 'Quantité',						datafield: 'Quantity',								width: 90},
					{ text: 'Compteur',						datafield: 'Counter',									width: 110},
					{ text: 'Prix Unitaire',			datafield: 'UnitPrice',								width: 110},
					{ text: 'Station',						datafield: 'ExternalFuelStationName', width: 110},
					{ text: 'Date',								datafield: 'RefuelDateLabel',			 		width: 110},
					//	{ text: "Date d'ajout",				datafield: 'InsertDateLabel',			 		width: 110},
					{ text: 'Total',							datafield: 'TotalTTC',						 		width: 110},
					{ text: 'Type citerne',				datafield: 'RefuelTankLabel',					width: 130},
					{ text: 'Type de station',		datafield: 'FuelStationTypeLabel',		width: 120},
					{ text: 'méthode de paiment',	datafield: 'PaymentMethodLabel',			width: 140}

					/*
					 {
					 text: 'ÉTAT', width: 160, cellsAlign: 'center', align: "center", columnType: 'none', editable: false, sortable: false, dataField: 'RefuelLineStationsStatus',
					 cellsRenderer: function (row, column, value)
					 {
					 if( !isNaN(value) )
					 return GetRefuelLineStationsStatus(value);
					 }
					 },
					 */

				]
		});

		$("#excelExport").on('click', function(){$("#diTable").jqxDataTable('exportData', 'xls');});
		$("#pdfExport"  ).on('click', function(){$("#diTable").jqxDataTable('exportData', 'pdf');});
		$("#print"   ).click(function()
		{
			$("#table").jqxDataTable({exportSettings: {fileName: null}});
			var gridContent = $("#table").jqxDataTable('exportData', 'html');
			$("#diTatableble").jqxDataTable({exportSettings: {fileName: "DataTable"} });
			var newWindow = window.open('', '', 'width=800, height=500'),
				document = newWindow.document.open(),
				pageContent = '<!DOCTYPE html>' + '<html>' + '<head>' + '<meta charset="utf-8" />' + '<title>jQWidgets DataTable</title>' + '</head>'
					+ '<body>' + gridContent + '</body></html>';
			document.write(pageContent);
			document.close();
			newWindow.print();
		});
	};

	//Task Table
	var getTask = function (v) {



		$('#ItBtn').css("display", "none");
		$('#taskTable').css("display", "block");
		var mydata = "intervention.php?action=getInterventions&filter=InterventionSM;EG;" + v;
		var disource =
		{
			datatype: "json",
			type: "GET",
			updateRow: function(rowID, rowData, commit){ commit(true); },
			url: mydata,
			datafields:
				[
					{ name: 'InterventionID', type: 'int'},
					{ name: 'InterventionSysID', type: 'string'},
					{ name: 'InterventionStatus', type: 'string'},
					{ name: 'InterventionSM', type: 'string'},
					{ name: 'SupportMediumIdentification', type: 'string'},
					{ name: 'SmClassLabel', type: 'string'},
					{ name: 'SMMarkLabel', type: 'string'},
					{ name: 'SMModelLabel', type: 'string'},
					{ name: 'Maintenance', type: 'string'},
					{ name: 'InterventionMOrganLabel', type: 'string'},
					{ name: 'InterventionTaskLabel', type: 'string'},
					{ name: 'InternalIntervenant', type: 'string'},
					{ name: 'InterventionStartLabel', type: 'string'},
					{ name: 'InterventionEndLabel', type: 'string'},
					{ name: 'ManPowerPrice', type: 'string'},
					{ name: 'SPTotalPrice', type: 'string'},
					{ name: 'TotalCostTTC', type: 'string'},
					{ name: 'IHCounter', type: 'string'},
					{ name: 'IR', type: 'string'}
				],
			id: 'InterventionID'
		};

		var didataAdapter = new $.jqx.dataAdapter(disource);

		$("#taskTable").jqxDataTable
		({
			/*width: '98%',*/
			sortable: true,
			theme: "arctic",
			source: didataAdapter,
			pageable: true,
			pageSize: 10,
			pagerMode: "advanced",
			pagerButtonsCount: 10,
			columnsResize: true,
			filterable: true,
			altRows: true,
			columns:
				[
					{ text: 'N°', datafield: 'InterventionSysID', width: 90 },
					{ text: 'IMM', datafield: 'SupportMediumIdentification', width: 80 },
					{ text: 'COMPTEUR', datafield: 'InterventionCounter', width: 100 },
					{ text: 'DÉSIGNATION', datafield: 'SmClassLabel' },
					{ text: 'MARQUE', datafield: 'SMMarkLabel', width: 100 },
					{ text: 'ORGANISME', datafield: 'InterventionMOrganLabel', width: 110 },
					{ text: 'Intervenant', datafield: 'InternalIntervenant', width: 90 },
					{ text: 'DÈBUT', datafield: 'InterventionStartLabel', width: 100 },
					{ text: 'FIN', datafield: 'InterventionEndLabel', width: 100 },
					{ text: 'Main d\'oeuvre', datafield: 'ManPowerPrice', width: 110 },
					{ text: 'Pièce Rechange', datafield: 'SPTotalPrice', width: 130 },
					{ text: 'TOTAL TTC', datafield: 'TotalCostTTC', width: 90 }
				]
		});

		$("#excelExport").on('click', function(){$("#taskTable").jqxDataTable('exportData', 'xls');});
		$("#pdfExport"  ).on('click', function(){$("#taskTable").jqxDataTable('exportData', 'pdf');});
		$("#iofprint"   ).click(function()
		{
			$("#taskTable").jqxDataTable({exportSettings: {fileName: null}});
			var gridContent = $("#taskTable").jqxDataTable('exportData', 'html');
			$("#taskTable").jqxDataTable({exportSettings: {fileName: "DataTable"} });
			var newWindow = window.open('', '', 'width=800, height=500'),
				document = newWindow.document.open(),
				pageContent = '<!DOCTYPE html>' + '<html>' + '<head>' + '<meta charset="utf-8" />' + '<title>Fynotec DataTable</title>' + '</head>' + '<body>' + gridContent + '</body></html>';
			document.write(pageContent);
			document.close();
			newWindow.print();
		});
	};

	var getUtil = function (v) {

		$('#OcBtn').css("display", "none");
		$('#utilTable').css("display", "block");
		myfilter = "SM;EG;" + v;
		var myurl = 'smuse.php?action=getSmUses&filter=' + myfilter;
		var smusesource =
		{
			datatype: "json",
			type: "GET",
			datafields:
				[
					{ name: 'SmUseID', type: 'int'},
					{ name: 'SupportMediumIdentification', type: 'string'},
					{ name: 'SmClassLabel', type: 'string'},
					{ name: 'SMMarkLabel', type: 'string'},
					{ name: 'SMModelLabel', type: 'string'},
					{ name: 'TenantCorpStruct', type: 'int'},
					{ name: 'TenantCorpStructLabel', type: 'string'},
					{ name: 'OwnerCorpStructLabel', type: 'string'},

					{ name: 'InsertBy', type: 'int'},
					{ name: 'InsertByLabel', type: 'string'},

					{ name: 'ShallFromDate', type: 'date'},
					{ name: 'RealFromDate', type: 'date'},
					{ name: 'ShallToDate', type: 'date'},
					{ name: 'RealToDate', type: 'date'},
					{ name: 'InsertDate', type: 'date'},

					{ name: 'ShallFromDateLabel', type: 'string'},
					{ name: 'RealFromDateLabel', type: 'string'},
					{ name: 'ShallToDateLabel', type: 'string'},
					{ name: 'RealToDateLabel', type: 'string'},
					{ name: 'InsertDateLabel', type: 'string'},

					{ name: 'WithFuel', type: 'int'},
					{ name: 'WithDriver', type: 'int'},

				],
			id: 'SmUseID',
			updateRow: function (rowID, rowData, commit) {
				commit(true);
			},
			url: myurl
		};

		var smusedataAdapter = new $.jqx.dataAdapter(smusesource);

		$("#utilTable").jqxDataTable
		({
			width: '98%',
			sortable: true,
			theme: "arctic",
			source: smusedataAdapter,
			pageable: true,
			pageSize: 25,
			pagerMode: "advanced",
			pagerButtonsCount: 10
			,columnsHeight: 50,
			columnsResize: true,
			filterable: true,
			altRows: true,

			filterable: true,
			columns: [
				{ text: 'IMM', datafield: 'SupportMediumIdentification', width: 66 },
				{ text: 'DÉSIGNATION', datafield: 'SmClassLabel', width: 140},
				{ text: 'MARQUE.', datafield: 'SMMarkLabel', width: 100 },
				{ text: 'MODELE', datafield: 'SMModelLabel', width: 100 },
				{ text: 'PROPRIÉTAIRE', datafield: 'OwnerCorpStructLabel', width: 170 },
				{ text: 'LOCATAIRE', datafield: 'TenantCorpStructLabel', width: 150 },
				{ text: 'DATE EFFET<br> (Prévision)', datafield: 'ShallFromDateLabel', width: 120 },
				{ text: 'DATE EFFET<br> (Effective)', datafield: 'RealFromDateLabel', width: 120 },
				{ text: 'ECHEANCE <br>(Prévision)', datafield: 'ShallToDateLabel', width: 120 },
				{ text: 'ECHEANCE <br>(Effective)', datafield: 'RealToDateLabel', width: 120 },
				{ text: 'CONDUCTEUR', datafield: 'WithDriver', width: 120 },
				{ text: 'CARBURANT', datafield: 'WithFuel', width: 120 }
			]
		});

		$("#excelExport").on('click', function(){$("#utilTable").jqxDataTable('exportData', 'xls');});
		$("#pdfExport"  ).on('click', function(){$("#utilTable").jqxDataTable('exportData', 'pdf');});
		$("#iofprint"   ).click(function()
		{
			$("#utilTable").jqxDataTable({exportSettings: {fileName: null}});
			var gridContent = $("#utilTable").jqxDataTable('exportData', 'html');
			var newWindow = window.open('', '', 'width=800, height=500'),
				document = newWindow.document.open(),
				pageContent = '<!DOCTYPE html>' + '<html>' + '<head>' + '<meta charset="utf-8" />' + '<title>jQWidgets DataTable</title>' + '</head>'
					+ '<body>' + gridContent + '</body></html>';
			document.write(pageContent);
			document.close();
			newWindow.print();
			$("#utilTable").jqxDataTable({exportSettings: {fileName: "DataTable"} });
		});




	}



	//plan Table

	var getPlan = function (v) {

		$('#MpBtn').css("display", "none");
		$('#planTable').css("display", "block");
		var mydata = "vehicle.php?action=getPlan&sm=" + v;
		var disource =
		{
			datatype: "json",
			type: "GET",
			updateRow: function(rowID, rowData, commit){ commit(true); },
			url: mydata,
			datafields:
				[
					{ name: 'MaintenancePlanID', type: 'int'},
					{ name: 'SM', type: 'int'},
					{ name: 'InterventionTask', type: 'int'},
					{ name: 'Frequency', type: 'int'},
					{ name: 'InterventionTaskLabel', type: 'string'},
					{ name: 'InterventionMOrgane', type: 'int'},
					{ name: 'InterventionMOrganLabel', type: 'string'}

				],
			id: 'MaintenancePlanID'
		};

		var didataAdapter = new $.jqx.dataAdapter(disource);

		$("#planTable").jqxDataTable
		({
			/*width: '98%',*/
			sortable: true,
			theme: "arctic",
			source: didataAdapter,
			pageable: true,
			pageSize: 10,
			pagerMode: "advanced",
			pagerButtonsCount: 10,
			columnsResize: true,
			filterable: true,
			altRows: true,
			columns:
				[
					{ text: 'Tâche', datafield: 'InterventionTaskLabel', width: 350 },
					{ text: 'Fréquence', datafield: 'Frequency', width: 350 },
					{ text: 'Type', datafield: 'InterventionMOrganLabel', width: 350 }
				]
		});

		$("#excelExport").on('click', function(){$("#planTable").jqxDataTable('exportData', 'xls');});
		$("#pdfExport"  ).on('click', function(){$("#planTable").jqxDataTable('exportData', 'pdf');});
		$("#iofprint"   ).click(function()
		{
			$("#planTable").jqxDataTable({exportSettings: {fileName: null}});
			var gridContent = $("#planTable").jqxDataTable('exportData', 'html');
			$("#planTable").jqxDataTable({exportSettings: {fileName: "DataTable"} });
			var newWindow = window.open('', '', 'width=800, height=500'),
				document = newWindow.document.open(),
				pageContent = '<!DOCTYPE html>' + '<html>' + '<head>' + '<meta charset="utf-8" />' + '<title>Fynotec DataTable</title>' + '</head>' + '<body>' + gridContent + '</body></html>';
			document.write(pageContent);
			document.close();
			newWindow.print();
		});
	}


	var getDate = function (v) {
		$("#alertid").show();
		$('#AlBtn').css("display", "none");
		$('#dateTable').css("display", "block");
		var myurl = 'vehicle.php?action=getNotificationDate&sm='+v;
		var notificationsource =
		{
			datatype: "json",
			type: "GET",
			datafields:
				[
					{ name: 'NotificationID', type: 'int'},
					{ name: 'NotificationState', type: 'int'},
					{ name: 'NotificationActivation', type: 'int'},
					{ name: 'Comment', type: 'string'},
					{ name: 'Longitude', type: 'int'},
					{ name: 'Latitude', type: 'int'},
					{ name: 'CustomerTimeStamp', type: 'string'},
					{ name: 'SM', type: 'int'},
					{ name: 'NotificationCode', type: 'int'},
					{ name: 'NotificationText', type: 'strin'},
					{ name: 'NotificationShortText', type: 'string'},
					{ name: 'NotificationCategory', type: 'string'},
					{ name: 'IMM', type: 'string'},
					{ name: 'DateDesc', type: 'string'},
					{ name: 'DateValue', type: 'string'},
					{ name: 'stateLabel', type: 'string'},
					{ name: 'TreatDate', type: 'string'},
					{ name: 'nom', type: 'string'}

				],
			id: 'NotificationID',
			updateRow: function (rowID, rowData, commit) {
				commit(true);
			},
			url: myurl
		};

		var notificationdataAdapter = new $.jqx.dataAdapter(notificationsource);

		$("#dateTable").jqxDataTable
		({
			sortable: true,
			theme: "arctic",
			source: notificationdataAdapter,
			pageable: true,
			pageSize: 10,
			pagerMode: "advanced",
			pagerButtonsCount: 10,
			columnsResize: true,
			filterable: true,
			altRows: true,
			columns: [
				{ text: 'IMM', datafield: 'IMM', width: 65 },
				{ text: 'Commentaire', datafield: 'Comment',width:140 },
				{ text: 'Description', datafield: 'DateDesc', width: 200},
				{ text: 'Date de traitement', datafield: 'TreatDate', width: 140 },
				{
					text: 'Date', width: 115, cellsAlign: 'center', align: "center",
					columnType: 'none', editable: false, sortable: false, dataField: 'DateValue'
				},
				{
					text: 'Etat', width: 115, cellsAlign: 'center', align: "center",
					columnType: 'none', editable: false, sortable: false, dataField: 'stateLabel',
					cellsRenderer: function (row, column, value)
					{
						if(value=="Traité"){
							var htm = '<p style="background-color: #CAFFCE">'+value+'</p>';

						}else{
							var htm = '<p style="background-color: #E8A1A7">'+value+'</p>';

						}
						return htm;
					}
				}

			]
		});

		$("#excelExportdate").on('click', function(){$("#dateTable").jqxDataTable('exportData', 'xls');});
		$("#pdfExportdate"  ).on('click', function(){$("#dateTable").jqxDataTable('exportData', 'pdf');});
		$("#iofprintdate"   ).click(function()
		{
			$("#dateTable").jqxDataTable({exportSettings: {fileName: null}});
			var gridContent = $("#dateTable").jqxDataTable('exportData', 'html');
			var newWindow = window.open('', '', 'width=800, height=500'),
				document = newWindow.document.open(),
				pageContent = '<!DOCTYPE html>' + '<html>' + '<head>' + '<meta charset="utf-8" />' + '<title>jQWidgets DataTable</title>' + '</head>'
					+ '<body>' + gridContent + '</body></html>';
			document.write(pageContent);
			document.close();
			newWindow.print();
			$("#dateTable").jqxDataTable({exportSettings: {fileName: "DataTable"} });
		});




	}

	var getTask1 = function (v) {
		$('#taskTable').css("display", "block");
		//$('#dateTable').css("display", "none");
		var myurl = 'vehicle.php?action=getNotificationTask&sm='+v;
		var notificationTasksource =
		{

			datatype: "json",
			type: "GET",
			datafields:
				[
					{ name: 'NotificationID', type: 'int'},
					{ name: 'NotificationState', type: 'int'},
					{ name: 'NotificationActivation', type: 'int'},
					{ name: 'Comment', type: 'string'},
					{ name: 'Longitude', type: 'int'},
					{ name: 'Latitude', type: 'int'},
					{ name: 'CustomerTimeStamp', type: 'string'},
					{ name: 'SM', type: 'int'},
					{ name: 'NotificationCode', type: 'int'},
					{ name: 'NotificationText', type: 'strin'},
					{ name: 'NotificationShortText', type: 'string'},
					{ name: 'NotificationCategory', type: 'string'},
					{ name: 'IMM', type: 'string'},
					{ name: 'InterventionTaskLabel', type: 'string'},
					{ name: 'InterventionMOrgane', type: 'string'},
					{ name: 'Customer', type: 'int'},
					{ name: 'CompanyName', type: 'string'},
					{ name: 'custmerName', type: 'string'},
					{ name: 'stateLabel', type: 'string'},
					{ name: 'TreatDate', type: 'string'},
					{ name: 'nom', type: 'string'}

				],
			id: 'NotificationID',
			updateRow: function (rowID, rowData, commit) {
				commit(true);
			},
			url: myurl
		};

		var notificationTaskdataAdapter = new $.jqx.dataAdapter(notificationTasksource);

		$("#task1Table").jqxDataTable
		({
			sortable: true,
			theme: "arctic",
			source: notificationTaskdataAdapter,
			pageable: true,
			pageSize: 10,
			pagerMode: "advanced",
			pagerButtonsCount: 10,
			columnsResize: true,
			filterable: true,
			altRows: true,

			filterable: true,
			columns: [
				{ text: 'IMM', datafield: 'IMM', width: 65 },
				//{ text: 'Not ID', datafield: 'NotificationID', width: 66 },
				//{ text: 'State', datafield: 'stateLabel',  width: 80},
				/*{
				 text: 'Etat', width: 115, cellsAlign: 'center', align: "center", columnType: 'none', editable: false,
				 sortable: false, dataField: 'stateLabel'},*/
				//{ text: 'NotificationActivation', datafield: 'NotificationActivation', width: 80 },
				{ text: 'Commentaire', datafield: 'Comment'},
				{ text: 'Description', datafield: 'InterventionTaskLabel', width: 200 },
				{ text: 'Date de traitement', datafield: 'TreatDate',width: 140},
				//{ text: 'traité par', datafield: 'nom',width: 140},
				//{ text: 'Nom du client', datafield: 'custmerName', width: 140 },
				//{ text: 'Longitude', datafield: 'Longitude', width: 100 },
				//{ text: ' Latitude', datafield: 'Latitude', width: 100 },
				//{ text: 'Time', datafield: 'CustomerTimeStamp', width: 100 },
				// { text: 'SM', datafield: 'SM' },
				//{ text: 'Code', datafield: 'NotificationCode', width: 60 },
				//{ text: 'Text', datafield: 'NotificationText', width: 225 },
				//{ text: 'Short text ', datafield: 'NotificationShortText', width: 82 },
				//{ text: 'Categorie', datafield: 'NotificationCategory', width: 100 },
				//{ text: 'PAYS', datafield: 'Country', width: 66 },
				{
					text: 'Etat', width: 115, cellsAlign: 'center', align: "center",
					columnType: 'none', editable: false, sortable: false, dataField: 'stateLabel',
					cellsRenderer: function (row, column, value)
					{
						if(value=="Traité"){
							var htm = '<p style="background-color: #CAFFCE">'+value+'</p>';

						}else{
							var htm = '<p style="background-color: #E8A1A7">'+value+'</p>';

						}
						return htm;
					}
				}
			]
		});

		$("#excelExport").on('click', function(){$("#task1Table").jqxDataTable('exportData', 'xls');});
		$("#pdfExport"  ).on('click', function(){$("#task1Table").jqxDataTable('exportData', 'pdf');});
		$("#iofprint"   ).click(function()
		{
			$("#task1Table").jqxDataTable({exportSettings: {fileName: null}});
			var gridContent = $("#task1Table").jqxDataTable('exportData', 'html');
			var newWindow = window.open('', '', 'width=800, height=500'),
				document = newWindow.document.open(),
				pageContent = '<!DOCTYPE html>' + '<html>' + '<head>' + '<meta charset="utf-8" />' + '<title>jQWidgets DataTable</title>' + '</head>'
					+ '<body>' + gridContent + '</body></html>';
			document.write(pageContent);
			document.close();
			newWindow.print();
			$("#task1Table").jqxDataTable({exportSettings: {fileName: "DataTable"} });
		});





	}





	var init = function ()
		{
			$("#alertid").hide();
			$('#SpBtn').show();
			//$('#DtsDv').css("display", "block");
			//$("#DtsDv").show();
			setGlobalView();
      getVehicles('grid', '');
			setVehicleForm();
     	addEventListeners();
			$('#MainMenu').jqxButton({ width:'auto', template: "primary"});
			$("#MainMenu").on('click', function(e){window.parent.pageLoad("maintenance");});
		}

		return init();
});