import List from "../../../utilis/CategoriesList"

const SideBar = ({category,setCategory}) => {
   
  return (
    <div className='w-[15%]'>
        {
            List.map((item ,index)=>(
                <p key={item.id} onClick={()=>{setCategory(item.title)}} className={`flex pl-6 items-center gap-3 ${index === List.length-1 ? "mb-0" :"mb-3"} py-3 rounded-lg cursor-pointer ${item.title === category && "bg-[rgba(255,255,255,0.1)]"} hover:bg-[rgba(255,255,255,0.1)]`}><span>{item.icon}</span>{item.title}</p>
            ))
        }
    </div>
  )
}

export default SideBar