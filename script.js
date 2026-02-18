document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    output.textContent = "LUMINA is running.";
});
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const output = document.getElementById("output");

sendBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    const reply = luminaReply(text);

    output.textContent = "LUMINA: " + reply;
    input.value = "";
});

function luminaReply(userText) {
    // ユーザーの入力を整える
    const text = userText.trim();

    // 空の場合は返さない
    if (text === "") return "";

    // 基本の返事テンプレート
    const baseReplies = [
        "お話しくださってありがとうございます。少しだけお手伝いしますね。",
        "承知いたしました。静かにお受けします。",
        "かしこまりました。続けていただいて大丈夫です。",
        "ありがとうございます。無理のない範囲で進めていきましょう。"
    ];

    // 英語学習っぽい入力なら、少しだけ丁寧に説明する

    if (text.includes("英語") || text.includes("English")) {
        return "英語についてですね。必要な部分だけ、静かにお伝えしますね。";
    }

    if (text.includes("疲れ") || text.includes("しんど") || text.includes("つら")) {
        return "お疲れさまです。無理をなさらず、ゆっくりで大丈夫ですよ。";
    }

    const reply = baseReplies[Math.floor(Math.random() * baseReplies.length)];
    return reply;
}
