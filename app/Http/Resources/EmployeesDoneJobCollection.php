<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class EmployeesDoneJobCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection,
            'done_job_count' => $this->count(),
            'time_count' => $this->collection->sum('time'),
            'links' => [
                'self' => url('/done_jobs'),
            ]
        ];
    }
}
