

var secret = '1234';

function play(cod){
    var result = '';
    var i = 0;
    while(i < cod.length){
        if(cod[i] == secret[i]){
            result += 'X';
        }else{
            if(secret.indexOf(cod[i]) != -1){
                result += '-';
            }
        }
        i++;
    }
    return result;

}


module.exports.play = play;