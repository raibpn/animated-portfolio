import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
        <br />
        &lt;html&gt;
          <br />
          &lt;body&gt;
        </span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt; <br />
          <span className="bottom-tag-html">
            <br />
            &lt;/html&gt;
          </span>
        </span>
      </div>
    </div>
  )
}

export default Layout
