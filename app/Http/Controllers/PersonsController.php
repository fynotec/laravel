<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;


use App\Person;

class PersonsController extends Controller
{
    

	public function index(){

		return Person::with('customer')->get();

	}
}
