
const Profile = () => {
  return (
    <main className='mainSection'>
      <section className='mainBanner'>
        <h1>MAIN BANNER</h1>
      </section>
      <section className='userData'>
        <div className='userAva'></div>
        <div className='userDescr'>
          <h2>Полиграф Шариков</h2>
          <p>30.04.1984</p>
          <p>Moscow</p>
          <p>МГУ</p>
          <p>sharikof.com</p>
        </div>
      </section>
      <section>
        <h3>My posts</h3>
        <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
        <button>Send</button>
      </section>
      <section className='postedPosts'>
        <p>Lorem10</p>
      </section>

    </main>
  )
}

export default Profile