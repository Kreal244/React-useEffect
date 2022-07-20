import React,{useState, useEffect} from 'react';
const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']
function Content() {
    const [contents, setContents] = useState([])
    const [title, setTitle] = useState('')
    const [type,setType]=useState(tabs[0])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(contents => { setContents(contents) })
    }, [type])
    return (
        <div >
            {tabs.map(tab => (
                <button
                    style={type===tab?{background:'#1a3c6f', color:'white'}:{}}
                    key={tab}
                    onClick={() => {
                    setType(tab)
                }}>{tab}</button>
            ))}
            <input
                value={title}
                type="text"
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {contents.map(content => (
                    <li key={content.id}>{content.title||content.name}</li>
                ))}
        </ul>
        </div >
    )
}
export default Content