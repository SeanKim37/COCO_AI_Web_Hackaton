const Team_SSG = [[538, '김광현', 'SP', 3.41], [1855, '추신수', 'DH', 2.62], [1757, '최지훈', 'LF', 3.45], [560, '최정', '3B', 3.52],
    [578, '한유섬', 'RF', 2.7], [1541, '박성한', 'SS', 3.09], [571, '김강민', 'CF', 0.22], [2035, '전의산', '1B', 1.22], [614, '김민식', 'C', 0.97], [562, '김성현', '2B', -0.27]];
const Team_KIWOOM = [[1590, '안우진', 'SP', 4.83], [419, '김준완', 'LF', 0.63], [1338, '송성문', '3B', 0.78], [1479, '이정후', 'CF', 4.61],
    [1970, '푸이그', 'RF', 1.02], [1517, '김혜성', '2B', 2.26], [1994, '박찬혁', 'DH', -0.11], [1916, '김휘집', 'SS', 1.39], [454, '이지영', 'C', 0.57], [932, '김태진', '1B', -0.04]];
const Team_LG = [[298, '임찬규', 'SP', -0.01], [1445, '홍창기', 'RF', 2.21], [505, '박해민', 'CF', 1.95], [668, '김현수', 'DH', 2.61],
    [348, '채은성', '1B', 2.06], [1559, '가르시아', '2B', 1.45], [1602, '문성주', 'LF', 2.26], [369, '유강남', 'C', 1.38], [1894, '문보경', '3B', 1.59], [1902, '이영빈', 'SS', -0.22]];
const Team_KT = [[1753, '데스파이네', 'SP', 2.62], [1485, '조용호', 'RF', 1.13], [914, '배정대', 'CF', 1.31], [2041, '알포드', 'LF', 0.31],
    [221, '박병호', '1B', 2.97], [748, '황재균', '3B', 1.44], [1477, '김민혁', 'DH', -0.05], [370, '박경수', '2B', -0.97], [765, '김준태', 'C', 1.31], [1288, '심우준', 'SS', 0.59]];
const Team_KIA = [[2051, '파노니', 'SP', 0.04], [897, '박찬호', 'SS', 1.01], [1976, '소크라테스', 'CF', 3.66], [950, '이창진', 'LF', 1.35],
    [836, '나성범', 'RF', 3.94], [1318, '황대인', '1B', 0.47], [471, '최형우', 'DH', 0.41], [126, '김선빈', '2B', 2.16], [214, '박동원', 'C', 1.38], [704, '류지혁', '3B', 1.31]];
const Team_DOOSAN = [[1610, '최원준', 'SP', 0.87], [664, '허경민', '3B', 2.24], [681, '김인태', 'RF', 1.13], [1641, '페르난데스', 'DH', 1.39],
    [675, '김재환', 'LF', 1.7], [911, '양석환', '1B', 0.96], [649, '박세혁', 'C', 0.57], [1756, '안권수', 'CF', 1.28], [657, '김재호', 'SS', 0.13], [1873, '안재석', '2B', -0.37]];
const Team_LOTTE = [[1985, '반즈', 'SP', 3.49], [127, '안치홍', '2B', 3.04], [2054, '렉스', 'RF', 1.29], [1148, '이대호', 'DH', 1.9],
    [762, '전준우', 'LF', 1.75], [1547, '한동희', '3B', 2.63], [1852, '이호연', '1B', 0.16], [1311, '지시완', 'C', 0.49], [1648, '이학주', 'SS', -0.65], [2016, '황성빈', 'CF', 0.57]];
const Team_NC = [[1399, '구창모', 'SP', 1.75], [830, '박민우', '2B', 0.62], [760, '손아섭', 'RF', 1.56], [672, '박건우', 'CF', 1.79],
    [647, '양의지', 'C', 2.08], [1984, '마티니', '1B', 2.86], [395, '권희동', 'RF', 0.7], [829, '노진혁', '3B', 0.96], [1923, '김주원', 'SS', 0.65], [1926, '이명기', 'DH', -0.04]];
const Team_SAMSUNG = [[1980, '수아레즈', 'SP', 3.21], [1952, '김현준', 'CF', 1.55], [891, '강한울', '3B', -0.11], [1860, '피렐라', 'LF', 4.54],
    [517, '구자욱', 'RF', 0.32], [662, '오재일', '1B', 1.94], [818, '김태군', 'C', 1.49], [1321, '김재성', 'DH', 0.68], [1754, '김지찬', '2B', 1.43], [464, '김상수', 'SS', -0.26]];
