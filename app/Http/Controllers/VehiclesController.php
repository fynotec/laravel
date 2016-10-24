<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Vehicle;
class VehiclesController extends Controller
{



   public function index(){
   		return Vehicle::with('customer')->get();
   }



   public function show(Vehicle $vehicule){


   		return view("vehicles.show",compact('vehicule'));
   }


   public function create(){

   	return view('vehicles.create');

   }

   public function getTrailers(){
   	//return Vehicle::with("trailer")->get();

   	return Vehicle::whereHas('trailer', function($q)
					{
					    $q->where('CouplingDate',"10/10/2010");
					})->with("trailer")->get();
   }
}
