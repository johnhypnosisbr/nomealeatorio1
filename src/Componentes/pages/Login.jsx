import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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

            navigate('/')

        } catch (error) {
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
        // <div>
        //     <div className="container">

        //         <p>Para logar, inserir:                 joao@joao.com | Joao123@
        //         </p>
        //         <form onSubmit={enviarEmailSenhaNumPostParaApiParaFazerLoginNoSite}>
        //             <input type="text" name="email" onChange={manipularEmail} />
        //             <input type="password" name="senha" onChange={manipularPassword} />
        //             <button type="submit">LOGAR</button>
        //         </form>
        //     </div>
        // </div>
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white">
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <img src="./img/jj.png" alt="" className="logoRadius" />
                                    {/* <p className="text-white-50 mb-5">Please enter your login and password!</p> */}
                                    <p>LOGIN: joao@joao.com</p>
                                    <p>PASSWORD: Joao123@ </p>
                                    <form onSubmit={enviarEmailSenhaNumPostParaApiParaFazerLoginNoSite}>
                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" onChange={manipularEmail} />
                                            <label className="form-label" for="typeEmailX" >Email</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={manipularPassword} />
                                            <label className="form-label" for="typePasswordX" >Password</label>
                                        </div>

                                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                    </form>

                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                    </div>

                                </div>

                                <div>
                                    <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login