const Team_HANHWA = [[1956, '남지민', 'SP', -0.32], [1977, '터크먼', 'CF', 2.24], [1568, '장진혁', 'RF', -0.29], [1569, '정은원', 'DH', 2.02],
    [1652, '노시환', '3B', 1.72], [37, '하주석', 'SS', 0.19], [1606, '김인환', '1B', 0.63], [1515, '김태연', '2B', -0.56], [648, '최재훈', 'C', 0.78], [61, '장운호', 'LF', 0.19]];

let add_btn_away = document.getElementById("add_btn_away");
let away_select = document.getElementById("away_select");
let away_input = document.getElementById("away_input");
let away_change = document.getElementById("away_change");

let add_btn_home = document.getElementById("add_btn_home");
let home_select = document.getElementById("home_select");
let home_input = document.getElementById("home_input");
let home_change = document.getElementById("home_change");

let player_predict_btn = document.getElementById("player_predict_btn");

let team_modal = document.getElementById("team_modal");
let team_back = document.getElementById("team_back");

let away_detail_name_0 = document.getElementById("away_detail_name_0");
let away_detail_position_0 = document.getElementById("away_detail_position_0");
let away_detail_team_0 = document.getElementById("away_detail_team_0");
let away_detail_war_0 = document.getElementById("away_detail_war_0");

let away_detail_name_1 = document.getElementById("away_detail_name_1");
let away_detail_position_1 = document.getElementById("away_detail_position_1");
let away_detail_team_1 = document.getElementById("away_detail_team_1");
let away_detail_war_1 = document.getElementById("away_detail_war_1");

let away_detail_name_2 = document.getElementById("away_detail_name_2");
let away_detail_position_2 = document.getElementById("away_detail_position_2");
let away_detail_team_2 = document.getElementById("away_detail_team_2");
let away_detail_war_2 = document.getElementById("away_detail_war_2");

let away_detail_name_3 = document.getElementById("away_detail_name_3");
let away_detail_position_3 = document.getElementById("away_detail_position_3");
let away_detail_team_3 = document.getElementById("away_detail_team_3");
let away_detail_war_3 = document.getElementById("away_detail_war_3");

let away_detail_name_4 = document.getElementById("away_detail_name_4");
let away_detail_position_4 = document.getElementById("away_detail_position_4");
let away_detail_team_4 = document.getElementById("away_detail_team_4");
let away_detail_war_4 = document.getElementById("away_detail_war_4");

let away_detail_name_5 = document.getElementById("away_detail_name_5");
let away_detail_position_5 = document.getElementById("away_detail_position_5");
let away_detail_team_5 = document.getElementById("away_detail_team_5");
let away_detail_war_5 = document.getElementById("away_detail_war_5");

let away_detail_name_6 = document.getElementById("away_detail_name_6");
let away_detail_position_6 = document.getElementById("away_detail_position_6");
let away_detail_team_6 = document.getElementById("away_detail_team_6");
let away_detail_war_6 = document.getElementById("away_detail_war_6");

let away_detail_name_7 = document.getElementById("away_detail_name_7");
let away_detail_position_7 = document.getElementById("away_detail_position_7");
let away_detail_team_7 = document.getElementById("away_detail_team_7");
let away_detail_war_7 = document.getElementById("away_detail_war_7");

let away_detail_name_8 = document.getElementById("away_detail_name_8");
let away_detail_position_8 = document.getElementById("away_detail_position_8");
let away_detail_team_8 = document.getElementById("away_detail_team_8");
let away_detail_war_8 = document.getElementById("away_detail_war_8");

let away_detail_name_9 = document.getElementById("away_detail_name_9");
let away_detail_position_9 = document.getElementById("away_detail_position_9");
let away_detail_team_9 = document.getElementById("away_detail_team_9");
let away_detail_war_9 = document.getElementById("away_detail_war_9");

let home_detail_name_0 = document.getElementById("home_detail_name_0");
let home_detail_position_0 = document.getElementById("home_detail_position_0");
let home_detail_team_0 = document.getElementById("home_detail_team_0");
let home_detail_war_0 = document.getElementById("home_detail_war_0");

let home_detail_name_1 = document.getElementById("home_detail_name_1");
let home_detail_position_1 = document.getElementById("home_detail_position_1");
let home_detail_team_1 = document.getElementById("home_detail_team_1");
let home_detail_war_1 = document.getElementById("home_detail_war_1");

let home_detail_name_2 = document.getElementById("home_detail_name_2");
let home_detail_position_2 = document.getElementById("home_detail_position_2");
let home_detail_team_2 = document.getElementById("home_detail_team_2");
let home_detail_war_2 = document.getElementById("home_detail_war_2");

