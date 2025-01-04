function set() {
    fetch("./setting.json")
    .then(response => response.json())
    .then(data => {
        let message1 = data.message_1
        let message2 = data.message_2
        let message3 = data.message_3
        let scroll = data.scroll
        let array = []
        if(message1.display === true){
            array.push(["mes1",message1.type,message1.text])
        }
        if(message2.display === true){
            array.push(["mes2",message2.type,message2.text])
        }
        if(message3.display === true){
            array.push(["mes3",message3.type,message3.text])
        }
        if(array.length !== 0){
            let cont_type = ["text","live_1","live_2","clock"]
            let time = "<span class='clock_date'>" + new Date().getDate() + "日 </span><span class='clock_hour'>" + new Date().getHours() + "時</span><span class='clock_min'>" + new Date().getMinutes() + "分</span>"
            for(var i = 0;i<array.length;i++){
                let cont_array = ['<input type="text" value="' + array[i][2] + '" />','ON AIR',array[i][2],time]
                document.getElementById(array[i][0]).innerHTML = cont_array[cont_type.indexOf(array[i][1])]
                document.getElementById(array[i][0]).style.display = "block"
                if((i+1) === array.length){
                    document.getElementById(array[i][0]).classList.add("state_mes_las")
                }else {
                    document.getElementById(array[i][0]).classList.add("state_mes")
                }
                if((array[i][1]).includes("live") === true){
                    document.getElementById(array[i][0]).classList.add("live")
                }
                if(array[i][1] === "clock"){
                    document.getElementById(array[i][0]).classList.add("clock")
                }
            }
        }

        if(scroll){
            if(scroll.display === true){
                document.getElementById("scroll").style.display = "flex"
                document.getElementById("scroll_message_f").textContent = scroll.text
                document.getElementById("scroll_message_s").textContent = scroll.text
                document.getElementById("scroll_message_f").style.animation = "anim--fir " + scroll.speed + "s infinite linear 0.1s both"
                document.getElementById("scroll_message_s").style.animation = "anim--sec " + scroll.speed + "s infinite linear 0.1s both"
                document.getElementById("scroll_message_s").style.animationDelay = scroll.speed / 2 + "s"
            }
        }
    })
}

function clock(){
    let elements = document.getElementsByClassName("clock");
    if(elements){
        let time = "<span class='clock_date'>" + new Date().getDate() + "日 </span><span class='clock_hour'>" + new Date().getHours() + "時</span><span class='clock_min'>" + new Date().getMinutes() + "分</span>"
        let time_date = new Date().getDate() + "日 "
        let time_hour = new Date().getHours() + "時"
        let time_min = new Date().getMinutes() + "分"
        for(let i = 0;i<elements.length;i++){
            if(elements[i].innerHTML !== time){
                if(time_date !== document.getElementsByClassName("clock_date")[i].textContent){
                    document.getElementsByClassName("clock_date")[i].style.opacity = 0
                    document.getElementsByClassName("clock_date")[i].textContent = time_date
                }
                if(time_hour !== document.getElementsByClassName("clock_hour")[i].textContent){
                    document.getElementsByClassName("clock_hour")[i].style.opacity = 0
                    document.getElementsByClassName("clock_hour")[i].textContent = time_hour
                }
                if(time_min !== document.getElementsByClassName("clock_min")[i].textContent){
                    document.getElementsByClassName("clock_min")[i].style.opacity = 0
                    document.getElementsByClassName("clock_min")[i].textContent = time_min
                }
                setTimeout(() => {
                    //elements[i].innerHTML = time
                    if(document.getElementsByClassName("clock_date")[i].style.opacity === 0){
                        document.getElementsByClassName("clock_date")[i].style.opacity = 1
                    }
                    if(document.getElementsByClassName("clock_hour")[i].style.opacity === 0){
                        document.getElementsByClassName("clock_hour")[i].style.opacity = 1
                    }
                    if(document.getElementsByClassName("clock_min")[i].style.opacity === 0){
                        document.getElementsByClassName("clock_min")[i].style.opacity = 1
                    }
                }, 1000)
            }
        }
    }
}

function intClock(){
    if(document.getElementsByClassName("clock")){
        setInterval(clock,1000)
    }
}

set()
setInterval(clock,1000)