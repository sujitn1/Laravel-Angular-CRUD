<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // Get all products
    public function index()
    {
        $products = Product::all();

        return response()->json([
            'success' => true,
            'data' => $products,
        ], 200);
    }

    // Get a single product
    public function show($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }
        return response()->json($product);
    }

    // Add a new product
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'category' => 'required',
            'discount' => 'nullable|integer',
            'discountPercentage' => 'nullable|integer',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
    
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('product-images', 'public');
            $validatedData['image'] = $imagePath;
        }
    
        Product::create($validatedData);
    
        return response()->json(['message' => 'Product added successfully!'], 201);
    }

    // Update an existing product
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'category' => 'nullable|string',
            'image' => 'nullable|url',
            'discount' => 'nullable|numeric',
            'discountPercentage' => 'nullable|numeric'
        ]);

        $product = Product::findOrFail($id);
        $product->update($validated);
        return response()->json(['message' => 'Product updated successfully!', 'data' => $product], 200);
    }

    // Delete a product
    public function destroy($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        $product->delete();
        return response()->json(['message' => 'Product deleted successfully']);
    }
}
