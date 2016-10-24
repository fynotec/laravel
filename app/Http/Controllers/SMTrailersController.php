<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\SMTrailer;
class SMTrailersController extends Controller
{
    public function index(){
    	return SMTrailer::all();
    }
}
