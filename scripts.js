function home(){
            document.getElementById('home').style.display = 'grid';
            document.getElementById('menu').style.display = 'none';
            document.getElementById('Order').style.display = 'none';
            document.getElementById('contact').style.display = 'none';
        }
function menu(){
            document.getElementById('home').style.display = 'none';
            document.getElementById('menu').style.display = 'block';
            document.getElementById('Order').style.display = 'none';
            document.getElementById('contact').style.display = 'none';
        }
function about(){
            document.getElementById('home').style.display = 'none';
            document.getElementById('menu').style.display = 'none';
            document.getElementById('Order').style.display = 'block';
            document.getElementById('contact').style.display = 'none';
        }
function contact(){ 
            document.getElementById('home').style.display = 'none';
            document.getElementById('menu').style.display = 'none';
            document.getElementById('Order').style.display = 'none';
            document.getElementById('contact').style.display = 'block';
        }
function placed(){
    alert("Order is placed!!!");
    }
    
function response(){
    alert("Thank you for your response!!!");
    }
// Get the current count from local storage or set to 0
let visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) : 0;

// Increment the count
visitCount++;

// Store the updated count back in local storage
localStorage.setItem('visitCount', visitCount);

// Display the count on the page
document.getElementById('visitorCount').innerText = `Visitor Count: ${visitCount}`;
