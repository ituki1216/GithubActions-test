<?php

namespace App\Http\Controllers; # このクラスが属する名前空間

use Illuminate\Http\Request; # ほかのclassを使用するためのimport文
use App\Models\Todo; # todomodelをimport


class Todocontroller extends Controller {
    public function index() { #全てのtodoデータを取得する
        return Todo:all();
    }

    public function store(Request $request) {
       $request->validate(['title' => 'required|string|max:255']); #titleフィールドが必須で、文字列かつ最大255文字であることを検証します。
        $todo = Todo::create(["title" => $request->title]); # バリデーションに合格した場合、todoを作成し、データベースに保存する
        return response()->json($todo, 201); # json形式でレスポンスを返す
        
        
        























class ProductController {
    public function list() {
        // 商品一覧を取得
        $products = ProductModel::getAllProducts();
        include 'views/product_list.php';

class UserController {
    // ユーザー一覧を表示するメソッド
    public function index() {
        $users = $this->getAllUsers(); // ユーザーを取得
        include 'views/user/index.php'; // ビューを表示
    }

    private function getAllUsers() {
        // ここでデータベースからユーザーを取得する処理を書く
        return [
            ['id' => 1, 'name' => 'Alice'],
            ['id' => 2, 'name' => 'Bob'],
        ];
    }

     public function create() {
        // ユーザー作成のロジックを書く
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // フォームからのデータを処理
            // データベースに保存する処理を書く
        }
        include 'views/user/create.php'; // ビューを表示
    }
}
    }


