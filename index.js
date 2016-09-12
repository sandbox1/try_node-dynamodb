var ddb = require('dynamodb')

console.log("# Sandbox dynamodb")
console.log('#')
console.log('# Environment Variables')
console.log("#     AccessKey: " + process.env.DYNAMODB_ACCESSKEYID)
console.log("#     SecertKey: " + process.env.DYNAMODB_SECRETACCESSKEY)
console.log("#     TestTable: " + process.env.DYNAMODB_TEST_TABLE1)
console.log("#     TestTable: " + process.env.DYNAMODB_REGION)


var client = ddb.ddb({accessKeyId:process.env.DYNAMODB_ACCESSKEYID,
                      secretAccessKey:process.env.DYNAMODB_SECRETACCESSKEY,
                      endpoint:process.env.DYNAMODB_REGION})


client.listTables({},function(err,res){
    console.log('#')
    if(err){
        console.log('# List table error')
        console.log(err)
        return
    }
    console.log('# List table response')
    console.log( res )
})


var item1 = { score: 304,
             date: (new Date).getTime(),
             sha: '3d2d6963',
             usr: 'spolu',
             lng: ['node', 'c++'] 
        }

// Simple put with no options
client.putItem('test', item1, {}, function(err, res, cap) {
    console.log('#')
    if(err){
       console.log('# Simple Put Item Error')
       console.log(err)
    }
    else {
       console.log('# Simple Put Item Response')
       console.log('# Put Item capacity: ' + cap);
       console.log(res);
    }
  })
