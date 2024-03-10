
enum statusCode {
    SUCCESS=200,
    IN_PROGRESS=1,
    DECLINED
}
const res = {
    message:`OK`,
    statusCode:statusCode.SUCCESS
}
if (res.statusCode === statusCode.SUCCESS){
    //
}


function action(status:statusCode){

}
