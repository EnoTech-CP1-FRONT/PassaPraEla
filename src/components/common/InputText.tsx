const classNameRegistroLabel = `block text-gray-700`
const classNameRegistroInput = `w-full mt-1 p-2 border rounded`

export default function InputText({ children, className="p-2 border-none bg-8 rounded-md", id, type = "text", required = true }) {
    if(className=='registro'){
        
        return(
            <div className="flex flex-col">
                <label htmlFor={id} className={classNameRegistroLabel}>{children}</label>
                <input id={id} type={type} className={classNameRegistroInput} required={required}/>
            </div>
        )
    }
    
    return( 
        <div className="flex flex-col">
            <label htmlFor={id} className="mb-1 font-semibold">{children}</label>
            <input id={id} type={type} className={className} required={required}/>
        </div>
    )
}