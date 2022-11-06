import Radio from "./Radio"

const Home = ({showClient}) => {
  return (
    <article className='home'>
        <h1>Medical Centre</h1>
        <Radio cls='home-radio' showClient={showClient}/>
    </article>
  )
}

export default Home