let home_detail_name_3 = document.getElementById("home_detail_name_3");
let home_detail_position_3 = document.getElementById("home_detail_position_3");
let home_detail_team_3 = document.getElementById("home_detail_team_3");
let home_detail_war_3 = document.getElementById("home_detail_war_3");

let home_detail_name_4 = document.getElementById("home_detail_name_4");
let home_detail_position_4 = document.getElementById("home_detail_position_4");
let home_detail_team_4 = document.getElementById("home_detail_team_4");
let home_detail_war_4 = document.getElementById("home_detail_war_4");

let home_detail_name_5 = document.getElementById("home_detail_name_5");
let home_detail_position_5 = document.getElementById("home_detail_position_5");
let home_detail_team_5 = document.getElementById("home_detail_team_5");
let home_detail_war_5 = document.getElementById("home_detail_war_5");

let home_detail_name_6 = document.getElementById("home_detail_name_6");
let home_detail_position_6 = document.getElementById("home_detail_position_6");
let home_detail_team_6 = document.getElementById("home_detail_team_6");
let home_detail_war_6 = document.getElementById("home_detail_war_6");

let home_detail_name_7 = document.getElementById("home_detail_name_7");
let home_detail_position_7 = document.getElementById("home_detail_position_7");
let home_detail_team_7 = document.getElementById("home_detail_team_7");
let home_detail_war_7 = document.getElementById("home_detail_war_7");

let home_detail_name_8 = document.getElementById("home_detail_name_8");
let home_detail_position_8 = document.getElementById("home_detail_position_8");
let home_detail_team_8 = document.getElementById("home_detail_team_8");
let home_detail_war_8 = document.getElementById("home_detail_war_8");

let home_detail_name_9 = document.getElementById("home_detail_name_9");
let home_detail_position_9 = document.getElementById("home_detail_position_9");
let home_detail_team_9 = document.getElementById("home_detail_team_9");
let home_detail_war_9 = document.getElementById("home_detail_war_9");

let team_check = 0;
let team_check_change = 0;
let away_or_home = null;
let team_fix = null;

add_btn_away.onclick = add_btn_away_click;
away_change.onclick = away_change_click;
add_btn_home.onclick = add_btn_home_click;
home_change.onclick = home_change_click;

// AWAY TEAM 다시 SELECT 했을 때
function away_change_click() {
    team_check_change = 0;
    team_modal.style.display = 'flex';
    away_or_home = 'away';
    team_back.onclick = team_back_click;
}

// HOME TEAM 다시 SELECT 했을 때
function home_change_click() {
    team_check_change = 0;
    team_modal.style.display = 'flex';
    away_or_home = 'home';
    team_back.onclick = team_back_click;
}

// AWAY TEAM SELECT 했을 때
function add_btn_away_click() {
    team_check_change = 1;
    team_modal.style.display = 'flex';
    away_or_home = 'away';
    team_back.onclick = team_back_click;
}

// HOME TEAM SELECT 했을 때
function add_btn_home_click() {
    team_check_change = 1;
    team_modal.style.display = 'flex';
    away_or_home = 'home';
    team_back.onclick = team_back_click;
}

