import React, {useEffect, useState} from 'react'

import { Header, CodeArea, Footer } from '../helpers'

const Layout = () => {
  const [OpenCode, setOpenCode] = useState('');
  const getOpenCode = (code) => {
    setOpenCode(code);
  }

  return (
  <>
        <Header setCode={getOpenCode} useCode={OpenCode}/>
    <div>
        <CodeArea setUpdateCode={getOpenCode} useCode = {OpenCode}/>
        <Footer />
    </div>
  </>
  )
}

export default Layout