// Stop watch
let stopwatch = {
    startTime: 0,
    running: false,
    start: function() {
        if (!this.running) {
            this.startTime = new Date();
            this.running = true;
        }
    }
    ,
    stop: function() {
         this.running = true;
    }
    ,
    reset: function() {
        this.startTime = 0;
        this.running = false;
    }
    ,
    getTime: function() {
        if (this.running) {
            return new Date() - this.startTime;
        } else {
            return 0;
        }
    }
};
// Window on load
window.onload = function() {
    let startButton = document.getElementById('start');
    let stopButton = document.getElementById('stop');
    let resetButton = document.getElementById('reset');
    let time = document.getElementById('time');
    let startTime = 0;
    let interval;
    // Start button
    startButton.onclick = function() {
        // clearInterval(interval);
        if(!stopwatch.running){
            stopwatch.start();
        }
        interval = setInterval(updateTime, 10);
    };
    // Stop button
    stopButton.onclick = function() {
        clearInterval(interval);
    }
    // Reset button
    resetButton.onclick = function() {
        stopwatch.reset();
        clearInterval(interval);
        time.textContent = '00:00:00:000';
    }
    // Update time
    let currentMilliSeconds,currentSeconds,currentMinutes,currentHours;
    function updateTime() {
        let currentTime = stopwatch.getTime();
        currentMilliSeconds = currentTime % 1000;
        currentSeconds = Math.floor(currentTime / 1000) % 60;
        currentMinutes = Math.floor(currentTime / 60000) % 60;
        currentHours = Math.floor(currentTime / 3600000);
        if(currentMilliSeconds < 10 && currentMilliSeconds > 0){
            currentMilliSeconds = '00' + currentMilliSeconds;
        }
        else if(currentMilliSeconds < 100 && currentMilliSeconds > 9){
            currentMilliSeconds = '0' + currentMilliSeconds;
        }

        currentSeconds = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;
        currentMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
        currentHours = currentHours < 10 ? '0' + currentHours : currentHours;
        time.textContent = currentHours + ':' + currentMinutes + ':' + currentSeconds + ':' + currentMilliSeconds;
    }
}
