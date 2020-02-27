<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $guraded =  [];

    public function done_jobs()
    {
        return $this->hasMany(Done_job::class);
    }

    public function path()
    {
        return "/employee/{$this->id}-" . Str::slug($this->name);
    }

}
