<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Done_job extends Model
{
    protected $fillable = ['task_id', 'employee_id', 'time'];

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function path()
    {
        return "/done_job/{$this->id}-" . Str::slug($this->task->title);
    }
}
