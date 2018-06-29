function getAllSolders(){
  fetch('http://localhost:3001/api/solders')
                  .then(res => {
                      res.json();
                      console.log('res',res.json())
                    })
                  .then(jsondata => console.log('solders',jsondata))
}

export default {getAllSolders};
