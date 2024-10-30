import React, { useEfect, useState } from "react";
import axios from "axios";

interface Todo { // ここでtodoのデータ構造を明確化する
  id: number;
  title: string;
  completed: boolean;
}
