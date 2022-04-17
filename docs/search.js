const search_box = document.querySelector("#search_project")

const project_list = document.querySelectorAll("#project_list > div")
const project_list_counters = project_list.length;

const filter_list = document.querySelectorAll("#main_right_search_filter > button")

let search_history = []
const search_history__inner = document.querySelector("#main_right_search_filter_user_select")

let typeArray = [];
let titleArray = [];
for (let i = 0; i < project_list_counters; i++) {
    titleArray.push(project_list[i].getAttribute("title"))
    typeArray.push(project_list[i].getAttribute("type"))
}
//console.log(titleArray)
//console.log(typeArray)



function search(value,type) {
    //console.log("&",type)
    //const value = event.target.value
    //console.log("#",value)
    if(type=="type"){
        for (let i=0; i<typeArray.length; i++) {
            if(typeArray[i].match(value) == null){
                    //console.log(titleArray[i],typeArray[i])
                    project_list[i].classList.add("hidden")
            } else {
                project_list[i].classList.remove("hidden")
            }
        }
    } else if(type=="title"){
        for (let i=0; i<typeArray.length; i++) {
            if(titleArray[i].match(value) == null){
                    //console.log(titleArray[i],typeArray[i])
                    project_list[i].classList.add("hidden")
            } else {
                project_list[i].classList.remove("hidden")
            }
        }
    }else {
        for (let i=0; i<typeArray.length; i++) {
            if(titleArray[i].match(value) == null && typeArray[i].match(value) == null){
                    //console.log(titleArray[i],typeArray[i])
                    project_list[i].classList.add("hidden")
            } else {
                project_list[i].classList.remove("hidden")
            }
        }
    }
    project_sort()
}

function search_history_add(value){
    if(value != ""){
        search_history.push(value)
        search_history_inner()
    }
    var list_length = 0
    for(var i = 0; i < search_history.length; i++){
        list_length += search_history[i].length
    }
    if(search_history.length > 10 || list_length > 80){
        search_history.shift()
    }
}
function search_history_inner(){
    //search_history__inner.innerHTML = "<h3>history: </h3>"
    search_history__inner.innerHTML = ""
    for (let i=0; i<search_history.length; i++) {
        var data = "<button class='main_right_search_filter_button' text='"+search_history[i]+"' onclick='search_history_inner_click("+i+")'>"+search_history[i]+"</button>"
        search_history__inner.innerHTML += data
    }
}
function search_history_inner_click(i){
    const main_right_search_filter_user_select = document.querySelectorAll("#main_right_search_filter_user_select > button")
    console.log(main_right_search_filter_user_select[i].getAttribute("text"))
    search_box.value = main_right_search_filter_user_select[i].getAttribute("text")
    search(main_right_search_filter_user_select[i].getAttribute("text"))
}

function project_sort(type){
    const innerHTML = document.querySelector("#project_list").innerHTML
    const project_list = document.querySelectorAll("#project_list > div")
    console.log(project_list)
    for(let i = 0; i < project_list.length; i++){
        if(project_list[i].className == "hidden" || project_list[i].className == "hidden hidden_true"){
            console.log(project_list[i])
            project_list[i].classList.add("hidden_true")
            if(type==2){
                project_list[i].classList.remove("hidden_true")
            }
        } else {
            project_list[i].classList.remove("hidden_true")
        }
    }

}
//changeの場合値が変わった時
//keyupはキーが離された時？
//search_box.addEventListener('change', (event) => {
search_box.addEventListener('keyup', (event) => {
    search(event.target.value)
    project_sort(2)
});
search_box.addEventListener('change', (event) => {
    search_history_add(event.target.value)
    project_sort()
});


filter_list[0].addEventListener('focus', (event) => {search_box.value = "";search("");project_sort()});
filter_list[1].addEventListener('focus', (event) => {search_box.value = filter_list[1].getAttribute("text");search(filter_list[1].getAttribute("text"),"type");project_sort()});
filter_list[2].addEventListener('focus', (event) => {search_box.value = filter_list[2].getAttribute("text");search(filter_list[2].getAttribute("text"),"type");project_sort()});

