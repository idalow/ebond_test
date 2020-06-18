<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\TaskCollection;
use App\Http\Resources\Task as TaskResource;
use App\Task;
use Symfony\Component\HttpFoundation\Response;

class TaskController extends Controller
{
    public function index()
    {
        return new TaskCollection(auth()->user()->tasks()->get());
    }

    public function store()
    {
        $task = auth()->user()->tasks()->create($this->validateData());

        return new TaskResource($task);
    }

    public function show(Task $task)
    {
        return new TaskResource($task);
    }

    public function update(Task $task)
    {
        $task->update($this->validateData());

        return new TaskResource($task);
    }

    private function validateData()
    {
        return request()->validate([
            'title' => 'required',
            'description' => 'required',
            'partner_id' => 'required',
        ]);
    }
}