// TEAM MODAL 클릭 했을 때
function team_img_click(team) {
    console.log(team)
    team_fix = team_name_fix(team);

    if (away_or_home == 'away') {
        away_select.style.display = 'none';
        add_btn_away.style.display = 'none';
        away_change.style.display = 'flex';
        away_input.style.display = 'flex';

        away_detail_name_0.textContent = team_fix[0][1];
        away_detail_position_0.textContent = team_fix[0][2];
        away_detail_team_0.textContent = team;
        away_detail_war_0.textContent = team_fix[0][3];

        away_detail_name_1.textContent = team_fix[1][1];
        away_detail_position_1.textContent = team_fix[1][2];
        away_detail_team_1.textContent = team;
        away_detail_war_1.textContent = team_fix[1][3];

        away_detail_name_2.textContent = team_fix[2][1];
        away_detail_position_2.textContent = team_fix[2][2];
        away_detail_team_2.textContent = team;
        away_detail_war_2.textContent = team_fix[2][3];

        away_detail_name_3.textContent = team_fix[3][1];
        away_detail_position_3.textContent = team_fix[3][2];
        away_detail_team_3.textContent = team;
        away_detail_war_3.textContent = team_fix[3][3];

        away_detail_name_4.textContent = team_fix[4][1];
        away_detail_position_4.textContent = team_fix[4][2];
        away_detail_team_4.textContent = team;
        away_detail_war_4.textContent = team_fix[4][3];

        away_detail_name_5.textContent = team_fix[5][1];
        away_detail_position_5.textContent = team_fix[5][2];
        away_detail_team_5.textContent = team;
        away_detail_war_5.textContent = team_fix[5][3];

        away_detail_name_6.textContent = team_fix[6][1];
        away_detail_position_6.textContent = team_fix[6][2];
        away_detail_team_6.textContent = team;
        away_detail_war_6.textContent = team_fix[6][3];

        away_detail_name_7.textContent = team_fix[7][1];
        away_detail_position_7.textContent = team_fix[7][2];
        away_detail_team_7.textContent = team;
        away_detail_war_7.textContent = team_fix[7][3];

        away_detail_name_8.textContent = team_fix[8][1];
        away_detail_position_8.textContent = team_fix[8][2];
        away_detail_team_8.textContent = team;
        away_detail_war_8.textContent = team_fix[8][3];

        away_detail_name_9.textContent = team_fix[9][1];
        away_detail_position_9.textContent = team_fix[9][2];
        away_detail_team_9.textContent = team;
        away_detail_war_9.textContent = team_fix[9][3];

    } else if (away_or_home == "home") {
        home_select.style.display = 'none';
        add_btn_home.style.display = 'none';
        home_change.style.display = 'flex';
        home_input.style.display = 'flex';

        home_detail_name_0.textContent = team_fix[0][1];
        home_detail_position_0.textContent = team_fix[0][2];
        home_detail_team_0.textContent = team;
        home_detail_war_0.textContent = team_fix[0][3];

        home_detail_name_1.textContent = team_fix[1][1];
        home_detail_position_1.textContent = team_fix[1][2];
        home_detail_team_1.textContent = team;
        home_detail_war_1.textContent = team_fix[1][3];

        home_detail_name_2.textContent = team_fix[2][1];
        home_detail_position_2.textContent = team_fix[2][2];
        home_detail_team_2.textContent = team;
        home_detail_war_2.textContent = team_fix[2][3];

        home_detail_name_3.textContent = team_fix[3][1];
        home_detail_position_3.textContent = team_fix[3][2];
        home_detail_team_3.textContent = team;
        home_detail_war_3.textContent = team_fix[3][3];

        home_detail_name_4.textContent = team_fix[4][1];
        home_detail_position_4.textContent = team_fix[4][2];
        home_detail_team_4.textContent = team;
        home_detail_war_4.textContent = team_fix[4][3];

        home_detail_name_5.textContent = team_fix[5][1];
        home_detail_position_5.textContent = team_fix[5][2];
        home_detail_team_5.textContent = team;
        home_detail_war_5.textContent = team_fix[5][3];

        home_detail_name_6.textContent = team_fix[6][1];
        home_detail_position_6.textContent = team_fix[6][2];
        home_detail_team_6.textContent = team;
        home_detail_war_6.textContent = team_fix[6][3];

        home_detail_name_7.textContent = team_fix[7][1];
        home_detail_position_7.textContent = team_fix[7][2];
        home_detail_team_7.textContent = team;
        home_detail_war_7.textContent = team_fix[7][3];

        home_detail_name_8.textContent = team_fix[8][1];
        home_detail_position_8.textContent = team_fix[8][2];
        home_detail_team_8.textContent = team;
        home_detail_war_8.textContent = team_fix[8][3];

        home_detail_name_9.textContent = team_fix[9][1];
        home_detail_position_9.textContent = team_fix[9][2];
        home_detail_team_9.textContent = team;
        home_detail_war_9.textContent = team_fix[9][3];
    }

    team_modal.style.display = 'none';

    if (team_check_change == 1) {
        team_check += 1;
    }
    if (team_check == 2) {
        player_predict_btn.style.visibility = 'visible';
    }
}

function team_name_fix(team) {
    let team_value = [];
    if (team == "SSG") {
        team_value = Team_SSG;
    } else if (team == "키움") {
        team_value = Team_KIWOOM;
    } else if (team == "LG") {
        team_value = Team_LG;
    } else if (team == "KT") {
        team_value = Team_KT;
    } else if (team == "KIA") {
        team_value = Team_KIA;
    } else if (team == "두산") {
        team_value = Team_DOOSAN;
    } else if (team == "롯데") {
        team_value = Team_LOTTE;
    } else if (team == "NC") {
        team_value = Team_NC;
    } else if (team == "삼성") {
        team_value = Team_SAMSUNG;
    } else if (team == "한화") {
        team_value = Team_HANHWA;
    } else {
        console.log("팀명 변경 과정에서의 코드 문제")
    }
    return team_value;
}

// TEAM MODAL 뒤로 가기
function team_back_click() {
    team_modal.style.display = 'none';
}

/////////////////////////////////////////////////////
