const home = (req,res)=>{
    res.send("Hello Home!")
}
const about = (req,res)=>{
    const name = req.params.name1;
    const id = req.params.id;
    res.send("Hello world, This is "+name+" "+id);
} 
module.exports.about = about
module.exports.home = home;