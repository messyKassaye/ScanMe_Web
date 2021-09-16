import { Button } from 'antd';
import React,{useEffect} from 'react';
import 'antd/dist/antd.less'
import useAction from './store/actions/useAction';

const App = () => {
    const {Index,Store} = useAction({path:'Hello world',type:'action type',data:null})
   useEffect(() => {
     Index()
     Store()
   }, [])
    return  <>
    <Button type='primary'>
              Submit
      </Button>
    </>
}

export default App;