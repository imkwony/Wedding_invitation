import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ModalProvider } from "./component/modal"
import { StoreProvider } from "./component/store"

// ==========================================================
// 🚀 카카오 SDK 초기화 로직 (여기에 있어야 합니다)
// ==========================================================
const KAKAO_KEY = import.meta.env.VITE_KAKAO_SDK_JS_KEY;

if (window.Kakao && KAKAO_KEY) {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(KAKAO_KEY);
    console.log("✅ Kakao SDK 초기화 완료");
  }
} 
// ==========================================================

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <ModalProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ModalProvider>
  </React.StrictMode>,
)
