<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $table = "FYNO.PERSONS";
    protected $primaryKey = "PersonID";
	public function customer()
    {
        return $this->belongsTo('App\Customer', 'Customer');
    }


}
