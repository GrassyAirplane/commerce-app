import { useDispatch, useSelector } from "react-redux";
import "./Login.css"
import { RootState } from "../../store";
import { toggleLogin } from "../../slices/loginSlice";
import Swal from "sweetalert2";

const Login = () => {
    const loggedIn = useSelector((state: RootState) => state.login.loggedIn)
    const dispatch = useDispatch()

    const handleLoginToggle = async(api_key: string, password: string) => {
        const response = await fetch(process.env.DASHBOARDAPI + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                api_key: api_key,
                params: { "password": password }
            }),
        })
        
        if (response.ok) {
            sessionStorage.setItem("api", api_key)
            dispatch(toggleLogin())
        } else {
            sessionStorage.clear()
            // Notify Error
            const errorText = await response.text()
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorText,
                footer: 'apikey: asdfghjkl password: test123'
              })
        }
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const api_key = event.target.elements.key.value;
        const password = event.target.elements.password.value;
        handleLoginToggle(api_key, password);
    }
    
    return (
        <>
            <section className="section-login">
                <form className="form-login" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div>
                        {/* <label htmlFor="key">Api Key:</label> */}
                        <input className="input-login" type="key" id="key" name="key" placeholder="Api Key" required />
                    </div>
                    <div>
                        {/* <label htmlFor="password">Password:</label> */}
                        <input className="input-login" type="password" id="password" name="password" placeholder="Password" required />
                    </div>
                    {/* <div>
                        <label htmlFor="rememberme">Remember me:</label>
                        <input type="checkbox" id="rememberme" name="rememberme" />

                        <a href="#">Forgot password</a>
                    </div> */}
                    <button type="submit" className="button-login">Login</button>
                </form>
            </section>
        </>
    )
}

export default Login