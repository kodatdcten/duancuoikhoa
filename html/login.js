
function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
 
    if (localStorage.getItem(username)) {
      alert('Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.');
    } else {
      localStorage.setItem(username, password);
      alert('Đăng ký thành công!');
    }
  }
  
  function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    if (localStorage.getItem(username) === password) {
      alert('Đăng nhập thành công!');
      window.location.href =""
    } else {
      alert('Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.');
    }
  }
function fetchDataFromAPI() {
    const apiUrl = 'https://api.example.com/data';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayAPIData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  function displayAPIData(data) {
    const apiListElement = document.getElementById('api-list');
    apiListElement.innerHTML = ''; 
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.name; 
      apiListElement.appendChild(listItem);
    });
  }
  fetchDataFromAPI();
function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    if (localStorage.getItem(username)) {
      alert('Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.');
    } else {
      localStorage.setItem(username, password);
      alert('Đăng ký thành công!');
      fetchDataFromAPI();
    }
  }
      
// var buttonLogin = document.getElementById("login");

// buttonLogin.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("dang click Login");
//     location.href = "http://127.0.0.1:5501/page/";
// })