import './Button.css'
export default function Buttons({setLogin,login}:any){
    const style3 = {
        borderColor: "#6750b3",
        marginLeft: "12px",

     
        fontWeight:'800',
        fontSize:'17px',
        padding:'0.5em 0.7em'
      };
      
      const style2 = {
        background: "linear-gradient(to right, rgb(125, 60, 143), rgb(100, 83, 183))",
        marginLeft: "12px",
        color: "white",
        fontWeight:'800',
        fontSize:'17px',
        padding:'0.5em 0.7em'
      };
      function logining(){
        setLogin(!login)
        
      }
      

    return (
        <>
        <button onClick={logining} className="bgc" style={style3}>Sign In</button>
          <button style={style2}>Register</button>
        </>
    )
}