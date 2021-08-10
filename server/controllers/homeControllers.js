const mongoose = require('mongoose');
const HomeModel = require('../models/Home');
const shortId = require('shortid');


let getHomes =async(req, res) =>{
    try{
        const allHomes = await HomeModel.find();
        res.status(200).json(allHomes);  
    } catch (error){
        res.status(404).json({ message: error.message });
    }
}

const getHomeById = async (req, res) =>
{
  console.log("getHomeById"+ req.params.id)
  const home = await HomeModel.findOne({ id: req.params.id })
  
    if (home) {
      res.json(home)
    } else {
      res.status(404)
      throw new Error('Home not found')
    }
  }

let createHome = async (req, res) =>{
  console.log(req.body);
  const id = shortId.generate();
    const { city, price, builder, status, possession } = req.body;
    const newHome = new HomeModel({ id, city, price, builder, status, possession });
    try{
        await newHome.save();
        res.status(201).json(newHome);
    } catch(error){
        res.status(409).json({ message: error.message });
    }
}

const deleteHome = async (req, res) => {
    const home = await HomeModel.findOne({ id: req.params.id })
  
    if (home) {
      await home.remove()
      res.json({ message: 'Home removed' })
    } else {
      res.status(404)
      throw new Error('Home not found')
    }
}
  
const updateHome = async (req, res) =>
{
  console.log("request body", req.body);
  /*
  const {
    city,
    price,
    possession,
    builder,
    status
  } = req.body
*/
  const options = req.body;
  const home = await HomeModel.updateOne({ id: req.params.id }, options, { multi: true })
  console.log("record updated", home);
  /*
  if (home)
  {
    home.city = city;
    home.possession = possession;
    home.price = price;
    home.builder = builder;
    home.status=status
    console.log("record changed " , home);
    const updatedHome = await HomeModel.updateOne(home);
    console.log("record updated " , + updatedHome);
    res.json(updatedHome)
  } else {
    res.status(404)
    throw new Error('Home not found')
  }
  */
}

module.exports = {
    getHomes: getHomes,
    getHomeById: getHomeById,
    createHome: createHome,
    deleteHome: deleteHome,
    updateHome:updateHome
}