<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Partner extends Model
{
    protected $fillable = ['name', 'address', 'email', 'phone'];

    public function path()
    {
        return "/partner/{$this->id}-" . Str::slug($this->name);
    }
}
