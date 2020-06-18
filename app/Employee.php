<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Employee extends Model
{
    protected $fillable = ['name', 'post', 'email', 'phone', 'user_id'];

    public function done_jobs()
    {
        return $this->hasMany(Done_job::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
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
