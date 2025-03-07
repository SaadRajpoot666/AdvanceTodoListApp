export function TodoFilterForm({name ,setName,hideCompleted,setHideCompleted}){
    return <div className="filter-form">
        <div className="filter-form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="" id=""  value={name} onChange={e=>setName(e.target.value)}/>
        </div>
        <label htmlFor="checkbox">
            <input type="checkbox" name="" id="" />
            Hide Completed
        </label>
    </div>
}
