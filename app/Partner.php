<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    protected $guraded =  [];

    public function path()
    {
        return "/partner/{$this->id}-" . Str::slug($this->name);
    }
}
