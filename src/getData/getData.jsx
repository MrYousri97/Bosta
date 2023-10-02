const  getData = async (id) => {
    try {
        const res= await fetch('https://tracking.bosta.co/shipments/track/'+id)
        if (!res.ok) {
            throw new Error('Network error');
          }
        return res.json();
    }
    catch(error)  {
        
      };

}

export default getData
