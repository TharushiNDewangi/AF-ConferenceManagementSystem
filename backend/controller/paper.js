//const router = express.Router();
const Paper = require('../models/Paper');
const shortid = require('shortid');


exports.createpaper = (req, res) => {



    // res.status(200).json({file: req.files , body:req.body});
    const {
        name, phnum, email,status
    } = req.body;

    let researchpaper = [];

    console.log(req.body);

    if (req.files.length > 0) {
        researchpaper = req.files.map(file => {
            return { fil: file.filename }
        });
    }

    //res.status(200).json({file: req.files , body:req.body});
    const paper = new Paper({
        name,
        phnum,
        email,
        status,
        researchpaper,
        // createBy: req.user.



    });



    // console.log(paper);

    paper.save(((error, paper) => {
        if (error) {
            console.log(error);
            return res.status(400).json({ error });
        }
        if (paper) {
            res.status(201).json({ paper });
        }
    }));
    //hhh
};
exports.findByid = (req, res) => {

    // console.log('hey')
    //res.status(200).json({file: req.files , body:req.body});
    const { paperid } = req.params;
    console.log("paper id", paperid)
    if (paperid) {
        Paper.findOne({ _id: paperid })
            .exec((error, paper) => {
                console.log('error');
                if (error)
                    return res.status(400).json({ error });
                console.log(error)
                if (paper) {
                    res.status(200).json({ paper });
                    console.log(paper);
                }
            });

    } else {
        return res.status(400).json({ error: 'params required' });
    }
};
// exports.findAllPublished = (req,res)=>{
//     Paper.find( { published: true})
//     .then(data =>{
//         res.send(data);
//     })
//     .catch(err =>{
//         res.status(500).send({
//             message:
//             err.message || "some error occured while retieving tutorials"
//         });
//     });
// };


// exports.findAll =(req, res => {
//     const name = req.query.name;
//     var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
//     Paper.find(condition)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "some error occured "
//             });
//         });
// })
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Paper.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


