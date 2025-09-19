// Create a red circle in the app
const app = document.querySelector('#app') as HTMLDivElement;

// Create a red circle element
const circle = document.createElement('div');
circle.style.width = '100px';
circle.style.height = '100px';
circle.style.backgroundColor = 'red';
circle.style.borderRadius = '50%';
circle.style.margin = '50px auto';

// Add the circle to the app
app.appendChild(circle);

// Create a blue square element
const square = document.createElement('div');
square.style.width = '100px';
square.style.height = '100px';
square.style.backgroundColor = 'blue';
square.style.margin = '20px auto';

// Add the square to the app
app.appendChild(square);
