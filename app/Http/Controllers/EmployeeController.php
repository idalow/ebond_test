<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\EmployeeCollection;
use App\Http\Resources\Employee as EmployeeResource;
use App\Employee;
use Illuminate\Validation\Rule;
use Symfony\Component\HttpFoundation\Response;

class EmployeeController extends Controller
{
    public function index()
    {
        return new EmployeeCollection(Employee::all());
    }

    public function store()
    {
        $employee = Employee::create($this->validateData());

        return new EmployeeResource($employee);
    }

    public function show(Employee $employee)
    {
        return new EmployeeResource($employee);
    }

    public function update(Employee $employee)
    {
        $employee->update($this->validateData());

        return new EmployeeResource($employee);
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
