<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\TaskCollection;
use App\Partner;
use App\Task;

class GetTasksByPartnersController extends Controller
{
    public function __invoke(Partner $partner)
    {   
        return new TaskCollection(Task::where('partner_id', $partner->id)->get());
    }
}
