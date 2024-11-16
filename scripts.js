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
function Order(){
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
