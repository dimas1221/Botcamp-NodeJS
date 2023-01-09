import { where } from "sequelize";
import models,{ Sequelize, sequelize } from "../models/init-models";


const findAllCustomers=async (req, res)=>{
    const result = await sequelize.query('select * from customers',{
        type:sequelize.QueryTypes.SELECT,
        model:req.context.models.customers,
        mapToModel:true
    })
    return res.send(result)
}

const findAllRows = async (req,res)=>{
    const result = await models.customers.findAll()

    return res.send(result)
}

// find by id
const findById = async (req, res)=>{
    const result = await req.context.models.customers.findByPk(req.params.id)
    return res.send(result)
}
// Insert
const CreateCustomers= async (req, res)=>{
   await req.context.models.customers.create({
        cust_id:req.body.cust_id,
        cust_name:req.body.cust_name,
        cust_city:req.body.cust_city,
    })
    // untuk menangkap eror
    .then(result=>{
        return res.send('berhasil\n'+ result)
    }).catch(err=>{
        return res.send('gagal\n'+ err)
    })
}

const UpdateCustmers = async (req,res)=>{


    const result =await req.context.models.customers.update({
        cust_name:req.body.cust_name,
        cust_city:req.body.cust_city
    },{
        returning: true,
        where:{cust_id:req.params.id}
    })
    return res.send(result)


}

const DeleteCustomers = async (req, res)=>{
    const id = req.params.id

    await req.context.models.customers.destroy({
        where:{cust_id : id}
    })
    return res.send('berhasil delete')
}

const OrderCustomers =async(req, res)=>{
    let result = await req.context.models.customers.findAll({
        include :[{
            model : req.context.models.orders, as:"orders"
        }]
    })
    return res.send(result)
}

export default {
    findAllCustomers,
    findAllRows,
    findById,
    CreateCustomers,
    UpdateCustmers,
    DeleteCustomers,
    OrderCustomers

}