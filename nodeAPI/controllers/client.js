exports.getClient = (req, res) => {
    res.json({
        listeClients :[{name : "nadia" , id :"1" },{name : "wissem" , id :"2"}]
    });
};