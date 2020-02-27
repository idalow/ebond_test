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
                    'post' => $this->post,
                    'email' => $this->email,
                    'phone' => $this->phone,
                ],
            ],
            'links' => [
                'self' => $this->path(),
            ]
        ];
    }
}
