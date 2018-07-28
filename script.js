const tweetDivided = document.getElementById('tweet-area');

function shindan() {
    // 「なまえ」フォームの取得
    const name = document.getElementById("name").value;
    // 「誕生日」フォームの取得
    const birthday = document.getElementById("birthday").value;
    // 回答のバリエーション
    const sentence = [
        "今日の運勢は…　大吉！",
        "今日の運勢は…　中吉！",
        "今日の運勢は…　小吉！",
        "今日の運勢は…　吉！",
        "今日の運勢は…　凶…。。",
        
    ];

    // 結果アルゴリズム
    const number = name.length * birthday % sentence.length;
    const result = sentence[number];
    document.getElementById("result").textContent = result;

    // 以下 Tweet 用
    while (tweetDivided.firstChild) {
        tweetDivided.removeChild(tweetDivided.firstChild);
    }
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=自作診断アプリ（N高オープンキャンパス）&text='
    + encodeURIComponent(result);
    anchor.setAttribute('href', hrefValue);
    anchor.innerText = 'Tweet';
    tweetDivided.appendChild(anchor);

    twttr.widgets.load();
}
