<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = "FYNO.CUSTOMERS";
    protected $primaryKey = "CustomerID";
}
