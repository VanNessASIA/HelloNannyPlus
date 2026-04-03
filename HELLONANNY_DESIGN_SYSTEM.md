# HelloNanny Design System / Brand Guidelines
## Claude Code 向けデザイン指示書

> このドキュメントはHelloNanny+ LPの高評価デザインを基に、今後のWebアプリ・スマホアプリ開発時に一貫したデザインを実現するための指示書です。
> Claude Code CLIにこのファイルを渡すことで、ブランドに沿ったUI/UXを生成できます。

---

## 1. ブランドカラー

### Primary Colors
| 名前 | HEX | 用途 |
|------|------|------|
| **Brand Yellow** | `#FFC107` | メインアクセント、CTA、ロゴ、ハイライト |
| **Brand Yellow Dark** | `#E5AC00` | ホバー状態、テキストアクセント、セクションタグ |
| **Brand Yellow Light** | `#FFD54F` | 背景のアクセント（10-20%透明度で使用） |
| **Brand Black** | `#1A1A1A` | メインテキスト、ダークUI要素 |
| **White** | `#FFFFFF` | 背景、カードベース |

### Gray Scale
| 名前 | HEX | 用途 |
|------|------|------|
| Gray 50 | `#F9FAFB` | セクション背景（交互に使用） |
| Gray 100 | `#F3F4F6` | カード境界線、区切り |
| Gray 200 | `#E5E7EB` | ボーダー |
| Gray 400 | `#9CA3AF` | サブテキスト、プレースホルダー |
| Gray 500 | `#6B7280` | ボディテキスト（サブ） |
| Gray 600 | `#4B5563` | ボディテキスト（メイン） |
| Gray 700 | `#374151` | 引用テキスト |
| Gray 900 | `#111827` | フッター背景 |

### Accent Colors（外部サービス用）
| 名前 | HEX | 用途 |
|------|------|------|
| LINE Green | `#06C755` | LINEボタン・リンク |
| WhatsApp Green | `#25D366` | WhatsAppボタン・リンク |
| Verified Blue | `#3B82F6` | 認証バッジ |
| Success Green | `#22C55E` | オンラインステータス、成功 |

