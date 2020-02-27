<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\DoneJobCollection;
use App\Http\Resources\DoneJob as DoneJobResource;
use App\Done_job;
use Symfony\Component\HttpFoundation\Response;

class DoneJobController extends Controller
{
    public function index()
    {
        return DoneJobCollection(Done_job::all());
    }

    public function store()
    {
        $doneJob = new Done_job;

        $doneJob->create($this->validateData());

        return (new DoneJobResource($doneJob))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function show(Done_job $doneJob)
    {
        return new DoneJobResource($doneJob);
    }

    public function update(Done_job $doneJob)
    {
        $doneJob->update($this->validateData());

        return (new DoneJobResource($doneJob))
            ->response()
            ->setStatusCode(Response::HTTP_OK);
    }

    private function validateData()
    {
        return request()->validate([
            'task_id' => 'required',
            'employee_id' => 'required',
            'time' => 'required',
        ]);
    }
}
