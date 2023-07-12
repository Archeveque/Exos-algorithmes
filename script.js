
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
    nb_west=0
    sorted_list = list.sort(function (a,b) { return a-b; });
    highest_value = sorted_list[sorted_list.length-1]
    if (highest_value % 2 === 0){
        console.log("pair")
        sorted_list.forEach(n =>{
            if (n % 2=== 0){
                nb_west = nb_west + 1
            }
        })
    }
    else{
        console.log("impair")
        sorted_list.forEach(n =>{
            if (!(n % 2=== 0)){
                nb_west = nb_west + 1
            }
    })
}
    console.log(nb_west)
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
    nb_west=0
    sorted_list = list.sort(function (a,b) { return a-b; });
    highest_value = sorted_list[sorted_list.length-1]
    if (highest_value % 2 === 0){
        console.log("pair")
        sorted_list.forEach(n =>{
            if (n % 2=== 0){
                nb_west++
            }
        })
    }
    else{
        console.log("impair")
    }
    console.log(nb_west)
}