### カラー使用ルール
- **黄色と黒の2色がブランドの核**。UIで迷ったら黄×黒×白の3色で構成する
- アクセントカラーの黄色は **背景には10-20%透明度** で使用（`bg-brand-yellow/10`, `bg-brand-yellow/20`）
- テキストに黄色を直接使う場合は **Brand Yellow Dark (#E5AC00)** を使う（コントラスト確保）
- CTA以外の大面積に黄色を使う場合は **Stats Banner**や**Closingセクション**のように限定的にする
- ダーク背景上の黄色テキストは `text-brand-yellow`（明るい方）でOK

---

## 2. タイポグラフィ

### フォントファミリー
```css
font-family: "Inter", "Noto Sans JP", "Noto Sans Thai", "Noto Sans SC", sans-serif;
```

- **Inter**: 英語・欧文の基本フォント（Google Fonts）
- **Noto Sans JP**: 日本語
- **Noto Sans Thai**: タイ語
- **Noto Sans SC**: 中国語（簡体字）
- 4言語をカバーするため、必ず全フォントを読み込む

### フォントウェイト
| Weight | 用途 |
|--------|------|
| 300 (Light) | 大きなサブヘッド（Hero subtitleなど） |
| 400 (Regular) | ボディテキスト |
| 500 (Medium) | ナビリンク、ラベル |
| 600 (Semibold) | ボタンテキスト、小見出し |
| 700 (Bold) | カードタイトル、セクション小見出し |
| 800 (Extrabold) | **最重要**: セクション見出し、Hero title、数値データ |

### 見出しサイズ（Tailwind CSS）
| 要素 | Mobile | Desktop | クラス |
|------|--------|---------|--------|
| Hero H1 | text-4xl (36px) | text-6xl~7xl (60-72px) | `text-4xl md:text-6xl lg:text-7xl font-extrabold` |
| Section H2 | text-3xl (30px) | text-4xl~5xl (36-48px) | `text-3xl md:text-4xl lg:text-5xl font-extrabold` |
| Card H3 | text-lg~xl (18-20px) | text-xl (20px) | `text-xl font-bold` |
| Body | text-base (16px) | text-lg (18px) | `text-gray-600 text-lg` |
| Small/Caption | text-sm (14px) | text-sm (14px) | `text-sm text-gray-500` |

### テキストスタイルルール
- **見出しは必ず `font-extrabold`（800）**。これがブランドの力強さを表現する最重要要素
- ボディテキストは `text-gray-600`（#4B5563）。真っ黒にはしない
- 引用テキストは `text-gray-700`
- リンク/ボタンテキストは `font-semibold` or `font-bold`
- 行間は `leading-relaxed`（1.625）をボディテキストに適用
- Hero/大見出しには `leading-tight`（1.25）

---

## 3. スペーシング & レイアウト

### コンテナ
```css
.section-container {
  max-width: 80rem; /* max-w-7xl = 1280px */
  margin: 0 auto;
  padding: 0 1rem;    /* px-4 */
  /* sm: px-6, lg: px-8 */
}
```

### セクション間パディング
| 要素 | Mobile | Desktop | クラス |
|------|--------|---------|--------|
| セクション | py-16 (64px) | py-20~24 (80-96px) | `py-16 md:py-24` |
| セクション内見出し→コンテンツ | mb-12 (48px) | mb-14~16 (56-64px) | `mb-12 md:mb-16` |
| カード間ギャップ | gap-6 (24px) | gap-8 (32px) | `gap-6 md:gap-8` |

### グリッドパターン
- **Features/カード群**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`
- **3カラム（Steps等）**: `grid grid-cols-1 md:grid-cols-3 gap-8`
- **2カラム分割（テキスト+画像）**: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`
- **Stats**: `grid grid-cols-2 md:grid-cols-4 gap-6`
- **レビュー**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

### セクション背景の交互パターン
```
白背景 → グレー背景(gray-50) → 白背景 → 写真バナー → 白背景 → 黄色背景 → ダーク背景
```
セクションごとに背景色を交互に切り替えて、視覚的リズムを作る。

---

## 4. コンポーネントパターン

### 4.1 ボタン
```css
/* Primary CTA — 黄色の丸ボタン */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;        /* px-8 py-4 */
  font-size: 1.125rem;       /* text-lg */
  font-weight: 600;          /* font-semibold */
  color: #1A1A1A;            /* text-brand-black */
  background: #FFC107;       /* bg-brand-yellow */
  border-radius: 9999px;     /* rounded-full ← 重要: 完全な丸角 */
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  transition: all 300ms;
}
.btn-primary:hover {
  background: #E5AC00;
  transform: translateY(-2px);
  box-shadow: 0 20px 25px rgba(0,0,0,0.15);
}

/* Secondary — 白地に黒ボーダー */
.btn-secondary {
  /* 同構造、白背景 + border-2 border-brand-black */
  border-radius: 9999px;     /* 丸角は統一 */
}
```

**ボタンルール:**
- **すべてのボタンは `rounded-full`（完全な丸角）**。角丸ではない
- CTAボタンには必ず右矢印アイコン（`ChevronRight` or `ArrowRight`）を付ける
- ホバー時は `hover:-translate-y-0.5` で微妙に浮かせる
- ボタンテキストは `font-semibold` 以上

### 4.2 カード
```
rounded-2xl (16px) or rounded-3xl (24px)
border border-gray-100
shadow-sm → hover:shadow-lg
p-6 or p-8
transition-all duration-300
```

**カードルール:**
- カードの角丸は `rounded-2xl`（16px）または `rounded-3xl`（24px）
- ホバー時にシャドウが大きくなる（`shadow-sm → shadow-lg`）
- カード内のアイコン背景: `w-14 h-14 bg-brand-yellow/10 rounded-2xl`

### 4.3 セクションタグ（ラベル）
各セクションの見出し上に表示する小さなラベル:
```html
<span class="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow-dark text-sm font-semibold rounded-full">
  Section Tag
</span>
```
または uppercase tracking-wider パターン:
```html
<span class="inline-block text-brand-yellow-dark font-semibold text-sm uppercase tracking-wider mb-3">
  SECTION TAG
</span>
```

### 4.4 セクション見出し構成
```
[セクションタグ（黄色ラベル）]
[H2 大見出し（font-extrabold）]
[サブテキスト（text-gray-600, max-w-2xl mx-auto）]
```
必ずこの3段構成。テキストは `text-center` が基本。

### 4.5 Stats/数値カード
```html
<div class="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm text-center">
  <Icon class="w-8 h-8 text-brand-yellow-dark mx-auto mb-3" />
  <p class="text-2xl md:text-3xl font-extrabold text-brand-black">1,000+</p>
  <p class="text-sm text-brand-black/60 mt-1">Label</p>
</div>
```
- 数値は必ず `font-extrabold`
- 背景が黄色の場合は `bg-white/80 backdrop-blur`

### 4.6 レビューカード
```
bg-white rounded-2xl p-6 shadow-md
├── 星（5つ、brand-yellow fill）
├── 引用テキスト（"text"、左右にダブルクォート）
├── 区切り線（border-t border-gray-100）
└── アバター + 名前 + 説明
```

### 4.7 料金カード
- 通常: `bg-white border-2 border-gray-100 rounded-3xl`
- 人気（推奨）: `bg-brand-black text-white rounded-3xl scale-105 shadow-2xl`
- 人気プランは黒背景で差別化、`POPULAR`バッジは黄色
- 料金数値は `text-4xl font-extrabold`、人気プランは黄色テキスト

### 4.8 FAQアコーディオン
```
bg-white rounded-2xl border border-gray-100 shadow-sm
├── ボタン: p-6, font-semibold, ChevronDown（回転アニメーション）
└── 回答: px-6 pb-6, text-gray-600, max-h transition
```

---

## 5. 写真・画像の使い方

### ライフスタイル写真パターン
HelloNannyブランドでは **感情に訴える写真** を重視する:

1. **Hero全幅写真**: `h-[85vh] min-h-[600px]` + ダークグラデーションオーバーレイ
   ```css
   background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5), transparent);
   ```

2. **セクション間バナー**: `h-[40vh] min-h-[300px]` + 黒オーバーレイ
   ```css
   background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
   ```

3. **分割レイアウト（写真+テキスト）**: `grid lg:grid-cols-2` 片側写真、片側テキスト

4. **カード内写真**: `h-48 rounded-t-3xl overflow-hidden group-hover:scale-105 transition-transform duration-500`

### 写真スタイルガイド
- **トーン**: 暖かい、自然光、ライフスタイル系
- **被写体**: 家族、子供、ナニーとの触れ合いシーン
- **避けるもの**: スタジオ撮影感、冷たいトーン、ビジネス感が強いもの
- **オーバーレイ**: 写真の上に文字を載せる場合、必ずグラデーションオーバーレイ

### アバター
- DiceBear API を使用: `https://api.dicebear.com/7.x/initials/svg?seed={name}&backgroundColor=FFC107`
- 角丸: `rounded-full`

---

## 6. アニメーション & インタラクション

### 定義済みアニメーション
```css
fade-in:        opacity 0→1, 0.6s ease-out
fade-in-up:     opacity 0→1 + translateY(20px→0), 0.6s ease-out
slide-in-left:  opacity 0→1 + translateX(-20px→0), 0.6s ease-out
slide-in-right: opacity 0→1 + translateX(20px→0), 0.6s ease-out
```

### インタラクションルール
- **ボタン**: `transition-all duration-300` + hover時に `-translate-y-0.5` + shadow変化
- **カード**: `transition-all duration-300` + hover時に shadow-sm → shadow-lg
- **画像ホバー**: `group-hover:scale-105 transition-transform duration-500`
- **アコーディオン矢印**: `transition-transform duration-300` + rotate-180
- **全体**: `transition-colors` をリンク・テキストに適用

### 原則
- アニメーションは **控えめで上品** に。派手すぎるものは避ける
- duration は **300ms**（インタラクション）〜**500-600ms**（エントランス）
- ease-out を基本に使用

---

## 7. アイコンシステム

### 使用ライブラリ
**lucide-react** を標準採用

### サイズ規定
| 用途 | サイズ | クラス |
|------|--------|--------|
| ナビ/ボタン内 | 16-20px | `w-4 h-4` ~ `w-5 h-5` |
| カード内アイコン | 28px | `w-7 h-7` |
| 装飾/セクション | 32px | `w-8 h-8` |
| プレースホルダー | 64px | `w-16 h-16` |

### アイコンの背景パターン
```html
<!-- 標準: 黄色半透明背景 -->
<div class="w-14 h-14 bg-brand-yellow/10 rounded-2xl flex items-center justify-center">
  <Icon class="w-7 h-7 text-brand-yellow-dark" />
</div>

<!-- ダーク: 黒背景 -->
<div class="w-14 h-14 bg-brand-black rounded-2xl flex items-center justify-center">
  <Icon class="w-7 h-7 text-white" />
</div>
```

---

## 8. ナビゲーション

### トップナビバー
```
fixed top-0, bg-white/95 backdrop-blur-sm (Plus LP)
または
fixed top-0, bg-brand-yellow (Main Site)
```

- 高さ: `h-16 md:h-20`
- ロゴ: 黄色角丸四角 + 「H」文字 + ブランド名
- デスクトップ: 中央にリンク群、右端にCTAボタン + 言語切替
- モバイル: ハンバーガーメニュー（`Menu`/`X` アイコン切替）

### 言語切替UI
- Globe アイコン + 現在の言語名
- ドロップダウン: `bg-white rounded-xl shadow-lg border border-gray-100`
- 選択中: `font-bold text-brand-yellow-dark`

---

## 9. フッター

```
bg-brand-gray-900 (≒ #111827) text-gray-400
├── 4カラムグリッド
│   ├── ブランドロゴ + 説明 + 住所
│   ├── Service リンク
│   ├── Company リンク
│   └── Legal リンク
├── 区切り線: border-t border-gray-800
└── コピーライト + 運営会社
```

---

## 10. レスポンシブ設計

### ブレークポイント（Tailwind デフォルト）
| Prefix | Width |
|--------|-------|
| (default) | < 640px (モバイル) |
| sm: | ≥ 640px |
| md: | ≥ 768px |
| lg: | ≥ 1024px |
| xl: | ≥ 1280px |

### モバイルファーストルール
- グリッドは `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-3~4`
- 見出しは小→大（`text-3xl md:text-4xl lg:text-5xl`）
- パディングは `py-16 md:py-24`
- ナビはハンバーガーメニュー（`lg:hidden` / `hidden lg:flex`）
- 画像付きセクションは縦積み→横並び

---

## 11. 多言語（i18n）対応

### 対応言語
EN（英語）、JA（日本語）、ZH（中国語簡体字）、TH（タイ語）

### 実装パターン
```typescript
// React Context を使用
const { locale, setLocale, t } = useLocale();

// 翻訳キーでアクセス
<h1>{t.hero.title}</h1>
```

### フォント対応
言語ごとのフォントはCSS font-family のフォールバックで自動適用:
```
Inter → Noto Sans JP → Noto Sans Thai → Noto Sans SC → sans-serif
```

---

## 12. トーン＆マナー（ブランドの空気感）

### ビジュアルの原則
1. **温かみ**: 黄色のアクセントは「太陽」「笑顔」「家庭の温もり」を表現
2. **信頼感**: 黒×白のクリーンなベースは「プロフェッショナル」「信頼」を表現
3. **モダン**: 丸角（rounded-full, rounded-2xl~3xl）、大胆な太字で「今風」を演出
4. **感情優先**: テクニカルな説明より、写真・数値・体験談で「感じてもらう」
5. **シンプル**: 装飾は最小限。余白を贅沢に使う

### コピーライティングの原則
- 見出しは **短く力強く**（3-8単語程度）
- サブテキストで補足
- 数値データを積極的に使う（「1,000+」「3日」「98%」）
- 家族・安心・笑顔に関連するキーワードを自然に織り交ぜる
- 専門用語は避け、平易な言葉を使う

### 避けるべきもの
- ❌ 角張ったデザイン（sharp corners）
- ❌ 冷たい青系の配色
- ❌ 小さすぎるテキスト
- ❌ 複雑なフォームやUI
- ❌ ダークモード（現時点ではライトモードのみ）
- ❌ 過度なアニメーション
- ❌ ストック写真感（ビジネス系、スーツ姿など）

---

## 13. Tailwind CSS 設定テンプレート

以下を `tailwind.config.ts` にコピーして使用:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFC107",
          "yellow-dark": "#E5AC00",
          "yellow-light": "#FFD54F",
          black: "#1A1A1A",
          white: "#FFFFFF",
          gray: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
          },
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans JP",
          "Noto Sans Thai",
          "Noto Sans SC",
          "sans-serif",
        ],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
