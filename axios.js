const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const loginBtn = document.getElementById('login-btn');
const email = document.getElementById('email');
const password = document.getElementById('pw');

// then 블록에서 응답으로 작업
const getData = () => {
	axios.get('https://reqres.in/api/users').then(response =>{
		console.log(response);
	});
};
const sendData = () => {
    axios
        .post('https://reqres.in/api/register',{
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        })
        .then(response =>{
            console.log(response);
        })
        // 일어나는 모든 오류 포착.
        // err.response : 어떤 오류인지 알 수 있음.
        .catch(err =>{
            console.log(err, err.response);
        });
};
const loginData = () => {
    axios
        .post('https://reqres.in/api/register',{
            "email": email.value,
            "password": password.value
        })
        .then(response =>{
            if(response.data.token){
                console.log("로그인 성공");
                console.log(response.data.token)
            }else{
                console.log("로그인 실패")
            }
        })
        // 일어나는 모든 오류 포착
        // err.response : 어떤 오류인지 알 수 있음.
        .catch(err =>{
            console.log(err, err.response);
        });
}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
loginBtn.addEventListener('click', loginData);