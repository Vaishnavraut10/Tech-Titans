function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username && password) {
        localStorage.setItem("loggedIn", "true");
        document.getElementById("login-container").style.display = "none";
        document.getElementById("appointment-container").style.display = "block";
    } else {
        alert("Please enter both username and password.");
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    document.getElementById("login-container").style.display = "block";
    document.getElementById("appointment-container").style.display = "none";
}

function checkLoginStatus() {
    if (localStorage.getItem("loggedIn")) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("appointment-container").style.display = "block";
    }
}

function bookAppointment(doctorName, timeInputId) {
    const timeInput = document.getElementById(timeInputId).value;
    if (!timeInput) {
        alert("Please select a date and time for your appointment.");
        return;
    }
    alert(`Your appointment with ${doctorName} on ${timeInput} has been booked successfully!`);
}



function bookAppointment(doctorName) {
let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
appointments.push({ doctor: doctorName, date: new Date().toLocaleString() });
localStorage.setItem("appointments", JSON.stringify(appointments));
alert(`Your appointment with ${doctorName} has been booked successfully!`);
}

function loadAppointments() {
let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
let list = document.getElementById("appointments-list");
list.innerHTML = "";
appointments.forEach((appointment, index) => {
    let li = document.createElement("li");
    li.textContent = `${appointment.doctor}`;
    list.appendChild(li);
});
}

document.addEventListener("DOMContentLoaded", loadAppointments);

function cancelAppointment(index) {
let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
appointments.splice(index, 1);
localStorage.setItem("appointments", JSON.stringify(appointments));
loadAppointments();
}

function loadAppointments() {
let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
let list = document.getElementById("appointments-list");
list.innerHTML = "";
appointments.forEach((appointment, index) => {
    let li = document.createElement("li");
    li.textContent = `${appointment.doctor}`;
    let btn = document.createElement("button");
    btn.textContent = "Cancel";
    btn.onclick = () => cancelAppointment(index);
    li.appendChild(btn);
    list.appendChild(li);
});
}

document.addEventListener("DOMContentLoaded", loadAppointments);

function bookAppointment(doctorName, slotId) {
const selectedSlot = document.getElementById(slotId).value;

let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
appointments.push({ doctor: doctorName, time: selectedSlot });
localStorage.setItem("appointments", JSON.stringify(appointments));

alert(`Your appointment with ${doctorName} at ${selectedSlot} has been booked successfully!`);
loadAppointments();
}




function cancelAppointment(index) {
let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
appointments.splice(index, 1);
localStorage.setItem("appointments", JSON.stringify(appointments));
loadAppointments();
}

document.addEventListener("DOMContentLoaded", loadAppointments);



for (const [id, slots] of Object.entries(doctorSchedules)) {
const select = document.getElementById(id);
const availabilityText = document.getElementById(id.replace("slots", "availability"));

select.innerHTML = "";
slots.forEach(slot => {
    const option = document.createElement("option");
    option.value = slot;
    option.textContent = slot;
    select.appendChild(option);
});

availabilityText.textContent = `Available Slots: ${slots.length}`;
}


function filterDoctors() {
const selectedSpecialization = document.getElementById("specialization-filter").value;
document.querySelectorAll(".doctor-card").forEach(card => {
const specialization = card.querySelector("p").textContent.split(": ")[1];
card.style.display = (selectedSpecialization === "all" || specialization === selectedSpecialization) ? "block" : "none";
});
}