const secondHandle = document.getElementById("secondHandle");
const minuteHandle = document.getElementById("minuteHandle");
const hourHandle = document.getElementById("hourHandle");

const updateClockRotation = (time, timeMax, element) => {
  
}

const setDate = () => {
  setInterval(() => {
    const now = new Date();

    // seconds
    const seconds = now.getSeconds();
    const secondDegrees = (seconds / 60 * 360).toFixed(0);
    secondHandle.style.transform = `rotate(${secondDegrees}deg)`;

    // minutes


    //hours
  }, 1000)
};

setDate();