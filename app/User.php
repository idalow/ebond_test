<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable')
        ->withDefault(function ($image) {
            $image->url = 'avatar\default-user-img.jpg';
        });
    }

    public function done_jobs()
    {
        return $this->hasMany(Done_job::class);
    }

    public function employees()
    {
        return $this->hasMany(Employee::class);
    }

    public function partners()
    {
        return $this->hasMany(Partner::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
