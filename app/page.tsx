import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Manage from './components/Manage/index';

export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <Wework />
      <Ourteam />
      {/* <Featured /> */}
      <Manage />
      
    </main>
  )
}
