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
        return new EmployeeCollection(auth()->user()->employees()->get());
    }

    public function store()
    {
        $employee = auth()->user()->employees()->create($this->validateData());

        $employee->image->storeImage($employee);

        return new EmployeeResource($employee);
    }

    public function show(Employee $employee)
    {
        return new EmployeeResource($employee);
    }

    public function update(Employee $employee)
    {
        $employee->update($this->validateData());

        $employee->image->storeImage($employee);

        $employee->save();
        
        return new EmployeeResource($employee);
    }

    private function validateData()
    {
        return request()->validate([
            'name' => 'required',
            'post' => 'required',
            'email' =>  'required|email',
            'phone' => 'required',
        ]);
    }

}
