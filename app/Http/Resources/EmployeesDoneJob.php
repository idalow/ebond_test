<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EmployeesDoneJob extends JsonResource
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
                'type' => 'done_job',
                'done_job_id' => $this->id,
                'attributes' => [
                    'task' => $this->task,
                    'employee' => $this->employee,
                    'time' => $this->time,
                ],
            ],
            'links' => [
                'self' => $this->path(),
            ]
        ];
    }
}
