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
// Route::get('api/products/{id}', [ProductController::class, 'show']);
// Route::post('api/products', [ProductController::class, 'store']);
// Route::put('api/products/{id}', [ProductController::class, 'update']);
// Route::delete('api/products/{id}', [ProductController::class, 'destroy']);
// Route::middleware('api')->prefix('api')->group(function () {
//     Route::get('/example', function () {
//         return response()->json(['message' => 'Hello from API']);
//     });
// });
// Route::get('/test', function () {
//     dd('test');
//     return response()->json(['message' => 'Hello from the backend!']);
// });

Route::get('/{any}', function () {
    View::addExtension('html', 'php');
    return View::make('index');
})->where('any', '.*');


