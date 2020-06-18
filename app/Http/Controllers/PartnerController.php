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
        return new PartnerCollection(auth()->user()->partners()->get());
    }

    public function store()
    {
        $partner = auth()->user()->partners()->create($this->validateData());

        $partner->image->storeImage($partner);

        return new PartnerResource($partner);
    }

    public function show(Partner $partner)
    {
        return new PartnerResource($partner);
    }

    public function update(Partner $partner)
    {
        $partner->update($this->validateData());

        $partner->image->storeImage($partner);

        return new PartnerResource($partner);
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
