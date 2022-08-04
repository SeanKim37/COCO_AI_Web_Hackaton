let find_place = null;

let player_modal = document.getElementById('player_modal');
let player_back = document.getElementById('player_back');
let floatWar

player_back.onclick = player_back_click;

function check_box_click(name, team, position, war) {
    player_modal.style.display = 'none';
    floatWar = parseFloat(war);
    change_player_detail(find_place, name, team, position, floatWar);
    player_predict_btn_click('1');
}

function plus_click(find) {
    player_modal.style.display = 'flex';
    find_place = parseInt(find);
}

function player_back_click() {
    player_modal.style.display = 'none';
}

function change_player_detail(place, name, team, position, war) {
    console.log('선수 교체');
    if (place == 0) {
        away_detail_name_0.textContent = name;
        away_detail_position_0.textContent = position;
        away_detail_team_0.textContent = team;
        away_detail_war_0.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 1){
        away_detail_name_1.textContent = name;
        away_detail_position_1.textContent = position;
        away_detail_team_1.textContent = team;
        away_detail_war_1.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 2){
        away_detail_name_2.textContent = name;
        away_detail_position_2.textContent = position;
        away_detail_team_2.textContent = team;
        away_detail_war_2.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 3){
        away_detail_name_3.textContent = name;
        away_detail_position_3.textContent = position;
        away_detail_team_3.textContent = team;
        away_detail_war_3.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 4){
        away_detail_name_4.textContent = name;
        away_detail_position_4.textContent = position;
        away_detail_team_4.textContent = team;
        away_detail_war_4.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 5){
        away_detail_name_5.textContent = name;
        away_detail_position_5.textContent = position;
        away_detail_team_5.textContent = team;
        away_detail_war_5.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 6){
        away_detail_name_6.textContent = name;
        away_detail_position_6.textContent = position;
        away_detail_team_6.textContent = team;
        away_detail_war_6.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 7){
        away_detail_name_7.textContent = name;
        away_detail_position_7.textContent = position;
        away_detail_team_7.textContent = team;
        away_detail_war_7.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 8){
        away_detail_name_8.textContent = name;
        away_detail_position_8.textContent = position;
        away_detail_team_8.textContent = team;
        away_detail_war_8.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 9){
        away_detail_name_9.textContent = name;
        away_detail_position_9.textContent = position;
        away_detail_team_9.textContent = team;
        away_detail_war_9.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 10){
        home_detail_name_0.textContent = name;
        home_detail_position_0.textContent = position;
        home_detail_team_0.textContent = team;
        home_detail_war_0.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 11){
        home_detail_name_1.textContent = name;
        home_detail_position_1.textContent = position;
        home_detail_team_1.textContent = team;
        home_detail_war_1.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 12){
        home_detail_name_2.textContent = name;
        home_detail_position_2.textContent = position;
        home_detail_team_2.textContent = team;
        home_detail_war_2.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 13){
        home_detail_name_3.textContent = name;
        home_detail_position_3.textContent = position;
        home_detail_team_3.textContent = team;
        home_detail_war_3.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 14){
        home_detail_name_4.textContent = name;
        home_detail_position_4.textContent = position;
        home_detail_team_4.textContent = team;
        home_detail_war_4.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 15){
        home_detail_name_5.textContent = name;
        home_detail_position_5.textContent = position;
        home_detail_team_5.textContent = team;
        home_detail_war_5.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 16){
        home_detail_name_6.textContent = name;
        home_detail_position_6.textContent = position;
        home_detail_team_6.textContent = team;
        home_detail_war_6.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 17){
        home_detail_name_7.textContent = name;
        home_detail_position_7.textContent = position;
        home_detail_team_7.textContent = team;
        home_detail_war_7.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 18){
        home_detail_name_8.textContent = name;
        home_detail_position_8.textContent = position;
        home_detail_team_8.textContent = team;
        home_detail_war_8.innerHTML = war;
        winlose_data[find_place] = war;
    } else if (place == 19){
        home_detail_name_9.textContent = name;
        home_detail_position_9.textContent = position;
        home_detail_team_9.textContent = team;
        home_detail_war_9.innerHTML = war;
        winlose_data[find_place] = war;
    } else {
        console.log("선수 교체ㅔ 과정에서의 코드 문제가 있습니다.");
    }

}