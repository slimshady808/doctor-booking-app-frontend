import { toast} from "react-hot-toast";
export default async function login(e){
  let response =await fetch("http://localhost:8000/api/token/",{
    method: 'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body : JSON.stringify({'email':e.target.email.value,'password':e.target.password.value}),
  })

  let data =await response.json()
  console.log('data',data);

  if (response.status==200){
    localStorage.setItem('authToken',JSON.stringify(data))
    toast.success('Login success')
    return data;
  }
  else{
    console.log('invalid')
  }
}

export function getLocal(){
  let response = localStorage.getItem('authToken');
  return response;
}
export function getAccess() {
  let response = localStorage.getItem('authToken');
  if (response) {
    // Parse the JSON data from the localStorage
    const data = JSON.parse(response);
    // Extract and return the "access" token
    return data.access;
  }
  return null; // Return null if no authToken is found in localStorage
}






