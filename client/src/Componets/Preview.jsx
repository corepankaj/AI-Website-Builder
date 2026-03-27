const Preview =({code})=>{
    return(
        <div>
        <div style={{ width: "100%" }} className=" bg-gray-800 rounded-xl p-4 shadow-lg">
        <iframe lassName=" bg-gray-800 rounded-xl p-4 shadow-lg"
          title="preview"
          srcDoc={code}
          style={{ width: "99%", height: "662px" , border:"solid 1px"}}
        />
      </div>
        </div>
    )
}
export default Preview;
