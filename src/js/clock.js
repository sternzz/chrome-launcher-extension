const hoursWidget = document.querySelector(".hours");
const minutesWidget = document.querySelector(".minutes");

const dateWidgetElement = document.querySelector(".date");

const formatDate = (date) => {
  const options = { weekday: "long", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const formatTime = (date) => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  hoursWidget.innerHTML = hours;
  minutesWidget.innerHTML = minutes;
  return `${hours}:${minutes}`;
};

const updateTime = () => {
  const current = new Date();
    current ? formatTime(current) : "Clock error";
    dateWidgetElement.textContent = current ? formatDate(current): " Date error";
}

const runTimeNDateWidget = () => {
  setInterval(() => {
   updateTime();
  }, 1000);
};

updateTime();
export default runTimeNDateWidget; 