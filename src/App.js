import Header from "./components/Header";
import User from "./components/user";

const friends = ['ahmet', 'tayfun', 'ayse', 'fatma']

function App() {
  return (
    <div>
      <Header />
      <User name="mehmet" surname="ceylan" isLoggedIn={true} age={"29"} friends={friends} address={{ title: 'edirne', zip: 22500 }} />
    </div>

  )
}

export default App;