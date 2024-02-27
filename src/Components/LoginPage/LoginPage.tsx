import './LoginPage.css';
import LoginForm from '../LoginForm/LoginForm';
import MainLogo from '../MainLogo/MainLogo';

const LoginPage = () => {

  return (
    <div>
      <MainLogo /> 
        <div className="background">
          <div className="shape"></div>
            <section className='logo-signin'>
              <LoginForm/>
            </section>
          <div className="shape"></div>
      </div>
    </div>
  )
}

export default LoginPage
