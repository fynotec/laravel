<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    protected $table = "FYNO.SM";
    protected $primaryKey = "SMID";
    public function customer()
    {
        return $this->belongsTo('App\Customer', 'Customer');
    }
    public function trailer()
    {
        return $this->belongsToMany("App\Trailer","FYNO.SM_TRAILER" ,'SM',"Trailer")->withPivot('CouplingDate',"TestField",'DecouplingDate');
    }
}
