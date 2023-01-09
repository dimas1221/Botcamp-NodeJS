
import { where } from "sequelize";
import models,{ Sequelize, sequelize } from "../models/init-models";
import bcrypt from "bcrypt";

const CreateUsers = async (req, res)=>{
    // const salt = await bcrypt.genSalt(10)
    const salt = await bcrypt.genSalt(10);
    const passHash =await bcrypt.hashSync(req.body.password, salt)
    await models.users.create({
        username: req.body.username,
        password: passHash
    }).then(result=>{
        return res.send('berhasil\n'+ result)
    }).catch(err=>{
        return res.send('gagal\n'+ err)
    })
}

// const findUserByUsername = async (callback, user_name)=>{
//   const result = await models.users.findAll({
//         where:{username:user_name}
//     })
//     callback(result)
// }
// cara ke 2'

const findUserByUsername = async (username)=>{
    const result = await models.users.findOne({
        where:{username: username}
    }).catch(err=>{
        return err
    })
    return result.toJSON()
}

// const findUserByUsername = async (username)=>{
//     await models.users.findOne({
//         where:{username:username}
//     }).then(result=>{
//         return result.toJSON()
//     })
// }

const editProfil = async (req,res)=>{
    await models.employees.update({
        // nama field
    },{
        where:{id_employes:req.params.id}
    }).then(result=>{
        return req.send('ok')
    }).catch(err=>{
        return req.send(err+message)
    })
}


export default{
    CreateUsers,
    findUserByUsername
}