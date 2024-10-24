import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
}

// アイテム型のオブジェクトの配列を定義 配列の中にはnameとidが格納されいる
const items: Item[] = [
  { id: 1, name: "勇者の剣" },
  { id: 2, name: "魔法の盾" },
  { id: 3, name: "木の枝" },
  { id: 4, name: "鋼のつるぎ" }
  ]; 
  
const Filtersort: React.FC = () => {
  const [filter, setFilter]  = useState("");
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  
