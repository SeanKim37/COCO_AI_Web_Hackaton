
let winlose_x;
let winlose_y;
let winlose_r;
let away_rate;
let home_rate;
let away_rate_width;
let home_rate_width;
let away_rate_value;
let home_rate_value;

async function loadModel() {
    model = undefined;
    model = await tf.loadLayersModel('https://raw.githubusercontent.com/SeanKim37/KBO_WinLose_Predict/main/model.json');
    console.log("WinLose Model Loaded")
}
loadModel();

let away_rate_predict = document.getElementById('away_rate_predict');
let home_rate_predict = document.getElementById('home_rate_predict');
let away_predict_text = document.getElementById('away_predict_text');
let home_predict_text = document.getElementById('home_predict_text');

player_predict_btn.onclick = player_predict_btn_click;

function player_predict_btn_click() {
    winlose_x = tf.tensor2d([winlose_data]);
    winlose_y = model.predict(winlose_x);
    winlose_r = winlose_y.dataSync();
    away_rate = Math.round((winlose_r[0] + Number.EPSILON) * 100);
    home_rate = Math.round((1-winlose_r[0] + Number.EPSILON) * 100);
    away_rate_width = (away_rate * 10).toString() + 'px';
    home_rate_width = (home_rate * 10).toString() + 'px';
    console.log(away_rate_width, home_rate_width);

    away_rate_predict.style.width = away_rate_width;
    home_rate_predict.style.width = home_rate_width;

    away_rate_value = away_rate.toString() + '%';
    home_rate_value = home_rate.toString() + '%';

    away_predict_text.textContent = away_rate_value;
    home_predict_text.textContent = home_rate_value;

    alert("인공지능이 예측한 경기 결과입니다!");
}