<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{   
    protected $guraded =  [];

    public function partner()
    {
        return $this->belongsTo(Partner::class);
    }

    public function done_jobs()
    {
        return $this->hasOne(Done_job::class);
    }

    public function path()
    {
        return "/task/{$this->id}-" . Str::slug($this->title);
    }
}
