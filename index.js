const btn = document.getElementById('get-activity')

btn.addEventListener('click', function(){
    fetch('http://www.boredapi.com/api/activity/')
        .then(res => res.json())
        .then(data => {
            document.getElementById('activity').textContent = data.activity
        }) 
})