class Timer {

    constructor() {
        this.intervalId = null;
        this.time = 0;
        this.debug_value = 0;
        this.createTimer();
    }

    createTimer() {
        const _this = this;
        console.log(_this);
        let container = document.getElementById("timer-container");
        this.timer = document.createElement("div"); // parent element
        this.timer.className = "timer";
        this.timer.style.height = "200px";
        this.timer.style.padding = "5px";
        this.timer.style.borderRadius = "5px";
        this.timer.style.background = "skyblue";
        this.timer.style.textAlign = "center";
        this.timer.style.display = "grid";
        this.timer.style.gridTemplateRows = "3fr 4fr 2fr"
        this.timer.style.gridTemplateColumns = "repeat(3, 1fr)"
        this.timer.style.gridTemplateAreas = '"title title title" "display display display" "start stop reset"';

        this.title = document.createElement("input");
        this.title.setAttribute("type", "text");
        this.title.setAttribute("placeholder", "title");
        this.title.className = "title";
        this.title.style.border = "none"
        this.title.style.background = "white"
        this.title.style.gridArea = "title";
        this.title.style.textAlign = "center";
        this.title.style.fontSize = "35px";


        this.display = document.createElement("div");
        this.display.appendChild(document.createTextNode("00:00:00"));
        this.display.className = "display";
        this.display.style.gridArea = "display";
        this.display.style.background = "#eeeeee";
        this.display.style.fontSize = "30px";
        this.display.style.height = "90px";
        this.display.style.lineHeight = "90px";
        this.display.style.textAlign = "center";



        this.startbutton = document.createElement("button");
        this.startbutton.setAttribute("content", "start");
        this.startbutton.addEventListener("click", function(){_this.start();});
        this.startbutton.innerHTML = "START";
        this.startbutton.className = "startbutton";
        this.startbutton.style.gridArea = "start";

        this.stopbutton = document.createElement("button");
        this.stopbutton.setAttribute("content", "stop");
        this.stopbutton.addEventListener("click", function(){_this.stop();});
        this.stopbutton.innerHTML = "STOP";
        this.stopbutton.className = "stopbutton";
        this.stopbutton.style.gridArea = "stop";

        this.resetbutton = document.createElement("button");
        this.resetbutton.setAttribute("content", "reset");
        this.resetbutton.addEventListener("click", function(){_this.reset();});
        this.resetbutton.innerHTML = "RESET";
        this.resetbutton.className = "resetbutton";
        this.resetbutton.style.gridArea = "reset";

        this.timer.appendChild(this.title);
        this.timer.appendChild(this.display);
        this.timer.appendChild(this.startbutton);
        this.timer.appendChild(this.stopbutton);
        this.timer.appendChild(this.resetbutton);

        container.appendChild(this.timer);
    }

    debug() {
        console.log("hello");
    }

    start() {
        const _this = this;
        if (_this.intervalId !== null) {
            return;
        }
        this.intervalId = setInterval(function(){_this.update_time();}, 1000);
    }

    stop() {
        const _this = this;
        clearInterval(_this.intervalId);
        _this.clearID();
    }

    reset() {
        const _this = this;
        if (_this.intervalId !== null) {
            _this.stop();
        }
        _this.time = 0;
        _this.update_display();
        _this.clearID();
    }

    update_time() {
        console.log("update_display function is called");
        this.time += 1;
        this.update_display();
    }

    update_display() {
        this.display.innerHTML = Math.floor(this.time / (60 * 60)).toString().padStart(2, '0') + ":" + Math.floor(this.time / 60).toString().padStart(2, '0') + ":" + (this.time % 60).toString().padStart(2, '0');
    }

    clearID() {
        this.intervalId = null;
    }
}

function addTimer() {
    list.push(new Timer());
    console.log(list);
}
const list = [new Timer()];