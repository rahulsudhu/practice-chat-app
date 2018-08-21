/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()    
    };
};

module.exports = {generateMessage};