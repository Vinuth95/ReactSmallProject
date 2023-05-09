function List({ pattern, value }) {

    return(
        <ul style={{listStyleType : pattern}}>
            {value.map((val,index)=> <li  key={val.id}>{val.name}</li>)}
        </ul>
    )
}


function List2({ pattern, value, sub }) {

    return(
        <ul style={{listStyleType : pattern}}>
            {value.map((val,index)=> <li key={val.id}>{val[sub]}</li>)}
        </ul>
    )
}

export {List, List2};