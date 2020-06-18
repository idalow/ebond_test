<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Partner extends Model
{
    protected $fillable = ['name', 'address', 'email', 'phone', 'user_id'];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function path()
    {
        return "/partner/{$this->id}-" . Str::slug($this->name);
    }

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable')
            ->withDefault(function ($image) {
                $image->url = 'avatar\default-user-img.jpg';
            });
    }
}
