import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();

    function manipularPassword(event) {
        setPassword(event.target.value)
    }

    function manipularEmail(event) {
        setEmail(event.target.value)
    }

    async function enviarEmailSenhaNumPostParaApiParaFazerLoginNoSite(event) {
        event.preventDefault()
        console.log(email, password)

        const formData = new FormData()
        formData.append("email", email)
        formData.append("password", password)

        const options = {
            body: formData,
            method: "POST",
            mode: "cors"
        }


        try { 
            const response = await fetch("https://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login", options)
            const data = await response.json()

            //Guardar o token no localStorage
            const token = data.token
            localStorage.setItem("token", token)            
            localStorage.setItem("nameLoggedUser", data.user.name)
            localStorage.setItem("emailLoggedUser", data.user.email)
            mensagemDeSucesso("LOGADO")

            navigate('/home')

        } catch(error) {
            console.log(error.response)
            mensagemDeErro("DADOS INCORRETOS")
            return null
        }

        //Codigo FETCH usando o .then
        //Ainda tem muito site que usa
        //Porem ja esta datado

        // fetch("https://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login", options)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data)
        //         navigate('/home')
                
        //     })

        //     .catch((error) => {
        //         console.log(error)
        //     })
    }



    function mensagemDeSucesso(mensagem = "") {
        toast.success('🦄 LOGADO', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    function mensagemDeErro(mensagem = "") {
        toast.error('🦄 TENTE NOVAMENTE', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }


    return (
        <div>
            <p>
                {password} {email}
            </p>
            <form onSubmit={enviarEmailSenhaNumPostParaApiParaFazerLoginNoSite}>
                <input type="text" name="email" onChange={manipularEmail} />
                <input type="password" name="senha" onChange={manipularPassword} />
                <button type="submit">LOGAR</button>
            </form>
        </div>
    )
}

export default Login