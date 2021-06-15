const secondHandle = document.getElementById("secondHandle");
const minuteHandle = document.getElementById("minuteHandle");
const hourHandle = document.getElementById("hourHandle");

const updateClockRotation = (time, timeMax, element) => {
  const timeDegrees = (time / timeMax * 360).toFixed(0);
  element.style.transform = `rotate(${timeDegrees}deg)`;
}

const setDate = () => {
  setInterval(() => {
    const now = new Date();
    
    // get time variables
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    updateClockRotation(seconds, 60, secondHandle);
    updateClockRotation(minutes, 60, minuteHandle);
    updateClockRotation(hours, 12, hourHandle);
  }, 1000)
};

setDate();