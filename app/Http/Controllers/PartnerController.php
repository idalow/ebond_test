<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\PartnerCollection;
use App\Http\Resources\Partner as PartnerResource;
use App\Partner;
use Symfony\Component\HttpFoundation\Response;

class PartnerController extends Controller
{
    public function index()
    {
        return PartnerCollection(Partner::all());
    }

    public function store()
    {
        $partner = new Partner;

        $partner->create($this->validateData());

        return (new PartnerResource($partner))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function show(Partner $partner)
    {
        return new PartnerResource($partner);
    }

    public function update(Partner $partner)
    {
        $partner->update($this->validateData());

        return (new PartnerResource($partner))
            ->response()
            ->setStatusCode(Response::HTTP_OK);
    }

    private function validateData()
    {
        return request()->validate([
            'name' => 'required',
            'address' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
        ]);
    }
}
