import React from "react";

function Coderdost ({tittle,channalename,view, vry}){

return(
<>
<div className="contanier">
<h3> {tittle}  </h3>
<p>{channalename}</p>
<h3> { vry  ? 'hello world' : null }</h3>     
</div>
</>
)
}

export default Coderdost;