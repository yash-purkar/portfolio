import Sections from './Home/Sections'
import Header from './Header'
import img from './images/feeling-proud.svg'
import HomeData from './Home/HomeData'


const Home = () => {
  return (
    <>
      <Header img={img} txt=" The" htxt="Web Developer" />

      {/* <Sections heading="Technologies" txt="I'm familier with HTML5, CSS3, Git, JavaScript, NodeJs, ReactJs, and Web Hosting." type="ow" wantBtn="no" />

      <Sections heading="Projects" txt="I like to showcase my work and thus, you can see my projects hosted online." type="w" wantBtn="yes" />

      <Sections heading="Blogs" txt="I'm also working on some technical and non technical blogs. I like to document my journey of learning." type="ow" wantBtn="yes" /> */}

      {
        HomeData.map((currElem, indx) => {
          const { heading, txt, type, wantBtn, btnText } = currElem;
          return <Sections heading={heading} txt={txt} type={type} wantBtn={wantBtn} btnText={btnText} />
        })
      }

    </>
  )
}

export default Home