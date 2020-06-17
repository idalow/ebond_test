<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Employee extends Model
{
    protected $fillable = ['name', 'post', 'email', 'phone'];

    public function done_jobs()
    {
        return $this->hasMany(Done_job::class);
    }

    public function path()
    {
        return "/employee/{$this->id}-" . Str::slug($this->name);
    }

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable')
            ->withDefault(function ($image) {
                $image->url = 'avatar\default-user-img.jpg';
            });
    }

}
