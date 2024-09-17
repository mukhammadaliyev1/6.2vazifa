import './index.css'

function User(props) {
    const {firstName, lastName, image, phone, email,address,cars} = props.user;
  return (
    <div className='user'>

        <img src={image} alt="" />
        <p className='ism'>{firstName} {lastName}</p>


<div className='num'>
    
<p className='email'>{phone}</p>
        <p className='email'>{email}</p>


</div>




        
        <div className='num'>
        <p className='manzil'>{address.region}    </p>
        <p className='manzil'>{address.zip}    </p>
        </div>


<div className='num'>
<h3 className='mashina'>{cars[0]} </h3>
        <h3 className='mashina'>{cars[1]} </h3>
        <h3 className='mashina'>{cars[2]} </h3>
      
</div>

      
        
    </div>
  )
}

export default User;