const myTbody = document.getElementById("tbody");

async function tableUsers(){
    try{
     const result = await fetch("https://jsonplaceholder.typicode.com/users");
     const user = await result.json();
     //console.log(user);
     tableUser(user);
    }
    catch (error){
     console.log(error);
    }
}
tableUsers()


        function tableUser(user){
       // const myThead = document.createElement("thead");
       // const myTr = document.createElement("tr");
      myTbody.innerHTML = user.map((item)=> {
        return `
        <tr>
          <th scope="row">${item.id}</th>
          <td>${item.name}</td>
          <td>${item.username}</td>
          <td>${item.email}</td>
        </tr>`
       })
       .join("");

        }
       
        