<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
// Route::get('api/test', function () {
//     return response()->json(['message' => 'Hello from the backend!']);
// });
Route::apiResource('api/products', ProductController::class);
// Route::get('api/products/{product}', [ProductController::class, 'show'])->name('product.edit');
// Route::post('api/products', [ProductController::class, 'store']);
// Route::put('api/products/{id}', [ProductController::class, 'update']);
// Route::delete('api/products/{id}', [ProductController::class, 'destroy']);
// Route::get('api/test', function () {
//     return File::get(public_path('angular/browser/index.html'));
//     // return ['message'=> 'Hello'];
//     // return '<h1>tetst</h1>';
// })->where('any', '.*');
Route::get('/{any}', function () {
    View::addExtension('html', 'php');
    return View::make('index');

})->where('any', '.*');
// Route::get('api/test', function () {
//     return response()->json([
//         'message' => '<h1>This is a test message from Laravel</h1>'
//     ]);
// });
