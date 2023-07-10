import Feed from '@components/Feed';
import Navbar from '@components/Navbar';
import Provider from '@components/Provider';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover & Share
        <br className="max-mid:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">Promptotia is an open source AI prompting tool to create, discover and shared AI prompts.</p>
        <Feed />
    </section>
  )
}

export default Home;