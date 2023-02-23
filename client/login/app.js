async function login(){
    const login = document.getElementById("name").value
    const password = document.getElementById("password").value

    const data = await fetch(`${baseurl}/log-in/${login}/${password}`)
    const json = await data.json()
    alert(json[0].status)
}