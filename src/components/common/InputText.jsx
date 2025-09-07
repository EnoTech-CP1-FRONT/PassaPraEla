

export default function InputText({ children, className }) {
    return(
        <div className="flex flex-col">
            <label className="mb-1 font-semibold">{children}</label>
            <input className={["p-2 border-none bg-8 rounded-md", className].join(" ")} required/>
        </div>
    )
}