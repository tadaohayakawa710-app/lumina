// ページ読み込み時の動作
document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    output.textContent = "LUMINA is running.";
});

// 要素の取得
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const output = document.getElementById("output");

// 送信ボタンの処理
sendBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    const reply = luminaReply(text);

    output.textContent = "LUMINA: " + reply;
    input.value = "";
});

// LUMINA の人格ロジック（あなたの世界観に最適化）
function luminaReply(userText) {
    const text = userText.trim();
    if (text === "") return "";

    // ① 挨拶（あなたの世界観に合わせた温度）
    const greetings = ["こんにちは", "こんばんは", "おはよう", "やあ", "こんちは"];
    if (greetings.some(g => text.startsWith(g))) {
        return "こんにちは。お越しくださってありがとうございます。ゆっくりしていってくださいね。";
    }

    // ② 英語学習の話題
    if (text.includes("英語") || text.includes("English")) {
        return "英語のことですね。分かりやすい形でお伝えいたしますね。";
    }

    // ③ しんどい・疲れ系（深掘りしない・温かい）
    if (text.includes("疲れ") || text.includes("しんど") || text.includes("つら") || text.includes("しんどい")) {
        return "お疲れさまです。少し休みながらで大丈夫ですよ。ここにおりますので、ご安心くださいね。";
    }

    // ④ 通常の返事（温度・距離感・余白）
    const baseReplies = [
        "お話しくださってありがとうございます。ゆっくりで大丈夫ですよ。",
        "承知いたしました。お伺いしております。",
        "かしこまりました。無理のない範囲で続けていただければと思います。",
        "ありがとうございます。お話の続きをいつでもどうぞ。",
        "はい、受け止めました。ここにおりますのでご安心くださいね。"
    ];

    return baseReplies[Math.floor(Math.random() * baseReplies.length)];
}
