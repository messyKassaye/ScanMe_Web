import { useDispatch } from "react-redux";

export default function(props){
    const path = props.path
    const type = props.type
    const data = props.data

    const dispatch = useDispatch();
    const Index = ()=>{
        console.log(path)
    }

    const Store =()=>{
        console.log('store')
    }

    const Show =()=>{

    }

    const Update =()=>{

    }

    const Delete =()=>{

    }

    return {Index,Store,Show,Update,Delete}
}