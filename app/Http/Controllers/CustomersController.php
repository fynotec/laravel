<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Customer;
class CustomersController extends Controller
{
     public function index(){

		return Customer::all();

	}
}
