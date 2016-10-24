<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.P
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/Persons','PersonsController@index');
Route::get('/Customers','CustomersController@index');
Route::get('/Vehicles','VehiclesController@index');
Route::get('/Vehicles/show/{vehicule}','VehiclesController@show');
Route::get('/Vehicles/create','VehiclesController@create');
Route::get('/Trailers/','TrailersController@index');
Route::get('/Vehicles/trailers','VehiclesController@getTrailers');
Route::get('/smtrailers/','SMTrailersController@index');
Route::get('/Trailers/vehicles/','TrailersController@vehicles');