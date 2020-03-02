<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Partner extends JsonResource
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
                'type' => 'partner',
                'partner_id' => $this->id,
                'attributes' => [
                    'name' => $this->name,
                    'avatar' => $this->avatar,
                    'address' => $this->address,
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