```

---

## 14. CSS ユーティリティテンプレート

以下を `globals.css` にコピーして使用:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Sans+Thai:wght@300;400;500;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap');

:root {
  --background: #ffffff;
  --foreground: #1A1A1A;
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: "Inter", "Noto Sans JP", "Noto Sans Thai", "Noto Sans SC", sans-serif;
}

@layer components {
  .section-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .btn-primary {
    @apply inline-flex items-center justify-center px-8 py-4 text-lg font-semibold
           text-brand-black bg-brand-yellow rounded-full
           hover:bg-brand-yellow-dark transition-all duration-300
           shadow-lg hover:shadow-xl hover:-translate-y-0.5;
  }

  .btn-secondary {
    @apply inline-flex items-center justify-center px-8 py-4 text-lg font-semibold
           text-brand-black bg-white border-2 border-brand-black rounded-full
           hover:bg-brand-gray-50 transition-all duration-300;
  }

  .btn-line {
    @apply inline-flex items-center justify-center px-6 py-3 text-lg font-semibold
           text-white bg-[#06C755] rounded-full
           hover:bg-[#05b04c] transition-all duration-300 shadow-lg;
  }

  .btn-whatsapp {
    @apply inline-flex items-center justify-center px-6 py-3 text-lg font-semibold
           text-white bg-[#25D366] rounded-full
           hover:bg-[#1fbd5a] transition-all duration-300 shadow-lg;
  }
}
```

