<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trailer extends Model
{
    protected $table = "FYNO.TRAILERS";
    protected $primaryKey = "TrailerID";

    public function vehicle()
    {
        return $this->belongsToMany("App\Vehicle","FYNO.SM_TRAILER" ,"SM",'Trailer')->withPivot('CouplingDate',"TestField",'DecouplingDate');
    }

}
