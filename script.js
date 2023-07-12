
wanted_number = 17

const exo1 = (list) => {
    nb_step = 0
    console.log(list)
    is_wanted_number = false
    list.forEach(k => {
        list.forEach(n =>{
            console.log(k + "+" + n+" = "+ (k+n))
            nb_step++
            if (k+n == wanted_number){
                is_wanted_number = true
                
            }
        })
    })
    console.log(is_wanted_number + " // "+nb_step+" comparaisons")
}

const exo2 = (list) => {
nb_step = 0
nb_west=0
    for (let i=0; i < (list.length);i++){
        highest_k = 0;
        for (let k = i+1 ;k < list.length;k++){
            nb_step++;
            if (highest_k < list[k]){
                highest_k = list[k];
            } 
        };
        console.log(list[i]+">"+highest_k)
        if (list[i]> highest_k){
            nb_west++;
        }   
    };
    console.log(nb_west + " // "+nb_step+" comparaisons")
}

const exo3 = (list) => {
    nb_step = 0
    is_wanted_number = false
    sorted_list = list.sort(function (a,b) { return a-b; });
    highest_value= sorted_list[sorted_list.length-1]
    lowest_value= sorted_list[0]
    if (sorted_list[0]+sorted_list[1]<= wanted_number){
        sorted_list.forEach(n =>{
            nb_step++
            if (sorted_list.includes(wanted_number-n)){
                is_wanted_number=true
            }
        })
    }
    console.log(is_wanted_number+ " // "+nb_step+" comparaisons")
}

const exo4 = (list) => {
    console.log("pas le temps :(")
}


