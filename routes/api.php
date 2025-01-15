<?php

use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\File;
use App\Http\Controllers\ProductController;

Route::middleware('api')->prefix('api')->group(function () {
    Route::get('/example', function () {
        return response()->json(['message' => 'Hello from API']);
    });
});

Route::apiResource('api/products', ProductController::class);
// Route::middleware('api')->prefix('api')->group(function () {
//     Route::get('/example', function () {
//         return response()->json(['message' => 'Hello from API']);
//     });
// });
// Route::get('/test', function () {
//     dd('test');
//     return response()->json(['message' => 'Hello from the backend!']);
// });

// Route::get('/{any}', function () {
//     return File::get(public_path('angular/index.html'));
// })->where('any', '.*');


