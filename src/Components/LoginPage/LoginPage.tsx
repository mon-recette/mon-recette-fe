import './LoginPage.css'
import LoginForm from '../LoginForm/LoginForm'

const LoginPage = () => {

  return (
    <div>
        <section className='logo-signin'>
            //have to display flex, column, center
            //add Mainlogo component here
            <LoginForm/>
        </section>
        <section>
            //have to display flex, column, center
            <h2>Title of description box</h2>
            <p>description of application</p>
            //once app is done, take screen shots and can add a image slider here with a library:
            //https://medium.com/how-to-react/create-beautiful-image-sliders-carousels-in-react-using-react-alice-carousel-395d8ae9310c 
        </section>
    </div>
  )
}

export default LoginPage
