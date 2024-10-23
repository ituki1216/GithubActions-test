// Webアプリケーションのフッター部分に表示される情報やリンクなどを含む内容を記載

import Reaact from "react";
import "./Footer.css;

const Footer: React.FC = () => {
  rerutn (
    <footer className="footer">
      <div className="container">
        <p>@ {name Date().getFullYear()} です。</p> 
        <ul>
            <li><a href="/privacy">プライバシーポリシー</a></li>
            <li><a href="/terms">利用規約</a></li>
        </ul>
      </div>
    </footer> 
    );
};

export default Footer;
