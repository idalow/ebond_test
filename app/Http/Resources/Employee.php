<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Employee extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => [
                'type' => 'employee',
                'employee_id' => $this->id,
                'attributes' => [
                    'name' => $this->name,
                    'avatar' => $this->image,
                    'post' => $this->post,
                    'email' => $this->email,
                    'phone' => $this->phone,
                    'done_jobs' => new EmployeesDoneJobCollection($this->done_jobs),
                ],
            ],
            'links' => [
                'self' => $this->path(),
            ]
        ];
    }
}
