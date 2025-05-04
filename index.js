let ScoreA = 0 ;
let scoreB = 0 ;

function ScoreBoard( team , points){
    
    if(team === 'A'){
        ScoreA += points;
        document.getElementById('home').textContent = ScoreA ;
    }else if(team === 'B'){
        scoreB += points;
        document.getElementById('guest').textContent = scoreB;
    }
    
}

function resetbutton(){
    let ScoreA = 0;
    let scoreB = 0;
    document.getElementById('home'). textContent = ScoreA;
    document.getElementById('guest'). textContent = scoreB;

}