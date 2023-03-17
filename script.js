axios.get('https://jsonplaceholder.typicode.com/users')
.then(response=>{
    let tableBody=document.getElementById('data');
    response.data.forEach(user=>{
        let row= `<tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>${user.website}</td>
                    </tr>`;
                    tableBody.innerHTML+=row;
    }).catch(error=>{
        console.log(error);
    })
}

)