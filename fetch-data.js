

    async function fetchUserData() {

        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        
        const dataContainer = document.getElementById('api-data');
    
        dataContainer.textContent = 'Loading user data...';
    
        try{
    
            const response = await fetch(apiUrl);
    
            if(!response.ok){
                throw new Error(`Error: ${response.status}${response.statusText}`);
            } else{
                console.log('Response is okay');
            }

            const users = await response.json();
            console.log(users)

            dataContainer.innerHTML = '';
            const userList = document.createElement('ul');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });
            dataContainer.appendChild(userList);
        }
        catch(error)
        {
            dataContainer.innerHTML = '';
            dataContainer.textContent = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
       
    }
    document.addEventListener('DOMContentLoaded', () =>{
        fetchUserData();
    });
