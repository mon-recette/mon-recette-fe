import './LoginPage.css';
import LoginForm from '../LoginForm/LoginForm';
import Header from '../Header/Header';
const LoginPage = () => {

  return (
    <div>
      <Header />
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
