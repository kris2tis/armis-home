const sepratorYypes = {
    "hr" : "w-full h-[1px]",
    "vr" : "h-full w-[1px]"
}

export default function Seprator({type , className}) {
    const types = sepratorYypes[type]
  return (
    <div className={`${types} ${className}`}>
      
    </div>
  )
}
