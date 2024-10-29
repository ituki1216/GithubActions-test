<?php

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
    }

