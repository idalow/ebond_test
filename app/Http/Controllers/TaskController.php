<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\TaskCollection;
use App\Http\Resources\Tas as TaskResource;
use App\Task;
use Symfony\Component\HttpFoundation\Response;

class TaskController extends Controller
{
    public function index()
    {
        return TaskCollection(Task::all());
    }

    public function store()
    {
        $task = new Task;

        $task->create($this->validateData());

        return (new TaskResource($task))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function show(Task $task)
    {
        return new TaskResource($task);
    }

    public function update(Task $task)
    {
        $task->update($this->validateData());

        return (new TaskResource($task))
            ->response()
            ->setStatusCode(Response::HTTP_OK);
    }

    private function validateData()
    {
        return request()->validate([
            'title' => 'required',
            'description' => 'required',
            'partner_id' => 'required|email',
        ]);
    }
}
