<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
// Route::get('api/test', function () {
//     return response()->json(['message' => 'Hello from the backend!']);
// });
Route::apiResource('api/products', ProductController::class);
// Route::get('api/test', function () {
//     return File::get(public_path('angular/browser/index.html'));
//     // return ['message'=> 'Hello'];
//     // return '<h1>tetst</h1>';
// })->where('any', '.*');

// Route::get('api/test', function () {
//     return response()->json([
//         'message' => '<h1>This is a test message from Laravel</h1>'
//     ]);
// });
