<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Done_job extends Model
{
    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
