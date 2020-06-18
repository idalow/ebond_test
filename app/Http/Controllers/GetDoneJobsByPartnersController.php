<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\DoneJobCollection;
use App\Partner;
use App\Done_job;

class GetDoneJobsByPartnersController extends Controller
{
    public function __invoke(Partner $partner)
    {
        return new DoneJobCollection(auth()->user()->done_jobs()->whereIn('task_id', $partner->tasks()->pluck('id'))->get());
    }
}
