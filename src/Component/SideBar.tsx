import React from "react"

type Props = {
    list: Array<{key: string; title: string}>;
    setSection: Function;
    handleScroll : Function
  }
  
  export const Sidebar: React.FC<Props> = ({list, setSection, handleScroll}) => {
    return(
        <div className="border min-vh-100 bg-black text-white"  style={{ width : '15%' , position : "static"}}>
          <div className="mt-5">
              {list.map(val =>
                <div className="my-3" onClick={() => {
                  setSection(val?.key)
                  handleScroll(val?.key)
                 } }>
                    {val.title}
                </div>
              )}

          </div>
        </div>
    )
    // return <h1 style={{ color }}>{text} </h1>
  }