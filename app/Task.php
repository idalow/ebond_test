<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Task extends Model
{   
    protected $fillable = ['title', 'description', 'partner_id', 'user_id'];

    public function partner()
    {
        return $this->belongsTo(Partner::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function done_job()
    {
        return $this->hasOne(Done_job::class);
    }

    public function path()
    {
        return "/task/{$this->id}-" . Str::slug($this->title);
    }
}
