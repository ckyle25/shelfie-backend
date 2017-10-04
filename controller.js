module.exports = {
    getShelf: (req,res,next) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_shelf({shelfid: req.params.id})
            .then((shelf) => res.status(200).send(shelf))
            .catch((err) => res.status(500).send(err))
    },
    getBin: (req,res,next) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_bin({binid: req.params.id})
            .then((bin) => res.status(200).send(bin))
            .catch((err) => res.status(500).send(err))
    },
    editBin: (req,res,next) => {
        const dbInstance = req.app.get('db')
        const {name,price} = req.body
        dbInstance.edit_bin({binid: req.params.id, name: name, price: price})
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))
    },
    deleteBin: (req,res,next) => {
        const dbInstance = req.app.get('db')  
        const {name,price} = req.body
        dbInstance.delete_bin({binid: req.params.id})
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))   
    },
    addBin: (req,res,next) => {
        const dbInstance = req.app.get('db')
        const {name,price} = req.body
        dbInstance.add_bin({binid: req.params.id, name: name, price: price})
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))
    }
}