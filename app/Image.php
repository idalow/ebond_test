<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'url'
    ];

    public function imageable()
    {
        return $this->morphTo();
    }

    public function storeImage($object) {

        if ( request()->avatar) {
            
            $object->image()->updateOrCreate(
                [ 'imageable_id' => $object->id ],
                [ 'url' => request()->avatar->store('avatar','public') ]
            );
            
        }
    }
}
