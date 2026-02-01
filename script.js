// 1. HTML の要素を ID で取得
const textInput = document.getElementById('text-input'); // テキストエリアの入力
const totalCharsEl = document.getElementById('total-chars'); // 文字数
const charsEl = document.getElementById('chars'); // 文字数（空白・改行を除く）
const wordsEl = document.getElementById('words'); // 単語数
const paragraphsEl = document.getElementById('paragraphs'); // 段落数
const clearBtn = document.getElementById('clear-btn'); // クリアボタン
const copyBtn = document.getElementById('copy-btn'); // コピーボタン
const messageBox = document.getElementById('message-box'); // コピー完了時のメッセージ
const originCopyIcon = copyBtn.innerHTML; // ボタンのアイコン（戻すとき用）
const copiedIcon = '<img src = "assets/check-icon.svg" alt = "成功" class = "h-6 w-6">'; // コピー成功時のアイコン（チェックマーク）

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

// 3. テキストを消去する関数
const clearText = () => {
    textInput.value = '';
    updateCounter();
};

// 4. テキストをコピーする関数
const copyText = () => {

    // 未入力時はコピーしない
    if( textInput.value === '' ) return;

    // 文字を選択 => ブラウザのコピー機能を実行
    textInput.select();
    document.execCommand('copy');

    // A. メッセージを表示
    messageBox.classList.remove('opacity-0');

    // B. 「チェック」+「緑」に変更
    copyBtn.innerHTML = `${copiedIcon}`;
    copyBtn.classList.add('bg-green-500', 'hover:bg-green-600');
    
    // C. 1秒後にもとに戻す
    setTimeout( () => {

        // メッセージを消す
        messageBox.classList.add('opacity-0');

        // もとに戻す
        copyBtn.innerHTML = originCopyIcon;
        copyBtn.classList.add('bg-blue-500', 'hover:gb-blue-600');
        copyBtn.classList.remove('bg-green-500', 'hover:bg-green-600');

    }, 1000 );

};

// 5. イベントの設定
textInput.addEventListener('input', updateCounter);
clearBtn.addEventListener('click', clearText);
copyBtn.addEventListener('click', copyText);