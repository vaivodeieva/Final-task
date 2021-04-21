

function submitForm(submitEvent) {
  submitEvent.preventDefault();
  const taskNameInputElement = document.getElementById('new-task-name');
  const taskName = taskNameInputElement.value;

  const usernameInputElement = document.getElementById('username');
  const username = usernameInputElement.value;

  const dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();

  const newUsernameString = `
  <p>
      <span onclick="toggleCompleteState(this)">${username}</span>
     
  </p>
`;  

const newdtString = `
  <p>
      <span onclick="toggleCompleteState(this)">${datetime}</span>
     
  </p>
`; 


  const newTaskString = `
  <p>
      <span style="font-size: 18px; font-weight: 600;" onclick="toggleCompleteState(this)">${username}</span>  <span style="font-size: 12px;" onclick="toggleCompleteState(this)">${dt}</span>
     
  </p>
  
      <p style="border-bottom: grey solid 1px; font-family: 'Courier New', Courier, monospace;">
          <span onclick="toggleCompleteState(this)">${taskName}</span>
         
      </p>
      
  `;  

  const listElement2 = document.getElementById('username');
  listElement2.innerHTML += newUsernameString;
  usernameInputElement.value = '';

   const listElement3 = document.getElementById('datetime');
   listElement3.innerHTML += newdtString;
   dt.value = '';

const listElement = document.getElementById('tasks-list');
  listElement.innerHTML += newTaskString;
  taskNameInputElement.value = '';
}



