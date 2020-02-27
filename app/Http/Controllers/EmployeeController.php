<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\EmployeeCollection;
use App\Http\Resources\Employee as EmployeeResource;
use App\Employee;
use Symfony\Component\HttpFoundation\Response;

class EmployeeController extends Controller
{
    public function index()
    {
        return EmployeeCollection(Employee::all());
    }

    public function store()
    {
        $employee = new Employee;

        $employee->create($this->validateData());

        return (new EmployeeResource($employee))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function show(Employee $employee)
    {
        return new EmployeeResource($employee);
    }

    public function update(Employee $employee)
    {
        $employee->update($this->validateData());

        return (new EmployeeResource($employee))
            ->response()
            ->setStatusCode(Response::HTTP_OK);
    }

    private function validateData()
    {
        return request()->validate([
            'name' => 'required',
            'post' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
        ]);
    }
}
