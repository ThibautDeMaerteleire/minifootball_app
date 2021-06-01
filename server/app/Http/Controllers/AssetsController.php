<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AssetsController extends Controller {
  public function upload(Object $img) {
    $uuid = Str::random(20);
    $path = "/public/images/{$img->name}-{$uuid}.{$img->ext}";
    Storage::disk('local')->put($path, $img->content);

    return $path;
  }
  
  public function uploadImage(Request $request) {
    $data = (object) [
      'name' => $request->user()->username,
      'ext' => 'jpg',
      'content' => $request->avatar,
    ];
    return $this->upload($data);
  }

  
}