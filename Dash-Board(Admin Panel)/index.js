// Elements
const activityType = document.getElementById('activityType');
const duration = document.getElementById('duration');
const calories = document.getElementById('calories');
const distance = document.getElementById('distance');
const date = document.getElementById('date');
const addBtn = document.getElementById('addBtn');
const activityTable = document.getElementById('activityTable');
const totalWorkoutsEl = document.getElementById('totalWorkouts');
const totalCaloriesEl = document.getElementById('totalCalories');
const totalDistanceEl = document.getElementById('totalDistance');
const avgDurationEl = document.getElementById('avgDuration');
const bmiEl = document.getElementById('bmi');
const search = document.getElementById('search');
const themeToggle = document.getElementById('themeToggle');
const badgesContainer = document.getElementById('badges');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calcBmiBtn = document.getElementById('calcBmi');
const bmiResult = document.getElementById('bmiResult');

const caloriesCtx = document.getElementById('caloriesChart').getContext('2d');
const activityCtx = document.getElementById('activityChart').getContext('2d');

let activities = JSON.parse(localStorage.getItem('activities')) || [];
let caloriesChart, activityChart;

// ----- Core Functions -----
function renderTable(){
    activityTable.innerHTML = '';
    activities.forEach((a,i)=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${a.type}</td><td>${a.duration}</td><td>${a.calories}</td><td>${a.distance}</td><td>${a.date}</td><td><button onclick="deleteActivity(${i})">❌</button></td>`;
        activityTable.appendChild(tr);
    });
}

function updateStats(){
    const totalWorkouts = activities.length;
    const totalCalories = activities.reduce((sum,a)=>sum+Number(a.calories),0);
    const totalDistance = activities.reduce((sum,a)=>sum+Number(a.distance),0);
    const avgDuration = totalWorkouts ? (activities.reduce((sum,a)=>sum+Number(a.duration),0)/totalWorkouts).toFixed(1) : 0;
    totalWorkoutsEl.textContent = totalWorkouts;
    totalCaloriesEl.textContent = totalCalories;
    totalDistanceEl.textContent = totalDistance + ' km';
    avgDurationEl.textContent = avgDuration + ' min';
}

function updateCharts(){
    const labels = activities.map(a=>a.date);
    const caloriesData = activities.map(a=>a.calories);
    const distanceData = activities.map(a=>a.distance);

    if(caloriesChart) caloriesChart.destroy();
    if(activityChart) activityChart.destroy();

    caloriesChart = new Chart(caloriesCtx,{
        type:'line',
        data:{
            labels,
            datasets:[{label:'Calories Burned', data:caloriesData, borderColor:'#2563eb', backgroundColor:'rgba(37,99,235,0.2)', fill:true, tension:0.3}]
        }
    });

    activityChart = new Chart(activityCtx,{
        type:'bar',
        data:{
            labels,
            datasets:[{label:'Distance (km)', data:distanceData, backgroundColor:'rgba(37,99,235,0.5)'}]
        }
    });
}

function renderBadges(){
    badgesContainer.innerHTML = '';
    const totalCalories = activities.reduce((sum,a)=>sum+Number(a.calories),0);
    const totalWorkouts = activities.length;
    const totalDistance = activities.reduce((sum,a)=>sum+Number(a.distance),0);
    const badges = [];
    if(totalWorkouts>=5) badges.push('🏅 5 Workouts Completed');
    if(totalWorkouts>=10) badges.push('🎖 10 Workouts Completed');
    if(totalCalories>=1000) badges.push('🔥 Burned 1000 Calories');
    if(totalDistance>=50) badges.push('🚴 Covered 50 km');
    badges.forEach(b=>{
        const div = document.createElement('div');
        div.className='badge';
        div.textContent=b;
        badgesContainer.appendChild(div);
    });
}

function deleteActivity(index){
    activities.splice(index,1);
    localStorage.setItem('activities',JSON.stringify(activities));
    renderAll();
}

function renderAll(){
    renderTable();
    updateStats();
    updateCharts();
    renderBadges();
    calculateBmi(); // update BMI
}

// ----- Event Listeners -----
addBtn.addEventListener('click',()=>{
    if(!activityType.value || !duration.value || !calories.value || !distance.value || !date.value) return alert('Fill all fields!');
    activities.push({
        type: activityType.value,
        duration:Number(duration.value),
        calories:Number(calories.value),
        distance:Number(distance.value),
        date: date.value
    });
    localStorage.setItem('activities',JSON.stringify(activities));
    renderAll();
    activityType.value=duration.value=calories.value=distance.value=date.value='';
});

search.addEventListener('input',()=>{
    const term = search.value.toLowerCase();
    Array.from(activityTable.children).forEach(row=>{
        row.style.display = row.children[0].textContent.toLowerCase().includes(term) ? '' : 'none';
    });
});

// Theme Toggle
themeToggle.addEventListener('click',()=>{document.body.classList.toggle('dark'); themeToggle.textContent=document.body.classList.contains('dark')?'☀️':'🌙';});

// ----- BMI Calculator -----
function calculateBmi(){
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value)/100;
    if(!weight || !height) return bmiEl.textContent='--';
    const bmi = (weight/(height*height)).toFixed(1);
    bmiEl.textContent = bmi;
    if(bmi<18.5) bmiResult.textContent='Underweight';
    else if(bmi<25) bmiResult.textContent='Normal weight';
    else if(bmi<30) bmiResult.textContent='Overweight';
    else bmiResult.textContent='Obese';
}

calcBmiBtn.addEventListener('click',calculateBmi);

// ----- Initial Render -----
renderAll();
