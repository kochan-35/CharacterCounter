// 1. HTML の要素を ID を使用して取得
const textInput = document.getElementById('text-input');
const totalCharsEl = document.getElementById('total-chars');

// 2. 文字数を数えて表示を更新する関数
const updateCounter = () => {

    // 入力エリアに入っている文字を取得
    const text = textInput.value;

    // 文字数を数える
    const count = text.length;

    // 画面の数字を書き換える
    totalCharsEl.textContent = count;
};

// 3. 「入力」があったら、上の関数を実行できるように設定
textInput.addEventListener('input', updateCounter);