---

## 15. Phone Mockup コンポーネント（アプリ紹介用）

アプリUIを紹介する際に使用するスマホ風フレーム:

```tsx
function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto">
      <div className="relative bg-brand-black rounded-[2.5rem] p-3 shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-brand-black rounded-b-2xl z-10" />
        <div className="relative bg-white rounded-[2rem] overflow-hidden w-[280px] h-[560px]">
          {children}
        </div>
      </div>
    </div>
  );
}
```

- ノッチ付き
- 黒フレーム + 丸角 `rounded-[2.5rem]`
- 内部スクリーン: 白背景 `rounded-[2rem]`

---

## Quick Reference チートシート

```
ブランドカラー:  黄 #FFC107 / 黒 #1A1A1A / 白 #FFFFFF
見出し:         font-extrabold (800) が基本
ボタン:         rounded-full + shadow-lg + hover浮遊
カード:         rounded-2xl~3xl + border-gray-100 + hover shadow
セクション背景:  白 ↔ gray-50 交互 + 写真バナー挟む
アイコン:       lucide-react / 背景は brand-yellow/10 + rounded-2xl
アニメーション:  300ms(操作) / 600ms(表示) / ease-out
写真:           暖かい・自然光・家族/子供 + グラデーションオーバーレイ
フォント:       Inter + Noto Sans (JP/TH/SC)
```
