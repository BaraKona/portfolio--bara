import React, {Suspense} from 'react'
import ThreeGlobe from './components/threeGlobe/ThreeGlobe'
import loading from './components/assets/loading.gif'
function App() {
  return (
    <div className="App">
      <div>
        <Suspense fallback={<div class="loadingContainer"><img  class="loading" src={loading}/><h1> Entering...</h1></div>} >
          <ThreeGlobe/>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
