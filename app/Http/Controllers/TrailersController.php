<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Trailer;
class TrailersController extends Controller
{
    public function index(){
    	return Trailer::all();
    }
    public function vehicles(){
    	return Trailer::with("vehicle")->get();
    }



}
