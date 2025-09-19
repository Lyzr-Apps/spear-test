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
