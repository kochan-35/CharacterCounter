// 1. HTML の要素を ID で取得
const textInput = document.getElementById('text-input'); // テキストエリアの入力
const totalCharsEl = document.getElementById('total-chars'); // 文字数
const charsEl = document.getElementById('chars'); // 文字数（空白・改行を除く）
const wordsEl = document.getElementById('words'); // 単語数
const paragraphsEl = document.getElementById('paragraphs'); // 段落数

// 2. 文字数を数えて表示を更新する関数
const updateCounter = () => {

    // 入力エリアに入っている文字を取得
    const text = textInput.value;

    // A. 総文字数
    totalCharsEl.textContent = text.length;

    // B. 空白・空行を除いた文字数
    const chars = text.replace(/\s/g, '').length;
    charsEl.textContent = chars;

    // C. 単語数
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    wordsEl.textContent = words;

    // D. 段落数
    const paragraphs = text.split('\n').filter(line => line.trim() !== '').length;
    paragraphsEl.textContent = paragraphs;

};

// 3. 入力がある => 上の関数を実行
textInput.addEventListener('input', updateCounter);