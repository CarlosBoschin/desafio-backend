<?php

namespace App\Http\Controllers;

use DB;
use App\Pessoas;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PessoasController extends Controller
{

    public function index()
    {
        try
        {
            $pessoas = Pessoas::all();
            return $pessoas;
        }
        catch(\Exception $ex)
        {
            return response()->json(["error"=>$ex->getMessage() . ' on line: ' . $ex->getLine()], 500);
        }
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        try
        {
            $verifica_email = "";
            $verifica_email = DB::table('pessoas')
            ->select('email')
            ->where('email', $request->email)
            ->get();

            if($verifica_email != '[]')
            {
                return 0;
            }
            else
            {
                $pessoas = new Pessoas();
                $pessoas->fill($request->json()->all());
                $pessoas->save();

                return 200;
            }
        }
        catch(\Exception $ex)
        {
            return response()->json(["error"=>$ex->getMessage() . ' on line: ' . $ex->getLine()], 500);
        }
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        try
        {
            $pessoa = Pessoas::find($id);

            if($pessoa != '[]')
            {
                $pessoa->fill($request->json()->all());
                $pessoa->save();

                return 1;
            }
            else
            {
                return 0;
            }
        }
        catch(\Exception $ex)
        {
            return response()->json(["error"=>$ex->getMessage() . ' on line: ' . $ex->getLine()], 500);
        }
    }


    public function destroy($id)
    {
        try
        {
            if($id)
            {
                $pessoa = Pessoas::find($id);

                if($pessoa != '[]')
                {
                    $pessoa->delete();
                    return 1;
                }
                else
                {
                    return 0;
                }
            }
            else
            {
                return 0;
            }
        }
        catch(\Exception $ex)
        {
            return response()->json(["error"=>$ex->getMessage() . ' on line: ' . $ex->getLine()], 500);
        }
    }
}
